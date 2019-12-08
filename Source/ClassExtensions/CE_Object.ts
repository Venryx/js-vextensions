import {DeepGet, Clone, WithFuncsStandalone, CreateProxyForClassExtensions, ConvertPathGetterFuncToPropChain, DEL} from "../Utils/General";
import {ArrayCE, ArrayCE_funcs} from "./CE_Array";
import {IsNaN} from "../Utils/Types";
import {Assert} from "../Utils/Assert";
import {FunctionCE} from "./CE_Others";

export interface VSet_Options {
	prop?: PropertyDescriptor;
	deleteUndefined?: boolean;
	deleteNull?: boolean;
	deleteEmpty?: boolean;
}

/*export type MapLike<V> = {[key: number]: V} | {[key: string]: V} | Map<any, V>;
export type MapLike_StringyKey<V> = {[key: number]: V} | {[key: string]: V} | Map<string, V>;*/
export type MapLike<V> = {[key: number]: V} | {[key: string]: V};
export type MapOrMapLike<V> = Map<any, V> | MapLike<V>;

//export type TargetTFor<T> = T extends ObjectCEProxy<infer TargetT> ? TargetT : T;
export type TargetTFor<T> = T extends ObjectCEProxyInterface<infer TargetT> ? TargetT : T;
export type XOrWrapped<T> = T | ObjectCEProxyInterface<T>;

/*export type WithFuncThisArgsAsXOrWrapped_Type<Source> = {
	[P in keyof Source]:
		Source[P] extends (this: infer ThisArgType, ...args)=>any ? (this: XOrWrapped<ThisArgType>, ...args: Parameters<Source[P]>)=>ReturnType<Source[P]> :
		Source[P];
};
export function WithFuncThisArgsAsXOrWrapped<Source>(source: Source): WithFuncThisArgsAsXOrWrapped_Type<Source> {
	return source as any;
}*/

export const specialKeys = ["_", "_key", "_id"];
export const ObjectCE_funcs = {
	// base
	// ==========

	/** Helps you do stuff like this:
		Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
	_AddItem(name, value, forceAdd = false) {
		if (name == null || name.length == 0)
			throw new Error("No prop-name was specified for _AddItem() call.");
		if (name in this) delete this[name];
		if (name in this && !forceAdd) return; // workaround for some properties not being deleted

		Object.defineProperty(this, name, {
			configurable: true, // for some reason, we get an error otherwise in non-dev mode (same for below)
			enumerable: false,
			value: value
		});
		/*if (this[name] == null)
			throw new Error(`Failed to add property "${name}" to type "${this}".`);*/
	},

	_AddFunction(name, func) {
		//this._AddItem(func.name || func.toString().match(/^function\s*([^\s(]+)/)[1], func);
		ObjectCES._AddItem(this, name, func);
	},

	// the below helps you do stuff like this:
	//		Array.prototype._AddGetterSetter("AddX", null, function(value) { this.push(value); }); [].AddX = "newItem";
	_AddGetterSetter(name, getter, setter) {
		//var name = (getter || setter).name || (getter || setter).toString().match(/^function\s*([^\s(]+)/)[1];
		if (name in this) delete this[name];
		if (name in this) return; // workaround for some properties not being deleted
	
		let info = {configurable: true, enumerable: false} as PropertyDescriptor;
		if (getter) info.get = getter;
		if (setter) info.set = setter;
		Object.defineProperty(this, name, info);
	},

	// the below helps you do stuff like this:
	//		Array.prototype._AddFunction_Inline = function AddX(value) { this.push(value); }; [].AddX = "newItem";
	set _AddFunction_Inline(func) {
		ObjectCES._AddFunction(this, FunctionCE(func).GetName(), func);
	},
	set _AddGetter_Inline(func) {
		ObjectCES._AddGetterSetter(this, FunctionCE(func).GetName(), func, null);
	},
	set _AddSetter_Inline(func) {
		ObjectCES._AddGetterSetter(this, FunctionCE(func).GetName(), null, func);
	},

	// normal
	// ==========

	//Object.prototype._AddSetter_Inline = function ExtendWith_Inline(value) { this.ExtendWith(value); };
	//ExtendWith(value) { $.extend(this, value); };
	/*GetItem_SetToXIfNull(itemName, /*;optional:*#/ defaultValue) {
		if (!this[itemName])
			this[itemName] = defaultValue;
		return this[itemName];
	};*/

	// must also do it on window/global, for some reason
	/*g.Extend = function(x) {
		for (var name in x) {
			var value = x[name];
			//if (value !== undefined)
			this[name] = value;
		}
		return this;
	};*/

	Extend(x) {
		for (var key in x) {
			if (!x.hasOwnProperty(key)) continue;
			var value = x[key];
			//if (value !== undefined)
			this[key] = value;
		}
		return this;
	},

	// as replacement for C#'s "new MyClass() {prop = true}"
	/*VSet<T>(this: T, propName: string, propValue, options?: VSet_Options): TargetTFor<T>;
	//VSet<T extends RealThis>(this: T, props: any, options?: VSet_Options): T; // variant for ObjectCE(obj).X calls (those types only uses the last declaration, and they need "extend RealThis" since we any-ify the this-param)
	VSet<T>(this: T, props: any, options?: VSet_Options): TargetTFor<T>; // this one needs to be last (best override for the CE(...) wrapper, and it can only extract the last one)*/
	VSet: <{
		// as replacement for C#'s "new MyClass() {prop = true}"
		<T>(this: T, propName: string, propValue, options?: VSet_Options): TargetTFor<T>;
		//VSet<T extends RealThis>(this: T, props: any, options?: VSet_Options): T; // variant for ObjectCE(obj).X calls (those types only uses the last declaration, and they need "extend RealThis" since we any-ify the this-param)
		<T>(this: T, props: any, options?: VSet_Options): TargetTFor<T>; // this one needs to be last (best override for the CE(...) wrapper, and it can only extract the last one)
	}>(function(...args) {
		let props, options: VSet_Options, propName: string, propValue: string;
		if (typeof args[0] == "object") [props, options] = args;
		else [propName, propValue, options] = args;
		options = options || {};

		const SetProp = (name, value)=> {
			if (value === DEL || (value === undefined && options.deleteUndefined) || (value === null && options.deleteNull) || (value === "" && options.deleteEmpty)) {
				delete this[name];
				return;
			}
			if (options.prop) {
				Object.defineProperty(this, name, Object.assign({configurable: true}, options.prop, {value}));
			} else {
				this[name] = value;
			}
		};
		if (props) {
			for (let key in props) {
				if (!props.hasOwnProperty(key)) continue;
				SetProp(key, props[key]);
			}
		} else {
			SetProp(propName, propValue);
		}
		return this as any;
	}),
	Extended<T, T2>(this: T, x: T2): TargetTFor<T> & T2 {
	// maybe temp; explicit unwrapping, to fix odd "instantiation is excessively deep" ts-error (when calling .Extended from user project)
	/*Extended<T, T2>(this: T, x: T2): T & T2;
	Extended<T, T2>(this: ObjectCEProxy<T>, x: T2): T & T2;
	Extended(x: any) {*/
	//Extended<T, T2>(this: ObjectCEProxy<T> | T, x: T2): T & T2 {
		let result: any = this instanceof Array ? [] : {};
		for (let key in this as any) {
			if (!this.hasOwnProperty(key)) continue;
			result[key] = this[key];
		}
		if (x) {
			for (let key in x) {
				if (!x.hasOwnProperty(key)) continue;
				result[key] = x[key];
			}
		}
		return result;
	},
	/*interface Object { Extended2<T>(this, x: T): T; }
	Extended2(x) {
		return this.Extended(x);
	};*/
	//E(x) { return this.Extended(x); };

	SafeGet: <{
		(path: string, resultIfNull?: any): any;
		<T, Result>(this: T, pathGetterFunc: (self: TargetTFor<T>)=>Result, resultIfNull?: any): Result;
	}>(function(pathOrPathGetterFunc: string | Function, resultIfNull?: any) {
		let pathSegments = typeof pathOrPathGetterFunc == "string" ? pathOrPathGetterFunc : ConvertPathGetterFuncToPropChain(pathOrPathGetterFunc);
		return DeepGet(this, pathSegments, resultIfNull);
	}),
	VAct<T>(this: T, func: (self: TargetTFor<T>)=>any): TargetTFor<T> {
		func.call(this, this);
		return this as any;
	},

	As<T>(type: new(..._)=>T) {
		Object.setPrototypeOf(this, type.prototype);
		return this as any as T;
	},
	Strip() {
		Object.setPrototypeOf(this, Object.getPrototypeOf({}));
		return this;
	},

	Including(...keys: string[]) {
		var result = this instanceof Array ? [] : {};
		for (let key of keys) {
			//if (!this.hasOwnProperty(key)) continue;
			if (!(key in this)) continue; // we include the value, even if from prototype (user wouldn't list in keys array if didn't want it)
			result[key] = this[key];
		}
		return result;
	},
	Excluding(...keys: string[]) {
		//var result = Clone(this); // doesn't work with funcs
		var result = Object.assign(this instanceof Array ? [] : {}, this as any);
		for (let key of keys) {
			delete result[key];
		}
		return result;
	},

	IsOneOf(...values: any[]): boolean {
		if (ArrayCE(values).Contains(this)) {
			return true;
		}
		// if the value-list contains the primitive-version of self, consider it a match -- otherwise calling "test1".IsOneOf("test1", "test2") would fail
		let isObjectFormOfPrimitive = this instanceof Boolean || this instanceof Number || this instanceof String;
		if (isObjectFormOfPrimitive && ArrayCE(values).Contains(this.valueOf())) {
			return true;
		}
		return false;
	},

	// todo: probably remove Props(), and instead just use Pairs(), since Props() sounds odd when used on arrays
	/*declare global {
		interface Object {
			Props<T>(this: {[key: number]: T} | {[key: string]: T}, excludeSpecialProps?: boolean): {index: number, name: string, value: T}[];
			Props<T>(excludeSpecialProps?: boolean): {index: number, name: string, value: T}[];
		}
	}
	//interface Object { Props<ValueType>(excludeSpecialProps?: boolean): {index: number, name: string, value: ValueType}[]; }
	Props(excludeSpecialProps = false) {
		var result = [];
		var i = 0;
		for (var propName in this) {
			if (excludeSpecialProps && (propName == "_" || propName == "_key" || propName == "_id")) continue;
			//result.push({index: i++, key: propName, name: propName, value: this[propName]});
			result.push({index: i++, name: propName, value: this[propName]});
		}
		return result;
	},*/
	Pairs: <{
		<K, V>(this: XOrWrapped<Map<K, V>>, excludeSpecialKeys?: boolean | 1): {index: number, key: K, keyNum?: number, value: V}[];
		<K, V>(this: XOrWrapped<MapLike<V>>, excludeSpecialKeys?: boolean | 1): {index: number, key: string, keyNum?: number, value: V}[];
		<K = string, V = any>(excludeSpecialKeys?: boolean | 1): {index: number, key: K, keyNum?: number, value: V}[];
		//<V = any>(excludeSpecialKeys?: boolean | 1): {index: number, key: string, keyNum?: number, value: V}[]; // last variant needs explicit strings, for generics-less ObjectCE
		//(excludeSpecialKeys?: boolean | 1): {index: number, key: string, keyNum?: number, value: any}[]; // generics-less version (needed for some ts edge-cases)
	}>(function(excludeSpecialKeys: boolean | 1 = false) {
		var result = [];
		var i = 0;
		let keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
		for (let key of keys) {
			if (excludeSpecialKeys && (key == "_" || key == "_key" || key == "_id")) continue;
			let entry = {index: i++, key, keyNum: Number(key), value: this instanceof Map ? this.get(key) : this[key as any]};
			if (IsNaN(entry.keyNum)) delete entry.keyNum;
			result.push(entry);
		}
		return result;
	}),

	VKeys: <{
		<K>(this: XOrWrapped<Map<K, any>>, excludeSpecialKeys?: boolean | 1): K[];
		(this: XOrWrapped<MapLike<any>>, excludeSpecialKeys?: boolean | 1): string[];
		<K = string>(excludeSpecialKeys?: boolean | 1): K[];
		//(excludeSpecialKeys?: boolean | 1): string[]; // last variant needs explicit strings, for generics-less ObjectCE
		//(excludeSpecialKeys?: boolean | 1): string[]; // generics-less version (needed for some ts edge-cases)
	}>(function(excludeSpecialKeys: boolean | 1 = false) {
		//if (excludeSpecialKeys) return this.Props(true).map(a=>a.name);
		let keys = this instanceof Map ? Array.from((this as Map<any, any>).keys()) : Object.keys(this);
		if (excludeSpecialKeys) keys = ArrayCE(keys).Except(specialKeys);
		return keys;
	}),

	VValues: <{
		<V>(this: XOrWrapped<MapOrMapLike<V>>, excludeSpecialKeys?: boolean | 1): V[];
		<V = any>(excludeSpecialKeys?: boolean | 1): V[];
		//(excludeSpecialKeys?: boolean): any[];
		//(excludeSpecialKeys?: boolean | 1): any[]; // generics-less version (needed for some ts edge-cases)
	}>(function(excludeSpecialKeys: boolean | 1 = false): any[] { // explicit return type needed here fsr, else breaks type-data output for funcs object
		//if (excludeSpecialKeys) return this.Props(true).map(a=>a.value);
		return ObjectCES.VKeys(this, excludeSpecialKeys).map(key=>this instanceof Map ? this.get(key) : this[key as any]);
	}),

	// for symbols
	/*Pairs_Sym() {
	};*/
	Sym(symbolName: string) {
		let symbols = Object.getOwnPropertySymbols(this);
		let symbol = symbols.find(a=>a.toString() == `Symbol(${symbolName})`);
		return this[symbol];
	},

	// this is a total hack : P -- fixes typescript-es2017 "TypeError: [module].default is not a constructor" issue
	/*Object.prototype._AddGetterSetter("default", function() {
		return this;
	}, function(value) {
		/*delete this.default;
		this.default = value;*#/
		Object.defineProperty(this, "default", {configurable: true, enumerable: false, value});
	});*/

	// Object[FakeArray]
	// ==========
	/*FA_Select<T, T2>(this: {[key: number]: T} | {[key: string]: T}, selectFunc?: (item: T, index?: number)=>T2): T2[] {
		Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
		/*var result = this instanceof List ? new List(this.itemType) : [];
		for (let [index, item] of this.entries())
			result.Add(selectFunc.call(item, item, index));
		return result;*#/
		return ObjectCE(this).VValues(true).map(selectFunc);
	};
	FA_RemoveAt(index: number) {
		Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
		if (!(index in this)) return;
		// remove target entry
		delete this[index];
		// move all the later entries down one index
		for (var i = index + 1; i in this; i++) {
			this[i - 1] = this[i];
		}
		delete this[i - 1]; // remove the extra copy of the last-item 
	};
	FA_Add<T>(this: {[key: number]: T} | {[key: string]: T}, item: T) {
		Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
		for (var openIndex = 0; openIndex in this; openIndex++);
		this[openIndex] = item;
	};*/
}
/*export type ArrayCE_funcs_PlusObject<T> = Array<T> & typeof ArrayCE_funcs;
export interface ArrayCEProxy<T> extends ArrayCE_funcs_PlusObject<T> {}*/
export interface ObjectCEProxyInterface<T> {
	_magicTypeMarker: T; // this makes type-script "carry" the type-data of an ObjectCEProxy, within this proxy type (which therefore doesn't cause recursion issues from TargetTFor) 
}
export type ObjectCEProxy<T> = typeof ObjectCE_funcs & ObjectCEProxyInterface<T>;

//export const ObjectCE = WithFuncsStandalone(ObjectCEProxy.prototype);
//export const ObjectCE = CreateProxyForClassExtensions(ObjectCEProxy);
export const ObjectCE = CreateProxyForClassExtensions(ObjectCE_funcs) as <T>(nextThis: T)=>ObjectCEProxy<T>;
export const ObjectCES = WithFuncsStandalone(ObjectCE_funcs);