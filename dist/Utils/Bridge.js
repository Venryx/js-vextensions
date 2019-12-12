var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TryCall } from "./Timers";
import { Assert, ToJSON, IsObject, IsString, FromJSON, ObjectCE, IsFunction } from "..";
import { GetTreeNodesInObjTree } from "./General";
export class BridgeMessage {
    constructor(initialData) {
        ObjectCE(this).Extend(initialData);
    }
}
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
    constructor(options) {
        /** Useful to ensure we ignore non-jsve-bridge messages. (the channel might be used by other systems as well) */
        this.channel_wrapBridgeMessage = true;
        /** Needed if the channel only supports strings being sent/received. */
        this.channel_stringifyChannelMessageObj = true;
        /** Needed if the channel has >2 members; makes-so call-ids are random-numbers, and are filtered by each member to just the ones it knows it initiated. */
        this.channel_safeCallbacks = false;
        // for receiving function-calls (and callbacks) from external bridge
        // ==========
        this.functions = {};
        this.ignoreMissingFunctions = false;
        // callback system (for when passing a function as an argument, or awaiting the result of a remote call)
        // ==========
        this.lastCallbackID = -1;
        this.callbacks = {};
        ObjectCE(this).Extend(ObjectCE(options).Excluding("receiveChannelMessageFunc_addImmediately"));
        if (options.receiveChannelMessageFunc_addImmediately != false)
            this.SetUpReceiver();
    }
    // low level data-transfer
    // ==========
    SetUpReceiver() {
        // add our own receive-text-func right now
        this.receiveChannelMessageFunc = channelMessage => {
            let channelMessageObj;
            if (this.channel_stringifyChannelMessageObj && IsString(channelMessage))
                channelMessageObj = TryCall(() => FromJSON(channelMessage)) || {};
            if (!this.channel_stringifyChannelMessageObj && IsObject(channelMessage))
                channelMessageObj = channelMessage;
            let bridgeMessage = this.channel_wrapBridgeMessage ? channelMessageObj && channelMessageObj["JSVE_Bridge_message"] : channelMessageObj;
            if (!IsObject(bridgeMessage))
                return;
            this.DeserializeFuncsIn(bridgeMessage);
            if (bridgeMessage.callFunction_name)
                this.OnReceiveFunctionCall(bridgeMessage);
            if (bridgeMessage.callCallback_id != null)
                this.OnReceiveCallback(bridgeMessage);
        };
        this.receiveChannelMessageFunc_adder(this.receiveChannelMessageFunc);
    }
    SendBridgeMessage(bridgeMessage) {
        this.SerializeFuncsIn(bridgeMessage);
        let channelMessageObj = this.channel_wrapBridgeMessage ? { JSVE_Bridge_message: bridgeMessage } : bridgeMessage;
        let channelMessage = this.channel_stringifyChannelMessageObj ? ToJSON(channelMessageObj) : channelMessageObj;
        this.sendChannelMessageFunc(channelMessage);
    }
    RegisterFunction(name, func) {
        if (this.functions[name])
            throw new Error(`Cannot register the same function-name twice: "${name}"`);
        this.functions[name] = func;
    }
    UnregisterFunction(name) {
        delete this.functions[name];
    }
    OnReceiveFunctionCall(bridgeMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.Local_CallFunc(bridgeMessage.callFunction_name, ...bridgeMessage.callFunction_args);
            this.CallCallback(bridgeMessage.callFunction_callbackID, result);
        });
    }
    // we use async/await here, to support waiting for the registered function if it happens to be async (if it isn't, that's fine -- the async/await doesn't hurt anything)
    Local_CallFunc(funcName, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            let func = this.functions[funcName];
            if (this.ignoreMissingFunctions && func == null)
                return;
            Assert(func, `Cannot find function "${funcName}".`);
            return yield func(...args);
        });
    }
    OnReceiveCallback(bridgeMessage) {
        this.Local_CallCallback(bridgeMessage.callCallback_id, bridgeMessage.callCallback_args);
    }
    Local_CallCallback(callbackID, callbackArgs) {
        let callback = this.callbacks[callbackID];
        if (callback == null) {
            if (this.channel_safeCallbacks)
                return;
            Assert(false, `Cannot find callback with id ${callbackID}!`);
        }
        callback(...callbackArgs);
    }
    RegisterCallback(callback) {
        let callbackID = this.channel_safeCallbacks ? Math.random() : this.lastCallbackID + 1;
        this.lastCallbackID = callbackID;
        this.callbacks[callbackID] = callback;
        return callbackID;
    }
    // technically, this just prepares the functions in the tree for serialization (by setting a toJSON key, which JSON.stringify uses)
    SerializeFuncsIn(argTree) {
        let nodes = GetTreeNodesInObjTree(argTree);
        for (let node of nodes) {
            if (IsFunction(node.Value)) {
                let callbackID = this.RegisterCallback(node.Value);
                node.Value.toJSON = () => ({ serializedFunc_callbackID: callbackID });
            }
        }
    }
    DeserializeFuncsIn(argTree) {
        let nodes = GetTreeNodesInObjTree(argTree);
        for (let node of nodes) {
            if (node.Value != null && node.Value.serializedFunc_callbackID != null) {
                let callbackID = node.Value.serializedFunc_callbackID;
                let proxyFunc = (...args) => {
                    this.CallCallback(callbackID, ...args);
                };
                node.Value = proxyFunc;
            }
        }
    }
    // for sending function-calls to external bridge
    // ==========
    Call(funcName, ...args) {
        return new Promise((resolve, reject) => {
            let awaitReturn_callbackID = this.RegisterCallback(resolve);
            let bridgeMessage = new BridgeMessage({ callFunction_callbackID: awaitReturn_callbackID, callFunction_name: funcName, callFunction_args: args });
            this.SendBridgeMessage(bridgeMessage);
        });
    }
    CallCallback(callbackID, ...args) {
        let bridgeMessage = new BridgeMessage({ callCallback_id: callbackID, callCallback_args: args });
        this.SendBridgeMessage(bridgeMessage);
    }
}
//# sourceMappingURL=Bridge.js.map