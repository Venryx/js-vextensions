export declare class BridgeMessage {
    constructor(initialData?: Partial<BridgeMessage>);
    functionCall_callID?: number;
    functionCall_name?: string;
    functionCall_args?: any[];
    callback_callID?: number;
    callback_result?: any;
}
export declare type Bridge_Options = {
    receiveChannelMessageFunc_addImmediately?: boolean;
} & Pick<Bridge, "receiveChannelMessageFunc_adder" | "sendChannelMessageFunc"> & Partial<Pick<Bridge, "channel_wrapBridgeMessage" | "channel_stringifyChannelMessageObj" | "channel_safeCallbacks" | "ignoreMissingFunctions">>;
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
    functions: {
        [key: string]: Function;
    };
    ignoreMissingFunctions: boolean;
    RegisterFunction(name: string, func: Function): void;
    UnregisterFunction(name: string): void;
    OnReceiveFunctionCall(bridgeMessage: BridgeMessage): Promise<void>;
    CallInternal(funcName: string, ...args: any[]): Promise<any>;
    OnReceiveCallback(bridgeMessage: BridgeMessage): void;
    lastCallID: number;
    callCallbacks: {};
    Call(funcName: string, ...args: any[]): Promise<{}>;
}
