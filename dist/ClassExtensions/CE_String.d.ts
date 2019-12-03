export declare class StringCEClass {
    TrimStart(this: String, ...chars: string[]): string;
    TrimEnd(this: String, ...chars: string[]): string;
    Contains(this: String, str: string, startIndex?: number): boolean;
    hashCode(this: String): number;
    Matches(this: String, strOrRegex: string | RegExp): any;
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
    KeepAtMost(this: String, maxLength: number, moreMarkerStr?: string): String;
    /** Creates a function from "func", setting its name to the "this" string's value. */
    Func(func: any): any;
    /**
     * Reformats a multi-line string to represent the actual intended "block" of text.
     * @param desiredIndent How much to indent each line. (after removal of the first-non-empty-line indent-length from each of them)
     * @param removeLineStr A special string which, if found in a line, will cause that line to be removed from the result.
     */
    AsMultiline(this: String, desiredIndent?: number, removeLineStr?: string): string;
    Substring(this: String, start: number, end: number): string;
    ToInt(): number;
    ToFloat(): number;
}
export declare const StringCE: {
    TrimStart: (thisArg: Object, ...args: string[]) => string;
    TrimEnd: (thisArg: Object, ...args: string[]) => string;
    Contains: (thisArg: Object, str: string, startIndex?: number) => boolean;
    hashCode: (thisArg: Object) => number;
    Matches: (thisArg: Object, strOrRegex: string | RegExp) => any;
    IndexOf_X: (thisArg: Object, str: string, indexX: number) => number;
    IndexOf_XFromLast: (thisArg: Object, str: string, indexFromLastX: number) => number;
    IndexOfAny: (thisArg: Object, ...args: string[]) => number;
    LastIndexOfAny: (thisArg: Object, ...args: string[]) => number;
    StartsWithAny: (thisArg: Object, ...args: string[]) => boolean;
    EndsWithAny: (thisArg: Object, ...args: string[]) => boolean;
    ContainsAny: (thisArg: Object, ...args: string[]) => boolean;
    SplitByAny: (thisArg: Object, ...args: string[]) => string[];
    SplitAt: (thisArg: Object, index: number, includeCharAtIndex?: boolean) => [string, string];
    Splice: (thisArg: Object, index: number, removeCount: number, insert: string) => string;
    Indent: (thisArg: Object, indentCount: number) => string;
    KeepAtMost: (thisArg: Object, maxLength: number, moreMarkerStr?: string) => String;
    Func: (thisArg: Object, func: any) => any;
    AsMultiline: (thisArg: Object, desiredIndent?: number, removeLineStr?: string) => string;
    Substring: (thisArg: Object, start: number, end: number) => string;
    ToInt: (thisArg: Object) => number;
    ToFloat: (thisArg: Object) => number;
};
