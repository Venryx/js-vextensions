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
	receiveDataFunc_adder: (receiveDataFunc: (text: string | Object)=>any)=>any;
	receiveDataFunc_addImmediately? = true;
	sendDataFunc: (text: string | Object)=>any;
	sendDataFunc_supportsObject? = false;
}

export class Bridge {
	/** Don't worry about having to discard some calls before receiveTextFunc receives it. We automatically discard text that fails to load as JSON, or which fails to contain the special key "JSVE_Bridge_message". */
	constructor(options: Bridge_Options) {
		options = E(new Bridge_Options(), options);
		this.receiveDataFunc_adder = options.receiveDataFunc_adder;
		if (options.receiveDataFunc_addImmediately) this.SetUpReceiver();
		this.sendDataFunc = options.sendDataFunc;
		this.sendDataFunc_supportsObject = options.sendDataFunc_supportsObject;
	}
	receiveDataFunc_adder: (receiveTextFunc: (text: string | Object)=>any)=>any;
	receiveDataFunc: (text: string | Object)=>any;
	sendDataFunc: (text: string | Object)=>any;
	sendDataFunc_supportsObject = false;

	// low level data-transfer
	// ==========

	SetUpReceiver() {
		// add our own receive-text-func right now
		this.receiveDataFunc = async data=> {
			let bridgeMessage_direct = IsObject(data) && data["JSVE_Bridge_message"];
			let bridgeMessage_inJSON = IsString(data) && (TryCall(()=>FromJSON(data)) || {})["JSVE_Bridge_message"];
			let bridgeMessage: BridgeMessage = bridgeMessage_direct || bridgeMessage_inJSON;
			if (!IsObject(bridgeMessage)) return;

			if (bridgeMessage.functionCall_name) this.OnReceiveFunctionCall(bridgeMessage);
			if (bridgeMessage.callback_callID != null) this.OnReceiveCallback(bridgeMessage);
		};
		this.receiveDataFunc_adder(this.receiveDataFunc);
	}
	SendBridgeMessage(bridgeMessage: BridgeMessage) {
		let data = {JSVE_Bridge_message: bridgeMessage};
		this.sendDataFunc(this.sendDataFunc_supportsObject ? data : ToJSON(data));
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