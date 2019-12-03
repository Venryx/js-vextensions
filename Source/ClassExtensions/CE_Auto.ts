import {ArrayCE} from "./CE_Array";
import {NumberCE} from "./CE_Number";
import {ObjectCE} from "./CE_Object";
import {StringCE} from "./CE_String";
import {ElementCE} from "..";
import {IsObject, IsString, IsNumber, IsFunction, IsArray} from "../Utils/Types";
import {DateCE, FunctionCE} from "./CE_Others";

/*interface CE_Auto_I {
	(obj: Array<any>): typeof ArrayCE;
	(obj: Element): typeof ElementCE;
	(obj: number): typeof NumberCE;
	(obj: Object): typeof ObjectCE;
	(obj: string): typeof StringCE;
}

export const CE_Auto = ((obj)=> {
}) as CE_Auto_I;*/

let classExtensionMap = {
	Number: NumberCE,
	String: StringCE,
	Date: DateCE,
	Element: ElementCE,
	Function: FunctionCE,
	Array: ArrayCE,
	Object: ObjectCE,
}
// uncommonly derived (simple to complex)
export function CE(obj: number): ReturnType<typeof NumberCE>;
export function CE(obj: string): ReturnType<typeof StringCE>;
export function CE(obj: Date): ReturnType<typeof DateCE>;
export function CE(obj: Function): ReturnType<typeof FunctionCE>;
export function CE(obj: Array<any>): ReturnType<typeof ArrayCE>;
// commonly derived
export function CE(obj: Element): ReturnType<typeof ElementCE>;
// base object
export function CE(obj: Object): ReturnType<typeof ObjectCE>;
export function CE(obj, checkForUncommonDerived = false) {
	// first, try to get class-extension func based on direct constructor name (most common case)
	let typeName = obj.constructor ? obj.constructor.name : null;
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
	if (obj instanceof Element) return ElementCE(obj);
	/*if (IsObject(obj)) return ObjectCE(obj);
	throw new Error(`Could not find class-extension helper for type "${obj.constructor ? obj.constructor.name : "n/a"}".`);*/
	return ObjectCE(obj);
}