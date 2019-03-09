export declare var bool: () => new (..._: any[]) => boolean;
export declare var int: () => new (..._: any[]) => number;
export declare var double: () => new (..._: any[]) => number;
export declare var string: () => new (..._: any[]) => string;
export declare function IsNaN(obj: any): boolean;
export declare function IsPrimitive(obj: any): boolean;
export declare function IsBool(obj: any): obj is boolean;
export declare function ToBool(boolStr: any): boolean;
export declare function IsObject(obj: any): obj is Object;
export declare function IsObjectOf<T>(obj: any): obj is T;
export declare function IsNumberString(obj: any, allowNaN?: boolean): boolean;
export declare function IsNumber(obj: any, allowNumberObj?: boolean, allowNaN?: boolean): obj is number;
/** Basically the same as Number(...), accepting numbers, and number-strings matching:
1) "0100" -> 100 [in ES5+]
2) "0x10" -> 16
3) "5e3" -> 5000
But does *not* match the following (for which it instead returns valIfConversionFails -- by default NaN):
1) null -> 0
2) "" -> 0*/
export declare function ToNumber(stringOrFloatVal: string | number, valIfConversionFails?: number): number;
export declare function IsInt(obj: any): obj is number;
export declare function ToInt(stringOrFloatVal: string | number, valIfConversionFails?: number): number;
export declare function IsString(obj: any, allowStringObj?: boolean): obj is string;
export declare function ToString(val: any): string;
export declare function IsFunction(obj: any): obj is Function;
export declare function IsConstructor(obj: any): obj is new (..._: any[]) => any;
export declare function GetEntries(enumType: any, nameModifierFunc?: (name: string) => string): {
    name: string;
    value: number;
}[];
export declare function GetValues<T>(enumType: any): T[];
export declare function GetValues_ForSchema<T>(enumType: any): {
    const: {};
}[];
