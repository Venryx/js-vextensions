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
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = require("./General");
function GetPropsChanged(oldObj, newObj, returnNullIfSame, useJSONCompare) {
    var e_1, _a;
    if (returnNullIfSame === void 0) { returnNullIfSame = true; }
    if (useJSONCompare === void 0) { useJSONCompare = false; }
    oldObj = oldObj || {}, newObj = newObj || {};
    var keys = oldObj.VKeys().concat(newObj.VKeys()).Distinct();
    var result = [];
    try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            var newVal_forComparison = useJSONCompare ? General_1.ToJSON(newObj[key]) : newObj[key];
            var oldVal_forComparison = useJSONCompare ? General_1.ToJSON(oldObj[key]) : oldObj[key];
            if (newVal_forComparison !== oldVal_forComparison) {
                result.push({ key: key, oldVal: oldObj[key], newVal: newObj[key] });
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (result.length == 0 && returnNullIfSame)
        return null;
    return result;
}
exports.GetPropsChanged = GetPropsChanged;
/*export function GetUpdates(oldData, newData, useNullInsteadOfUndefined = true) {
    const result = {};
    for (const key of oldData.VKeys(true).concat(newData.VKeys(true))) {
        if (newData[key] !== oldData[key]) {
            result[key] = newData[key];
            if (newData[key] === undefined && useNullInsteadOfUndefined) {
                result[key] = null;
            }
        }
    }
    return RemoveHelpers(result);
}*/ 
//# sourceMappingURL=Changes.js.map