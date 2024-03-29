import {ConvertPathGetterFuncToPropChain, CreateProxyForClassExtensions, DeepGet, DEL, OMIT, WithFuncsStandalone} from "../Utils/General.js";
import {IsNaN, IsString, IsSymbol} from "../Utils/Types.js";
import {ArrayCE} from "./CE_Array.js";
import {FunctionCE} from "./CE_Others.js";

export interface VSet_Options {
	prop?: PropertyDescriptor;
	/*deleteUndefined?: boolean;
	deleteNull?: boolean;
	deleteEmpty?: boolean;*/
	copyNonEnumerable?: boolean;
	copySymbolKeys?: boolean;
	copyGetterSettersAs?: "ignore" | "getterSetter" | "value";
	callSetters?: "never" | "always" | "auto";
	/** Whether to process the string versions of OMIT and DEL as operators. (don't enable for over-network pathways that are really important, or untrusted) */
	allowStringOperators?: boolean;
}

/*export type MapLike<V> = {[key: number]: V} | {[key: string]: V} | Map<any, V>;
export type MapLike_StringyKey<V> = {[key: number]: V} | {[key: string]: V} | Map<string, V>;*/
export type MapLike<V> = {[key: number]: V} | {[key: string]: V};
export type MapOrMapLike<V> = Map<any, V> | MapLike<V>;

//export type TargetTFor<T> = T extends ObjectCEProxy<infer TargetT> ? TargetT : T;
export type TargetTFor<T> = T extends ObjectCEProxyInterface<infer TargetT> ? TargetT : T;
export type XOrWrapped<T> = T | ObjectCEProxyInterface<T>;

export type Pair<K, V> = {index: number, key: K, keyNum?: number, value: V};

/*export type WithFuncThisArgsAsXOrWrapped_Type<Source> = {
	[P in keyof Source]:
		Source[P] extends (this: infer ThisArgType, ...args)=>any ? (this: XOrWrapped<ThisArgType>, ...args: Parameters<Source[P]>)=>ReturnType<Source[P]> :
		Source[P];
};
export function WithFuncThisArgsAsXOrWrapped<Source>(source: Source): WithFuncThisArgsAsXOrWrapped_Type<Source> {
	return source as any;
}*/

//export const specialKeys = ["_", "_key", "_id"];
export const ObjectCE_funcs = {
	// base
	// ==========

	/** Helps you do stuff like this:
		Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
	_AddItem(name, value, forceAdd = false) {
		if (name == null || name.length == 0) { throw new Error("No prop-name was specified for _AddItem() call."); }
		if (name in this) delete this[name];
		if (name in this && !forceAdd) return; // workaround for some properties not being deleted

		Object.defineProperty(this, name, {
			configurable: true, // for some reason, we get an error otherwise in non-dev mode (same for below)
			value,
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

		const info = {configurable: true} as PropertyDescriptor;
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

	As<T>(type: new(..._)=>T): T | null {
		if (this instanceof type) {
			return this as T;
		}
		return null;
	},
	Cast<T>(type: new(..._)=>T) {
		Object.setPrototypeOf(this, type.prototype);
		return this as any as T;
	},
	Strip() {
		Object.setPrototypeOf(this, Object.getPrototypeOf({}));
		return this;
	},

	/** Executes the given function (passing "this" as the func's "this", and only argument), then returns "this". */
	VAct<T>(this: T, func: (self: TargetTFor<T>)=>any): TargetTFor<T> {
		func.call(this, this);
		return this as any;
	},
	/** Executes the given function (passing "this" as the func's "this", and only argument). If the func's result is truthy, returns "this"; else, returns null. */
	Check<T>(this: T, func: (self: TargetTFor<T>)=>any): TargetTFor<T> | null {
		const result = func.call(this, this);
		if (result) return this as any;
		return null;
	},
	/* Executes the given function (passing "this" as the func's "this", and only argument), then returns the func's result. */
	VGet<T, T2>(this: T, func: (self: TargetTFor<T>)=>T2): T2 {
		return func.call(this, this);
	},
	SafeGet: <{
		(path: string, resultIfNull?: any): any;
		<T, Result>(this: T, pathGetterFunc: (self: TargetTFor<T>)=>Result, resultIfNull?: any): Result;
	}>(function(pathOrPathGetterFunc: string | Function, resultIfNull?: any) {
		const pathSegments = typeof pathOrPathGetterFunc == "string" ? pathOrPathGetterFunc : ConvertPathGetterFuncToPropChain(pathOrPathGetterFunc);
		return DeepGet(this, pathSegments, resultIfNull);
	}),

	// todo: maybe remove/merge these
	Extend(x: any, copyNonEnumerable = false) {
		if (x != null) {
			for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](x)) {
				const value = x[key];
				this[key] = value;
			}
		}
		return this;
	},
	Extended<T extends Object, T2>(this: T, x: T2, copyNonEnumerable = false): TargetTFor<T> & T2 {
		const result: any = this instanceof Array ? [] : {};
		for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](this)) {
			result[key] = this[key];
		}
		if (x != null) {
			for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](x)) {
				result[key] = x[key];
			}
		}
		return result;
	},

	// more advanced version of ObjectCE.Extend
	VSet: <{
		// as replacement for C#'s "new MyClass() {prop = true}"
		<T>(this: T, propName: string | symbol, propValue: any|undefined, opt?: VSet_Options): TargetTFor<T>;
		//VSet<T extends RealThis>(this: T, props: any, options?: VSet_Options): T; // variant for ObjectCE(obj).X calls (those types only uses the last declaration, and they need "extend RealThis" since we any-ify the this-param)
		<T>(this: T, props: any, opt?: VSet_Options): TargetTFor<T>; // this one needs to be last (best override for the CE(...) wrapper, and it can only extract the last one)
	}>(function(...args) {
		let props, propName: string|symbol|undefined, propValue: string|undefined, opt: VSet_Options;
		if (IsString(args[0]) || IsSymbol(args[0])) [propName, propValue, opt] = args;
		else [props, opt] = args;
		opt = {...{copyNonEnumerable: true, copySymbolKeys: true, copyGetterSettersAs: "value", callSetters: "auto"} as VSet_Options, ...opt};

		const SetProp = (name: string | symbol, descriptor: PropertyDescriptor|undefined, value: any)=>{
			// only process operators if: 1) js-engine supports Symbols (for security), or 2) caller allows string-operators
			if (IsSymbol(OMIT) || opt.allowStringOperators) {
				if (value === OMIT || (opt.allowStringOperators && value == OMIT.toString())) return;
				if (value === DEL || (opt.allowStringOperators && value == DEL.toString())) {
					delete this[name];
					return;
				}
			}

			const isGetterSetter = descriptor && (descriptor.get != null || descriptor.set != null);
			const asGetterSetter = isGetterSetter && opt.copyGetterSettersAs == "getterSetter";
			// descriptorCustomized: whether the descriptor has customizations that would be lost by using a simple set-op
			const descriptorCustomized = descriptor && (descriptor.enumerable == false || descriptor.writable == false || descriptor.configurable == false || asGetterSetter);
			const useSimpleSet_final = opt.callSetters == "always" || (opt.callSetters == "auto" && !descriptorCustomized);
			if (useSimpleSet_final) {
				this[name] = value;
			} else {
				// we default configurable to true, since it's the better default imo; it's more compatible -- conf:false can break "correct code", whereas conf:true at worst allows mistakes
				const finalDescriptor = {configurable: true, ...descriptor} as PropertyDescriptor;
				// if placing a value (rather than copying a getter-setter), clear get/set fields, and set value field 
				if (!asGetterSetter) {
					delete finalDescriptor.get;
					delete finalDescriptor.set;
					finalDescriptor.value = value;
				}
				Object.defineProperty(this, name, finalDescriptor);
			}
		};
		if (propName) {
			SetProp(propName, opt.prop, propValue);
		} else if (props != null) {
			/*for (let key in props) {
				if (!props.hasOwnProperty(key)) continue;*/
			let keys = Object.getOwnPropertyNames(props) as (string | symbol)[];
			if (opt.copySymbolKeys) keys = keys.concat(Object.getOwnPropertySymbols(props));
			for (const key of keys) {
				const descriptor = Object.getOwnPropertyDescriptor(props, key)!;
				if (!descriptor.enumerable && !opt.copyNonEnumerable) continue;
				const isGetterSetter = descriptor.get != null || descriptor.set != null;
				if (isGetterSetter && opt.copyGetterSettersAs == "ignore") continue; // for "ignore" case: short-circuit, so we don't even call getter
				const value = !isGetterSetter || opt.copyGetterSettersAs == "value" ? props[key as any] : undefined;
				SetProp(key, descriptor, value);
			}
		}
		return this as any;
	}),

	//IncludeKeys(...keys: string[]) {
	IncludeKeys<T extends Object, Keys extends(keyof T)[] = any>(this: XOrWrapped<T>, ...keys: Keys): Pick<T, Keys[number]> {
		let result = this instanceof Array ? [] : {};
		for (const key of keys) {
			//if (!this.hasOwnProperty(key)) continue;
			if (!(key in this)) continue; // we include the value, even if from prototype (user wouldn't list in keys array if didn't want it)
			result[key as any] = this[key as any];
		}
		return result as any;
	},
	//ExcludeKeys(...keys: string[]) {
	ExcludeKeys<T extends Object, Keys extends(keyof T)[] = any>(this: XOrWrapped<T>, ...keys: Keys): Omit<T, Keys[number]> {
		//var result = Clone(this); // doesn't work with funcs
		/*var result = Object.assign(this instanceof Array ? [] : {}, this as any);
		for (let key of keys) {
			delete result[key];
		}*/
		let result = this instanceof Array ? [] : {};
		for (const key of Object.keys(this)) {
			if (ArrayCE(keys).Contains(key as any)) continue;
			result[key] = this[key];
		}
		return result as any;
	},
	OmitUndefined<T extends Object>(this: T, alsoOmitNulls = false, keepPrototype = true): TargetTFor<T> {
		let result = this instanceof Array ? [] : {};
		for (const key of Object.keys(this)) {
			if (this[key] === undefined) continue;
			if (alsoOmitNulls && this[key] === null) continue;
			result[key] = this[key];
		}
		if (keepPrototype) Object.setPrototypeOf(result, Object.getPrototypeOf(this));
		return result as TargetTFor<T>;
	},
	OmitNull<T extends Object>(this: T, alsoOmitUndefined = true, keepPrototype = true): TargetTFor<T> {
		let result = this instanceof Array ? [] : {};
		for (const key of Object.keys(this)) {
			if (this[key] === null) continue;
			if (alsoOmitUndefined && this[key] === undefined) continue;
			result[key] = this[key];
		}
		if (keepPrototype) Object.setPrototypeOf(result, Object.getPrototypeOf(this));
		return result as TargetTFor<T>;
	},

	IsOneOf(...values: any[]): boolean {
		if (ArrayCE(values).Contains(this)) {
			return true;
		}
		// if the value-list contains the primitive-version of self, consider it a match -- otherwise calling "test1".IsOneOf("test1", "test2") would fail
		const isObjectFormOfPrimitive = this instanceof Boolean || this instanceof Number || this instanceof String;
		if (isObjectFormOfPrimitive && ArrayCE(values).Contains(this.valueOf())) {
			return true;
		}
		return false;
	},

	Pairs: <{
		<K = string, V = any>(this: XOrWrapped<Map<K, V>>): Pair<K, V>[];
		<K = string, V = any>(this: XOrWrapped<MapLike<V>>): Pair<K, V>[];
		<K = string, V = any>(): Pair<K, V>[];
		//<V = any>(): {index: number, key: string, keyNum?: number, value: V}[]; // last variant needs explicit strings, for generics-less ObjectCE
		//(): {index: number, key: string, keyNum?: number, value: any}[]; // generics-less version (needed for some ts edge-cases)
	}>(function() {
		var result: Pair<any, any>[] = [];
		const keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			//if (excludeSpecialKeys && (key == "_" || key == "_key" || key == "_id")) continue;
			const entry = {index: i, key, keyNum: Number(key), value: this instanceof Map ? this.get(key) : this[key as any]};
			if (IsNaN(entry.keyNum)) delete entry["keyNum" as any];
			result.push(entry);
		}
		return result;
	}),

	VKeys: <{
		<K>(this: XOrWrapped<Map<K, any>>): K[];
		(this: XOrWrapped<MapLike<any>>): string[];
		<K = string>(): K[];
		//(): string[]; // last variant needs explicit strings, for generics-less ObjectCE
		//(): string[]; // generics-less version (needed for some ts edge-cases)
	}>(function() {
		//if (excludeSpecialKeys) return this.Pairs(true).map(a=>a.key);
		const keys = this instanceof Map ? Array.from((this as Map<any, any>).keys()) : Object.keys(this);
		//if (excludeSpecialKeys) keys = ArrayCE(keys).Exclude(specialKeys);
		return keys;
	}),

	VValues: <{
		<V>(this: XOrWrapped<MapOrMapLike<V>>): V[];
		<V = any>(): V[];
		//(): any[];
		//(): any[]; // generics-less version (needed for some ts edge-cases)
	}>(function(): any[] { // explicit return type needed here fsr, else breaks type-data output for funcs object
		//if (excludeSpecialKeys) return this.Props(true).map(a=>a.value);
		return ObjectCES.VKeys(this).map(key=>(this instanceof Map ? this.get(key) : this[key as any]));
	}),

	// for symbols
	/*Pairs_Sym() {
	};*/
	Sym(symbolName: string) {
		const symbols = Object.getOwnPropertySymbols(this);
		const symbol = symbols.find(a=>a.toString() == `Symbol(${symbolName})`)!;
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
	/*FA_Select<T, T2>(this: {[key: number]: T} | {[key: string]: T}, selectFunc?: (item: T, index: number)=>T2): T2[] {
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
};
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