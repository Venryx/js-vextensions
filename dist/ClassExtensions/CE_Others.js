"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = require("../Utils/General");
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
exports.FunctionCE_funcs = {
    GetName: function () {
        //return this.name_fake || this.name || this.toString().match(/^function\s*([^\s(]+)/)[1];
        //return this["name_fake"] || this.name || (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
        return this.name || (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
    },
    SetName: function (name) {
        //this["name_fake"] = name;
        Object.defineProperty(this, "name", { value: name, configurable: true }); // can only set func.name using Object.defineProperty
        return this;
    },
    AddTag: function (tag) {
        if (this["tags"] == null)
            this["tags"] = [];
        this["tags"].push(tag);
        return this;
    },
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
    GetTags: function (type) {
        return (this["tags"] || []).Where(function (a) { return type == null || a instanceof type; });
    },
    //AsStr(...args) { return require("../../V/V").Multiline(this, ...args); };
    //AsStr(useExtraPreprocessing) { return require("../../V/V").Multiline(this, useExtraPreprocessing); };
    RunThenReturn: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.apply(null, args);
        return this;
    },
};
exports.FunctionCE = General_1.CreateProxyForClassExtensions(exports.FunctionCE_funcs);
exports.FunctionCES = General_1.WithFuncsStandalone(exports.FunctionCE_funcs);
function isLeapYear(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}
function getDaysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}
exports.DateCE_funcs = {
    get MonthDate() {
        return new Date(this.getFullYear(), this.getMonth(), 1);
    },
    IsLeapYear: function () {
        return isLeapYear(this.getFullYear());
    },
    GetDaysInMonth: function () {
        return getDaysInMonth(this.getFullYear(), this.getMonth());
    },
    AddMonths: function (value) {
        var n = this.getDate();
        this.setDate(1);
        this.setMonth(this.getMonth() + value);
        this.setDate(Math.min(n, exports.DateCE(this).GetDaysInMonth()));
        return this;
    },
    Clone: function () {
        return new Date(this.getTime());
    },
};
exports.DateCE = General_1.CreateProxyForClassExtensions(exports.DateCE_funcs);
exports.DateCES = General_1.WithFuncsStandalone(exports.DateCE_funcs);
/*export class ErrorCEProxy {
    get Stack() {
        // this causes the full stack-trace to be attached to the Error object (in Chrome)
        if ((Error as any).captureStackTrace) {
            //(Error as any).captureStackTrace(instance, GetStackTraceStr);
            (Error as any).captureStackTrace(this);
        }
        return this.stack;
    }
}
export const ErrorCE = CreateProxyForClassExtensions(ErrorCEProxy);*/ 
//# sourceMappingURL=CE_Others.js.map