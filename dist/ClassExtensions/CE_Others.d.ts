export declare const FunctionCE_funcs: {
    GetName(this: Function): any;
    SetName(this: Function, val: any): Function;
    AddTag(this: Function, tag: any): Function;
    GetTags(this: Function, type?: any): any;
    RunThenReturn(this: Function, ...args: any[]): Function;
};
export declare type FunctionCEProxy = Function & typeof FunctionCE_funcs;
export declare const FunctionCE: (nextThis: any) => any;
export declare const FunctionCES: import("../Utils/General").WithFuncsStandalone_Type<{
    GetName(this: Function): any;
    SetName(this: Function, val: any): Function;
    AddTag(this: Function, tag: any): Function;
    GetTags(this: Function, type?: any): any;
    RunThenReturn(this: Function, ...args: any[]): Function;
}>;
export declare const DateCE_funcs: {
    readonly MonthDate: Date;
    IsLeapYear(this: Date): boolean;
    GetDaysInMonth(this: Date): number;
    AddMonths(this: Date, value: number): Date;
    Clone(this: Date): Date;
};
export declare type DateCEProxy = Date & typeof DateCE_funcs;
export declare const DateCE: (nextThis: any) => any;
export declare const DateCES: import("../Utils/General").WithFuncsStandalone_Type<{
    readonly MonthDate: Date;
    IsLeapYear(this: Date): boolean;
    GetDaysInMonth(this: Date): number;
    AddMonths(this: Date, value: number): Date;
    Clone(this: Date): Date;
}>;
