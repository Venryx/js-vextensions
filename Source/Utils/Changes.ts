export function GetPropsChanged(oldObj, newObj, returnNullIfSame = true): {key: string, oldVal: any, newVal: any}[] {
	oldObj = oldObj || {}, newObj = newObj || {};
	let keys = oldObj.VKeys().concat(newObj.VKeys()).Distinct();
	let result = [];
	for (let key of keys) {
		if (oldObj[key] !== newObj[key]) {
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