import {ArrayCE, ArrayCEClass} from "./CE_Array";
import {NumberCE, NumberCEClass} from "./CE_Number";
import {ObjectCE, ObjectCEClass} from "./CE_Object";
import {StringCE, StringCEClass} from "./CE_String";
import {ElementCE, ElementCEClass} from "..";
import {IsObject, IsString, IsNumber, IsFunction, IsArray} from "../Utils/Types";
import {DateCE, FunctionCE, FunctionCEClass, DateCEClass} from "./CE_Others";
import {WithFuncThisArgsAsAny_Type} from "../Utils/General";

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
//export function CE(obj: number): ReturnType<typeof NumberCE>;
export function CE(obj: number): WithFuncThisArgsAsAny_Type<NumberCEClass>;
export function CE(obj: string): WithFuncThisArgsAsAny_Type<StringCEClass>;
export function CE(obj: Date): WithFuncThisArgsAsAny_Type<DateCEClass>;
export function CE(obj: Function): WithFuncThisArgsAsAny_Type<FunctionCEClass>;
export function CE<T>(obj: Array<T>): ArrayCEClass<T>;
// commonly derived
export function CE(obj: Element): WithFuncThisArgsAsAny_Type<ElementCEClass>;
// base object
export function CE<T extends Object>(obj: T): ObjectCEClass<T>;
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