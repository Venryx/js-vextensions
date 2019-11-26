export declare class StringCE extends String {
    TrimStart(this: string, ...chars: string[]): string;
    TrimEnd(this: string, ...chars: string[]): string;
    Contains(str: string, startIndex?: number): boolean;
    hashCode(): number;
    Matches(this: string, strOrRegex: string | RegExp): any;
    /** indexX is 0-based */
    IndexOf_X(str: string, indexX: number): number;
    /** indexFromLastX is 0-based */
    IndexOf_XFromLast(str: string, indexFromLastX: number): number;
    IndexOfAny(this: string, ...strings: string[]): number;
    LastIndexOfAny(this: string, ...strings: string[]): number;
    StartsWithAny(this: string, ...strings: string[]): boolean;
    EndsWithAny(this: string, ...strings: string[]): boolean;
    ContainsAny(this: string, ...strings: string[]): boolean;
    /** Separator-strings must be escaped. (they're passed into a regular-expression) */
    SplitByAny(...separators: any[]): string[];
    SplitAt(this: string, index: number, includeCharAtIndex?: boolean): [string, string];
    Splice(index: any, removeCount: any, insert: any): string;
    Indent(indentCount: any): string;
    KeepAtMost(this: string, maxLength: number, moreMarkerStr?: string): string;
    Func(func: any): any;
    AsMultiline(this: string, desiredIndent?: number, removeLineStr?: string): string;
    Substring(start: any, end: any): string;
    ToInt(): number;
    ToFloat(): number;
}
