import {GetStackTraceStr} from "./General";
import {JSVE} from "../JSVE";

export function Assert(condition, messageOrMessageFunc?: string | Function, triggerDebugger = true): condition is true {
	if (condition) return undefined as any;

	var message = (messageOrMessageFunc as any) instanceof Function ? (messageOrMessageFunc as any)() : messageOrMessageFunc;

	//JSVE.logFunc(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
	//console.error("Assert failed) " + message);

	let skipError = false; // add flag which you can use to skip the error, when paused in debugger
	if (triggerDebugger) {
		debugger;
	}
	if (!skipError) throw new Error("Assert failed) " + message);
	return undefined as any;
}
export function AssertWarn(condition, messageOrMessageFunc?: string | Function) {
	if (condition) return;

	var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;

	console.warn(`Assert-warn failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
}

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

export class A {
	static get NonNull_() {
		return function<T>(value: T) {
			Assert(value != null, ()=>`Value cannot be null. (provided value: ${value})`);
			return value;
		};
	}
	static set NonNull(value) {
		A.NonNull_(value);
	}
	static NotEqualTo(val1) {
	    return new A_NotEqualTo_Wrapper(val1);
	}
	/*static OfType(typeNameOrType) {
	    var type = TT(typeNameOrType);
	    return new A_OfType_Wrapper(type);
	}*/
} 
export class A_NotEqualTo_Wrapper {
	constructor(val1) { this.val1 = val1; }
	val1;
   set a(val2) { Assert(val2 != this.val1); }
}
export class A_OfType_Wrapper {
	constructor(type) { this.type = type; }
	type;
   set a(val) { Assert(val != null && val.GetType().IsDerivedFrom(this.type)); }
}