"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var hasOwnProperty = Object.prototype.hasOwnProperty;
// Performs equality by iterating through keys on an object and returning false when any key has values which are not strictly equal between the arguments.
// Returns true when the values of all keys are strictly equal.
function shallowEqual(objA, objB) {
    if (Object.is(objA, objB))
        return true;
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null)
        return false;
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length)
        return false;
    // test for A's keys different from B
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
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
    if (!shallowEqual(dynamicProps, storage.lastDynamicProps) || storage.resultUpdateCount == 0) {
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
    var e_1, _a;
    var maps = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        maps[_i] = arguments[_i];
    }
    var result = {};
    try {
        for (var _b = __values(maps.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), mapIndex = _d[0], map = _d[1];
            for (var key in map) {
                if (!map.hasOwnProperty(key))
                    continue;
                result[mapIndex + "_" + key] = map[key];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
exports.CombineDynamicPropMaps = CombineDynamicPropMaps;
//# sourceMappingURL=VCache.js.map