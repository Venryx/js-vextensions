import ".";
declare global {
    interface String {
        TrimStart(...chars: string[]): string;
    }
}
declare global {
    interface String {
        TrimEnd(...chars: string[]): string;
    }
}
declare global {
    interface String {
        Contains(str: string, startIndex?: number): boolean;
    }
}
declare global {
    interface String {
        Matches(str: string): {
            index: number;
        }[];
        Matches(regex: RegExp): RegExpMatchArray[];
    }
}
declare global {
    interface String {
        IndexOf_X: (str: string, indexX: number) => number;
    }
}
declare global {
    interface String {
        IndexOf_XFromLast: (str: string, indexFromLastX: number) => number;
    }
}
declare global {
    interface String {
        IndexOfAny: (...strings: string[]) => number;
    }
}
declare global {
    interface String {
        LastIndexOfAny: (...strings: string[]) => number;
    }
}
declare global {
    interface String {
        StartsWithAny: (...strings: string[]) => boolean;
    }
}
declare global {
    interface String {
        EndsWithAny: (...strings: string[]) => boolean;
    }
}
declare global {
    interface String {
        ContainsAny: (...strings: string[]) => boolean;
    }
}
/** Separator-strings must be escaped. (they're passed into a regular-expression) */
declare global {
    interface String {
        SplitByAny: (...separators: string[]) => string[];
    }
}
declare global {
    interface String {
        SplitAt: (index: number, includeCharAtIndex?: any) => [string, string];
    }
}
declare global {
    interface String {
        KeepAtMost: (maxLength: number, moreMarkerStr?: string) => string;
    }
}
declare global {
    interface String {
        /** Creates a function from "func", setting its name to the "this" string's value. */
        Func(func: Function): Function;
    }
}
declare global {
    interface String {
        /**
         * Reformats a multi-line string to represent the actual intended "block" of text.
         * @param desiredIndent How much to indent each line. (after removal of the first-non-empty-line indent-length from each of them)
         * @param removeLineStr A special string which, if found in a line, will cause that line to be removed from the result.
         */
        AsMultiline(desiredIndent: number, removeLineStr?: string): string;
    }
}
declare global {
    interface String {
        ToInt(): number;
    }
}
declare global {
    interface String {
        ToFloat(): number;
    }
}
