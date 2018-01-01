interface Number {
    IfN1Then<T>(valIfSelfIsNeg1: T): T;
}
interface Number {
    ToPercentStr(precision?: number): string;
}
interface Number {
    RoundTo(multiple: number): number;
}
interface Number {
    RoundTo_Str(multipleOf: number, removeEmptyFraction?: boolean): string;
}
interface Number {
    FloorTo(multipleOf: number): number;
}
interface Number {
    FloorTo_Str(multipleOf: number): string;
}
interface Number {
    CeilingTo(multipleOf: number): number;
}
interface Number {
    CeilingTo_Str(multipleOf: number): string;
}
interface Number {
    KeepAtLeast(this: number, min: number): number;
}
interface Number {
    KeepAtMost(this: number, max: number): number;
}
interface Number {
    KeepBetween(this: number, min: number, max: number): number;
}
interface Number {
    WrapToRange(this: number, min: number, max: number, maxOut?: boolean): number;
}
interface Number {
    Distance(this: number, other: number): number;
}
interface Number {
    ToPower(this: number, power: number): number;
}
