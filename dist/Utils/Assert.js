"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = require("./General");
var JSVE_1 = require("../JSVE");
function Assert(condition, messageOrMessageFunc) {
    if (condition)
        return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    JSVE_1.JSVE.logFunc("Assert failed) " + message + "\n\nStackTrace) " + General_1.GetStackTraceStr());
    console.error("Assert failed) " + message);
    var skipError = false; // add flag which you can use to skip the error, when paused in debugger
    debugger;
    if (!skipError)
        throw new Error("Assert failed) " + message);
}
exports.Assert = Assert;
function AssertWarn(condition, messageOrMessageFunc) {
    if (condition)
        return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    console.warn("Assert-warn failed) " + message + "\n\nStackTrace) " + General_1.GetStackTraceStr());
}
exports.AssertWarn = AssertWarn;
// this version throws an error with only the provided message -- for ones the user may well see, and which don't need the stack (or "Assert failed) " text)
/*g.Extend({AssertSimple});
export function AssertSimple(condition, messageOrMessageFunc?: string | Function) {
    if (condition) return;

    var message = (messageOrMessageFunc as any) instanceof Function ? (messageOrMessageFunc as any)() : messageOrMessageFunc;

    Log(`Assert failed) ${message}\n\nStackTrace) ${V.GetStackTraceStr()}`);
    console.error("Assert failed) " + message);
    debugger;
    throw new Error(message);
}*/
var A = /** @class */ (function () {
    function A() {
    }
    Object.defineProperty(A, "NonNull_", {
        get: function () {
            return function (value) {
                Assert(value != null, function () { return "Value cannot be null. (provided value: " + value + ")"; });
                return value;
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(A, "NonNull", {
        set: function (value) {
            A.NonNull_(value);
        },
        enumerable: true,
        configurable: true
    });
    A.NotEqualTo = function (val1) {
        return new A_NotEqualTo_Wrapper(val1);
    };
    return A;
}());
exports.A = A;
var A_NotEqualTo_Wrapper = /** @class */ (function () {
    function A_NotEqualTo_Wrapper(val1) {
        this.val1 = val1;
    }
    Object.defineProperty(A_NotEqualTo_Wrapper.prototype, "a", {
        set: function (val2) { Assert(val2 != this.val1); },
        enumerable: true,
        configurable: true
    });
    return A_NotEqualTo_Wrapper;
}());
exports.A_NotEqualTo_Wrapper = A_NotEqualTo_Wrapper;
var A_OfType_Wrapper = /** @class */ (function () {
    function A_OfType_Wrapper(type) {
        this.type = type;
    }
    Object.defineProperty(A_OfType_Wrapper.prototype, "a", {
        set: function (val) { Assert(val != null && val.GetType().IsDerivedFrom(this.type)); },
        enumerable: true,
        configurable: true
    });
    return A_OfType_Wrapper;
}());
exports.A_OfType_Wrapper = A_OfType_Wrapper;
//# sourceMappingURL=Assert.js.map