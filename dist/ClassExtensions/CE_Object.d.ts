import { WithFuncThisArgsAsAny_Type } from "../Utils/General";
export interface VSet_Options {
    prop?: PropertyDescriptor;
    deleteUndefined?: boolean;
    deleteNull?: boolean;
    deleteEmpty?: boolean;
}
export declare const specialKeys: string[];
export declare class ObjectCEClass<RealThis> {
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    _AddItem(name: any, value: any, forceAdd?: boolean): void;
    _AddFunction(name: any, func: any): void;
    _AddGetterSetter(name: any, getter: any, setter: any): void;
    set _AddFunction_Inline(func: any);
    set _AddGetter_Inline(func: any);
    set _AddSetter_Inline(func: any);
    Extend(x: any): this;
    VSet<T>(this: T, props: any, options?: VSet_Options): T;
    VSet<T>(this: T, propName: string, propValue: any, options?: VSet_Options): T;
    VSet<T extends RealThis>(this: T, props: any, options?: VSet_Options): T;
    Extended<T, T2>(this: T, x: T2): T & T2;
    SafeGet(path: string, resultIfNull?: any): any;
    SafeGet<T, Result>(this: T, pathGetterFunc: (self: T) => Result, resultIfNull?: any): Result;
    VAct<T>(this: T, func: (self: T) => any): T;
    As<T>(type: new (..._: any[]) => T): T;
    Strip(): this;
    Including(...keys: string[]): {};
    Excluding(...keys: string[]): {} & this;
    IsOneOf(...values: any[]): boolean;
    Pairs<K, V>(this: {
        [key: number]: V;
    } | {
        [key: string]: V;
    }, excludeSpecialKeys?: boolean | 1): {
        index: number;
        key: string;
        keyNum?: number;
        value: V;
    }[];
    Pairs<K, V>(this: Map<K, V>, excludeSpecialKeys?: boolean | 1): {
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
    Pairs<V = any>(excludeSpecialKeys?: boolean | 1): {
        index: number;
        key: string;
        keyNum?: number;
        value: V;
    }[];
    VKeys<K>(this: {
        [key: number]: any;
    } | {
        [key: string]: any;
    }, excludeSpecialKeys?: boolean | 1): string[];
    VKeys<K>(this: Map<K, any>, excludeSpecialKeys?: boolean | 1): K[];
    VKeys<K = string>(excludeSpecialKeys?: boolean | 1): K[];
    VKeys(excludeSpecialKeys?: boolean | 1): string[];
    VValues<V>(this: {
        [key: number]: V;
    } | {
        [key: string]: V;
    } | Map<any, V>, excludeSpecialKeys?: boolean | 1): V[];
    VValues<V = any>(excludeSpecialKeys?: boolean | 1): V[];
    Sym(symbolName: string): any;
    FA_Select<T, T2>(this: {
        [key: number]: T;
    } | {
        [key: string]: T;
    }, selectFunc?: (item: T, index?: number) => T2): T2[];
    FA_RemoveAt(index: number): void;
    FA_Add<T>(this: {
        [key: number]: T;
    } | {
        [key: string]: T;
    }, item: T): void;
}
export declare const ObjectCE: <T>(nextThis: T) => WithFuncThisArgsAsAny_Type<ObjectCEClass<T>>;
export declare const ObjectCES: {
    _AddItem: (thisArg: Object, name: any, value: any, forceAdd?: boolean) => void;
    _AddFunction: (thisArg: Object, name: any, func: any) => void;
    _AddGetterSetter: (thisArg: Object, name: any, getter: any, setter: any) => void;
    _AddFunction_Inline: any;
    _AddGetter_Inline: any;
    _AddSetter_Inline: any;
    Extend: (thisArg: Object, x: any) => ObjectCEClass<any>;
    VSet: (thisArg: Object, props: any, options?: VSet_Options) => any;
    Extended: (thisArg: Object, x: unknown) => unknown;
    SafeGet: (thisArg: Object, pathGetterFunc: (self: unknown) => unknown, resultIfNull?: any) => unknown;
    VAct: (thisArg: Object, func: (self: unknown) => any) => unknown;
    As: (thisArg: Object, type: new (..._: any[]) => unknown) => unknown;
    Strip: (thisArg: Object) => ObjectCEClass<any>;
    Including: (thisArg: Object, ...args: string[]) => {};
    Excluding: (thisArg: Object, ...args: string[]) => ObjectCEClass<any>;
    IsOneOf: (thisArg: Object, ...args: any[]) => boolean;
    Pairs: (thisArg: Object, excludeSpecialKeys?: boolean | 1) => {
        index: number;
        key: string;
        keyNum?: number;
        value: unknown;
    }[];
    VKeys: (thisArg: Object, excludeSpecialKeys?: boolean | 1) => string[];
    VValues: (thisArg: Object, excludeSpecialKeys?: boolean | 1) => unknown[];
    Sym: (thisArg: Object, symbolName: string) => any;
    FA_Select: (thisArg: Object, selectFunc?: (item: unknown, index?: number) => unknown) => unknown[];
    FA_RemoveAt: (thisArg: Object, index: number) => void;
    FA_Add: (thisArg: Object, item: unknown) => void;
};
