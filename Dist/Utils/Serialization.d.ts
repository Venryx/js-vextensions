export declare class FancyFormatOptions {
    toJSONOptions?: Partial<ToJSON_Advanced_Options>;
}
/** For converting log-strings and objects into a single string. (like node-js console.log, except usable anywhere, eg. as Assert message) */
export declare function FancyFormat(options: Partial<FancyFormatOptions>, ...parts: any[]): string;
export declare function FromJSON(json: string): any;
export declare function ToJSON(obj: any, replacerFunc?: (this: any, key: string, value: any) => any, spacing?: number): string;
export declare class ToJSON_Advanced_Options {
    keysToIgnore: string[];
    stringifyUndefinedAs: null;
    trimDuplicates: boolean;
    trimDuplicates_replaceStr: string;
    catchErrors: boolean;
    catchErrors_replaceStr: string;
    indent?: number;
    addSpacesAt?: AddSpacesAt_Options;
}
export declare class AddSpacesAt_Options {
    insideObjectBraces: boolean;
    insideArrayBrackets: boolean;
    betweenPropsOrItems: boolean;
    betweenPropNameAndValue: boolean;
}
export declare function ToJSON_Advanced(obj: any, options?: Partial<ToJSON_Advanced_Options>): string;
export declare function Clone(obj: any, keepPrototype?: boolean): any;
/** Variant of Clone which preserves prototypes, non-enumerable properties, and circular links (if enabled). */
export declare function CloneWithPrototypes(originalObject: any, keepCircularLinks?: boolean): any;
