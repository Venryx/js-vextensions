"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = require("../Utils/General");
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

const Test2 = Extract(Test1);*/
var FunctionCEClass = /** @class */ (function () {
    function FunctionCEClass() {
    }
    FunctionCEClass.prototype.GetName = function () {
        //return this.name_fake || this.name || this.toString().match(/^function\s*([^\s(]+)/)[1];
        return this["name_fake"] || this.name || (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
    };
    FunctionCEClass.prototype.SetName = function (val) {
        this["name_fake"] = name;
        return this;
    };
    FunctionCEClass.prototype.AddTag = function (tag) {
        if (this["tags"] == null)
            this["tags"] = [];
        this["tags"].push(tag);
        return this;
    };
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
    FunctionCEClass.prototype.GetTags = function (type) {
        return (this["tags"] || []).Where(function (a) { return type == null || a instanceof type; });
    };
    ;
    //AsStr(...args) { return require("../../V/V").Multiline(this, ...args); };
    //AsStr(useExtraPreprocessing) { return require("../../V/V").Multiline(this, useExtraPreprocessing); };
    FunctionCEClass.prototype.RunThenReturn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.apply(null, args);
        return this;
    };
    ;
    return FunctionCEClass;
}());
exports.FunctionCEClass = FunctionCEClass;
//export const FunctionCE = WithFuncsStandalone(FunctionCEClass.prototype);
exports.FunctionCE = General_1.CreateWrapperForClassExtensions(FunctionCEClass);
function isLeapYear(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}
function getDaysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}
var DateCEClass = /** @class */ (function () {
    function DateCEClass() {
    }
    Object.defineProperty(DateCEClass.prototype, "MonthDate", {
        get: function () {
            return new Date(this.getFullYear(), this.getMonth(), 1);
        },
        enumerable: true,
        configurable: true
    });
    DateCEClass.prototype.IsLeapYear = function () {
        return isLeapYear(this.getFullYear());
    };
    DateCEClass.prototype.GetDaysInMonth = function () {
        return getDaysInMonth(this.getFullYear(), this.getMonth());
    };
    DateCEClass.prototype.AddMonths = function (value) {
        var n = this.getDate();
        this.setDate(1);
        this.setMonth(this.getMonth() + value);
        this.setDate(Math.min(n, exports.DateCE(this).GetDaysInMonth()));
        return this;
    };
    DateCEClass.prototype.Clone = function () {
        return new Date(this.getTime());
    };
    return DateCEClass;
}());
exports.DateCEClass = DateCEClass;
exports.DateCE = General_1.CreateWrapperForClassExtensions(DateCEClass);
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
//# sourceMappingURL=CE_Others.js.map