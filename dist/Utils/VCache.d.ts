export declare class Storage<T2, T3> {
    lastDynamicProps: T2;
    lastResult: T3;
}
export declare let storages: {
    [storageKey: string]: Storage<any, any>;
};
export declare function GetStorageForCachedTransform<T2, T3>(transformType: string, staticProps: any[]): Storage<T2, T3>;
/**
 * Basically, by wrapping code in this function, you're saying:
 *		"Do not re-evaluate the code below unless the dynamic-props have changed since the last time we were here."
 *		(with the transformType and staticProps defining what "here" means)
 * @param transformType The name of the transformation; usually a function-name like "GetSomeThing", or "connectProp_processX". (used, along with static-props, to form a "storage key", where cache is checked for and stored)
 * @param staticProps An array.
 * @param dynamicProps Can be either an object or array.
 * @param transformFunc The data-transformer. Whenever a dynamic-prop changes, this will be called, and the new result will be cached.
 */
export declare function CachedTransform<T, T2, T3>(transformType: string, staticProps: any[], dynamicProps: T2, transformFunc: (staticProps: any[], dynamicProps: T2) => T3): T3;
export declare function CombineDynamicPropMaps(...maps: any[]): {};
