declare global {
    interface Number {
        IfN1Then<T>(valIfSelfIsNeg1: T): T;
    }
}
declare global {
    interface Number {
        NaNTo<T>(valIfSelfIsNaN: T): T;
    }
}
declare global {
    interface Number {
        ToPercentStr(precision?: number): string;
    }
}
declare global {
    interface Number {
        IsMultipleOf(multipleOf: number, maxDistToBeMultiple: number): number;
    }
}
declare global {
    interface Number {
        RoundTo(multiple: number): number;
    }
}
declare global {
    interface Number {
        RoundTo_Str(multipleOf: number, fractionDigits?: number, removeEmptyFraction?: boolean): string;
    }
}
declare global {
    interface Number {
        FloorTo(multipleOf: number): number;
    }
}
declare global {
    interface Number {
        FloorTo_Str(multipleOf: number): string;
    }
}
declare global {
    interface Number {
        CeilingTo(multipleOf: number): number;
    }
}
declare global {
    interface Number {
        CeilingTo_Str(multipleOf: number): string;
    }
}
declare global {
    interface Number {
        KeepAtLeast(this: number, min: number): number;
    }
}
declare global {
    interface Number {
        KeepAtMost(this: number, max: number): number;
    }
}
declare global {
    interface Number {
        KeepBetween(this: number, min: number, max: number, allowFixMinMax?: boolean): number;
    }
}
declare global {
    interface Number {
        WrapToRange(this: number, min: number, max: number, maxOut?: boolean): number;
    }
}
declare global {
    interface Number {
        Distance(this: number, other: number): number;
    }
}
declare global {
    interface Number {
        ToPower(this: number, power: number): number;
    }
}
export {};
