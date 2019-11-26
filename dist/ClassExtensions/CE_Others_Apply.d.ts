declare global {
    interface Object {
        GetName(): string;
        SetName(name: string): Function;
    }
    interface Date {
        readonly MonthDate: Date;
        IsLeapYear(): boolean;
        GetDaysInMonth(): number;
        AddMonths(value: number): void;
        Clone(): Date;
    }
}
export {};
