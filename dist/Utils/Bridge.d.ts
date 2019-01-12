export declare class BridgeMessage {
    constructor(initialData?: Partial<BridgeMessage>);
    functionCall_callID?: number;
    functionCall_name?: string;
    functionCall_args?: any[];
    callback_callID?: number;
    callback_result?: any;
}
export declare class Bridge_Options {
    receiveDataFunc_adder: (receiveDataFunc: (text: string | Object) => any) => any;
    receiveDataFunc_addImmediately?: boolean;
    sendDataFunc: (text: string | Object) => any;
    sendDataFunc_supportsObject?: boolean;
}
export declare class Bridge {
    /** Don't worry about having to discard some calls before receiveTextFunc receives it. We automatically discard text that fails to load as JSON, or which fails to contain the special key "JSVE_Bridge_message". */
    constructor(options: Bridge_Options);
    receiveDataFunc_adder: (receiveTextFunc: (text: string | Object) => any) => any;
    receiveDataFunc: (text: string | Object) => any;
    sendDataFunc: (text: string | Object) => any;
    sendDataFunc_supportsObject: boolean;
    SetUpReceiver(): void;
    SendBridgeMessage(bridgeMessage: BridgeMessage): void;
    functions: {
        [key: string]: Function;
    };
    RegisterFunction(name: string, func: Function): void;
    OnReceiveFunctionCall(bridgeMessage: BridgeMessage): Promise<void>;
    CallInternal(funcName: string, ...args: string[]): Promise<any>;
    OnReceiveCallback(bridgeMessage: BridgeMessage): void;
    lastCallID: number;
    callCallbacks: {};
    Call(funcName: string, ...args: string[]): Promise<{}>;
}
