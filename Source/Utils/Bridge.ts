import { TryCall } from "./Timers";
import {Assert, ToJSON, IsObject, IsString, FromJSON, E} from "..";

export class BridgeMessage {
	constructor(initialData?: Partial<BridgeMessage>) {
		this.Extend(initialData);
	}

	// for sending a function-call
	functionCall_callID?: number;
	functionCall_name?: string;
	functionCall_args?: any[];
	
	// for sending a callback (the result of an earlier function-call)
	callback_callID?: number;
	callback_result?: any;
}

export class Bridge_Options {
	receiveChannelMessageFunc_adder: (receiveDataFunc: (channelMessage: string | Object)=>any)=>any;
	receiveChannelMessageFunc_addImmediately? = true;
	sendChannelMessageFunc: (channelMessage: string | Object)=>any;
	channel_wrapBridgeMessage? = true;
	channel_stringifyChannelMessageObj? = true;
}

export class Bridge {
	/** Don't worry about having to discard some calls before receiveTextFunc receives it. We automatically discard entries that aren't valid bridge-messages. */
	constructor(options: Bridge_Options) {
		options = E(new Bridge_Options(), options);
		this.receiveChannelMessageFunc_adder = options.receiveChannelMessageFunc_adder;
		if (options.receiveChannelMessageFunc_addImmediately) this.SetUpReceiver();
		this.sendChannelMessageFunc = options.sendChannelMessageFunc;
		this.channel_wrapBridgeMessage = options.channel_wrapBridgeMessage;
		this.channel_stringifyChannelMessageObj = options.channel_stringifyChannelMessageObj;
	}
	receiveChannelMessageFunc_adder: (receiveTextFunc: (channelMessage: string | Object)=>any)=>any;
	receiveChannelMessageFunc: (channelMessage: string | Object)=>any;
	sendChannelMessageFunc: (channelMessage: string | Object)=>any;
	/** Useful to ensure we ignore non-jsve-bridge messages. (the channel might be used by other systems as well) */
	channel_wrapBridgeMessage = true;
	/** Needed if the channel only supports strings being sent/received. */
	channel_stringifyChannelMessageObj = true;

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
	RegisterFunction(name: string, func: Function) {
		this.functions[name] = func;
	}

	async OnReceiveFunctionCall(bridgeMessage: BridgeMessage) {
		let result = await this.CallInternal(bridgeMessage.functionCall_name, ...bridgeMessage.functionCall_args);
		let responseBridgeMessage = new BridgeMessage({callback_callID: bridgeMessage.functionCall_callID, callback_result: result});
		this.SendBridgeMessage(responseBridgeMessage);
	}
	// we use async/await here, to support waiting for the registered function if it happens to be async (if it isn't, that's fine -- the async/await doesn't hurt anything)
	async CallInternal(funcName: string, ...args: any[]) {
		let func = this.functions[funcName];
		Assert(func, `Cannot find function "${funcName}".`)
		return await func(...args);
	}

	OnReceiveCallback(bridgeMessage: BridgeMessage) {
		this.callCallbacks[bridgeMessage.callback_callID](bridgeMessage.callback_result);
	}

	// for sending function-calls to external bridge
	// ==========
	
	lastCallID = -1;
	callCallbacks = {};
	Call(funcName: string, ...args: any[]) {
		return new Promise((resolve, reject)=> {
			let callID = ++this.lastCallID;

			let bridgeMessage = new BridgeMessage({functionCall_callID: callID, functionCall_name: funcName, functionCall_args: args});
			this.SendBridgeMessage(bridgeMessage);

			this.callCallbacks[callID] = resolve;
		});
	}
}