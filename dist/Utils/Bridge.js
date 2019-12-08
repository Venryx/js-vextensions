"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var Timers_1 = require("./Timers");
var __1 = require("..");
var General_1 = require("./General");
var BridgeMessage = /** @class */ (function () {
    function BridgeMessage(initialData) {
        __1.ObjectCE(this).Extend(initialData);
    }
    return BridgeMessage;
}());
exports.BridgeMessage = BridgeMessage;
/*export class Bridge_Options {
    receiveChannelMessageFunc_adder: (receiveDataFunc: (channelMessage: string | Object)=>any)=>any;
    receiveChannelMessageFunc_addImmediately? = true;
    sendChannelMessageFunc: (channelMessage: string | Object)=>any;
    channel_wrapBridgeMessage? = true;
    channel_stringifyChannelMessageObj? = true;
    channel_safeCallbacks? = false;
}*/
var Bridge = /** @class */ (function () {
    /** Don't worry about having to discard some calls before receiveTextFunc receives it. We automatically discard entries that aren't valid bridge-messages. */
    function Bridge(options) {
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
        __1.ObjectCE(this).Extend(__1.ObjectCE(options).Excluding("receiveChannelMessageFunc_addImmediately"));
        if (options.receiveChannelMessageFunc_addImmediately != false)
            this.SetUpReceiver();
    }
    // low level data-transfer
    // ==========
    Bridge.prototype.SetUpReceiver = function () {
        var _this = this;
        // add our own receive-text-func right now
        this.receiveChannelMessageFunc = function (channelMessage) {
            var channelMessageObj;
            if (_this.channel_stringifyChannelMessageObj && __1.IsString(channelMessage))
                channelMessageObj = Timers_1.TryCall(function () { return __1.FromJSON(channelMessage); }) || {};
            if (!_this.channel_stringifyChannelMessageObj && __1.IsObject(channelMessage))
                channelMessageObj = channelMessage;
            var bridgeMessage = _this.channel_wrapBridgeMessage ? channelMessageObj && channelMessageObj["JSVE_Bridge_message"] : channelMessageObj;
            if (!__1.IsObject(bridgeMessage))
                return;
            _this.DeserializeFuncsIn(bridgeMessage);
            if (bridgeMessage.callFunction_name)
                _this.OnReceiveFunctionCall(bridgeMessage);
            if (bridgeMessage.callCallback_id != null)
                _this.OnReceiveCallback(bridgeMessage);
        };
        this.receiveChannelMessageFunc_adder(this.receiveChannelMessageFunc);
    };
    Bridge.prototype.SendBridgeMessage = function (bridgeMessage) {
        this.SerializeFuncsIn(bridgeMessage);
        var channelMessageObj = this.channel_wrapBridgeMessage ? { JSVE_Bridge_message: bridgeMessage } : bridgeMessage;
        var channelMessage = this.channel_stringifyChannelMessageObj ? __1.ToJSON(channelMessageObj) : channelMessageObj;
        this.sendChannelMessageFunc(channelMessage);
    };
    Bridge.prototype.RegisterFunction = function (name, func) {
        if (this.functions[name])
            throw new Error("Cannot register the same function-name twice: \"" + name + "\"");
        this.functions[name] = func;
    };
    Bridge.prototype.UnregisterFunction = function (name) {
        delete this.functions[name];
    };
    Bridge.prototype.OnReceiveFunctionCall = function (bridgeMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Local_CallFunc.apply(this, __spread([bridgeMessage.callFunction_name], bridgeMessage.callFunction_args))];
                    case 1:
                        result = _a.sent();
                        this.CallCallback(bridgeMessage.callFunction_callbackID, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    // we use async/await here, to support waiting for the registered function if it happens to be async (if it isn't, that's fine -- the async/await doesn't hurt anything)
    Bridge.prototype.Local_CallFunc = function (funcName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var func;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        func = this.functions[funcName];
                        if (this.ignoreMissingFunctions && func == null)
                            return [2 /*return*/];
                        __1.Assert(func, "Cannot find function \"" + funcName + "\".");
                        return [4 /*yield*/, func.apply(void 0, __spread(args))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Bridge.prototype.OnReceiveCallback = function (bridgeMessage) {
        this.Local_CallCallback(bridgeMessage.callCallback_id, bridgeMessage.callCallback_args);
    };
    Bridge.prototype.Local_CallCallback = function (callbackID, callbackArgs) {
        var callback = this.callbacks[callbackID];
        if (callback == null) {
            if (this.channel_safeCallbacks)
                return;
            __1.Assert(false, "Cannot find callback with id " + callbackID + "!");
        }
        callback.apply(void 0, __spread(callbackArgs));
    };
    Bridge.prototype.RegisterCallback = function (callback) {
        var callbackID = this.channel_safeCallbacks ? Math.random() : this.lastCallbackID + 1;
        this.lastCallbackID = callbackID;
        this.callbacks[callbackID] = callback;
        return callbackID;
    };
    // technically, this just prepares the functions in the tree for serialization (by setting a toJSON key, which JSON.stringify uses)
    Bridge.prototype.SerializeFuncsIn = function (argTree) {
        var e_1, _a;
        var nodes = General_1.GetTreeNodesInObjTree(argTree);
        var _loop_1 = function (node) {
            if (__1.IsFunction(node.Value)) {
                var callbackID_1 = this_1.RegisterCallback(node.Value);
                node.Value.toJSON = function () { return ({ serializedFunc_callbackID: callbackID_1 }); };
            }
        };
        var this_1 = this;
        try {
            for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                var node = nodes_1_1.value;
                _loop_1(node);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Bridge.prototype.DeserializeFuncsIn = function (argTree) {
        var e_2, _a;
        var _this = this;
        var nodes = General_1.GetTreeNodesInObjTree(argTree);
        var _loop_2 = function (node) {
            if (node.Value != null && node.Value.serializedFunc_callbackID != null) {
                var callbackID_2 = node.Value.serializedFunc_callbackID;
                var proxyFunc = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.CallCallback.apply(_this, __spread([callbackID_2], args));
                };
                node.Value = proxyFunc;
            }
        };
        try {
            for (var nodes_2 = __values(nodes), nodes_2_1 = nodes_2.next(); !nodes_2_1.done; nodes_2_1 = nodes_2.next()) {
                var node = nodes_2_1.value;
                _loop_2(node);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (nodes_2_1 && !nodes_2_1.done && (_a = nodes_2.return)) _a.call(nodes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    // for sending function-calls to external bridge
    // ==========
    Bridge.prototype.Call = function (funcName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            var awaitReturn_callbackID = _this.RegisterCallback(resolve);
            var bridgeMessage = new BridgeMessage({ callFunction_callbackID: awaitReturn_callbackID, callFunction_name: funcName, callFunction_args: args });
            _this.SendBridgeMessage(bridgeMessage);
        });
    };
    Bridge.prototype.CallCallback = function (callbackID) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var bridgeMessage = new BridgeMessage({ callCallback_id: callbackID, callCallback_args: args });
        this.SendBridgeMessage(bridgeMessage);
    };
    return Bridge;
}());
exports.Bridge = Bridge;
//# sourceMappingURL=Bridge.js.map