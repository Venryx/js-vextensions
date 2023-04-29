export declare type ItemTFor<T> = T extends Array<infer ItemT> ? ItemT : T extends ArrayCEProxyInterface<infer ItemT> ? ItemT : T;
export declare type ArrayLike<T> = Array<T> | ArrayCEProxyInterface<T>;
export declare type LoopControlOp<Result> = "break" | "continue" | ["return", Result];
export declare type LoopFunc<T, Result> = (value: T, index: number, array: T[]) => LoopControlOp<Result> | undefined;
export declare const ArrayCE_funcs: {
    ForEach<T, Result = any>(this: T[], func: LoopFunc<T, Result>): Result | undefined;
    ForEachAsync<T_1, Result_1 = any>(this: T_1[], func: LoopFunc<T_1, Result_1>): Promise<Result_1 | undefined>;
    Contains<T_2>(this: T_2[], item: T_2): boolean;
    ContainsAny<T_3>(this: T_3[], ...items: T_3[]): boolean;
    Prepend<T_4>(this: T_4[], ...newItems: T_4[]): void;
    Add<T_5>(this: T_5[], item: T_5): number;
    CAdd<T_6>(this: T_6[], item: T_6): T_6[];
    TAdd<T_7>(this: T_7[], item: T_7): T_7;
    AddRange<T_8>(this: T_8[], array: T_8[]): T_8[];
    Remove<T_9>(this: T_9[], item: T_9): boolean;
    RemoveAll<T_10>(this: T_10[], items: T_10[]): void;
    RemoveAt<T_11>(this: T_11[], index: number): T_11;
    Insert<T_12>(this: T_12[], index: number, obj: T_12): void;
    SetItems<T_13>(this: T_13[], items: T_13[]): T_13[];
    Reversed<T_14>(this: T_14[]): T_14[];
    Any<T_15>(this: T_15[], matchFunc: (item: T_15, index: number) => boolean): boolean;
    All<T_16>(this: T_16[], matchFunc: (item: T_16, index: number) => boolean): boolean;
    Where<T_17>(this: T_17[], matchFunc: (item: T_17, index: number) => boolean): T_17[];
    Select<T_18, T2>(this: T_18[], selectFunc: (item: T_18, index: number) => T2): T2[];
    SelectMany<T_19, T2_1>(this: T_19[], selectFunc: (item: T_19, index: number) => T2_1[]): T2_1[];
    Count<T_20>(this: T_20[]): number;
    VCount<T_21>(this: T_21[], matchFunc: (item: T_21) => boolean): number;
    Clear<T_22>(this: T_22[]): void;
    First<T_23>(this: T_23[], matchFunc?: ((item: T_23) => boolean) | undefined): T_23;
    FirstOrX<T_24, X = T_24>(this: T_24[], matchFunc?: ((item: T_24) => boolean) | undefined, x?: X | undefined): T_24 | X | undefined;
    FirstWith<T_25>(this: T_25[], propName: string, propValue: any): T_25;
    Last<T_26>(this: T_26[], matchFunc?: ((item: T_26) => boolean) | undefined): T_26;
    LastOrX<T_27, X_1 = T_27>(this: T_27[], matchFunc?: ((item: T_27) => boolean) | undefined, x?: X_1 | undefined): T_27 | X_1 | undefined;
    XFromLast<T_28>(this: T_28[], x: number): T_28;
    /**
     * @param meaningOfNewIndex Options:
     * * final-index: Removes the target entry *prior* to inserting it at `newIndex`; this ensures that target entry ends up at specified index.
     * * relative-slot: Remove the target entry *after* inserting it at `newIndex`; this arguably makes destination-specifying easier,
     * since to calculate the `newIndex` you can simply scan for the index in old-list where the desired before-entry is at X-1 and desired after-entry is at X.
     * Default: final-index
     * */
    Move<T_29>(this: T_29[], item: T_29, newIndex: number, meaningOfNewIndex?: "final-index" | "relative-slot"): number;
    ToMap<T_30, Key, Value>(this: T_30[], keyFunc: (item: T_30, index: number) => Key, valFunc: (item: T_30, index: number) => Value): Map<Key, Value>;
    ToMapObj<T_31, Value_1>(this: T_31[], keyFunc: (item: T_31, index: number) => string, valFunc: (item: T_31, index: number) => Value_1): {
        [key: string]: Value_1;
    };
    Skip<T_32>(this: T_32[], count: number): T_32[];
    Take<T_33>(this: T_33[], count: number): T_33[];
    TakeLast<T_34>(this: T_34[], count: number): T_34[];
    FindIndex<T_35>(this: T_35[], matchFunc: (item: T_35) => boolean): number;
    OrderBy<T_36>(this: T_36[], valFunc?: (item: T_36, index: number) => any): T_36[];
    OrderByDescending<T_37>(this: T_37[], valFunc?: (item: T_37, index: number) => any): T_37[];
    Distinct<T_38>(this: T_38[]): T_38[];
    Include<T_39>(this: T_39[], ...includeItems: T_39[]): T_39[];
    Exclude: {
        <T_40>(this: T_40[], ...excludeItems: T_40[]): T_40[];
        <T_41>(this: T_41[], options: {
            excludeEachOnlyOnce: boolean;
        }, ...excludeItems: T_41[]): T_41[];
    };
    IfEmptyThen<T_42, T2_2>(this: T_42[], valIfSelfIsEmpty: T2_2): T2_2 | T_42[];
    Min<T_43>(this: T_43[], valFunc?: ((item: T_43) => number) | undefined, asNumbers?: boolean): T_43;
    Max<T_44>(this: T_44[], valFunc?: ((item: T_44) => number) | undefined, asNumbers?: boolean): T_44;
    Sum<T_45 extends number>(this: T_45[]): number;
    Average<T_46 extends number>(this: T_46[]): number;
    Median<T_47 extends number>(this: T_47[]): number;
    Random<T_48>(this: T_48[]): T_48;
    Join<T_49>(this: T_49[], separator?: string): string;
};
export interface ArrayCEProxyInterface<T> {
    _magicTypeMarker: T;
}
export declare type ArrayCEProxy<T> = Array<T> & typeof ArrayCE_funcs & ArrayCEProxyInterface<T>;
export declare const ArrayCE: <T>(nextThis: T[]) => ArrayCEProxy<T>;
export declare const ArrayCES: import("../Utils/General.js").WithFuncsStandalone_Type<{
    ForEach<T, Result = any>(this: T[], func: LoopFunc<T, Result>): Result | undefined;
    ForEachAsync<T_1, Result_1 = any>(this: T_1[], func: LoopFunc<T_1, Result_1>): Promise<Result_1 | undefined>;
    Contains<T_2>(this: T_2[], item: T_2): boolean;
    ContainsAny<T_3>(this: T_3[], ...items: T_3[]): boolean;
    Prepend<T_4>(this: T_4[], ...newItems: T_4[]): void;
    Add<T_5>(this: T_5[], item: T_5): number;
    CAdd<T_6>(this: T_6[], item: T_6): T_6[];
    TAdd<T_7>(this: T_7[], item: T_7): T_7;
    AddRange<T_8>(this: T_8[], array: T_8[]): T_8[];
    Remove<T_9>(this: T_9[], item: T_9): boolean;
    RemoveAll<T_10>(this: T_10[], items: T_10[]): void;
    RemoveAt<T_11>(this: T_11[], index: number): T_11;
    Insert<T_12>(this: T_12[], index: number, obj: T_12): void;
    SetItems<T_13>(this: T_13[], items: T_13[]): T_13[];
    Reversed<T_14>(this: T_14[]): T_14[];
    Any<T_15>(this: T_15[], matchFunc: (item: T_15, index: number) => boolean): boolean;
    All<T_16>(this: T_16[], matchFunc: (item: T_16, index: number) => boolean): boolean;
    Where<T_17>(this: T_17[], matchFunc: (item: T_17, index: number) => boolean): T_17[];
    Select<T_18, T2>(this: T_18[], selectFunc: (item: T_18, index: number) => T2): T2[];
    SelectMany<T_19, T2_1>(this: T_19[], selectFunc: (item: T_19, index: number) => T2_1[]): T2_1[];
    Count<T_20>(this: T_20[]): number;
    VCount<T_21>(this: T_21[], matchFunc: (item: T_21) => boolean): number;
    Clear<T_22>(this: T_22[]): void;
    First<T_23>(this: T_23[], matchFunc?: ((item: T_23) => boolean) | undefined): T_23;
    FirstOrX<T_24, X = T_24>(this: T_24[], matchFunc?: ((item: T_24) => boolean) | undefined, x?: X | undefined): T_24 | X | undefined;
    FirstWith<T_25>(this: T_25[], propName: string, propValue: any): T_25;
    Last<T_26>(this: T_26[], matchFunc?: ((item: T_26) => boolean) | undefined): T_26;
    LastOrX<T_27, X_1 = T_27>(this: T_27[], matchFunc?: ((item: T_27) => boolean) | undefined, x?: X_1 | undefined): T_27 | X_1 | undefined;
    XFromLast<T_28>(this: T_28[], x: number): T_28;
    /**
     * @param meaningOfNewIndex Options:
     * * final-index: Removes the target entry *prior* to inserting it at `newIndex`; this ensures that target entry ends up at specified index.
     * * relative-slot: Remove the target entry *after* inserting it at `newIndex`; this arguably makes destination-specifying easier,
     * since to calculate the `newIndex` you can simply scan for the index in old-list where the desired before-entry is at X-1 and desired after-entry is at X.
     * Default: final-index
     * */
    Move<T_29>(this: T_29[], item: T_29, newIndex: number, meaningOfNewIndex?: "final-index" | "relative-slot"): number;
    ToMap<T_30, Key, Value>(this: T_30[], keyFunc: (item: T_30, index: number) => Key, valFunc: (item: T_30, index: number) => Value): Map<Key, Value>;
    ToMapObj<T_31, Value_1>(this: T_31[], keyFunc: (item: T_31, index: number) => string, valFunc: (item: T_31, index: number) => Value_1): {
        [key: string]: Value_1;
    };
    Skip<T_32>(this: T_32[], count: number): T_32[];
    Take<T_33>(this: T_33[], count: number): T_33[];
    TakeLast<T_34>(this: T_34[], count: number): T_34[];
    FindIndex<T_35>(this: T_35[], matchFunc: (item: T_35) => boolean): number;
    OrderBy<T_36>(this: T_36[], valFunc?: (item: T_36, index: number) => any): T_36[];
    OrderByDescending<T_37>(this: T_37[], valFunc?: (item: T_37, index: number) => any): T_37[];
    Distinct<T_38>(this: T_38[]): T_38[];
    Include<T_39>(this: T_39[], ...includeItems: T_39[]): T_39[];
    Exclude: {
        <T_40>(this: T_40[], ...excludeItems: T_40[]): T_40[];
        <T_41>(this: T_41[], options: {
            excludeEachOnlyOnce: boolean;
        }, ...excludeItems: T_41[]): T_41[];
    };
    IfEmptyThen<T_42, T2_2>(this: T_42[], valIfSelfIsEmpty: T2_2): T2_2 | T_42[];
    Min<T_43>(this: T_43[], valFunc?: ((item: T_43) => number) | undefined, asNumbers?: boolean): T_43;
    Max<T_44>(this: T_44[], valFunc?: ((item: T_44) => number) | undefined, asNumbers?: boolean): T_44;
    Sum<T_45 extends number>(this: T_45[]): number;
    Average<T_46 extends number>(this: T_46[]): number;
    Median<T_47 extends number>(this: T_47[]): number;
    Random<T_48>(this: T_48[]): T_48;
    Join<T_49>(this: T_49[], separator?: string): string;
}>;
