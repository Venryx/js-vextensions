import { ArrayCE } from "../ClassExtensions/CE_Array.js";
export function GetPropChanges(oldObj, newObj, returnNullIfSame = false, useJSONCompare = false) {
    oldObj = oldObj || {}, newObj = newObj || {};
    const keys = ArrayCE(Object.keys(oldObj).concat(Object.keys(newObj))).Distinct();
    const result = [];
    for (const key of keys) {
        const newVal_forComparison = useJSONCompare ? JSON.stringify(newObj[key]) : newObj[key];
        const oldVal_forComparison = useJSONCompare ? JSON.stringify(oldObj[key]) : oldObj[key];
        if (newVal_forComparison !== oldVal_forComparison) {
            result.push({ key, oldVal: oldObj[key], newVal: newObj[key] });
        }
    }
    if (result.length == 0 && returnNullIfSame)
        return null;
    return result;
}
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