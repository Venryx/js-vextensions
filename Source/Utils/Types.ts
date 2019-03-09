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

export function IsNaN(obj) { return typeof obj == "number" && obj != obj; }
export function IsPrimitive(obj) { return IsBool(obj) || IsNumber(obj) || IsString(obj); }
export function IsBool(obj) : obj is boolean { return typeof obj == "boolean"; } //|| obj instanceof Boolean
export function ToBool(boolStr) { return boolStr == "true" ? true : false; }

export function IsObject(obj) : obj is Object { return typeof obj == "object"; }
export function IsObjectOf<T>(obj) : obj is T { return typeof obj == "object"; }

export function IsNumberString(obj, allowNaN = false) { return IsString(obj) && obj.length && IsNumber(Number(obj), false, allowNaN); }
export function IsNumber(obj, allowNumberObj = false, allowNaN = false): obj is number {
	if (!allowNaN && IsNaN(obj)) return false;
	return typeof obj == "number" || (allowNumberObj && obj instanceof Number);
}
/** Basically the same as Number(...), accepting numbers, and number-strings matching:
1) "0100" -> 100 [in ES5+]
2) "0x10" -> 16
3) "5e3" -> 5000
But does *not* match the following (for which it instead returns valIfConversionFails -- by default NaN):
1) null -> 0
2) "" -> 0*/
export function ToNumber(stringOrFloatVal: string | number, valIfConversionFails = NaN) {
	if (!IsString(stringOrFloatVal) && !IsNumber(stringOrFloatVal)) return valIfConversionFails;
	if (IsString(stringOrFloatVal) && stringOrFloatVal.length == 0) return valIfConversionFails;
	return Number(stringOrFloatVal);
}
export function IsInt(obj) : obj is number { return IsNumber(obj) && parseInt(obj as any) == obj; }
export function ToInt(stringOrFloatVal: string | number, valIfConversionFails = NaN) { return parseInt(ToNumber(stringOrFloatVal, valIfConversionFails)+""); }
/*export function IsFloat(obj) : obj is number { return typeof obj == "number" && parseFloat(obj as any) != parseInt(obj as any); }
export function ToFloat(stringOrIntVal) { return parseFloat(stringOrIntVal); }*/

export function IsString(obj, allowStringObj = false): obj is string {
	return typeof obj == "string" || (allowStringObj && obj instanceof String);
}
export function ToString(val) { return "" + val; }

export function IsFunction(obj) : obj is Function {
	//return obj instanceof Function;
	return typeof obj == "function";
}

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

export function GetEntries(enumType, nameModifierFunc?: (name: string)=>string) {
	return Object.keys(enumType).filter(a=>a.match(/^\D/) != null).map(name=>({name: nameModifierFunc ? nameModifierFunc(name) : name, value: enumType[name] as number}));
}
export function GetValues<T>(enumType): T[] {
	return GetEntries(enumType).map(a=>a.value as any as T);
}
export function GetValues_ForSchema<T>(enumType) {
	return GetValues(enumType).map(value=>({const: value}));
}