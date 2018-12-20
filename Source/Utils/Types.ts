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

G({IsNaN}); declare global { function IsNaN(obj): boolean; }
export function IsNaN(obj) { return typeof obj == "number" && obj != obj; }
G({IsPrimitive}); declare global { function IsPrimitive(obj): obj is boolean | number | string; }
export function IsPrimitive(obj) { return IsBool(obj) || IsNumber(obj) || IsString(obj); }
G({IsBool}); declare global { function IsBool(obj): obj is boolean; }
export function IsBool(obj) : obj is boolean { return typeof obj == "boolean"; } //|| obj instanceof Boolean
G({ToBool}); declare global { function ToBool(boolStr): boolean; }
export function ToBool(boolStr) { return boolStr == "true" ? true : false; }

G({IsObject}); declare global { function IsObject(obj): obj is Object; }
export function IsObject(obj) : obj is Object { return typeof obj == "object"; }
G({IsObjectOf}); declare global { function IsObjectOf<T>(obj): obj is T; }
export function IsObjectOf<T>(obj) : obj is T { return typeof obj == "object"; }
G({IsNumber}); declare global { function IsNumber(obj): obj is number; }
export function IsNumber(obj, allowNumberObj = false, allowNaN = false): obj is number {
	if (!allowNaN && IsNaN(obj)) return false;
	return typeof obj == "number" || (allowNumberObj && obj instanceof Number);
}
G({IsNumberString}); declare global { function IsNumberString(obj, allowNaN?): boolean; }
export function IsNumberString(obj, allowNaN = false) {
	if (!allowNaN && obj == "NaN") return false;
	return IsString(obj) && parseInt(obj).toString() == obj;
}
G({IsInt}); declare global { function IsInt(obj): obj is number; }
export function IsInt(obj) : obj is number { return typeof obj == "number" && parseFloat(obj as any) == parseInt(obj as any); }
G({ToInt}); declare global { function ToInt(stringOrFloatVal): number; }
export function ToInt(stringOrFloatVal) { return parseInt(Number(stringOrFloatVal)+""); }
G({IsFloat}); declare global { function IsFloat(obj): boolean; }
export function IsFloat(obj) : obj is number { return typeof obj == "number" && parseFloat(obj as any) != parseInt(obj as any); }
G({ToFloat}); declare global { function ToFloat(stringOrIntVal): number; }
export function ToFloat(stringOrIntVal) { return parseFloat(stringOrIntVal); }

G({IsString}); declare global { function IsString(obj, allowStringObj?: boolean): obj is string; }
export function IsString(obj, allowStringObj = false): obj is string {
	return typeof obj == "string" || (allowStringObj && obj instanceof String);
}
G({ToString}); declare global { function ToString(val): string; }
export function ToString(val) { return "" + val; }

G({IsFunction}); declare global { function IsFunction(obj): obj is Function; }
export function IsFunction(obj) : obj is Function {
	//return obj instanceof Function;
	return typeof obj == "function";
}

G({IsConstructor}); declare global { function IsConstructor(obj): obj is new(..._)=>any; }
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