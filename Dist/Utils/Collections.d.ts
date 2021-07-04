export declare const emptyObj: {};
export declare const emptyArray: any[];
export declare const emptyArray_forLoading: any[];
/** Alias for emptyObj. */
export declare const eo: {};
/** Alias for emptyObj. */
export declare const EO: <T>() => T;
/** Alias for emptyArray. */
export declare const ea: any[];
/** Alias for emptyArray. */
export declare const EA: <T>() => T[];
/** Alias for emptyArray_forLoading. */
export declare const eal: any[];
/** Alias for emptyArray_forLoading. */
export declare const EAL: <T>() => T[];
export declare function IsSpecialEmptyObjOrArray(val: any): boolean;
export declare function IsSpecialEmptyObj<T>(obj: Array<T>): boolean;
export declare function IsSpecialEmptyArray<T>(array: Array<T>): boolean;
/** To be used with mobx-[firelink/graphlink] (in "if null" block): undefined means still-loading, so return emptyArray_forLoading; null means data doesn't exist, so return emptyArray. */
export declare function EmptyArrayFor(base: any): any[] | undefined;
