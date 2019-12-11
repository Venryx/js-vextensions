export interface ForEachExtras {
    index: number;
    Break: () => void;
    Continue: () => void;
}
export declare type ItemTFor<T> = T extends Array<infer ItemT> ? ItemT : T extends ArrayCEProxyInterface<infer ItemT> ? ItemT : T;
export declare type ArrayLike<T> = Array<T> | ArrayCEProxyInterface<T>;
export declare const ArrayCE_funcs: {
    ForEach<T>(this: T[], func: (value: T, extras: ForEachExtras) => any): any;
    ForEachAsync<T_1>(this: T_1[], func: (value: T_1, extras: ForEachExtras) => any): Promise<any>;
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
    Any<T_15>(this: T_15[], matchFunc: (item: T_15, index?: number) => boolean): boolean;
    All<T_16>(this: T_16[], matchFunc: (item: T_16, index?: number) => boolean): boolean;
    Where<T_17>(this: T_17[], matchFunc: (item: T_17, index?: number) => boolean): T_17[];
    Select<T_18, T2>(this: T_18[], selectFunc: (item: T_18, index?: number) => T2): T2[];
    SelectMany<T_19, T2_1>(this: T_19[], selectFunc: (item: T_19, index?: number) => T2_1[]): T2_1[];
    Count<T_20>(this: T_20[]): number;
    VCount<T_21>(this: T_21[], matchFunc: (item: T_21) => boolean): number;
    Clear<T_22>(this: T_22[]): void;
    First<T_23>(this: T_23[], matchFunc?: (item: T_23) => boolean): T_23;
    FirstOrX<T_24>(this: T_24[], matchFunc?: (item: T_24) => boolean, x?: any): T_24;
    FirstWith<T_25>(this: T_25[], propName: string, propValue: any): T_25;
    Last<T_26>(this: T_26[], matchFunc?: (item: T_26) => boolean): T_26;
    LastOrX<T_27>(this: T_27[], matchFunc?: (item: T_27) => boolean, x?: any): T_27;
    XFromLast<T_28>(this: T_28[], x: number): T_28;
    Move<T_29>(this: T_29[], item: T_29, newIndex: number, newIndexAsPreRemovalIndexVSFinalIndex?: boolean): number;
    ToMap<T_30, Value>(this: T_30[], keyFunc: (item: T_30, index: number) => string, valFunc: (item: T_30, index: number) => Value): {
        [key: string]: Value;
    };
    Skip<T_31>(this: T_31[], count: number): T_31[];
    Take<T_32>(this: T_32[], count: number): T_32[];
    TakeLast<T_33>(this: T_33[], count: number): T_33[];
    FindIndex<T_34>(this: T_34[], matchFunc: (item: T_34) => boolean): number;
    OrderBy<T_35>(this: T_35[], valFunc?: (item: any, index: number) => any): T_35[];
    OrderByDescending<T_36>(this: T_36[], valFunc?: (item: any, index: number) => any): T_36[];
    Distinct<T_37>(this: T_37[]): T_37[];
    Except: {
        <T_38>(this: T_38[], ...args: any[]): T_38[];
        <T_39>(this: T_39[], options: {
            excludeEachOnlyOnce: boolean;
        }, ...args: any[]): T_39[];
    };
    IfEmptyThen<T_40, T2_2>(this: T_40[], valIfSelfIsEmpty: T2_2): T2_2 | T_40[];
    Min<T_41>(this: T_41[], valFunc?: (item: T_41) => number, asNumbers?: boolean): T_41;
    Max<T_42>(this: T_42[], valFunc?: (item: T_42) => number, asNumbers?: boolean): T_42;
    Sum<T_43 extends number>(this: T_43[]): number;
    Average<T_44 extends number>(this: T_44[]): number;
    Median<T_45 extends number>(this: T_45[]): number;
    Random<T_46>(this: T_46[]): T_46;
    Join<T_47>(this: T_47[], separator?: string): string;
};
export interface ArrayCEProxyInterface<T> {
    _magicTypeMarker: T;
}
export declare type ArrayCEProxy<T> = Array<T> & typeof ArrayCE_funcs & ArrayCEProxyInterface<T>;
export declare const ArrayCE: <T>(nextThis: T[]) => ArrayCEProxy<T>;
export declare const ArrayCES: import("../Utils/General").WithFuncsStandalone_Type<{
    ForEach<T>(this: T[], func: (value: T, extras: ForEachExtras) => any): any;
    ForEachAsync<T_1>(this: T_1[], func: (value: T_1, extras: ForEachExtras) => any): Promise<any>;
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
    Any<T_15>(this: T_15[], matchFunc: (item: T_15, index?: number) => boolean): boolean;
    All<T_16>(this: T_16[], matchFunc: (item: T_16, index?: number) => boolean): boolean;
    Where<T_17>(this: T_17[], matchFunc: (item: T_17, index?: number) => boolean): T_17[];
    Select<T_18, T2>(this: T_18[], selectFunc: (item: T_18, index?: number) => T2): T2[];
    SelectMany<T_19, T2_1>(this: T_19[], selectFunc: (item: T_19, index?: number) => T2_1[]): T2_1[];
    Count<T_20>(this: T_20[]): number;
    VCount<T_21>(this: T_21[], matchFunc: (item: T_21) => boolean): number;
    Clear<T_22>(this: T_22[]): void;
    First<T_23>(this: T_23[], matchFunc?: (item: T_23) => boolean): T_23;
    FirstOrX<T_24>(this: T_24[], matchFunc?: (item: T_24) => boolean, x?: any): T_24;
    FirstWith<T_25>(this: T_25[], propName: string, propValue: any): T_25;
    Last<T_26>(this: T_26[], matchFunc?: (item: T_26) => boolean): T_26;
    LastOrX<T_27>(this: T_27[], matchFunc?: (item: T_27) => boolean, x?: any): T_27;
    XFromLast<T_28>(this: T_28[], x: number): T_28;
    Move<T_29>(this: T_29[], item: T_29, newIndex: number, newIndexAsPreRemovalIndexVSFinalIndex?: boolean): number;
    ToMap<T_30, Value>(this: T_30[], keyFunc: (item: T_30, index: number) => string, valFunc: (item: T_30, index: number) => Value): {
        [key: string]: Value;
    };
    Skip<T_31>(this: T_31[], count: number): T_31[];
    Take<T_32>(this: T_32[], count: number): T_32[];
    TakeLast<T_33>(this: T_33[], count: number): T_33[];
    FindIndex<T_34>(this: T_34[], matchFunc: (item: T_34) => boolean): number;
    OrderBy<T_35>(this: T_35[], valFunc?: (item: any, index: number) => any): T_35[];
    OrderByDescending<T_36>(this: T_36[], valFunc?: (item: any, index: number) => any): T_36[];
    Distinct<T_37>(this: T_37[]): T_37[];
    Except: {
        <T_38>(this: T_38[], ...args: any[]): T_38[];
        <T_39>(this: T_39[], options: {
            excludeEachOnlyOnce: boolean;
        }, ...args: any[]): T_39[];
    };
    IfEmptyThen<T_40, T2_2>(this: T_40[], valIfSelfIsEmpty: T2_2): T2_2 | T_40[];
    Min<T_41>(this: T_41[], valFunc?: (item: T_41) => number, asNumbers?: boolean): T_41;
    Max<T_42>(this: T_42[], valFunc?: (item: T_42) => number, asNumbers?: boolean): T_42;
    Sum<T_43 extends number>(this: T_43[]): number;
    Average<T_44 extends number>(this: T_44[]): number;
    Median<T_45 extends number>(this: T_45[]): number;
    Random<T_46>(this: T_46[]): T_46;
    Join<T_47>(this: T_47[], separator?: string): string;
}>;
