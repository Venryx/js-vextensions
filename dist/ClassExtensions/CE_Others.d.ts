export declare class FunctionCE extends Function {
    GetName(): any;
    SetName(val: any): this;
    AddTag(tag: any): this;
    GetTags(type?: any): any;
    RunThenReturn(...args: any[]): this;
}
export declare class DateCE extends Date {
    readonly MonthDate: Date;
    IsLeapYear(): boolean;
    GetDaysInMonth(): number;
    AddMonths(value: any): this;
    Clone(): Date;
}
