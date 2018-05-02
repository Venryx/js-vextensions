interface Array<T> {
    Contains(item: T): boolean;
}
interface Array<T> {
    ContainsAny(...items: T[]): boolean;
}
interface Array<T> {
    AddRange(items: T[]): this;
}
interface Array<T> {
    Remove(item: T): boolean;
}
interface Array<T> {
    RemoveAll(items: T[]): void;
}
interface Array<T> {
    RemoveAt(index: number): T;
}
interface Array<T> {
    Insert(index: number, obj: T): void;
}
interface Array<T> {
    SetItems(items: T[]): this;
}
interface Array<T> {
    Reversed(): T[];
}
interface Array<T> {
    Any(matchFunc: (item: T, index?: number) => boolean): boolean;
}
interface Array<T> {
    All(matchFunc: (item: T, index?: number) => boolean): boolean;
}
interface Array<T> {
    Where(matchFunc: (item: T, index?: number) => boolean): T[];
}
interface Array<T> {
    Select<T2>(matchFunc: (item: T, index?: number) => T2): T2[];
}
interface Array<T> {
    SelectMany<T2>(matchFunc: (item: T, index?: number) => T2[]): T2[];
}
interface Array<T> {
    VCount(matchFunc: (item: T) => boolean): number;
}
interface Array<T> {
    Clear(): void;
}
interface Array<T> {
    First(matchFunc?: (item: T, index: number) => boolean): T;
}
interface Array<T> {
    FirstOrX(matchFunc?: (item: T, index: number) => boolean, x?: any): T;
}
interface Array<T> {
    Last(matchFunc?: (item: T, index: number) => boolean): T;
}
interface Array<T> {
    LastOrX(matchFunc?: (item: T, index: number) => boolean, x?: any): T;
}
interface Array<T> {
    XFromLast(x: number): T;
}
interface Array<T> {
    Move(item: any, newIndex: number, shiftInsertPointToPreserveFinalNeighbors?: boolean): number;
}
interface Array<T> {
    ToMap(keyFunc: (item: T, index: number) => string, valFunc: (item: T, index: number) => any): any;
}
interface Array<T> {
    Skip(count: number): T[];
}
interface Array<T> {
    Take(count: number): T[];
}
interface Array<T> {
    FindIndex(matchFunc?: (item: T, index: number) => boolean): number;
}
interface Array<T> {
    OrderBy(valFunc?: (item: T, index: number) => any): T[];
}
interface Array<T> {
    OrderByDescending(valFunc?: (item: T, index: number) => any): T[];
}
interface Array<T> {
    Distinct(): T[];
}
interface Array<T> {
    Except(...excludeItems: T[]): T[];
    Except(excludeItems: T[], excludeEachOnlyOnce?: boolean): T[];
}
interface Array<T> {
    Min(valFunc?: (item: T) => number, asNumbers?: boolean): T;
}
interface Array<T> {
    Max(valFunc?: (item: T) => number, asNumbers?: boolean): T;
}
interface Array<T> {
    Sum(): number;
}
interface Array<T> {
    Average(): number;
}
interface Array<T> {
    Median(): number;
}
declare var oldJoin: (separator?: string) => string;
interface NodeList {
    ToArray(): any[];
}
declare function require(name: string): any;
declare var StableSort: any, Compare: any;
