export declare class FunctionCEClass {
    GetName(this: Function): any;
    SetName(this: Function, val: any): Function;
    AddTag(this: Function, tag: any): Function;
    GetTags(this: Function, type?: any): any;
    RunThenReturn(this: Function, ...args: any[]): Function;
}
export declare const FunctionCE: FunctionCEClass;
export declare class DateCEClass {
    readonly MonthDate: Date;
    IsLeapYear(this: Date): boolean;
    GetDaysInMonth(this: Date): number;
    AddMonths(this: Date, value: number): Date;
    Clone(this: Date): Date;
}
export declare const DateCE: DateCEClass;
