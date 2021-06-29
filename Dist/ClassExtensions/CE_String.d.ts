export declare const StringCE_funcs: {
    TrimStart(this: String, ...chars: string[]): string;
    TrimEnd(this: String, ...chars: string[]): string;
    Contains(this: String, str: string, startIndex?: number | undefined): boolean;
    hashCode(this: String): number;
    Matches(this: String, strOrRegex: string | RegExp): RegExpMatchArray[];
    /** indexX is 0-based */
    IndexOf_X(this: String, str: string, indexX: number): number;
    /** indexFromLastX is 0-based */
    IndexOf_XFromLast(this: String, str: string, indexFromLastX: number): number;
    IndexOfAny(this: String, ...strings: string[]): number;
    LastIndexOfAny(this: String, ...strings: string[]): number;
    StartsWithAny(this: String, ...strings: string[]): boolean;
    EndsWithAny(this: String, ...strings: string[]): boolean;
    ContainsAny(this: String, ...strings: string[]): boolean;
    /** Separator-strings must be escaped. (they're passed into a regular-expression) */
    SplitByAny(this: String, ...separators: string[]): string[];
    SplitAt(this: String, index: number, includeCharAtIndex?: boolean): [string, string];
    Splice(this: String, index: number, removeCount: number, insert: string): string;
    Indent(this: String, indentCount: number): string;
    KeepAtMost(this: String, maxLength: number, moreMarkerStr?: string): string | String;
    /** Creates a function from "func", setting its name to the "this" string's value. */
    Func(func: any): any;
    /**
     * Reformats a multi-line string to represent the actual intended "block" of text.
     * @param desiredIndent How much to indent each line. (after removal of the first-non-empty-line indent-length from each of them)
     * @param removeLineStr A special string which, if found in a line, will cause that line to be removed from the result.
     */
    AsMultiline(this: String, desiredIndent?: number | undefined, removeLineStr?: string): string;
    Substring(this: String, start: number, end: number): string;
    ToInt(): number;
    ToFloat(): number;
};
export declare type StringCEProxy = String & typeof StringCE_funcs;
export declare const StringCE: (nextThis: String) => StringCEProxy;
export declare const StringCES: import("../Utils/General.js").WithFuncsStandalone_Type<{
    TrimStart(this: String, ...chars: string[]): string;
    TrimEnd(this: String, ...chars: string[]): string;
    Contains(this: String, str: string, startIndex?: number | undefined): boolean;
    hashCode(this: String): number;
    Matches(this: String, strOrRegex: string | RegExp): RegExpMatchArray[];
    /** indexX is 0-based */
    IndexOf_X(this: String, str: string, indexX: number): number;
    /** indexFromLastX is 0-based */
    IndexOf_XFromLast(this: String, str: string, indexFromLastX: number): number;
    IndexOfAny(this: String, ...strings: string[]): number;
    LastIndexOfAny(this: String, ...strings: string[]): number;
    StartsWithAny(this: String, ...strings: string[]): boolean;
    EndsWithAny(this: String, ...strings: string[]): boolean;
    ContainsAny(this: String, ...strings: string[]): boolean;
    /** Separator-strings must be escaped. (they're passed into a regular-expression) */
    SplitByAny(this: String, ...separators: string[]): string[];
    SplitAt(this: String, index: number, includeCharAtIndex?: boolean): [string, string];
    Splice(this: String, index: number, removeCount: number, insert: string): string;
    Indent(this: String, indentCount: number): string;
    KeepAtMost(this: String, maxLength: number, moreMarkerStr?: string): string | String;
    /** Creates a function from "func", setting its name to the "this" string's value. */
    Func(func: any): any;
    /**
     * Reformats a multi-line string to represent the actual intended "block" of text.
     * @param desiredIndent How much to indent each line. (after removal of the first-non-empty-line indent-length from each of them)
     * @param removeLineStr A special string which, if found in a line, will cause that line to be removed from the result.
     */
    AsMultiline(this: String, desiredIndent?: number | undefined, removeLineStr?: string): string;
    Substring(this: String, start: number, end: number): string;
    ToInt(): number;
    ToFloat(): number;
}>;
