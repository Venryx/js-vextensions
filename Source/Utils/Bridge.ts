import { TryCall } from "./Timers";
import {Assert, ToJSON, IsObject, IsString, FromJSON, E, ObjectCE, IsFunction} from "..";
import {GetTreeNodesInObjTree} from "./General";

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
		"channel_wrapBridgeMessage" | "channel_stringifyChannelMessageObj" | "channel_safeCallbacks" | "ignoreMissingFunctions">>;
/*export class Bridge_Options {
	receiveChannelMessageFunc_adder: (receiveDataFunc: (channelMessage: string | Object)=>any)=>any;
	receiveChannelMessageFunc_addImmediately? = true;
	sendChannelMessageFunc: (channelMessage: string | Object)=>any;
	channel_wrapBridgeMessage? = true;
	channel_stringifyChannelMessageObj? = true;
	channel_safeCallbacks? = false;
}*/

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
		this.receiveChannelMessageFunc = channelMessage=> {
			let channelMessageObj;
			if (this.channel_stringifyChannelMessageObj && IsString(channelMessage)) channelMessageObj = TryCall(()=>FromJSON(channelMessage)) || {};
			if (!this.channel_stringifyChannelMessageObj && IsObject(channelMessage)) channelMessageObj = channelMessage;
			let bridgeMessage: BridgeMessage = this.channel_wrapBridgeMessage ? channelMessageObj && channelMessageObj["JSVE_Bridge_message"] : channelMessageObj;
			if (!IsObject(bridgeMessage)) return;

			this.DeserializeFuncsIn(bridgeMessage);
			if (bridgeMessage.callFunction_name) this.OnReceiveFunctionCall(bridgeMessage);
			if (bridgeMessage.callCallback_id != null) this.OnReceiveCallback(bridgeMessage);
		};
		this.receiveChannelMessageFunc_adder(this.receiveChannelMessageFunc);
	}
	SendBridgeMessage(bridgeMessage: BridgeMessage) {
		this.SerializeFuncsIn(bridgeMessage);
		let channelMessageObj = this.channel_wrapBridgeMessage ? {JSVE_Bridge_message: bridgeMessage} : bridgeMessage;
		let channelMessage = this.channel_stringifyChannelMessageObj ? ToJSON(channelMessageObj) : channelMessageObj;
		this.sendChannelMessageFunc(channelMessage);
	}

	// for receiving function-calls (and callbacks) from external bridge
	// ==========

	functions = {} as {[key: string]: Function};
	ignoreMissingFunctions = false;
	RegisterFunction(name: string, func: Function) {
		if (this.functions[name]) throw new Error(`Cannot register the same function-name twice: "${name}"`);
		this.functions[name] = func;
	}
	UnregisterFunction(name: string) {
		delete this.functions[name];
	}

	async OnReceiveFunctionCall(bridgeMessage: BridgeMessage) {
		let result = await this.Local_CallFunc(bridgeMessage.callFunction_name, ...bridgeMessage.callFunction_args);
		this.CallCallback(bridgeMessage.callFunction_callbackID, result);
	}
	// we use async/await here, to support waiting for the registered function if it happens to be async (if it isn't, that's fine -- the async/await doesn't hurt anything)
	async Local_CallFunc(funcName: string, ...args: any[]) {
		let func = this.functions[funcName];
		if (this.ignoreMissingFunctions && func == null) return;
		Assert(func, `Cannot find function "${funcName}".`);
		return await func(...args);
	}

	OnReceiveCallback(bridgeMessage: BridgeMessage) {
		this.Local_CallCallback(bridgeMessage.callCallback_id, bridgeMessage.callCallback_args);
	}
	Local_CallCallback(callbackID: number, callbackArgs: any[]) {
		let callback = this.callbacks[callbackID];
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
		let callbackID = this.channel_safeCallbacks ? Math.random() : this.lastCallbackID + 1;
		this.lastCallbackID = callbackID;
		this.callbacks[callbackID] = callback;
		return callbackID;
	}
	// technically, this just prepares the functions in the tree for serialization (by setting a toJSON key, which JSON.stringify uses)
	SerializeFuncsIn(argTree: Object) {
		let nodes = GetTreeNodesInObjTree(argTree);
		for (let node of nodes) {
			if (IsFunction(node.Value)) {
				let callbackID = this.RegisterCallback(node.Value);
				node.Value.toJSON = ()=>({serializedFunc_callbackID: callbackID});
			}
		}
	}
	DeserializeFuncsIn(argTree: Object) {
		let nodes = GetTreeNodesInObjTree(argTree);
		for (let node of nodes) {
			if (node.Value != null && node.Value.serializedFunc_callbackID != null) {
				let callbackID = node.Value.serializedFunc_callbackID;
				let proxyFunc = (...args)=> {
					this.CallCallback(callbackID, ...args);
				};
				node.Value = proxyFunc;
			}
		}
	}

	// for sending function-calls to external bridge
	// ==========
	
	Call(funcName: string, ...args: any[]) {
		return new Promise((resolve, reject)=> {
			let awaitReturn_callbackID = this.RegisterCallback(resolve);
			let bridgeMessage = new BridgeMessage({callFunction_callbackID: awaitReturn_callbackID, callFunction_name: funcName, callFunction_args: args});
			this.SendBridgeMessage(bridgeMessage);
		});
	}
	CallCallback(callbackID: number, ...args: any[]) {
		let bridgeMessage = new BridgeMessage({callCallback_id: callbackID, callCallback_args: args});
		this.SendBridgeMessage(bridgeMessage);
	}
}