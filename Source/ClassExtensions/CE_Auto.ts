import {ArrayCE, ArrayCEProxy} from "./CE_Array.js";
import {NumberCE, NumberCEProxy} from "./CE_Number.js";
import {ObjectCE, ObjectCEProxy} from "./CE_Object.js";
import {StringCE, StringCEProxy} from "./CE_String.js";
import {IsObject, IsString, IsNumber, IsFunction, IsArray} from "../Utils/Types.js";
import {DateCE, FunctionCE, FunctionCEProxy, DateCEProxy} from "./CE_Others.js";
import {ElementCE, ElementCEProxy} from "./CE_Element.js";

/*interface CE_Auto_I {
	(obj: Array<any>): typeof ArrayCE;
	(obj: Element): typeof ElementCE;
	(obj: number): typeof NumberCE;
	(obj: Object): typeof ObjectCE;
	(obj: string): typeof StringCE;
}

export const CE_Auto = ((obj)=> {
}) as CE_Auto_I;*/

const classExtensionMap = {
	Number: NumberCE,
	String: StringCE,
	Date: DateCE,
	Element: ElementCE,
	Function: FunctionCE,
	Array: ArrayCE,
	Object: ObjectCE,
};
// uncommonly derived (simple to complex)
//export function CE(obj: number): ReturnType<typeof NumberCE>;
export function CE(obj: number): NumberCEProxy;
export function CE(obj: string): StringCEProxy;
export function CE(obj: Date): DateCEProxy;
export function CE(obj: Function): FunctionCEProxy;
export function CE<T>(obj: Array<T>): ArrayCEProxy<T>;
// commonly derived
export function CE(obj: Element): ElementCEProxy;
// base object
export function CE<T extends Object>(obj: T): ObjectCEProxy<T>;
export function CE(obj, checkForUncommonDerived = false) {
	// first, try to get class-extension func based on direct constructor name (most common case)
	const typeName = obj.constructor ? obj.constructor.name : null;
	if (typeName && classExtensionMap[typeName]) {
		return classExtensionMap[typeName](obj);
	}

	// else, check each option using "instanceof" and such (needed for derived classes)
	if (checkForUncommonDerived) {
		if (IsNumber(obj, true)) return NumberCE(obj);
		if (IsString(obj, true)) return StringCE(obj);
		if (obj instanceof Date) return DateCE(obj);
		if (IsFunction(obj)) return FunctionCE(obj);
		if (IsArray(obj)) return ArrayCE(obj);
	}
	if (typeof Element != "undefined" && obj instanceof Element) return ElementCE(obj);
	/*if (IsObject(obj)) return ObjectCE(obj);
	throw new Error(`Could not find class-extension helper for type "${obj.constructor ? obj.constructor.name : "n/a"}".`);*/
	return ObjectCE(obj);
}