import {Assert} from "./Assert.js";
import {ShallowEquals} from "./General.js";
import {ArrayCE} from "../ClassExtensions/CE_Array.js";

export class Storage<T2, T3> {
	lastDynamicProps: T2;
	lastResult: T3;
	lastDebugInfo: any;
	resultUpdateCount = 0;
}
export const storages = {} as {[storageKey: string]: Storage<any, any>};

export function GetStorageForCachedTransform<T2, T3>(transformType: string, staticProps: any[]) {
	//let storageKey = transformType + "|" + JSON.stringify(staticProps);
	const storageKey = `${transformType}|${staticProps.join("|")}`;
	const storage = storages[storageKey] as Storage<T2, T3> || (storages[storageKey] = new Storage<T2, T3>());
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
	transformFunc: (debugInfo: any, staticProps: any[], dynamicProps: T2)=>T3,
): T3 {
	//Assert(dynamicProps != null);
	const storage = GetStorageForCachedTransform<T2, T3>(transformType, staticProps);
	if (!ShallowEquals(dynamicProps, storage.lastDynamicProps) || storage.resultUpdateCount == 0) {
		/*MaybeLog(a=>a.cacheUpdates,
			()=>`Recalculating cache. @Type:${transformType} @StaticProps:${ToJSON(staticProps)} @DynamicProps:${ToJSON(dynamicProps)} @TransformFunc:${transformFunc}`);*/

		storage.lastDynamicProps = dynamicProps;
		storage.lastDebugInfo = {};
		storage.lastResult = transformFunc(storage.lastDebugInfo, staticProps, dynamicProps);
		storage.resultUpdateCount++;
	}
	return storage.lastResult;
}

export function CombineDynamicPropMaps(...maps) {
	var result = {};
	ArrayCE(maps).ForEach((map, mapIndex)=>{
		if (map == null) return "continue";
		Object.keys(map).forEach(key=>{
			result[`${mapIndex}_${key}`] = map[key];
		});
	});
	return result;
}