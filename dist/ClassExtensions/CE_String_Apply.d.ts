declare global {
    interface String {
        TrimStart(...chars: string[]): string;
        TrimEnd(...chars: string[]): string;
        Contains(str: string, startIndex?: number): boolean;
        Matches(str: string): {
            index: number;
        }[];
        Matches(regex: RegExp): RegExpMatchArray[];
        IndexOf_X(str: string, indexX: number): number;
        IndexOf_XFromLast(str: string, indexFromLastX: number): number;
        IndexOfAny(...strings: string[]): number;
        LastIndexOfAny(...strings: string[]): number;
        StartsWithAny(...strings: string[]): boolean;
        EndsWithAny(...strings: string[]): boolean;
        ContainsAny(...strings: string[]): boolean;
        SplitByAny(...separators: string[]): string[];
        SplitAt(index: number, includeCharAtIndex?: any): [string, string];
        KeepAtMost(maxLength: number, moreMarkerStr?: string): string;
        /** Creates a function from "func", setting its name to the "this" string's value. */
        Func(func: Function): Function;
        /**
         * Reformats a multi-line string to represent the actual intended "block" of text.
         * @param desiredIndent How much to indent each line. (after removal of the first-non-empty-line indent-length from each of them)
         * @param removeLineStr A special string which, if found in a line, will cause that line to be removed from the result.
         */
        AsMultiline(desiredIndent: number, removeLineStr?: string): string;
        ToInt(): number;
        ToFloat(): number;
    }
}
export {};
