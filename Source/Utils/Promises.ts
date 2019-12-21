import {ObjectCE} from "../ClassExtensions/CE_Object";

export function WaitTillDataPathIsSet(rootObj: Object, dataPath: string) {
	return new Promise(async (resolve, reject)=> {
		let dataPathParts = dataPath.split(".");
		let currentParent = rootObj;
		for (let part of dataPathParts) {
			while (currentParent[part] == null) {
				await WaitTillPropertyIsSet(currentParent, part);
			}
			currentParent = currentParent[part];
		}
		resolve();
	});
}
export function WaitTillPropertyIsSet(obj: Object, prop: string) {
	return new Promise((resolve, reject)=> {
		ObjectCE(obj)._AddGetterSetter(prop, ()=>{}, value=> {
			delete obj[prop]; // remove this hook
			obj[prop] = value; // set to provided value
			resolve();
		});
	});
}

export type WithPromisesUnwrapped<T> = {
	[P in keyof T]:
		T[P] extends Promise<infer T> ? T :
		T[P];
};

/**
Example:
(async()=> {
	let a = {hi: null as Promise<string>};
	let b = await AwaitTree(a);
	b.hi; // type is "string", both in typescript and runtime 
})();
 */
export async function AwaitTree<T>(obj: T): Promise<WithPromisesUnwrapped<T>> {
	const keyAndPromisePairs = ObjectCE(obj).Pairs().filter((pair) => pair.value instanceof Promise);
	const promiseResults = await Promise.all(keyAndPromisePairs.map((a) => a.value));

	const result = {};
	for (const pair of keyAndPromisePairs) {
		// result[pair.key] = await obj[pair.key];
		result[pair.key] = promiseResults[pair.index];
	}
	return result as any;
}