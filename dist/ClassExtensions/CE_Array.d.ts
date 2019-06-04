import ".";
declare global {
    interface Array<T> {
        Contains(item: T): boolean;
    }
}
declare global {
    interface Array<T> {
        ContainsAny(...items: T[]): boolean;
    }
}
declare global {
    interface Array<T> {
        AddRange(items: T[]): this;
    }
}
declare global {
    interface Array<T> {
        Remove(item: T): boolean;
    }
}
declare global {
    interface Array<T> {
        RemoveAll(items: T[]): void;
    }
}
declare global {
    interface Array<T> {
        RemoveAt(index: number): T;
    }
}
declare global {
    interface Array<T> {
        Insert(index: number, obj: T): void;
    }
}
declare global {
    interface Array<T> {
        SetItems(items: T[]): this;
    }
}
declare global {
    interface Array<T> {
        Reversed(): T[];
    }
}
declare global {
    interface Array<T> {
        Any(matchFunc: (item: T, index?: number) => boolean): boolean;
    }
}
declare global {
    interface Array<T> {
        All(matchFunc: (item: T, index?: number) => boolean): boolean;
    }
}
declare global {
    interface Array<T> {
        Where(matchFunc: (item: T, index?: number) => boolean): T[];
    }
}
declare global {
    interface Array<T> {
        Select<T2>(matchFunc: (item: T, index?: number) => T2): T2[];
    }
}
declare global {
    interface Array<T> {
        SelectMany<T2>(matchFunc: (item: T, index?: number) => T2[]): T2[];
    }
}
declare global {
    interface Array<T> {
        VCount(matchFunc: (item: T) => boolean): number;
    }
}
declare global {
    interface Array<T> {
        Clear(): void;
    }
}
declare global {
    interface Array<T> {
        First(matchFunc?: (item: T, index: number) => boolean): T;
    }
}
declare global {
    interface Array<T> {
        FirstOrX(matchFunc?: (item: T, index: number) => boolean, x?: any): T;
    }
}
declare global {
    interface Array<T> {
        Last(matchFunc?: (item: T, index: number) => boolean): T;
    }
}
declare global {
    interface Array<T> {
        LastOrX(matchFunc?: (item: T, index: number) => boolean, x?: any): T;
    }
}
declare global {
    interface Array<T> {
        XFromLast(x: number): T;
    }
}
declare global {
    interface Array<T> {
        Move(item: any, newIndex: number, newIndexAsPreRemovalIndexVSFinalIndex?: boolean): number;
    }
}
declare global {
    interface Array<T> {
        ToMap(keyFunc: (item: T, index: number) => string, valFunc: (item: T, index: number) => any): any;
    }
}
declare global {
    interface Array<T> {
        Skip(count: number): T[];
    }
}
declare global {
    interface Array<T> {
        Take(count: number): T[];
    }
}
declare global {
    interface Array<T> {
        FindIndex(matchFunc?: (item: T, index: number) => boolean): number;
    }
}
declare global {
    interface Array<T> {
        OrderBy(valFunc?: (item: T, index: number) => any): T[];
    }
}
declare global {
    interface Array<T> {
        OrderByDescending(valFunc?: (item: T, index: number) => any): T[];
    }
}
declare global {
    interface Array<T> {
        Distinct(): T[];
    }
}
declare global {
    interface Array<T> {
        Except(...excludeItems: T[]): T[];
        Except(excludeItems: T[], excludeEachOnlyOnce?: boolean): T[];
    }
}
declare global {
    interface Array<T> {
        IfEmptyThen<T>(valIfSelfIsEmpty: T): T;
    }
}
declare global {
    interface Array<T> {
        Min(valFunc?: (item: T) => number, asNumbers?: boolean): T;
    }
}
declare global {
    interface Array<T> {
        Max(valFunc?: (item: T) => number, asNumbers?: boolean): T;
    }
}
declare global {
    interface Array<T> {
        Sum(): number;
    }
}
declare global {
    interface Array<T> {
        Average(): number;
    }
}
declare global {
    interface Array<T> {
        Median(): number;
    }
}
declare global {
    interface Array<T> {
        Random(): T;
    }
}
declare global {
    interface NodeList {
        ToArray(): any[];
    }
}
