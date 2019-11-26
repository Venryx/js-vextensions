import {TransferPrototypeProps} from "../Utils/General";
import {ObjectCE, VSet_Options, ObjectCEClass} from "./CE_Object";

TransferPrototypeProps(Object.prototype, ObjectCE, {}, {configurable: true, enumerable: false});

declare global {
	interface Object extends ObjectCEClass {
		// we have to explicitly define these, since they have the tricky "this: T" behavior
		/*VSet<T>(this: T, props: any, options?: VSet_Options): T;
		VSet<T>(this: T, propName: string, propValue, options?: VSet_Options): T;
		Extended<T, T2>(this: T, x: T2): T & T2;
		SafeGet<T, Result>(this: T, pathGetterFunc: (self: T)=>Result, resultIfNull?: any): Result;
		VAct<T>(this: T, func: (self: T)=>any): this;
		Strip<T>(this: T): this;*/
	}
	/*interface Object {
		// base
		//_AddItem(name: string, value, forceAdd?: boolean): void;
		_AddItem: typeof ObjectCEClass.prototype._AddItem;
		_AddFunction: typeof ObjectCEClass.prototype._AddFunction;
		_AddGetterSetter: typeof ObjectCEClass.prototype._AddGetterSetter;
		_AddFunction_Inline: typeof ObjectCEClass.prototype._AddFunction_Inline;
		_AddGetter_Inline: typeof ObjectCEClass.prototype._AddGetter_Inline;
		_AddSetter_Inline: typeof ObjectCEClass.prototype._AddSetter_Inline;

		// normal
		Extend: typeof ObjectCEClass.prototype.Extend;
		VSet: typeof ObjectCEClass.prototype.VSet;
		Extended: typeof ObjectCEClass.prototype.Extended;
		SafeGet: typeof ObjectCEClass.prototype.SafeGet;
		VAct: typeof ObjectCEClass.prototype.VAct;
		As: typeof ObjectCEClass.prototype.As;
		Strip: typeof ObjectCEClass.prototype.Strip;
		Including: typeof ObjectCEClass.prototype.Including;
		Excluding: typeof ObjectCEClass.prototype.Excluding;

		Pairs: typeof ObjectCEClass.prototype.Pairs;
		VKeys: typeof ObjectCEClass.prototype.VKeys;
		VValues: typeof ObjectCEClass.prototype.VValues;

		FA_Select: typeof ObjectCEClass.prototype.FA_Select;
		FA_RemoveAt: typeof ObjectCEClass.prototype.FA_RemoveAt;
		FA_Add: typeof ObjectCEClass.prototype.FA_Add;
	}*/
}