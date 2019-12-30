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
	const pairs = ObjectCE(obj).Pairs();
	const awaitedResults = await Promise.all(pairs.map((pair) => {
		let valueAsPromise = pair.value instanceof Promise ? pair.value : Promise.resolve(pair.value);
		return valueAsPromise;
	}));

	const result = {};
	for (const pair of pairs) {
		result[pair.key] = awaitedResults[pair.index];
	}
	return result as any;
}