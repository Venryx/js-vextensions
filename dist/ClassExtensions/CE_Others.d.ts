export declare class FunctionCEClass extends Function {
    GetName(): any;
    SetName(val: any): this;
    AddTag(tag: any): this;
    GetTags(type?: any): any;
    RunThenReturn(...args: any[]): this;
}
export declare const FunctionCE: FunctionCEClass;
export declare class DateCEClass extends Date {
    readonly MonthDate: Date;
    IsLeapYear(): boolean;
    GetDaysInMonth(): number;
    AddMonths(value: any): this;
    Clone(): Date;
}
export declare const DateCE: DateCEClass;
