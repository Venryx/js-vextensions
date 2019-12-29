import {ToJSON} from "./General";
import {ObjectCE} from "../ClassExtensions/CE_Object";
import {ArrayCE} from "../ClassExtensions/CE_Array";

export type PropChange = {key: string, oldVal: any, newVal: any};
export function GetPropChanges(oldObj, newObj, returnNullIfSame = false, useJSONCompare = false): PropChange[] {
	oldObj = oldObj || {}, newObj = newObj || {};
	let keys = ArrayCE(Object.keys(oldObj).concat(Object.keys(newObj))).Distinct();
	let result = [];
	for (let key of keys) {
		let newVal_forComparison = useJSONCompare ? ToJSON(newObj[key]) : newObj[key];
		let oldVal_forComparison = useJSONCompare ? ToJSON(oldObj[key]) : oldObj[key];
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