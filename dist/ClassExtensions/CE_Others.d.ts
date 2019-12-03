export declare class FunctionCEClass {
    GetName(this: Function): any;
    SetName(this: Function, val: any): Function;
    AddTag(this: Function, tag: any): Function;
    GetTags(this: Function, type?: any): any;
    RunThenReturn(this: Function, ...args: any[]): Function;
}
export declare const FunctionCE: {
    GetName: (thisArg: Object) => any;
    SetName: (thisArg: Object, val: any) => Function;
    AddTag: (thisArg: Object, tag: any) => Function;
    GetTags: (thisArg: Object, type?: any) => any;
    RunThenReturn: (thisArg: Object, ...args: any[]) => Function;
};
export declare class DateCEClass {
    get MonthDate(this: Date): Date;
    IsLeapYear(this: Date): boolean;
    GetDaysInMonth(this: Date): number;
    AddMonths(this: Date, value: number): Date;
    Clone(this: Date): Date;
}
export declare const DateCE: {
    readonly MonthDate: Date;
    IsLeapYear: (thisArg: Object) => boolean;
    GetDaysInMonth: (thisArg: Object) => number;
    AddMonths: (thisArg: Object, value: number) => Date;
    Clone: (thisArg: Object) => Date;
};
