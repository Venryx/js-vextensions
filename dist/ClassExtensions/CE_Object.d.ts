export interface VSet_Options {
    prop?: PropertyDescriptor;
    deleteUndefined?: boolean;
    deleteNull?: boolean;
    deleteEmpty?: boolean;
}
export declare type MapLike<V> = {
    [key: number]: V;
} | {
    [key: string]: V;
};
export declare type MapOrMapLike<V> = Map<any, V> | MapLike<V>;
export declare type TargetTFor<T> = T extends ObjectCEClass<infer TargetT> ? TargetT : T;
declare type XOrWrapped<T> = T | ObjectCEClass<T>;
export declare const specialKeys: string[];
export declare class ObjectCEClass<TargetT> {
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    _AddItem(name: any, value: any, forceAdd?: boolean): void;
    _AddFunction(name: any, func: any): void;
    _AddGetterSetter(name: any, getter: any, setter: any): void;
    set _AddFunction_Inline(func: any);
    set _AddGetter_Inline(func: any);
    set _AddSetter_Inline(func: any);
    Extend(x: any): this;
    VSet<T>(this: T, propName: string, propValue: any, options?: VSet_Options): TargetTFor<T>;
    VSet<T>(this: T, props: any, options?: VSet_Options): TargetTFor<T>;
    Extended<T, T2>(this: T, x: T2): TargetTFor<T> & T2;
    SafeGet(path: string, resultIfNull?: any): any;
    SafeGet<T, Result>(this: T, pathGetterFunc: (self: TargetTFor<T>) => Result, resultIfNull?: any): Result;
    VAct<T>(this: T, func: (self: T) => any): TargetTFor<T>;
    As<T>(type: new (..._: any[]) => T): T;
    Strip(): this;
    Including(...keys: string[]): {};
    Excluding(...keys: string[]): any;
    IsOneOf(...values: any[]): boolean;
    Pairs<K, V>(this: XOrWrapped<MapLike<V>>, excludeSpecialKeys?: boolean | 1): {
        index: number;
        key: string;
        keyNum?: number;
        value: V;
    }[];
    Pairs<K, V>(this: XOrWrapped<Map<K, V>>, excludeSpecialKeys?: boolean | 1): {
        index: number;
        key: K;
        keyNum?: number;
        value: V;
    }[];
    Pairs<K = string, V = any>(excludeSpecialKeys?: boolean | 1): {
        index: number;
        key: K;
        keyNum?: number;
        value: V;
    }[];
    Pairs(excludeSpecialKeys?: boolean | 1): {
        index: number;
        key: string;
        keyNum?: number;
        value: any;
    }[];
    VKeys(this: XOrWrapped<MapLike<any>>, excludeSpecialKeys?: boolean | 1): string[];
    VKeys<K>(this: XOrWrapped<Map<K, any>>, excludeSpecialKeys?: boolean | 1): K[];
    VKeys<K = string>(excludeSpecialKeys?: boolean | 1): K[];
    VKeys(excludeSpecialKeys?: boolean | 1): string[];
    VValues<V>(this: MapOrMapLike<V>, excludeSpecialKeys?: boolean | 1): V[];
    VValues<V = any>(excludeSpecialKeys?: boolean | 1): V[];
    Sym(symbolName: string): any;
}
export declare const ObjectCE: <T>(nextThis: T) => ObjectCEClass<T>;
export declare const ObjectCES: {
    _AddItem: (thisArg: Object, name: any, value: any, forceAdd?: boolean) => void;
    _AddFunction: (thisArg: Object, name: any, func: any) => void;
    _AddGetterSetter: (thisArg: Object, name: any, getter: any, setter: any) => void;
    _AddFunction_Inline: any;
    _AddGetter_Inline: any;
    _AddSetter_Inline: any;
    Extend: (thisArg: Object, x: any) => ObjectCEClass<any>;
    VSet: (thisArg: Object, props: any, options?: VSet_Options) => unknown;
    Extended: (thisArg: Object, x: unknown) => unknown;
    SafeGet: (thisArg: Object, pathGetterFunc: (self: unknown) => unknown, resultIfNull?: any) => unknown;
    VAct: (thisArg: Object, func: (self: unknown) => any) => unknown;
    As: (thisArg: Object, type: new (..._: any[]) => unknown) => unknown;
    Strip: (thisArg: Object) => ObjectCEClass<any>;
    Including: (thisArg: Object, ...args: string[]) => {};
    Excluding: (thisArg: Object, ...args: string[]) => any;
    IsOneOf: (thisArg: Object, ...args: any[]) => boolean;
    Pairs: (thisArg: Object, excludeSpecialKeys?: boolean | 1) => {
        index: number;
        key: string;
        keyNum?: number;
        value: any;
    }[];
    VKeys: (thisArg: Object, excludeSpecialKeys?: boolean | 1) => string[];
    VValues: (thisArg: Object, excludeSpecialKeys?: boolean | 1) => unknown[];
    Sym: (thisArg: Object, symbolName: string) => any;
};
export {};
