"use strict";
// standard types
// ----------
Object.defineProperty(exports, "__esModule", { value: true });
/*export class bool extends Boolean {}
export class int extends Number {}
export class double extends Number {}
export var string = "string" as any as (new(..._)=>string);*/
exports.bool = function () { return "bool"; };
exports.int = function () { return "int"; };
exports.double = function () { return "double"; };
exports.string = function () { return "string"; };
function IsNaN(obj) { return typeof obj == "number" && obj != obj; }
exports.IsNaN = IsNaN;
function IsPrimitive(obj) { return IsBool(obj) || IsNumber(obj) || IsString(obj); }
exports.IsPrimitive = IsPrimitive;
function IsBool(obj) { return typeof obj == "boolean"; } //|| obj instanceof Boolean
exports.IsBool = IsBool;
function ToBool(boolStr) { return boolStr == "true" ? true : false; }
exports.ToBool = ToBool;
function IsArray(obj) { return Array.isArray(obj); } // for briefness and/or consistency
exports.IsArray = IsArray;
function IsObject(obj) { return typeof obj == "object"; }
exports.IsObject = IsObject;
//export function IsObjectOf<T>(obj) : obj is T { return typeof obj == "object"; }
//export function IsOfType<T>(obj, typeConstructor: new()=>T) : obj is T { return obj.constructor.name == typeConstructor.name; }
function IsTypeX(obj, typeConstructor) { return obj instanceof typeConstructor; }
exports.IsTypeX = IsTypeX;
function IsNumberString(obj, allowNaN) {
    if (allowNaN === void 0) { allowNaN = false; }
    return IsString(obj) && obj.length && IsNumber(Number(obj), false, allowNaN);
}
exports.IsNumberString = IsNumberString;
function IsNumber(obj, allowNumberObj, allowNaN) {
    if (allowNumberObj === void 0) { allowNumberObj = false; }
    if (allowNaN === void 0) { allowNaN = false; }
    if (!allowNaN && IsNaN(obj))
        return false;
    return typeof obj == "number" || (allowNumberObj && obj instanceof Number);
}
exports.IsNumber = IsNumber;
/** Basically the same as Number(...), accepting numbers, and converting number-strings of these forms:
1) "010" -> 10 [ES5+], 8 [<ES5]
2) "0x10" -> 16
3) "5e3" -> 5000
Does *not* convert values of these forms (instead returns valIfConversionFails -- by default NaN):
4) null -> ?
5) "" -> ?*/
function ToNumber(stringOrFloatVal, valIfConversionFails) {
    if (valIfConversionFails === void 0) { valIfConversionFails = NaN; }
    if (!IsString(stringOrFloatVal) && !IsNumber(stringOrFloatVal))
        return valIfConversionFails;
    if (IsString(stringOrFloatVal) && stringOrFloatVal.length == 0)
        return valIfConversionFails;
    return Number(stringOrFloatVal);
}
exports.ToNumber = ToNumber;
function IsInt(obj) { return IsNumber(obj) && parseInt(obj) == obj; }
exports.IsInt = IsInt;
function ToInt(stringOrFloatVal, valIfConversionFails) {
    if (valIfConversionFails === void 0) { valIfConversionFails = NaN; }
    return parseInt(ToNumber(stringOrFloatVal, valIfConversionFails) + "");
}
exports.ToInt = ToInt;
/*export function IsFloat(obj) : obj is number { return typeof obj == "number" && parseFloat(obj as any) != parseInt(obj as any); }
export function ToFloat(stringOrIntVal) { return parseFloat(stringOrIntVal); }*/
function IsString(obj, allowStringObj) {
    if (allowStringObj === void 0) { allowStringObj = false; }
    return typeof obj == "string" || (allowStringObj && obj instanceof String);
}
exports.IsString = IsString;
function ToString(val) { return "" + val; }
exports.ToString = ToString;
function IsFunction(obj) {
    //return obj instanceof Function;
    return typeof obj == "function";
}
exports.IsFunction = IsFunction;
function IsConstructor(obj) {
    //return obj instanceof Function && obj.name;
    return typeof obj == "function" && obj.name;
}
exports.IsConstructor = IsConstructor;
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
function GetEntries(enumType, nameModifierFunc) {
    //let entryNames = Object.keys(enumType).filter(a=>a.match(/^\D/) != null);
    // valid enum values are numbers and null, so any props other than those are the name->value props we want
    /*let nameValuePairs = enumType.Pairs().filter(pair=>!IsNumberString(pair.key) && pair.key != "null");
    return nameValuePairs.map(pair=>({name: nameModifierFunc ? nameModifierFunc(pair.key) : pair.key, value: pair.value as number}));*/
    // valid enum values are numbers and null, so any keys other than those are the ones we want (they're the keys for the key->value pairs)
    var entryNames = Object.keys(enumType).filter(function (key) { return !IsNumberString(key) && key != "null"; });
    return entryNames.map(function (name) { return ({ name: nameModifierFunc ? nameModifierFunc(name) : name, value: enumType[name] }); });
}
exports.GetEntries = GetEntries;
function GetValues(enumType) {
    return GetEntries(enumType).map(function (a) { return a.value; });
}
exports.GetValues = GetValues;
function GetValues_ForSchema(enumType) {
    return GetValues(enumType).map(function (value) { return ({ const: value }); });
}
exports.GetValues_ForSchema = GetValues_ForSchema;
//# sourceMappingURL=Types.js.map