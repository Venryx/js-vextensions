import {TransferPrototypeProps} from "../Utils/General";
import {ObjectCE, VSet_Options} from "./CE_Object";

TransferPrototypeProps(Object.prototype, ObjectCE.prototype, {}, {configurable: true, enumerable: false});

declare global {
	interface Object {
		// base
		_AddItem(name: string, value, forceAdd?: boolean): void;
		_AddFunction(name: string, func: Function): void;
		_AddGetterSetter(name: string, getter: Function, setter: Function): void;
		_AddFunction_Inline: Function;
		_AddGetter_Inline: Function;
		_AddSetter_Inline: Function;

		// normal
		Extend(obj): this;
		// seems this should work, to be consistent with in-class usage, but whatever; below it's an alternative that works for interfaces
		//interface Object { etet(props: any): this; }
		VSet<T>(this: T, props: any, options?: VSet_Options): T;
		VSet<T>(this: T, propName: string, propValue, options?: VSet_Options): T;
		Extended<T, T2>(this: T, x: T2): T & T2;
		SafeGet(this, path: string, resultIfNull?: any): any;
		SafeGet<T, Result>(this: T, pathGetterFunc: (self: T)=>Result, resultIfNull?: any): Result;
		VAct<T>(this: T, func: (self: T)=>any): this;
		As<T>(type: new(..._)=>T): T;
		Strip<T>(this: T): this;
		Including(...propNames: string[]): Object;
		Excluding(...propNames: string[]): Object;
		IsOneOf(...values: any[]): boolean;

		Pairs<K, V>(this: {[key: number]: V} | {[key: string]: V}, excludeSpecialKeys?: boolean | 1): {index: number, key: string, keyNum?: number, value: V}[];
		Pairs<K, V>(this: Map<K, V>, excludeSpecialKeys?: boolean | 1): {index: number, key: K, keyNum?: number, value: V}[];
		Pairs<K = any, V = any>(excludeSpecialKeys?: boolean | 1): {index: number, key: K, keyNum?: number, value: V}[];

		VKeys<K>(this: {[key: number]: any} | {[key: string]: any}, excludeSpecialKeys?: boolean | 1): string[];
		VKeys<K>(this: Map<K, any>, excludeSpecialKeys?: boolean | 1): K[];
		VKeys<K = any>(excludeSpecialKeys?: boolean | 1): K[];

		VValues<V>(this: {[key: number]: V} | {[key: string]: V} | Map<any, V>, excludeSpecialKeys?: boolean | 1): V[];
		VValues<V = any>(excludeSpecialKeys?: boolean | 1): V[];

		FA_Select<T, T2>(this: {[key: number]: T} | {[key: string]: T}, selectFunc?: (item: T, index?: number)=>T2): T2[];
		FA_RemoveAt(index: number);
		FA_Add<T>(this: {[key: number]: T} | {[key: string]: T}, item: T);
	}
}