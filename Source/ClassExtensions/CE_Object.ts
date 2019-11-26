import {IsNaN, Assert, DEL, nl, ConvertPathGetterFuncToPropChain} from "..";
import {DeepGet, Clone} from "../Utils/General";

export interface VSet_Options {
	prop?: PropertyDescriptor;
	deleteUndefined?: boolean;
	deleteNull?: boolean;
	deleteEmpty?: boolean;
}

export const specialKeys = ["_", "_key", "_id"];
export class ObjectCEClass {
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
	}

	_AddFunction(name, func) {
		//this._AddItem(func.name || func.toString().match(/^function\s*([^\s(]+)/)[1], func);
		this._AddItem(name, func);
	}

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
	}

	// the below helps you do stuff like this:
	//		Array.prototype._AddFunction_Inline = function AddX(value) { this.push(value); }; [].AddX = "newItem";
	set _AddFunction_Inline(func) {
		this._AddFunction(func.GetName(), func);
	}
	set _AddGetter_Inline(func) {
		this._AddGetterSetter(func.GetName(), func, null);
	}
	set _AddSetter_Inline(func) {
		this._AddGetterSetter(func.GetName(), null, func);
	}

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
		for (var name in x) {
			var value = x[name];
			//if (value !== undefined)
			this[name] = value;
		}
		return this;
	}

	// as replacement for C#'s "new MyClass() {prop = true}"
	VSet<T>(this: T, props: any, options?: VSet_Options): T;
	VSet<T>(this: T, propName: string, propValue, options?: VSet_Options): T;
	VSet(...args) {
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
			for (let name in props) {
				SetProp(name, props[name]);
			}
		} else {
			SetProp(propName, propValue);
		}
		return this;
	}
	Extended<T, T2>(this: T, x: T2): T & T2 {
		let result: any = this instanceof Array ? [] : {};
		for (let name in this) {
			result[name] = this[name];
		}
		if (x) {
			for (let name in x) {
				result[name] = x[name];
			}
		}
		return result;
	};
	/*interface Object { Extended2<T>(this, x: T): T; }
	Extended2(x) {
		return this.Extended(x);
	};*/
	//E(x) { return this.Extended(x); };

	SafeGet(path: string, resultIfNull?: any): any;
	SafeGet<T, Result>(this: T, pathGetterFunc: (self: T)=>Result, resultIfNull?: any): Result;
	SafeGet(pathOrPathGetterFunc: string | Function, resultIfNull?: any) {
		let pathSegments = typeof pathOrPathGetterFunc == "string" ? pathOrPathGetterFunc : ConvertPathGetterFuncToPropChain(pathOrPathGetterFunc);
		return DeepGet(this, pathSegments, resultIfNull);
	}
	VAct<T>(this: T, func: (self: T)=>any): T {
		func.call(this, this);
		return this;
	}

	As<T>(type: new(..._)=>T) {
		Object.setPrototypeOf(this, type.prototype);
		return this as any as T;
	};
	Strip() {
		Object.setPrototypeOf(this, Object.getPrototypeOf({}));
		return this;
	}

	Including(...propNames: string[]) {
		var result = {};
		for (let propName of propNames) {
			if (propName in this) {
				result[propName] = this[propName];
			}
		}
		return result;
	}
	Excluding(...propNames: string[]) {
		var result = Clone(this);
		for (let propName of propNames) {
			delete result[propName];
		}
		return result;
	}

	IsOneOf(...values: any[]): boolean {
		if (values.Contains(this)) {
			return true;
		}
		// if the value-list contains the primitive-version of self, consider it a match -- otherwise calling "test1".IsOneOf("test1", "test2") would fail
		let isObjectFormOfPrimitive = this instanceof Boolean || this instanceof Number || this instanceof String;
		if (isObjectFormOfPrimitive && values.Contains(this.valueOf())) {
			return true;
		}
		return false;
	}


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
	};*/
	Pairs<K, V>(this: {[key: number]: V} | {[key: string]: V}, excludeSpecialKeys?: boolean | 1): {index: number, key: string, keyNum?: number, value: V}[];
	Pairs<K, V>(this: Map<K, V>, excludeSpecialKeys?: boolean | 1): {index: number, key: K, keyNum?: number, value: V}[];
	Pairs<K = any, V = any>(excludeSpecialKeys?: boolean | 1): {index: number, key: K, keyNum?: number, value: V}[];
	Pairs(excludeSpecialKeys: boolean | 1 = false) {
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
	}

	VKeys<K>(this: {[key: number]: any} | {[key: string]: any}, excludeSpecialKeys?: boolean | 1): string[];
	VKeys<K>(this: Map<K, any>, excludeSpecialKeys?: boolean | 1): K[];
	VKeys<K = any>(excludeSpecialKeys?: boolean | 1): K[];
	VKeys(excludeSpecialKeys: boolean | 1 = false) {
		//if (excludeSpecialKeys) return this.Props(true).map(a=>a.name);
		let keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
		if (excludeSpecialKeys) keys = keys.Except(specialKeys);
		return keys;
	}

	VValues<V>(this: {[key: number]: V} | {[key: string]: V} | Map<any, V>, excludeSpecialKeys?: boolean | 1): V[];
	VValues<V = any>(excludeSpecialKeys?: boolean | 1): V[];
	//interface Object { VValues(excludeSpecialKeys?: boolean): any[]; }
	VValues(excludeSpecialKeys: boolean | 1 = false) {
		//if (excludeSpecialKeys) return this.Props(true).map(a=>a.value);
		return this.VKeys(excludeSpecialKeys).map(key=>this instanceof Map ? this.get(key) : this[key as any]);
	}

	// for symbols
	/*Pairs_Sym() {
	};*/
	Sym(symbolName: string) {
		let symbols = Object.getOwnPropertySymbols(this);
		let symbol = symbols.find(a=>a.toString() == `Symbol(${symbolName})`);
		return this[symbol];
	};

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
	FA_Select<T, T2>(this: {[key: number]: T} | {[key: string]: T}, selectFunc?: (item: T, index?: number)=>T2): T2[] {
		Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
		/*var result = this instanceof List ? new List(this.itemType) : [];
		for (let [index, item] of this.entries())
			result.Add(selectFunc.call(item, item, index));
		return result;*/
		return this.VValues(true).map(selectFunc);
	};
	FA_RemoveAt(index: number) {
		Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
		if (!(index in this)) return;
		// remove target entry
		delete this[index];
		// move all the later entries down one index
		for (var i = index + 1; i in this; i++)
			this[i - 1] = this[i];
		delete this[i - 1]; // remove the extra copy of the last-item 
	};
	FA_Add<T>(this: {[key: number]: T} | {[key: string]: T}, item: T) {
		Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
		for (var openIndex = 0; openIndex in this; openIndex++);
		this[openIndex] = item;
	};
}
export const ObjectCE = ObjectCEClass.prototype;