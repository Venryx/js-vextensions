import {ToJSON} from "./General.js";
import {ObjectCE} from "../ClassExtensions/CE_Object.js";
import {ArrayCE} from "../ClassExtensions/CE_Array.js";

export type PropChange = {key: string, oldVal: any, newVal: any};
// START: type-helper variants
export function GetPropChanges(oldObj, newObj): PropChange[];
export function GetPropChanges(oldObj, newObj, returnNullIfSame: false, useJSONCompare?: boolean): PropChange[];
// END
export function GetPropChanges(oldObj, newObj, returnNullIfSame?: boolean, useJSONCompare?: boolean): PropChange[]|null;
export function GetPropChanges(oldObj, newObj, returnNullIfSame = false, useJSONCompare = false): PropChange[]|null {
	oldObj = oldObj || {}, newObj = newObj || {};
	const keys = ArrayCE(Object.keys(oldObj).concat(Object.keys(newObj))).Distinct();
	const result: PropChange[] = [];
	for (const key of keys) {
		const newVal_forComparison = useJSONCompare ? ToJSON(newObj[key]) : newObj[key];
		const oldVal_forComparison = useJSONCompare ? ToJSON(oldObj[key]) : oldObj[key];
		if (newVal_forComparison !== oldVal_forComparison) {
			result.push({key, oldVal: oldObj[key], newVal: newObj[key]});
		}
	}
	if (result.length == 0 && returnNullIfSame) return null;
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