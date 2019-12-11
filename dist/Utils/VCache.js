"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = require("./General");
var CE_Array_1 = require("../ClassExtensions/CE_Array");
var Storage = /** @class */ (function () {
    function Storage() {
        this.resultUpdateCount = 0;
    }
    return Storage;
}());
exports.Storage = Storage;
exports.storages = {};
function GetStorageForCachedTransform(transformType, staticProps) {
    //let storageKey = transformType + "|" + JSON.stringify(staticProps);
    var storageKey = transformType + "|" + staticProps.join("|");
    var storage = exports.storages[storageKey] || (exports.storages[storageKey] = new Storage());
    return storage;
}
exports.GetStorageForCachedTransform = GetStorageForCachedTransform;
/**
 * Basically, by wrapping code in this function, you're saying:
 *		"Do not re-evaluate the code below unless the dynamic-props have changed since the last time we were here."
 *		(with the transformType and staticProps defining what "here" means)
 * @param transformType The name of the transformation; usually a function-name like "GetSomeThing", or "connectProp_processX". (used, along with static-props, to form a "storage key", where cache is checked for and stored)
 * @param staticProps An array.
 * @param dynamicProps Can be either an object or array.
 * @param transformFunc The data-transformer. Whenever a dynamic-prop changes, this will be called, and the new result will be cached.
 */
//export function CachedTransform<T, T2, T3>(transformType: string, staticProps: T, dynamicProps: T2, transformFunc: (staticProps: T, dynamicProps: T2)=>T3): T3 {
function CachedTransform(transformType, staticProps, dynamicProps, transformFunc) {
    //Assert(dynamicProps != null);
    var storage = GetStorageForCachedTransform(transformType, staticProps);
    if (!General_1.ShallowEquals(dynamicProps, storage.lastDynamicProps) || storage.resultUpdateCount == 0) {
        /*MaybeLog(a=>a.cacheUpdates,
            ()=>`Recalculating cache. @Type:${transformType} @StaticProps:${ToJSON(staticProps)} @DynamicProps:${ToJSON(dynamicProps)} @TransformFunc:${transformFunc}`);*/
        storage.lastDynamicProps = dynamicProps;
        storage.lastDebugInfo = {};
        storage.lastResult = transformFunc(storage.lastDebugInfo, staticProps, dynamicProps);
        storage.resultUpdateCount++;
    }
    return storage.lastResult;
}
exports.CachedTransform = CachedTransform;
function CombineDynamicPropMaps() {
    var maps = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        maps[_i] = arguments[_i];
    }
    var result = {};
    CE_Array_1.ArrayCE(maps).ForEach(function (map, mapIndex) {
        if (map == null)
            return CE_Array_1.Continue();
        Object.keys(map).forEach(function (key) {
            result[mapIndex + "_" + key] = map[key];
        });
    });
    return result;
}
exports.CombineDynamicPropMaps = CombineDynamicPropMaps;
//# sourceMappingURL=VCache.js.map