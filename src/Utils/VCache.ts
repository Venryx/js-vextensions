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

export class Storage<T2, T3> {
	lastDynamicProps: T2;
	lastResult: T3;
	lastDebugInfo: any;
}
export let storages = {} as {[storageKey: string]: Storage<any, any>};

export function GetStorageForCachedTransform<T2, T3>(transformType: string, staticProps: any[]) {
	//let storageKey = transformType + "|" + JSON.stringify(staticProps);
	let storageKey = transformType + "|" + staticProps.join("|");
	let storage = storages[storageKey] as Storage<T2, T3> || (storages[storageKey] = new Storage<T2, T3>());
	return storage;
}

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
export function CachedTransform<T, T2, T3>(
	transformType: string, staticProps: any[], dynamicProps: T2,
	transformFunc: (debugInfo: any, staticProps: any[], dynamicProps: T2)=>T3
): T3 {
	let storage = GetStorageForCachedTransform<T2, T3>(transformType, staticProps);
	if (!shallowEqual(dynamicProps, storage.lastDynamicProps)) {
		/*MaybeLog(a=>a.cacheUpdates,
			()=>`Recalculating cache. @Type:${transformType} @StaticProps:${ToJSON(staticProps)} @DynamicProps:${ToJSON(dynamicProps)} @TransformFunc:${transformFunc}`);*/

		storage.lastDynamicProps = dynamicProps;
		storage.lastDebugInfo = {};
		storage.lastResult = transformFunc(storage.lastDebugInfo, staticProps, dynamicProps);
	}
	return storage.lastResult;
}

export function CombineDynamicPropMaps(...maps) {
	var result = {};
	for (var [mapIndex, map] of maps.entries()) {
		for (var key in map) {
			result[mapIndex + "_" + key] = map[key];
		}
	}
	return result;
}