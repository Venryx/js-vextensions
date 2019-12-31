export interface VSet_Options {
    prop?: PropertyDescriptor;
    copyNonEnumerable?: boolean;
    copySymbolKeys?: boolean;
    copyGetterSettersAs?: "ignore" | "getterSetter" | "value";
    callSetters?: "never" | "always" | "auto";
}
export declare type MapLike<V> = {
    [key: number]: V;
} | {
    [key: string]: V;
};
export declare type MapOrMapLike<V> = Map<any, V> | MapLike<V>;
export declare type TargetTFor<T> = T extends ObjectCEProxyInterface<infer TargetT> ? TargetT : T;
export declare type XOrWrapped<T> = T | ObjectCEProxyInterface<T>;
export declare const ObjectCE_funcs: {
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    _AddItem(name: any, value: any, forceAdd?: boolean): void;
    _AddFunction(name: any, func: any): void;
    _AddGetterSetter(name: any, getter: any, setter: any): void;
    _AddFunction_Inline: any;
    _AddGetter_Inline: any;
    _AddSetter_Inline: any;
    Extend(x: any, copyNonEnumerable?: boolean): any;
    Extended<T, T2>(this: T, x: T2, copyNonEnumerable?: boolean): TargetTFor<T> & T2;
    VSet: {
        <T_1>(this: T_1, propName: string | symbol, propValue: any, opt?: VSet_Options): TargetTFor<T_1>;
        <T_2>(this: T_2, props: any, opt?: VSet_Options): TargetTFor<T_2>;
    };
    SafeGet: {
        (path: string, resultIfNull?: any): any;
        <T_3, Result>(this: T_3, pathGetterFunc: (self: TargetTFor<T_3>) => Result, resultIfNull?: any): Result;
    };
    VAct<T_4>(this: T_4, func: (self: TargetTFor<T_4>) => any): TargetTFor<T_4>;
    As<T_5>(type: new (..._: any[]) => T_5): T_5;
    Strip(): any;
    Including<T_6, Keys extends (keyof T_6)[] = any>(this: XOrWrapped<T_6>, ...keys: Keys): Pick<T_6, Keys[number]>;
    Excluding<T_7, Keys_1 extends (keyof T_7)[] = any>(this: XOrWrapped<T_7>, ...keys: Keys_1): Pick<T_7, Exclude<keyof T_7, Keys_1[number]>>;
    IsOneOf(...values: any[]): boolean;
    Pairs: {
        <K, V>(this: XOrWrapped<Map<K, V>>): {
            index: number;
            key: K;
            keyNum?: number;
            value: V;
        }[];
        <K_1, V_1>(this: XOrWrapped<MapLike<V_1>>): {
            index: number;
            key: string;
            keyNum?: number;
            value: V_1;
        }[];
        <K_2 = string, V_2 = any>(): {
            index: number;
            key: K_2;
            keyNum?: number;
            value: V_2;
        }[];
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
export declare const ObjectCES: import("../Utils/General").WithFuncsStandalone_Type<{
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    _AddItem(name: any, value: any, forceAdd?: boolean): void;
    _AddFunction(name: any, func: any): void;
    _AddGetterSetter(name: any, getter: any, setter: any): void;
    _AddFunction_Inline: any;
    _AddGetter_Inline: any;
    _AddSetter_Inline: any;
    Extend(x: any, copyNonEnumerable?: boolean): any;
    Extended<T, T2>(this: T, x: T2, copyNonEnumerable?: boolean): TargetTFor<T> & T2;
    VSet: {
        <T_1>(this: T_1, propName: string | symbol, propValue: any, opt?: VSet_Options): TargetTFor<T_1>;
        <T_2>(this: T_2, props: any, opt?: VSet_Options): TargetTFor<T_2>;
    };
    SafeGet: {
        (path: string, resultIfNull?: any): any;
        <T_3, Result>(this: T_3, pathGetterFunc: (self: TargetTFor<T_3>) => Result, resultIfNull?: any): Result;
    };
    VAct<T_4>(this: T_4, func: (self: TargetTFor<T_4>) => any): TargetTFor<T_4>;
    As<T_5>(type: new (..._: any[]) => T_5): T_5;
    Strip(): any;
    Including<T_6, Keys extends (keyof T_6)[] = any>(this: XOrWrapped<T_6>, ...keys: Keys): Pick<T_6, Keys[number]>;
    Excluding<T_7, Keys_1 extends (keyof T_7)[] = any>(this: XOrWrapped<T_7>, ...keys: Keys_1): Pick<T_7, Exclude<keyof T_7, Keys_1[number]>>;
    IsOneOf(...values: any[]): boolean;
    Pairs: {
        <K, V>(this: XOrWrapped<Map<K, V>>): {
            index: number;
            key: K;
            keyNum?: number;
            value: V;
        }[];
        <K_1, V_1>(this: XOrWrapped<MapLike<V_1>>): {
            index: number;
            key: string;
            keyNum?: number;
            value: V_1;
        }[];
        <K_2 = string, V_2 = any>(): {
            index: number;
            key: K_2;
            keyNum?: number;
            value: V_2;
        }[];
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
