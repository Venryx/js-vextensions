import {WithFuncsStandalone, CreateWrapperForClassExtensions} from "../Utils/General";

/*
There are two ways to make a class-extension<or>standalone-functions system:
1) Define the functions as class methods, and create a typescript extractor that creates versions of those methods, with an added first parameter that is used as the this-arg.
2) Define them as standalone functions, and create a typescript extractor that creates versions of those methods, with a real this-arg that is extracted and supplied as the first parameter.
The "Extract" function below shows how to do approach 2. (we currently instead use approach 1, since I use them as class methods more frequently, and only the source approach allows function overloads)
*/

/*function Test1(a, b: string, c) {}

/*type ExtractArgs2Plus<T> = FirstParameterType<T>;
export function Extract(func: (...args: any[])=>any) {
	return (...args: Parameters<typeof func>)=>any;
}
export const Test1_Next = Extract(Test1);
type FirstParameterType<T> = T extends (a: infer U, ...args: infer T2) => any ? T2 : unknown;*#/

type Extract_Type<T> = 
		//T extends (...args)=>any ? (thisArg: Object, ...args: Parameters<T>)=>ReturnType<T> :
		T extends (firstParam: infer FirstParam, ...args: infer RestOfParams)=>any ? (...args: RestOfParams)=>ReturnType<T> :
		T;
export function Extract<T>(source: T): Extract_Type<T> {
	return null as any;
}

const Test2 = Extract(Test1);
export type exports1 = {Test2: typeof Test2};

declare global {
	interface String extends exports1 {}
}
"".Test2("", 5);*/

export class FunctionCEClass {
	GetName(this: Function) {
		//return this.name_fake || this.name || this.toString().match(/^function\s*([^\s(]+)/)[1];
		return this["name_fake"] || this.name || (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
	}
	SetName(this: Function, val) {
		this["name_fake"] = name;
		return this;
	}

	AddTag(this: Function, tag) {
		if (this["tags"] == null) this["tags"] = [];
		this["tags"].push(tag);
		return this;
	}

	/*Function.prototype._AddFunction_Inline = function AddTags(/*o:*#/ tags___) { // (already implemented in VDF.js file)
		if (this.tags == null)
			this.tags = [];
		for (var i in arguments)
			this.tags.push(arguments[i]);
		return this;
	};*/
	/*function AddTags() {
		var tags = V.Slice(arguments, 0, arguments.length - 1);
		var func = V.Slice(arguments).Last();
		func.AddTags.apply(func, tags);
	};*/
	GetTags(this: Function, type?) {
		return (this["tags"] || []).Where(a=>type == null || a instanceof type);
	};

	//AsStr(...args) { return require("../../V/V").Multiline(this, ...args); };
	//AsStr(useExtraPreprocessing) { return require("../../V/V").Multiline(this, useExtraPreprocessing); };

	RunThenReturn(this: Function, ...args) {
		this.apply(null, args);
		return this;
	};
}
export const FunctionCE = WithFuncsStandalone(FunctionCEClass.prototype);
//export const FunctionCE = CreateWrapperForClassExtensions(FunctionCEClass);

function isLeapYear(year) {
	return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); 
}
function getDaysInMonth(year, month) {
	return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}
export class DateCEClass {
	get MonthDate(this: Date) {
		return new Date(this.getFullYear(), this.getMonth(), 1);
	}
	IsLeapYear(this: Date) { 
		return isLeapYear(this.getFullYear()); 
	}
  	GetDaysInMonth(this: Date) { 
		return getDaysInMonth(this.getFullYear(), this.getMonth());
	}

	AddMonths(this: Date, value: number) {
		var n = this.getDate();
		this.setDate(1);
		this.setMonth(this.getMonth() + value);
		this.setDate(Math.min(n, DateCE.GetDaysInMonth(this)));
		return this;
  	}
	Clone(this: Date) {
		return new Date(this.getTime());
	}
}
export const DateCE = WithFuncsStandalone(DateCEClass.prototype);
//export const DateCE = CreateWrapperForClassExtensions(DateCEClass);

/*export class ErrorCEClass {
	get Stack() {
		// this causes the full stack-trace to be attached to the Error object (in Chrome)
		if ((Error as any).captureStackTrace) {
			//(Error as any).captureStackTrace(instance, GetStackTraceStr);
			(Error as any).captureStackTrace(this);
		}
		return this.stack;
	}
}
export const ErrorCE = CreateWrapperForClassExtensions(ErrorCEClass);*/