export declare const NumberCE_funcs: {
    IfN1Then(this: Number, valIfSelfIsNeg1: any): any;
    NaNTo(this: Number, valIfSelfIsNaN: any): any;
    ToPercent(this: Number, roundTo_multiple?: number): number;
    FromPercent(this: Number): number;
    ToPercentStr(this: Number, precision?: number): string;
    IsMultipleOf(this: Number, multipleOf: number, maxDistToBeMultiple: number): boolean;
    RoundTo(this: Number, multiple: number): number;
    RoundTo_Str(this: Number, multipleOf: number, fractionDigits?: number, removeEmptyFraction?: boolean): string;
    FloorTo(this: Number, multipleOf: number): number;
    FloorTo_Str(this: Number, multipleOf: number): string;
    CeilingTo(this: Number, multipleOf: any): number;
    CeilingTo_Str(this: Number, multipleOf: any): string;
    KeepAtLeast(this: Number, min: number): number;
    KeepAtMost(this: Number, max: number): number;
    IsBetween(this: Number, min: number, max: number, allowFixMinMax?: boolean): boolean;
    KeepBetween(this: Number, min: number, max: number, allowFixMinMax?: boolean): number;
    WrapToRange(this: Number, min: number, max: number, maxOut?: boolean): number;
    Distance(this: Number, other: number): number;
    ToPower(this: Number, power: number): number;
};
export type NumberCEProxy = Number & typeof NumberCE_funcs;
export declare const NumberCE: (nextThis: Number) => NumberCEProxy;
export declare const NumberCES: import("../Utils/General.js").WithFuncsStandalone_Type<{
    IfN1Then(this: Number, valIfSelfIsNeg1: any): any;
    NaNTo(this: Number, valIfSelfIsNaN: any): any;
    ToPercent(this: Number, roundTo_multiple?: number): number;
    FromPercent(this: Number): number;
    ToPercentStr(this: Number, precision?: number): string;
    IsMultipleOf(this: Number, multipleOf: number, maxDistToBeMultiple: number): boolean;
    RoundTo(this: Number, multiple: number): number;
    RoundTo_Str(this: Number, multipleOf: number, fractionDigits?: number, removeEmptyFraction?: boolean): string;
    FloorTo(this: Number, multipleOf: number): number;
    FloorTo_Str(this: Number, multipleOf: number): string;
    CeilingTo(this: Number, multipleOf: any): number;
    CeilingTo_Str(this: Number, multipleOf: any): string;
    KeepAtLeast(this: Number, min: number): number;
    KeepAtMost(this: Number, max: number): number;
    IsBetween(this: Number, min: number, max: number, allowFixMinMax?: boolean): boolean;
    KeepBetween(this: Number, min: number, max: number, allowFixMinMax?: boolean): number;
    WrapToRange(this: Number, min: number, max: number, maxOut?: boolean): number;
    Distance(this: Number, other: number): number;
    ToPower(this: Number, power: number): number;
}>;
