export declare class NumberCE extends Number {
    IfN1Then(this: number, valIfSelfIsNeg1: any): any;
    NaNTo(valIfSelfIsNaN: any): any;
    ToPercentStr(this: number, precision?: number): string;
    IsMultipleOf(this: number, multipleOf: number, maxDistToBeMultiple: number): boolean;
    RoundTo(this: number, multiple: any): number;
    RoundTo_Str(this: number, multipleOf: any, fractionDigits?: any, removeEmptyFraction?: boolean): string;
    FloorTo(this: number, multipleOf: any): number;
    FloorTo_Str(this: number, multipleOf: any): string;
    CeilingTo(this: number, multipleOf: any): number;
    CeilingTo_Str(this: number, multipleOf: any): string;
    KeepAtLeast(this: number, min: number): number;
    KeepAtMost(this: number, max: number): number;
    KeepBetween(this: number, min: number, max: number, allowFixMinMax?: boolean): number;
    WrapToRange(this: number, min: number, max: number, maxOut?: boolean): number;
    Distance(this: number, other: number): number;
    ToPower(this: number, power: number): number;
}
