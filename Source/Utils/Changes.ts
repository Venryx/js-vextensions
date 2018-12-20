export function GetPropsChanged(obj1, obj2, returnNullIfSame = true) {
	obj1 = obj1 || {}, obj2 = obj2 || {};
	let keys = obj1.VKeys().concat(obj2.VKeys()).Distinct();
	let result = [];
	for (let key of keys) {
		if (obj1[key] !== obj2[key]) {
			result.push(key);
		}
	}
	if (result.length == 0 && returnNullIfSame) return null;
	return result;
}
export function GetPropsChanged_WithValues(obj1, obj2, returnNullIfSame = true) {
	obj1 = obj1 || {}, obj2 = obj2 || {};
	let keys = obj1.VKeys().concat(obj2.VKeys()).Distinct();
	let result = {};
	for (let key of keys) {
		if (obj1[key] !== obj2[key]) {
			result[key] = {1: obj1[key], 2: obj2[key]};
		}
	}
	if (result.VKeys().length == 0 && returnNullIfSame) return null;
	return result;
}