import ".";
declare global {
    interface Date {
        readonly MonthDate: Date;
    }
}
declare global {
    interface Date {
        isLeapYear: () => boolean;
    }
}
declare global {
    interface Date {
        getDaysInMonth: () => number;
    }
}
declare global {
    interface Date {
        AddMonths: (value: number) => void;
    }
}
declare global {
    interface Date {
        Clone: () => Date;
    }
}
