import {Assert} from "./Assert.js";

// use singletons for empty-obj and empty-array (that way shallow-compare systems in react, redux, etc. work with them)
export const emptyObj = {};
//export const eo = emptyObj as any; // used for (maybeNullVar || eo).prop;
export const emptyArray = [] as any[];
export const emptyArray_forLoading = [] as any[]; // like emptyArray, except signifies that the cause of the emptiness is that data is still loading

export function IsSpecialEmptyObjOrArray(val: any) {
	return IsSpecialEmptyObj(val) || IsSpecialEmptyArray(val);
}
export function IsSpecialEmptyObj<T>(obj: Array<T>) {
	return obj == emptyObj;
}
export function IsSpecialEmptyArray<T>(array: Array<T>) {
	return array == emptyArray || array == emptyArray_forLoading;
}
/** To be used with mobx-[firelink/graphlink] (in "if null" block): undefined means still-loading, so return emptyArray_forLoading; null means data doesn't exist, so return emptyArray. */
export function EmptyArrayFor(base: any) {
	if (base === undefined) return emptyArray_forLoading;
	if (base === null) return emptyArray;
	Assert("Cannot get empty-array for base that is not null or undefined.");
}