import { GetStackTraceStr } from "./General.js";
//export function Assert(condition, messageOrMessageFunc?: string | Function, triggerDebugger = true): condition is true {
export function Assert(condition, messageOrMessageFunc, triggerDebugger = true) {
    if (condition)
        return undefined;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    //JSVE.logFunc(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
    //console.error("Assert failed) " + message);
    const skipError = false; // add flag which you can use to skip the error, when paused in debugger
    if (triggerDebugger) {
        debugger;
    }
    if (!skipError)
        throw new Error(`Assert failed) ${message}`);
    return undefined;
}
export function AssertWarn(condition, messageOrMessageFunc, opts) {
    if (condition)
        return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    let message_final = `Assert-warn failed) ${message}`;
    if (opts === null || opts === void 0 ? void 0 : opts.addStackTrace) {
        message_final += `\n\nStackTrace) ${GetStackTraceStr()}`;
    }
    console.warn(message_final);
}
/** Helper for TypeScript. Lets TS know a condition is always true, without actually checking at runtime. */
export function ATS(condition) { }
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
/** Helper class for making in-line assertions. */
export class A {
    /*static get NN() {
        return function<T>(value: T): NonNullable<T> {
            Assert(value != null, ()=>`Value cannot be null. (provided value: ${value})`);
            return value as any;
        };
    }*/
    static set NN(value) {
        //A.NN(value);
        NN(value);
    }
    static NotEqualTo(val1) {
        return new A_NotEqualTo_Wrapper(val1);
    }
}
export class A_NotEqualTo_Wrapper {
    constructor(val1) { this.val1 = val1; }
    set a(val2) { Assert(val2 != this.val1); }
}
export class A_OfType_Wrapper {
    constructor(type) { this.type = type; }
    set a(val) { Assert(val != null && val.GetType().IsDerivedFrom(this.type)); }
}
/*export function NN(val: any): asserts val {
    Assert(val != null, ()=>`Value cannot be null. (provided value: ${val})`);
    return val;
}*/
export function NN(val) {
    Assert(val != null, () => `Value cannot be null. (provided value: ${val})`);
    return val;
}
//# sourceMappingURL=Assert.js.map