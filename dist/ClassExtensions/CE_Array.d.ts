import ".";
export interface ForEachExtras {
    index: number;
    Break: () => void;
    Continue: () => void;
}
export declare class ArrayCE<T> extends Array<T> {
    ForEach(func: Function): void;
    ForEachAsync(func: Function): Promise<void>;
    Contains(item: any): boolean;
    ContainsAny(...items: any[]): boolean;
    Prepend(...newItems: any[]): void;
    Add(item: any): number;
    CAdd(item: any): this;
    TAdd(item: any): any;
    AddRange(array: any): this;
    Remove(item: any): boolean;
    RemoveAll(items: any): void;
    RemoveAt(index: number): T;
    Insert(index: any, obj: any): void;
    SetItems(items: any): this;
    Reversed(): T[];
    Any(matchFunc: any): boolean;
    All(matchFunc: any): boolean;
    Where(matchFunc: any): any[];
    Select(selectFunc: any): any[];
    SelectMany(this: Array<any>, selectFunc: any): any[];
    Count(): number;
    VCount(matchFunc: any): number;
    Clear(): void;
    First(matchFunc?: any): any;
    FirstOrX(matchFunc?: any, x?: any): any;
    FirstWith(propName: any, propValue: any): any;
    Last(matchFunc?: any): any;
    LastOrX(matchFunc?: any, x?: any): any;
    XFromLast(x: number): T;
    Move(this: any[], item: any, newIndex: any, newIndexAsPreRemovalIndexVSFinalIndex?: boolean): number;
    ToList(itemType?: any): any[];
    ToMap(this: any[], keyFunc: any, valFunc: any): {};
    Skip(count: any): any[];
    Take(count: any): any[];
    TakeLast(count: any): any[];
    FindIndex(matchFunc: any): number;
    OrderBy(valFunc?: (item: any, index: number) => any): any;
    OrderByDescending(valFunc?: (item: any, index: number) => any): any;
    Distinct(): any[];
    Except(this: Array<any>, ...args: any[]): any[];
    IfEmptyThen(this: Array<any>, valIfSelfIsEmpty: any): any;
    Min(valFunc?: any, asNumbers?: boolean): any;
    Max(valFunc?: any, asNumbers?: boolean): any;
    Sum(): number;
    Average(): number;
    Median(): any;
    Random(): T;
    oldJoin: (separator?: string) => string;
    join(separator?: string): string;
}
declare const NodeListCE_base: new () => NodeList;
export declare class NodeListCE extends NodeListCE_base {
    ToArray(): Node[];
}
export {};
