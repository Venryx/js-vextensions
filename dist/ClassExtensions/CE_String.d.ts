export declare class StringCEClass {
    TrimStart(this: string, ...chars: string[]): string;
    TrimEnd(this: string, ...chars: string[]): string;
    Contains(this: string, str: string, startIndex?: number): boolean;
    hashCode(this: string): number;
    Matches(this: string, strOrRegex: string | RegExp): any;
    /** indexX is 0-based */
    IndexOf_X(this: string, str: string, indexX: number): number;
    /** indexFromLastX is 0-based */
    IndexOf_XFromLast(this: string, str: string, indexFromLastX: number): number;
    IndexOfAny(this: string, ...strings: string[]): number;
    LastIndexOfAny(this: string, ...strings: string[]): number;
    StartsWithAny(this: string, ...strings: string[]): boolean;
    EndsWithAny(this: string, ...strings: string[]): boolean;
    ContainsAny(this: string, ...strings: string[]): boolean;
    /** Separator-strings must be escaped. (they're passed into a regular-expression) */
    SplitByAny(this: string, ...separators: string[]): string[];
    SplitAt(this: string, index: number, includeCharAtIndex?: boolean): [string, string];
    Splice(this: string, index: number, removeCount: number, insert: string): string;
    Indent(this: string, indentCount: number): string;
    KeepAtMost(this: string, maxLength: number, moreMarkerStr?: string): string;
    /** Creates a function from "func", setting its name to the "this" string's value. */
    Func(func: any): any;
    /**
     * Reformats a multi-line string to represent the actual intended "block" of text.
     * @param desiredIndent How much to indent each line. (after removal of the first-non-empty-line indent-length from each of them)
     * @param removeLineStr A special string which, if found in a line, will cause that line to be removed from the result.
     */
    AsMultiline(this: string, desiredIndent?: number, removeLineStr?: string): string;
    Substring(this: string, start: number, end: number): string;
    ToInt(): number;
    ToFloat(): number;
}
export declare const StringCE: StringCEClass;
