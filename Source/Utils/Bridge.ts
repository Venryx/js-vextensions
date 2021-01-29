import {TryCall} from "./Timers.js";
import {Assert, ToJSON, IsObject, IsString, FromJSON, E, ObjectCE, ArrayCE, IsFunction} from "../index.js";
import {GetTreeNodesInObjTree} from "./General.js";

export class BridgeMessage {
	constructor(initialData?: Partial<BridgeMessage>) {
		ObjectCE(this).Extend(initialData);
	}

	// for remotely calling a registered function
	callFunction_name?: string;
	callFunction_args?: any[];
	callFunction_callbackID?: number;

	// for remotely calling a registered callback
	callCallback_id?: number;
	callCallback_args?: any[];
	//callCallback_callbackID?: number;
}

export type Bridge_Options = {receiveChannelMessageFunc_addImmediately?: boolean}
	& Pick<Bridge,
		"receiveChannelMessageFunc_adder" | "sendChannelMessageFunc">
	& Partial<Pick<Bridge,
		"channel_wrapBridgeMessage" | "channel_stringifyChannelMessageObj" | "channel_safeCallbacks" | "requireMainFuncForCalls">>;
/*export class Bridge_Options {
	receiveChannelMessageFunc_adder: (receiveDataFunc: (channelMessage: string | Object)=>any)=>any;
	receiveChannelMessageFunc_addImmediately? = true;
	sendChannelMessageFunc: (channelMessage: string | Object)=>any;
	channel_wrapBridgeMessage? = true;
	channel_stringifyChannelMessageObj? = true;
	channel_safeCallbacks? = false;
}*/

// todo: make this class a lot more safe against attacks.
// * eg. assuming MITM attack on channel, make sure no actions can be triggered outside of what the bridge-instance creator (as regular library user) has knowingly exposed

export class Bridge {
	/** Don't worry about having to discard some calls before receiveTextFunc receives it. We automatically discard entries that aren't valid bridge-messages. */
	constructor(options: Bridge_Options) {
		ObjectCE(this).Extend(ObjectCE(options).Excluding("receiveChannelMessageFunc_addImmediately"));
		if (options.receiveChannelMessageFunc_addImmediately != false) this.SetUpReceiver();
	}
	receiveChannelMessageFunc_adder: (receiveTextFunc: (channelMessage: string | Object)=>any)=>any;
	receiveChannelMessageFunc: (channelMessage: string | Object)=>any;
	sendChannelMessageFunc: (channelMessage: string | Object)=>any;
	/** Useful to ensure we ignore non-jsve-bridge messages. (the channel might be used by other systems as well) */
	channel_wrapBridgeMessage = true;
	/** Needed if the channel only supports strings being sent/received. */
	channel_stringifyChannelMessageObj = true;
	/** Needed if the channel has >2 members; makes-so call-ids are random-numbers, and are filtered by each member to just the ones it knows it initiated. */
	channel_safeCallbacks = false;

	// low level data-transfer
	// ==========

	SetUpReceiver() {
		// add our own receive-text-func right now
		this.receiveChannelMessageFunc = channelMessage=>{
			let channelMessageObj;
			if (this.channel_stringifyChannelMessageObj && IsString(channelMessage)) channelMessageObj = TryCall(()=>FromJSON(channelMessage)) || {};
			if (!this.channel_stringifyChannelMessageObj && IsObject(channelMessage)) channelMessageObj = channelMessage;
			const bridgeMessage: BridgeMessage = this.channel_wrapBridgeMessage ? channelMessageObj && channelMessageObj["JSVE_Bridge_message"] : channelMessageObj;
			if (!IsObject(bridgeMessage)) return;

			this.DeserializeFuncsIn(bridgeMessage);
			if (bridgeMessage.callFunction_name) this.OnReceiveFunctionCall(bridgeMessage);
			if (bridgeMessage.callCallback_id != null) this.OnReceiveCallback(bridgeMessage);
		};
		this.receiveChannelMessageFunc_adder(this.receiveChannelMessageFunc);
	}
	SendBridgeMessage(bridgeMessage: BridgeMessage) {
		this.SerializeFuncsIn(bridgeMessage);
		const channelMessageObj = this.channel_wrapBridgeMessage ? {JSVE_Bridge_message: bridgeMessage} : bridgeMessage;
		const channelMessage = this.channel_stringifyChannelMessageObj ? ToJSON(channelMessageObj) : channelMessageObj;
		this.sendChannelMessageFunc(channelMessage);
	}

	// for receiving function-calls (and callbacks) from external bridge
	// ==========

	functionMains = {} as {[key: string]: Function};
	functionExtras = {} as {[key: string]: Function[]}
	requireMainFuncForCalls = true;
	RegisterFunction(name: string, func: Function, asMain = true) {
		if (asMain) {
			if (this.functionMains[name]) throw new Error(`Cannot register a second main-func for the same function-name: "${name}"`);
			this.functionMains[name] = func;
		} else {
			if (this.functionExtras[name] == null) {
				this.functionExtras[name] = [];
			}
			this.functionExtras[name].push(func);
		}
	}
	/** If `func` is left null, removes only the entry in `functionMains`. */
	UnregisterFunction(name: string, func?: Function) {
		let funcRemoved = false;
		if (func) {
			if (this.functionMains[name] == func) {
				delete this.functionMains[name];
				funcRemoved = true;
			}
			if (this.functionExtras[name]) {
				ArrayCE(this.functionExtras[name]).Remove(func);
				funcRemoved = true;
			}
		} else {
			if (name in this.functionMains) {
				delete this.functionMains[name];
				funcRemoved = true;
			}
		}
		return funcRemoved;
	}

	async OnReceiveFunctionCall(bridgeMessage: BridgeMessage) {
		const result = await this.Local_CallFunc(bridgeMessage.callFunction_name!, ...bridgeMessage.callFunction_args!);
		this.CallCallback(bridgeMessage.callFunction_callbackID!, result);
	}
	// we use async/await here, to support waiting for the registered function if it happens to be async (if it isn't, that's fine -- the async/await doesn't hurt anything)
	async Local_CallFunc(funcName: string, ...args: any[]) {
		const mainFunc = this.functionMains[funcName];
		let result;
		if (mainFunc) {
			result = await mainFunc(...args);
		} else {
			if (this.requireMainFuncForCalls) {
				throw new Error(`Cannot find main-func for function-call with name "${funcName}".`);
			}
		}

		for (const extraFunc of this.functionExtras[funcName] || []) {
			extraFunc(...args);
		}

		return result;
	}

	OnReceiveCallback(bridgeMessage: BridgeMessage) {
		this.Local_CallCallback(bridgeMessage.callCallback_id!, bridgeMessage.callCallback_args!);
	}
	Local_CallCallback(callbackID: number, callbackArgs: any[]) {
		const callback = this.callbacks[callbackID];
		if (callback == null) {
			if (this.channel_safeCallbacks) return;
			Assert(false, `Cannot find callback with id ${callbackID}!`);
		}
		callback(...callbackArgs);
	}

	// callback system (for when passing a function as an argument, or awaiting the result of a remote call)
	// ==========

	lastCallbackID = -1;
	callbacks = {};
	RegisterCallback(callback: Function) {
		const callbackID = this.channel_safeCallbacks ? Math.random() : this.lastCallbackID + 1;
		this.lastCallbackID = callbackID;
		this.callbacks[callbackID] = callback;
		return callbackID;
	}
	// technically, this just prepares the functions in the tree for serialization (by setting a toJSON key, which JSON.stringify uses)
	SerializeFuncsIn(argTree: Object) {
		const nodes = GetTreeNodesInObjTree(argTree);
		for (const node of nodes) {
			if (IsFunction(node.Value)) {
				const callbackID = this.RegisterCallback(node.Value);
				node.Value.toJSON = ()=>({serializedFunc_callbackID: callbackID});
			}
		}
	}
	DeserializeFuncsIn(argTree: Object) {
		const nodes = GetTreeNodesInObjTree(argTree);
		for (const node of nodes) {
			if (node.Value != null && node.Value.serializedFunc_callbackID != null) {
				const callbackID = node.Value.serializedFunc_callbackID;
				const proxyFunc = (...args)=>{
					this.CallCallback(callbackID, ...args);
				};
				node.Value = proxyFunc;
			}
		}
	}

	// for sending function-calls to external bridge
	// ==========

	Call(funcName: string, ...args: any[]) {
		return new Promise((resolve, reject)=>{
			const awaitReturn_callbackID = this.RegisterCallback(resolve);
			const bridgeMessage = new BridgeMessage({callFunction_callbackID: awaitReturn_callbackID, callFunction_name: funcName, callFunction_args: args});
			this.SendBridgeMessage(bridgeMessage);
		});
	}
	CallCallback(callbackID: number, ...args: any[]) {
		const bridgeMessage = new BridgeMessage({callCallback_id: callbackID, callCallback_args: args});
		this.SendBridgeMessage(bridgeMessage);
	}
}