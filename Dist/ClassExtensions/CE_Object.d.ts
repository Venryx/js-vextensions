export interface VSet_Options {
    prop?: PropertyDescriptor;
    copyNonEnumerable?: boolean;
    copySymbolKeys?: boolean;
    copyGetterSettersAs?: "ignore" | "getterSetter" | "value";
    callSetters?: "never" | "always" | "auto";
    /** Whether to process the string versions of OMIT and DEL as operators. (don't enable for over-network pathways that are really important, or untrusted) */
    allowStringOperators?: boolean;
}
export type MapLike<V> = {
    [key: number]: V;
} | {
    [key: string]: V;
};
export type MapOrMapLike<V> = Map<any, V> | MapLike<V>;
export type TargetTFor<T> = T extends ObjectCEProxyInterface<infer TargetT> ? TargetT : T;
export type XOrWrapped<T> = T | ObjectCEProxyInterface<T>;
export type Pair<K, V> = {
    index: number;
    key: K;
    keyNum?: number;
    value: V;
};
export declare const ObjectCE_funcs: {
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    _AddItem(name: any, value: any, forceAdd?: boolean): void;
    _AddFunction(name: any, func: any): void;
    _AddGetterSetter(name: any, getter: any, setter: any): void;
    _AddFunction_Inline: any;
    _AddGetter_Inline: any;
    _AddSetter_Inline: any;
    As<T>(type: new (..._: any[]) => T): T | null;
    Cast<T_1>(type: new (..._: any[]) => T_1): T_1;
    Strip(): any;
    /** Executes the given function (passing "this" as the func's "this", and only argument), then returns "this". */
    VAct<T_2>(this: T_2, func: (self: TargetTFor<T_2>) => any): TargetTFor<T_2>;
    /** Executes the given function (passing "this" as the func's "this", and only argument). If the func's result is truthy, returns "this"; else, returns null. */
    Check<T_3>(this: T_3, func: (self: TargetTFor<T_3>) => any): TargetTFor<T_3> | null;
    VGet<T_4, T2>(this: T_4, func: (self: TargetTFor<T_4>) => T2): T2;
    SafeGet: {
        (path: string, resultIfNull?: any): any;
        <T_5, Result>(this: T_5, pathGetterFunc: (self: TargetTFor<T_5>) => Result, resultIfNull?: any): Result;
    };
    Extend(x: any, copyNonEnumerable?: boolean): any;
    Extended<T_6 extends Object, T2_1>(this: T_6, x: T2_1, copyNonEnumerable?: boolean): TargetTFor<T_6> & T2_1;
    VSet: {
        <T_7>(this: T_7, propName: string | symbol, propValue: any | undefined, opt?: VSet_Options): TargetTFor<T_7>;
        <T_8>(this: T_8, props: any, opt?: VSet_Options): TargetTFor<T_8>;
    };
    IncludeKeys<T_9 extends Object, Keys extends (keyof T_9)[] = any>(this: XOrWrapped<T_9>, ...keys: Keys): Pick<T_9, Keys[number]>;
    ExcludeKeys<T_10 extends Object, Keys_1 extends (keyof T_10)[] = any>(this: XOrWrapped<T_10>, ...keys: Keys_1): Omit<T_10, Keys_1[number]>;
    OmitUndefined<T_11 extends Object>(this: T_11, alsoOmitNulls?: boolean, keepPrototype?: boolean): TargetTFor<T_11>;
    OmitNull<T_12 extends Object>(this: T_12, alsoOmitUndefined?: boolean, keepPrototype?: boolean): TargetTFor<T_12>;
    IsOneOf(...values: any[]): boolean;
    Pairs: {
        <K = string, V = any>(this: XOrWrapped<Map<K, V>>): Pair<K, V>[];
        <K_1 = string, V_1 = any>(this: XOrWrapped<MapLike<V_1>>): Pair<K_1, V_1>[];
        <K_2 = string, V_2 = any>(): Pair<K_2, V_2>[];
    };
    VKeys: {
        <K_3>(this: XOrWrapped<Map<K_3, any>>): K_3[];
        (this: XOrWrapped<MapLike<any>>): string[];
        <K_4 = string>(): K_4[];
    };
    VValues: {
        <V_3>(this: XOrWrapped<MapOrMapLike<V_3>>): V_3[];
        <V_4 = any>(): V_4[];
    };
    Sym(symbolName: string): any;
};
export interface ObjectCEProxyInterface<T> {
    _magicTypeMarker: T;
}
export type ObjectCEProxy<T> = typeof ObjectCE_funcs & ObjectCEProxyInterface<T>;
export declare const ObjectCE: <T>(nextThis: T) => ObjectCEProxy<T>;
export declare const ObjectCES: import("../Utils/General.js").WithFuncsStandalone_Type<{
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    _AddItem(name: any, value: any, forceAdd?: boolean): void;
    _AddFunction(name: any, func: any): void;
    _AddGetterSetter(name: any, getter: any, setter: any): void;
    _AddFunction_Inline: any;
    _AddGetter_Inline: any;
    _AddSetter_Inline: any;
    As<T>(type: new (..._: any[]) => T): T | null;
    Cast<T_1>(type: new (..._: any[]) => T_1): T_1;
    Strip(): any;
    /** Executes the given function (passing "this" as the func's "this", and only argument), then returns "this". */
    VAct<T_2>(this: T_2, func: (self: TargetTFor<T_2>) => any): TargetTFor<T_2>;
    /** Executes the given function (passing "this" as the func's "this", and only argument). If the func's result is truthy, returns "this"; else, returns null. */
    Check<T_3>(this: T_3, func: (self: TargetTFor<T_3>) => any): TargetTFor<T_3> | null;
    VGet<T_4, T2>(this: T_4, func: (self: TargetTFor<T_4>) => T2): T2;
    SafeGet: {
        (path: string, resultIfNull?: any): any;
        <T_5, Result>(this: T_5, pathGetterFunc: (self: TargetTFor<T_5>) => Result, resultIfNull?: any): Result;
    };
    Extend(x: any, copyNonEnumerable?: boolean): any;
    Extended<T_6 extends Object, T2_1>(this: T_6, x: T2_1, copyNonEnumerable?: boolean): TargetTFor<T_6> & T2_1;
    VSet: {
        <T_7>(this: T_7, propName: string | symbol, propValue: any | undefined, opt?: VSet_Options): TargetTFor<T_7>;
        <T_8>(this: T_8, props: any, opt?: VSet_Options): TargetTFor<T_8>;
    };
    IncludeKeys<T_9 extends Object, Keys extends (keyof T_9)[] = any>(this: XOrWrapped<T_9>, ...keys: Keys): Pick<T_9, Keys[number]>;
    ExcludeKeys<T_10 extends Object, Keys_1 extends (keyof T_10)[] = any>(this: XOrWrapped<T_10>, ...keys: Keys_1): Omit<T_10, Keys_1[number]>;
    OmitUndefined<T_11 extends Object>(this: T_11, alsoOmitNulls?: boolean, keepPrototype?: boolean): TargetTFor<T_11>;
    OmitNull<T_12 extends Object>(this: T_12, alsoOmitUndefined?: boolean, keepPrototype?: boolean): TargetTFor<T_12>;
    IsOneOf(...values: any[]): boolean;
    Pairs: {
        <K = string, V = any>(this: XOrWrapped<Map<K, V>>): Pair<K, V>[];
        <K_1 = string, V_1 = any>(this: XOrWrapped<MapLike<V_1>>): Pair<K_1, V_1>[];
        <K_2 = string, V_2 = any>(): Pair<K_2, V_2>[];
    };
    VKeys: {
        <K_3>(this: XOrWrapped<Map<K_3, any>>): K_3[];
        (this: XOrWrapped<MapLike<any>>): string[];
        <K_4 = string>(): K_4[];
    };
    VValues: {
        <V_3>(this: XOrWrapped<MapOrMapLike<V_3>>): V_3[];
        <V_4 = any>(): V_4[];
    };
    Sym(symbolName: string): any;
}>;
