// standard types
// ----------

/*export class bool extends Boolean {}
export class int extends Number {}
export class double extends Number {}
export var string = "string" as any as (new(..._)=>string);*/

export var bool = ()=>"bool" as any as (new(..._)=>boolean);
export var int = ()=>"int" as any as (new(..._)=>number);
export var double = ()=>"double" as any as (new(..._)=>number);
export var string = ()=>"string" as any as (new(..._)=>string);

export function IsPrimitive(obj) { return IsBool(obj) || IsNumber(obj) || IsString(obj); }
export function IsBool(obj) : obj is boolean { return typeof obj == "boolean"; } //|| obj instanceof Boolean
export function ToBool(boolStr) { return boolStr == "true" ? true : false; }
export function IsNumberString(obj, allowNaN = false) { return IsString(obj) && obj.length && IsNumber(Number(obj), false, allowNaN); }
export function IsNumber(obj, allowNumberObj = false, allowNaN = false): obj is number {
	if (!allowNaN && IsNaN(obj)) return false;
	return typeof obj == "number" || (allowNumberObj && obj instanceof Number);
}
/** Basically the same as Number(...), accepting numbers, and converting number-strings of these forms:
1) "010" -> 10 [ES5+], 8 [<ES5]
2) "0x10" -> 16
3) "5e3" -> 5000
Does *not* convert values of these forms (instead returns valIfConversionFails -- by default NaN):
4) null -> ?
5) "" -> ?*/
export function ToNumber(stringOrFloatVal: string | number, valIfConversionFails = NaN) {
	if (!IsString(stringOrFloatVal) && !IsNumber(stringOrFloatVal)) return valIfConversionFails;
	if (IsString(stringOrFloatVal) && stringOrFloatVal.length == 0) return valIfConversionFails;
	return Number(stringOrFloatVal);
}
export function IsInt(obj) : obj is number { return IsNumber(obj) && parseInt(obj as any) == obj; }
export function ToInt(stringOrFloatVal: string | number, valIfConversionFails = NaN) { return parseInt(ToNumber(stringOrFloatVal, valIfConversionFails)+""); }
/*export function IsFloat(obj) : obj is number { return typeof obj == "number" && parseFloat(obj as any) != parseInt(obj as any); }
export function ToFloat(stringOrIntVal) { return parseFloat(stringOrIntVal); }*/
export function IsNaN(obj) { return typeof obj == "number" && obj != obj; }
export function IsString(obj, allowStringObj = false): obj is string {
	return typeof obj == "string" || (allowStringObj && obj instanceof String);
}
export function ToString(val) { return "" + val; }
export function IsSymbol(obj, allowSymbolObj = false): obj is symbol {
	return typeof obj == "symbol" || (allowSymbolObj && typeof Symbol != undefined && obj instanceof Symbol);
}
export function IsFunction(obj) : obj is Function {
	//return obj instanceof Function;
	return typeof obj == "function";
}

export function IsArray(obj) : obj is Array<any> { return Array.isArray(obj); } // for briefness and/or consistency
export function IsObject(obj) : obj is Object { return typeof obj == "object"; }
//export function IsObjectOf<T>(obj) : obj is T { return typeof obj == "object"; }
//export function IsOfType<T>(obj, typeConstructor: new()=>T) : obj is T { return obj.constructor.name == typeConstructor.name; }
export function IsTypeX<T>(obj: Object, typeConstructor: new(...args: any[])=>T) : obj is T { return obj instanceof typeConstructor; }

export function IsConstructor(obj) : obj is new(..._)=>any {
	//return obj instanceof Function && obj.name;
	return typeof obj == "function" && obj.name;
}

/*function TypeOrNameOrGetter_ToName<T>(typeOrNameOrGetter?: string | (new(..._)=>T) | ((_?)=>new(..._)=>T)): string {
	return typeOrNameOrGetter instanceof Function && typeOrNameOrGetter.name ? typeOrNameOrGetter.name :
		typeOrNameOrGetter instanceof Function ? (typeOrNameOrGetter as any)().name :
		typeOrNameOrGetter;
}*/

// classes/enums
// ==========

/*var constructorHelper = function() {};
export function CreateClass(baseClass, classMembers) {
	baseClass = baseClass || Object;

	var result;

	if (classMembers && classMembers.hasOwnProperty("constructor"))
		result = classMembers.constructor;
	else
		result = function () { return baseClass.apply(this, arguments); };

	constructorHelper.prototype = baseClass.prototype;
	result.prototype = new constructorHelper();

	if (classMembers)
		result.prototype.Extend(classMembers);

	result.prototype.constructor = result;
	result.__super__ = baseClass.prototype;

	return result;
}*/

// enums
// ==========

/**
 * Typescript enums compile to an object with each `key = value` pair converted into two props: key->value, value->key
 * This function returns just the key->value pairs. (with each entry having the form {name: string, value: number | null})
 */
export function GetEntries(enumType: Object, nameModifierFunc?: (name: string)=>string) {
	//let entryNames = Object.keys(enumType).filter(a=>a.match(/^\D/) != null);

	// valid enum values are numbers and null, so any props other than those are the name->value props we want
	/*let nameValuePairs = enumType.Pairs().filter(pair=>!IsNumberString(pair.key) && pair.key != "null");
	return nameValuePairs.map(pair=>({name: nameModifierFunc ? nameModifierFunc(pair.key) : pair.key, value: pair.value as number}));*/

	// valid enum values are numbers and null, so any keys other than those are the ones we want (they're the keys for the key->value pairs)
	let entryNames = Object.keys(enumType).filter(key=>!IsNumberString(key) && key != "null");
	return entryNames.map(name=>({name: nameModifierFunc ? nameModifierFunc(name) : name, value: enumType[name] as number}));
}
export function GetValues<T>(enumType): T[] {
	return GetEntries(enumType).map(a=>a.value as any as T);
}
export function GetValues_ForSchema<T>(enumType) {
	return GetValues(enumType).map(value=>({const: value}));
}