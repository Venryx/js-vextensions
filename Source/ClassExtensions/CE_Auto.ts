import {ArrayCE} from "./CE_Array";
import {NumberCE} from "./CE_Number";
import {ObjectCE} from "./CE_Object";
import {StringCE} from "./CE_String";
import {ElementCE} from "..";
import {IsObject, IsString, IsNumber, IsFunction} from "../Utils/Types";
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


export function CE(obj: number): ReturnType<typeof NumberCE>;
export function CE(obj: string): ReturnType<typeof StringCE>;
export function CE(obj: Element): ReturnType<typeof ElementCE>;
export function CE(obj: Date): ReturnType<typeof DateCE>;
export function CE(obj: Function): ReturnType<typeof FunctionCE>;
export function CE(obj: Array<any>): ReturnType<typeof ArrayCE>;
export function CE(obj: Object): ReturnType<typeof ObjectCE>;
export function CE(obj) {
	if (IsNumber(obj)) return NumberCE(obj);
	if (IsString(obj)) return StringCE(obj);
	if (obj instanceof Date) return DateCE(obj);
	if (obj instanceof Element) return ElementCE(obj);
	if (IsFunction(obj)) return FunctionCE(obj);
	if (Array.isArray(obj)) return ArrayCE(obj);
	if (IsObject(obj)) return ObjectCE(obj);
	throw new Error(`Could not find class-extension helper for type "${obj.constructor ? obj.constructor.name : "n/a"}".`)
}