import {IsNaN, Assert, DEL} from "..";

// (ClassExtensions.ts)

//let g = window as any;

// Object: base
// ==================

// the below lets you do stuff like this: Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem");
declare global { interface Object { _AddItem: (name: string, value)=>void; } }
Object.defineProperty(Object.prototype, "_AddItem", { // note; these functions should by default add non-enumerable properties/items
	//configurable: true,
	enumerable: false,
	value: function(name, value, forceAdd) {
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
});
declare global { interface Object { _AddFunction: (name: string, func: Function)=>void; } }
Object.prototype._AddItem("_AddFunction", function(name, func) {
	//this._AddItem(func.name || func.toString().match(/^function\s*([^\s(]+)/)[1], func);
	this._AddItem(name, func);
});

// the below lets you do stuff like this: Array.prototype._AddGetterSetter("AddX", null, function(value) { this.push(value); }); [].AddX = "newItem";
declare global { interface Object { _AddGetterSetter: (name: string, getter: Function, setter: Function)=>void; } }
Object.prototype._AddFunction("_AddGetterSetter", function(name, getter, setter) {
	//var name = (getter || setter).name || (getter || setter).toString().match(/^function\s*([^\s(]+)/)[1];
	if (name in this) delete this[name];
	if (name in this) return; // workaround for some properties not being deleted

	let info = {configurable: true, enumerable: false} as PropertyDescriptor;
	if (getter) info.get = getter;
	if (setter) info.set = setter;
	Object.defineProperty(this, name, info);
});

// the below lets you do stuff like this: Array.prototype._AddFunction_Inline = function AddX(value) { this.push(value); }; [].AddX = "newItem";
declare global { interface Object { _AddFunction_Inline: Function; } }
Object.prototype._AddGetterSetter("_AddFunction_Inline", null, function(func) {
	this._AddFunction(func.GetName(), func);
});
declare global { interface Object { _AddGetter_Inline: Function; } }
Object.prototype._AddGetterSetter("_AddGetter_Inline", null, function(func) {
	this._AddGetterSetter(func.GetName(), func, null);
});
declare global { interface Object { _AddSetter_Inline: Function; } }
Object.prototype._AddGetterSetter("_AddSetter_Inline", null, function(func) {
	this._AddGetterSetter(func.GetName(), null, func);
});

// Function (early)
// ==========

//interface Function {
declare global {
	interface Object { // add to Object interface, otherwise TS thinks "Function" refers to this interface instead of the Function class
		GetName(): string;
		SetName(name: string): Function;
	}
}

//Function.prototype._AddFunction_Inline = function GetName() { return this.name_fake || this.name || this.toString().match(/^function\s*([^\s(]+)/)[1]; };
Function.prototype._AddFunction("GetName", function() { return this.name_fake || this.name || (this.toString().match(/^function\s*([^\s(]+)/) || [])[1]; });
Function.prototype._AddFunction_Inline = function SetName(name: string) { this.name_fake = name; return this; };

// Object: normal
// ==================

//Object.prototype._AddSetter_Inline = function ExtendWith_Inline(value) { this.ExtendWith(value); };
//Object.prototype._AddFunction_Inline = function ExtendWith(value) { $.extend(this, value); };
/*Object.prototype._AddFunction_Inline = function GetItem_SetToXIfNull(itemName, /*;optional:*#/ defaultValue) {
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

declare global { interface Object { Extend: (obj)=>void; } }
Object.prototype._AddFunction_Inline = function Extend(x) {
	for (var name in x) {
		var value = x[name];
		//if (value !== undefined)
        this[name] = value;
    }
	return this;
};

// as replacement for C#'s "new MyClass() {prop = true}"
// seems this should work, to be consistent with in-class usage, but whatever; below it's an alternative that works for interfaces
//interface Object { etet(props: any): this; }
interface VSet_Options {prop?: PropertyDescriptor, deleteUndefined?: boolean, deleteNull?: boolean, deleteEmpty?: boolean};
declare global {
	interface Object {
		VSet<T>(this: T, props: any, options?: VSet_Options): T;
		VSet<T>(this: T, propName: string, propValue, options?: VSet_Options): T;
	}
}
Object.prototype._AddFunction_Inline = function VSet(...args) {
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
		for (var name in props) {
			SetProp(name, props[name]);
		}
	} else {
		SetProp(propName, propValue);
	}
	return this;
};
declare global { interface Object { Extended<T, T2>(this: T, x: T2): T & T2; } }
Object.prototype._AddFunction_Inline = function Extended(x) {
	var result = this instanceof Array ? [] : {};
	for (var name in this) {
		result[name] = this[name];
	}
	if (x) {
    	for (var name in x) {
			result[name] = x[name];
		}
	}
	return result;
};
/*interface Object { Extended2<T>(this, x: T): T; }
Object.prototype._AddFunction_Inline = function Extended2(x) {
	return this.Extended(x);
};*/
//Object.prototype._AddFunction_Inline = function E(x) { return this.Extended(x); };

declare global { interface Object { VAct<T>(this: T, func: (self: T)=>any): T; } }
Object.prototype._AddFunction_Inline = function VAct(action) {
	action.call(this, this);
	return this;
};

declare global { interface Object { As<T>(type: new(..._)=>T): T; } }
Object.prototype._AddFunction_Inline = function As<T>(type: new(..._)=>T) {
	Object.setPrototypeOf(this, type.prototype);
	return this as T;
};
declare global { interface Object { Strip<T>(this: T): T; } }
Object.prototype._AddFunction_Inline = function Strip() {
	Object.setPrototypeOf(this, Object.getPrototypeOf({}));
	return this;
};

declare global { interface Object { Including(...propNames: string[]): Object; } }
Object.prototype._AddFunction_Inline = function Including(...propNames) {
	var result = {};
	for (let propName of propNames) {
		if (propName in this) {
			result[propName] = this[propName];
		}
	}
	return result;
}
declare global { interface Object { Excluding(...propNames: string[]): Object; } }
Object.prototype._AddFunction_Inline = function Excluding(...propNames) {
    var result = this.Extended();
    for (let propName of propNames) {
		  delete result[propName];
	 }
    return result;
}

declare global { interface Object { IsOneOf(...values: any[]): boolean; } }
Object.prototype._AddFunction_Inline = function IsOneOf(...values: any[]): boolean {
	if (values.Contains(this)) {
		return true;
	}
	// if the value-list contains the primitive-version of self, consider it a match -- otherwise calling "test1".IsOneOf("test1", "test2") would fail
	let isObjectFormOfPrimitive = this instanceof Boolean || this instanceof Number || this instanceof String;
	if (isObjectFormOfPrimitive && values.Contains(this.valueOf())) {
		return true;
	}
	return false;
};

var specialProps = ["_", "_key", "_id"];

// todo: probably remove Props(), and instead just use Pairs(), since Props() sounds odd when used on arrays
declare global {
	interface Object {
		Props<T>(this: {[key: number]: T} | {[key: string]: T}, excludeSpecialProps?: boolean): {index: number, name: string, value: T}[];
		Props<T>(excludeSpecialProps?: boolean): {index: number, name: string, value: T}[];
	}
}
//interface Object { Props<ValueType>(excludeSpecialProps?: boolean): {index: number, name: string, value: ValueType}[]; }
Object.prototype._AddFunction_Inline = function Props(excludeSpecialProps = false) {
	var result = [];
	var i = 0;
	for (var propName in this) {
		if (excludeSpecialProps && (propName == "_" || propName == "_key" || propName == "_id")) continue;
		//result.push({index: i++, key: propName, name: propName, value: this[propName]});
		result.push({index: i++, name: propName, value: this[propName]});
	}
	return result;
};
declare global {
	interface Object {
		Pairs<T>(this: {[key: number]: T} | {[key: string]: T}, excludeSpecialProps?: boolean | 1): {index: number, key: string, keyNum?: number, value: T}[];
		Pairs<T>(excludeSpecialProps?: boolean | 1): {index: number, key: string, keyNum?: number, value: T}[];
	}
}
Object.prototype._AddFunction_Inline = function Pairs(excludeSpecialProps: boolean | 1 = false) {
	var result = [];
	var i = 0;
	for (var key in this) {
		if (excludeSpecialProps && (key == "_" || key == "_key" || key == "_id")) continue;
		let entry = {index: i++, key, keyNum: Number(key), value: this[key]};
		if (IsNaN(entry.keyNum)) delete entry.keyNum;
		result.push(entry);
	}
	return result;
};
declare global { interface Object { VKeys(excludeSpecialProps?: boolean | 1): string[]; } }
Object.prototype._AddFunction_Inline = function VKeys(excludeSpecialProps: boolean | 1 = false) {
	//if (excludeSpecialProps) return this.Props(true).map(a=>a.name);
	if (excludeSpecialProps) return Object.keys(this).Except(specialProps);
	return Object.keys(this);
};
//interface Object { VValues(excludeSpecialProps?: boolean): any[]; }
declare global {
	interface Object {
		VValues<T>(this: {[key: number]: T} | {[key: string]: T}, excludeSpecialProps?: boolean | 1): T[];
		VValues<T>(excludeSpecialProps?: boolean | 1): T[];
	}
}
Object.prototype._AddFunction_Inline = function VValues(excludeSpecialProps: boolean | 1 = false) {
	//if (excludeSpecialProps) return this.Props(true).map(a=>a.value);
	if (excludeSpecialProps) return Object.keys(this).Except(specialProps).map(a=>this[a]);
	return Object.keys(this).map(a=>this[a]);
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

declare global { interface Object { FA_Select<T, T2>(this: {[key: number]: T} | {[key: string]: T}, selectFunc?: (item: T, index?: number)=>T2): T2[]; } }
Object.prototype._AddFunction_Inline = function FA_Select(selectFunc = a=>a) {
	Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
	/*var result = this instanceof List ? new List(this.itemType) : [];
	for (let [index, item] of this.entries())
		result.Add(selectFunc.call(item, item, index));
	return result;*/
	return this.VValues(true).map(selectFunc);
};
declare global { interface Object { FA_RemoveAt(index: number); } }
Object.prototype._AddFunction_Inline = function FA_RemoveAt(index: number) {
	Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
	if (!(index in this)) return;
	// remove target entry
	delete this[index];
	// move all the later entries down one index
	for (var i = index + 1; i in this; i++)
		this[i - 1] = this[i];
	delete this[i - 1]; // remove the extra copy of the last-item 
};
declare global { interface Object { FA_Add<T>(this: {[key: number]: T} | {[key: string]: T}, item: T); } }
Object.prototype._AddFunction_Inline = function FA_Add(item) {
	Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
	for (var openIndex = 0; openIndex in this; openIndex++);
	this[openIndex] = item;
};

// late-require things from other modules, that are used in the methods
// ==========

// Use "require" instead, so doesn't make TS see this as an external module. (and thus disable interface extension)
// And use alternate names, so they don't get used in other files.