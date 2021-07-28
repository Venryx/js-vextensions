export interface VSet_Options {
    prop?: PropertyDescriptor;
    copyNonEnumerable?: boolean;
    copySymbolKeys?: boolean;
    copyGetterSettersAs?: "ignore" | "getterSetter" | "value";
    callSetters?: "never" | "always" | "auto";
    /** Whether to process the string versions of OMIT and DEL as operators. (don't enable for over-network pathways that are really important, or untrusted) */
    allowStringOperators?: boolean;
}
export declare type MapLike<V> = {
    [key: number]: V;
} | {
    [key: string]: V;
};
export declare type MapOrMapLike<V> = Map<any, V> | MapLike<V>;
export declare type TargetTFor<T> = T extends ObjectCEProxyInterface<infer TargetT> ? TargetT : T;
export declare type XOrWrapped<T> = T | ObjectCEProxyInterface<T>;
export declare type Pair<K, V> = {
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
    VGet<T, T2>(this: T, func: (self: TargetTFor<T>) => T2): T2;
    SafeGet: {
        (path: string, resultIfNull?: any): any;
        <T_1, Result>(this: T_1, pathGetterFunc: (self: TargetTFor<T_1>) => Result, resultIfNull?: any): Result;
    };
    Extend(x: any, copyNonEnumerable?: boolean): any;
    Extended<T_2, T2_1>(this: T_2, x: T2_1, copyNonEnumerable?: boolean): TargetTFor<T_2> & T2_1;
    VSet: {
        <T_3>(this: T_3, propName: string | symbol, propValue: any | undefined, opt?: VSet_Options | undefined): TargetTFor<T_3>;
        <T_4>(this: T_4, props: any, opt?: VSet_Options | undefined): TargetTFor<T_4>;
    };
    VAct<T_5>(this: T_5, func: (self: TargetTFor<T_5>) => any): TargetTFor<T_5>;
    As<T_6>(type: new (..._: any[]) => T_6): T_6;
    Strip(): any;
    IncludeKeys<T_7, Keys extends (keyof T_7)[] = any>(this: XOrWrapped<T_7>, ...keys: Keys): Pick<T_7, Keys[number]>;
    ExcludeKeys<T_8, Keys_1 extends (keyof T_8)[] = any>(this: XOrWrapped<T_8>, ...keys: Keys_1): Omit<T_8, Keys_1[number]>;
    OmitUndefined<T_9>(this: T_9, alsoOmitNulls?: boolean, keepPrototype?: boolean): TargetTFor<T_9>;
    OmitNull<T_10>(this: T_10, alsoOmitUndefined?: boolean, keepPrototype?: boolean): TargetTFor<T_10>;
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
export declare type ObjectCEProxy<T> = typeof ObjectCE_funcs & ObjectCEProxyInterface<T>;
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
    VGet<T, T2>(this: T, func: (self: TargetTFor<T>) => T2): T2;
    SafeGet: {
        (path: string, resultIfNull?: any): any;
        <T_1, Result>(this: T_1, pathGetterFunc: (self: TargetTFor<T_1>) => Result, resultIfNull?: any): Result;
    };
    Extend(x: any, copyNonEnumerable?: boolean): any;
    Extended<T_2, T2_1>(this: T_2, x: T2_1, copyNonEnumerable?: boolean): TargetTFor<T_2> & T2_1;
    VSet: {
        <T_3>(this: T_3, propName: string | symbol, propValue: any | undefined, opt?: VSet_Options | undefined): TargetTFor<T_3>;
        <T_4>(this: T_4, props: any, opt?: VSet_Options | undefined): TargetTFor<T_4>;
    };
    VAct<T_5>(this: T_5, func: (self: TargetTFor<T_5>) => any): TargetTFor<T_5>;
    As<T_6>(type: new (..._: any[]) => T_6): T_6;
    Strip(): any;
    IncludeKeys<T_7, Keys extends (keyof T_7)[] = any>(this: XOrWrapped<T_7>, ...keys: Keys): Pick<T_7, Keys[number]>;
    ExcludeKeys<T_8, Keys_1 extends (keyof T_8)[] = any>(this: XOrWrapped<T_8>, ...keys: Keys_1): Omit<T_8, Keys_1[number]>;
    OmitUndefined<T_9>(this: T_9, alsoOmitNulls?: boolean, keepPrototype?: boolean): TargetTFor<T_9>;
    OmitNull<T_10>(this: T_10, alsoOmitUndefined?: boolean, keepPrototype?: boolean): TargetTFor<T_10>;
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
