export interface VSet_Options {
    prop?: PropertyDescriptor;
    deleteUndefined?: boolean;
    deleteNull?: boolean;
    deleteEmpty?: boolean;
}
export declare const specialKeys: string[];
export declare class ObjectCEClass extends Object {
    _AddItem(name: any, value: any, forceAdd?: boolean): void;
    _AddFunction(name: any, func: any): void;
    _AddGetterSetter(name: any, getter: any, setter: any): void;
    _AddFunction_Inline: any;
    _AddGetter_Inline: any;
    _AddSetter_Inline: any;
    Extend(x: any): this;
    VSet(...args: any[]): this;
    Extended(x: any): any;
    SafeGet(pathOrPathGetterFunc: string | Function, resultIfNull?: any): any;
    VAct(action: any): this;
    As<T>(type: new (..._: any[]) => T): T;
    Strip(): this;
    Including(...propNames: any[]): {};
    Excluding(...propNames: any[]): any;
    IsOneOf(...values: any[]): boolean;
    Pairs(excludeSpecialKeys?: boolean | 1): any[];
    VKeys(excludeSpecialKeys?: boolean | 1): any[];
    VValues(excludeSpecialKeys?: boolean | 1): any[];
    Sym(symbolName: string): any;
    FA_Select(selectFunc?: (a: any) => any): any[];
    FA_RemoveAt(index: number): void;
    FA_Add(item: any): void;
}
export declare const ObjectCE: ObjectCEClass;
