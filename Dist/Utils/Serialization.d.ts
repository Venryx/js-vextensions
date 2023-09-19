export declare class FancyFormatOptions {
    toJSON_opts?: Partial<ToJSON_Advanced_Options>;
    toJSON_autoIndent_minLength: number | null;
    toJSON_autoIndent_indent: number;
}
/** For converting log-strings and objects into a single string. (like node-js console.log, except usable anywhere, eg. as Assert message) */
export declare function FancyFormat(options: Partial<FancyFormatOptions>, ...parts: any[]): string;
export declare function FromJSON(json: string): any;
export declare function ToJSON(obj: any, replacerFunc?: (this: any, key: string, value: any) => any, spacing?: number): string;
export type ReplacerFunc = (key: string, value: any) => any;
export declare class ToJSON_Advanced_Options {
    /** Called before other replacement options checked. Return undefined to make no change; return {$omit: true} to skip serialization of the current key. */
    entryReplacer_pre?: ReplacerFunc;
    /** Called after other replacement options checked. Return undefined to make no change; return {$omit: true} to skip serialization of the current key. */
    entryReplacer_post?: ReplacerFunc;
    keysToIgnore: string[];
    stringifyUndefinedAs: null;
    trimDuplicates: boolean;
    trimDuplicates_replaceStr: string;
    catchErrors: boolean;
    catchErrors_replaceStr: string;
    indent?: number;
    addSpacesAt?: Partial<AddSpacesAt_Options>;
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
