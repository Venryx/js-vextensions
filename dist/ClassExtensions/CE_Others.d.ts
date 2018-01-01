interface Date {
    readonly MonthDate: Date;
}
declare function isLeapYear(year: any): boolean;
interface Date {
    isLeapYear: () => boolean;
}
declare function getDaysInMonth(year: any, month: any): number;
interface Date {
    getDaysInMonth: () => number;
}
interface Date {
    AddMonths: (value: number) => void;
}
interface Date {
    Clone: () => Date;
}
interface Error {
    readonly Stack: string;
}
