interface String {
    TrimStart(...chars: string[]): string;
}
interface String {
    TrimEnd(...chars: string[]): string;
}
interface String {
    Contains: (str) => boolean;
}
interface String {
    Matches(str: string): {
        index: number;
    }[];
    Matches(regex: RegExp): RegExpMatchArray[];
}
interface String {
    IndexOf_X: (str: string, indexX: number) => number;
}
interface String {
    IndexOf_XFromLast: (str: string, indexFromLastX: number) => number;
}
interface String {
    IndexOfAny: (...strings: string[]) => number;
}
interface String {
    LastIndexOfAny: (...strings: string[]) => number;
}
interface String {
    StartsWithAny: (...strings: string[]) => boolean;
}
interface String {
    EndsWithAny: (...strings: string[]) => boolean;
}
interface String {
    ContainsAny: (...strings: string[]) => boolean;
}
/** Separator-strings must be escaped. (they're passed into a regular-expression) */
interface String {
    SplitByAny: (...separators: string[]) => string[];
}
interface String {
    SplitAt: (index: number, includeCharAtIndex?) => [string, string];
}
interface String {
    KeepAtMost: (maxLength: number, moreMarkerStr?: string) => string;
}
interface String {
    /** Creates a function from "func", setting its name to the "this" string's value. */
    Func(func: Function): Function;
}
interface String {
    ToInt(): number;
}
interface String {
    ToFloat(): number;
}
