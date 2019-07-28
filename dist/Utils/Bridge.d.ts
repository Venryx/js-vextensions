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
    channel_wrapBridgeMessage?: boolean;
    channel_stringifyOuterMessageObj?: boolean;
}
export declare class Bridge {
    /** Don't worry about having to discard some calls before receiveTextFunc receives it. We automatically discard entries that aren't valid bridge-messages. */
    constructor(options: Bridge_Options);
    receiveDataFunc_adder: (receiveTextFunc: (outerMessage: string | Object) => any) => any;
    receiveDataFunc: (outerMessage: string | Object) => any;
    sendDataFunc: (outerMessage: string | Object) => any;
    /** Useful to ensure we ignore non-jsve-bridge messages. (the channel might be used by other systems as well) */
    channel_wrapBridgeMessage: boolean;
    /** Needed if the channel only supports strings being sent/received. */
    channel_stringifyOuterMessageObj: boolean;
    SetUpReceiver(): void;
    SendBridgeMessage(bridgeMessage: BridgeMessage): void;
    functions: {
        [key: string]: Function;
    };
    RegisterFunction(name: string, func: Function): void;
    OnReceiveFunctionCall(bridgeMessage: BridgeMessage): Promise<void>;
    CallInternal(funcName: string, ...args: any[]): Promise<any>;
    OnReceiveCallback(bridgeMessage: BridgeMessage): void;
    lastCallID: number;
    callCallbacks: {};
    Call(funcName: string, ...args: any[]): Promise<{}>;
}
