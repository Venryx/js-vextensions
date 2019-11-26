export declare class NumberCEClass {
    IfN1Then(this: Number, valIfSelfIsNeg1: any): any;
    NaNTo(this: Number, valIfSelfIsNaN: any): any;
    ToPercentStr(this: Number, precision?: number): string;
    IsMultipleOf(this: Number, multipleOf: number, maxDistToBeMultiple: number): boolean;
    RoundTo(this: Number, multiple: any): number;
    RoundTo_Str(this: Number, multipleOf: any, fractionDigits?: any, removeEmptyFraction?: boolean): string;
    FloorTo(this: Number, multipleOf: any): number;
    FloorTo_Str(this: Number, multipleOf: any): string;
    CeilingTo(this: Number, multipleOf: any): number;
    CeilingTo_Str(this: Number, multipleOf: any): string;
    KeepAtLeast(this: Number, min: number): number;
    KeepAtMost(this: Number, max: number): number;
    KeepBetween(this: Number, min: number, max: number, allowFixMinMax?: boolean): number;
    WrapToRange(this: Number, min: number, max: number, maxOut?: boolean): number;
    Distance(this: Number, other: number): number;
    ToPower(this: Number, power: number): number;
}
export declare const NumberCE: (nextThis: any) => import("..").WithFuncThisArgsAsAny_Type<NumberCEClass>;
