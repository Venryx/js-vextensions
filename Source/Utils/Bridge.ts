import { TryCall } from "./Timers";
import {Assert, ToJSON, IsObject, IsString, FromJSON, E, ObjectCE} from "..";

export class BridgeMessage {
	constructor(initialData?: Partial<BridgeMessage>) {
		ObjectCE(this).Extend(initialData);
	}

	// for sending a function-call
	functionCall_callID?: number;
	functionCall_name?: string;
	functionCall_args?: any[];
	
	// for sending a callback (the result of an earlier function-call)
	callback_callID?: number;
	callback_result?: any;
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

			if (bridgeMessage.functionCall_name) this.OnReceiveFunctionCall(bridgeMessage);
			if (bridgeMessage.callback_callID != null) this.OnReceiveCallback(bridgeMessage);
		};
		this.receiveChannelMessageFunc_adder(this.receiveChannelMessageFunc);
	}
	SendBridgeMessage(bridgeMessage: BridgeMessage) {
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
		let result = await this.CallInternal(bridgeMessage.functionCall_name, ...bridgeMessage.functionCall_args);
		let responseBridgeMessage = new BridgeMessage({callback_callID: bridgeMessage.functionCall_callID, callback_result: result});
		this.SendBridgeMessage(responseBridgeMessage);
	}
	// we use async/await here, to support waiting for the registered function if it happens to be async (if it isn't, that's fine -- the async/await doesn't hurt anything)
	async CallInternal(funcName: string, ...args: any[]) {
		let func = this.functions[funcName];
		if (this.ignoreMissingFunctions && func == null) return;
		Assert(func, `Cannot find function "${funcName}".`);
		return await func(...args);
	}

	OnReceiveCallback(bridgeMessage: BridgeMessage) {
		let callback = this.callCallbacks[bridgeMessage.callback_callID];
		if (callback == null) {
			if (this.channel_safeCallbacks) return;
			Assert(false, `Cannot find callback for call-id ${bridgeMessage.callback_callID}!`);
		}
		callback(bridgeMessage.callback_result);
	}

	// for sending function-calls to external bridge
	// ==========
	
	lastCallID = -1;
	callCallbacks = {};
	Call(funcName: string, ...args: any[]) {
		return new Promise((resolve, reject)=> {
			let callID = this.channel_safeCallbacks ? Math.random() : this.lastCallID + 1;
			this.lastCallID = callID;

			let bridgeMessage = new BridgeMessage({functionCall_callID: callID, functionCall_name: funcName, functionCall_args: args});
			this.SendBridgeMessage(bridgeMessage);

			this.callCallbacks[callID] = resolve;
		});
	}
}