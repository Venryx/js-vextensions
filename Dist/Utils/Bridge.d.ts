export declare class BridgeMessage {
    constructor(initialData?: Partial<BridgeMessage>);
    callFunction_name?: string;
    callFunction_args?: any[];
    callFunction_callbackID?: number;
    callCallback_id?: number;
    callCallback_args?: any[];
}
export declare type Bridge_Options = {
    receiveChannelMessageFunc_addImmediately?: boolean;
} & Pick<Bridge, "receiveChannelMessageFunc_adder" | "sendChannelMessageFunc"> & Partial<Pick<Bridge, "channel_wrapBridgeMessage" | "channel_stringifyChannelMessageObj" | "channel_safeCallbacks" | "requireMainFuncForCalls">>;
export declare class Bridge {
    /** Don't worry about having to discard some calls before receiveTextFunc receives it. We automatically discard entries that aren't valid bridge-messages. */
    constructor(options: Bridge_Options);
    receiveChannelMessageFunc_adder: (receiveTextFunc: (channelMessage: string | Object) => any) => any;
    receiveChannelMessageFunc: (channelMessage: string | Object) => any;
    sendChannelMessageFunc: (channelMessage: string | Object) => any;
    /** Useful to ensure we ignore non-jsve-bridge messages. (the channel might be used by other systems as well) */
    channel_wrapBridgeMessage: boolean;
    /** Needed if the channel only supports strings being sent/received. */
    channel_stringifyChannelMessageObj: boolean;
    /** Needed if the channel has >2 members; makes-so call-ids are random-numbers, and are filtered by each member to just the ones it knows it initiated. */
    channel_safeCallbacks: boolean;
    SetUpReceiver(): void;
    SendBridgeMessage(bridgeMessage: BridgeMessage): void;
    functionMains: {
        [key: string]: Function;
    };
    functionExtras: {
        [key: string]: Function[];
    };
    requireMainFuncForCalls: boolean;
    RegisterFunction(name: string, func: Function, asMain?: boolean): void;
    /** If `func` is left null, removes only the entry in `functionMains`. */
    UnregisterFunction(name: string, func?: Function): boolean;
    OnReceiveFunctionCall(bridgeMessage: BridgeMessage): Promise<void>;
    Local_CallFunc(funcName: string, ...args: any[]): Promise<any>;
    OnReceiveCallback(bridgeMessage: BridgeMessage): void;
    Local_CallCallback(callbackID: number, callbackArgs: any[]): void;
    lastCallbackID: number;
    callbacks: {};
    RegisterCallback(callback: Function): number;
    SerializeFuncsIn(argTree: Object): void;
    DeserializeFuncsIn(argTree: Object): void;
    Call(funcName: string, ...args: any[]): Promise<unknown>;
    CallCallback(callbackID: number, ...args: any[]): void;
}
