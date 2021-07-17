export declare var bool: () => new (..._: any[]) => boolean;
export declare var int: () => new (..._: any[]) => number;
export declare var double: () => new (..._: any[]) => number;
export declare var string: () => new (..._: any[]) => string;
export declare function IsPrimitive(obj: any): boolean;
export declare function IsBool(obj: any): obj is boolean;
export declare function ToBool(boolStr: any): boolean;
export declare function IsNumberString(obj: any, allowNaN?: boolean): boolean | 0;
export declare function IsNumber(obj: any, allowNumberObj?: boolean, allowNaN?: boolean): obj is number;
/** Basically the same as Number(...), accepting numbers, and converting number-strings of these forms:
1) "010" -> 10 [ES5+], 8 [<ES5]
2) "0x10" -> 16
3) "5e3" -> 5000
Does *not* convert values of these forms (instead returns valIfConversionFails -- by default NaN):
4) null -> ?
5) "" -> ?*/
export declare function ToNumber(stringOrFloatVal: string | number | undefined | null, valIfConversionFails?: number, allowParseNaN?: boolean): number;
export declare function IsInt(obj: any): obj is number;
export declare function ToInt(stringOrFloatVal: string | number | undefined | null, valIfConversionFails?: number, allowParseNaN?: boolean): number;
export declare function IsNaN(obj: any): boolean;
export declare function IsString(obj: any, allowStringObj?: boolean): obj is string;
export declare function ToString(val: any): string;
export declare function IsSymbol(obj: any, allowSymbolObj?: boolean): obj is symbol;
export declare function IsFunction(obj: any): obj is Function;
export declare function IsArray(obj: any): obj is Array<any>;
export declare function IsObject(obj: any): obj is Object;
export declare function IsTypeX<T>(obj: Object, typeConstructor: new (...args: any[]) => T): obj is T;
export declare function IsConstructor(obj: any): obj is new (..._: any[]) => any;
/**
 * Typescript enums compile to an object with each `key = value` pair converted into two props: key->value, value->key
 * This function returns just the key->value pairs. (with each entry having the form {name: string, value: number | null})
 */
export declare function GetEntries<T extends {
    [k: string]: any;
}>(enumType: T, nameModifierFunc?: ((name: string) => string) | "ui"): {
    name: string;
    value: T extends {
        [k: string]: infer X;
    } ? X : any;
}[];
export declare function GetValues<T extends {
    [k: string]: any;
}>(enumType: T): (T extends {
    [k: string]: infer X;
} ? X : any)[];
export declare function GetValues_ForSchema<T extends {
    [k: string]: any;
}>(enumType: T): {
    const: T extends {
        [k: string]: infer X;
    } ? X : any;
}[];
/**
 * This isn't really recommended anymore. Instead, I suggest using "real enums", but with string values rather than auto/number values.
 * If you want to rename something quickly, and not change value for entry yet (eg. because you don't want to have to change cell values in db's and such yet):
 * 	Rename the key, but then add an underscore at the end to mark it as such. (until the value is changed too -- probably in a batch with other such "buffered renames")
*/
export declare function CreateStringEnum<T extends {
    [key: string]: 1;
}>(keysObj: T): readonly [{ [K in keyof T]: keyof T; }, (keyof T)[]];
