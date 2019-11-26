export interface ForEachExtras {
    index: number;
    Break: () => void;
    Continue: () => void;
}
export declare class ArrayCEClass<T> extends Array<T> {
    ForEach(this: T[], func: (value: T, extras: ForEachExtras) => any): void;
    ForEachAsync(this: T[], func: (value: T, extras: ForEachExtras) => any): Promise<void>;
    Contains(this: T[], item: T): boolean;
    ContainsAny(this: T[], ...items: T[]): boolean;
    Prepend(this: T[], ...newItems: T[]): void;
    Add(this: T[], item: T): number;
    CAdd(this: T[], item: T): T[];
    TAdd(this: T[], item: T): T;
    AddRange(this: T[], array: T[]): T[];
    Remove(this: T[], item: T): boolean;
    RemoveAll(this: T[], items: T[]): void;
    RemoveAt(this: T[], index: number): T;
    Insert(this: T[], index: number, obj: T): void;
    SetItems(this: T[], items: T[]): T[];
    Reversed(this: T[]): T[];
    Any(this: T[], matchFunc: (item: T, index?: number) => boolean): boolean;
    All(this: T[], matchFunc: (item: T, index?: number) => boolean): boolean;
    Where(this: T[], matchFunc: (item: T, index?: number) => boolean): any[];
    Select<T2>(this: T[], selectFunc: (item: T, index?: number) => T2): any[];
    SelectMany<T2>(this: T[], selectFunc: (item: T, index?: number) => T2): any[];
    Count(this: T[]): number;
    VCount(this: T[], matchFunc: (item: T) => boolean): number;
    Clear(this: T[]): void;
    First(this: T[], matchFunc?: (item: T) => boolean): any;
    FirstOrX(this: T[], matchFunc?: (item: T) => boolean, x?: any): any;
    FirstWith(this: T[], propName: string, propValue: any): any;
    Last(this: T[], matchFunc?: any): any;
    LastOrX(this: T[], matchFunc?: (item: T) => boolean, x?: any): any;
    XFromLast(this: T[], x: number): T;
    Move(this: T[], item: T, newIndex: number, newIndexAsPreRemovalIndexVSFinalIndex?: boolean): number;
    ToList(this: T[], itemType?: any): any[];
    ToMap<Value>(this: T[], keyFunc: (item: T, index: number) => string, valFunc: (item: T, index: number) => Value): {
        [key: string]: Value;
    };
    Skip(this: T[], count: number): any[];
    Take(this: T[], count: number): any[];
    TakeLast(this: T[], count: number): any[];
    FindIndex(this: T[], matchFunc: (item: T) => boolean): number;
    OrderBy(this: T[], valFunc?: (item: any, index: number) => any): T[];
    OrderByDescending(this: T[], valFunc?: (item: any, index: number) => any): T[];
    Distinct(this: T[]): any[];
    Except(this: T[], ...args: any[]): any[];
    IfEmptyThen(this: T[], valIfSelfIsEmpty: any): any;
    Min(this: T[], valFunc?: (item: T) => number, asNumbers?: boolean): any;
    Max(this: T[], valFunc?: (item: T) => number, asNumbers?: boolean): any;
    Sum(this: number[]): number;
    Average(this: number[]): number;
    Median(this: number[]): number;
    Random(this: T[]): T;
    oldJoin: (separator?: string) => string;
    join(this: T[], separator?: string): string;
}
export declare const ArrayCE: <T>(nextThis: T[]) => ArrayCEClass<T>;
export declare class NodeListCEClass extends NodeList {
    ToArray(this: NodeList): Node[];
}
export declare const NodeListCE: (nextThis: any) => NodeListCEClass;
