export interface VSet_Options {
    prop?: PropertyDescriptor;
    deleteUndefined?: boolean;
    deleteNull?: boolean;
    deleteEmpty?: boolean;
}
export declare type MapLike<V> = {
    [key: number]: V;
} | {
    [key: string]: V;
};
export declare type MapOrMapLike<V> = Map<any, V> | MapLike<V>;
export declare type TargetTFor<T> = T extends ObjectCEProxyInterface<infer TargetT> ? TargetT : T;
export declare type XOrWrapped<T> = T | ObjectCEProxyInterface<T>;
export declare const specialKeys: string[];
export declare const ObjectCE_funcs: any;
export interface ObjectCEProxyInterface<T> {
    _magicTypeMarker: T;
}
export declare type ObjectCEProxy<T> = typeof ObjectCE_funcs & ObjectCEProxyInterface<T>;
export declare const ObjectCE: <T>(nextThis: T) => any;
export declare const ObjectCES: any;
