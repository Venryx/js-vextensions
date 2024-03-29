import { ModifyString } from "./General.js";
// standard types
// ----------
/*export class bool extends Boolean {}
export class int extends Number {}
export class double extends Number {}
export var string = "string" as any as (new(..._)=>string);*/
export var bool = () => "bool";
export var int = () => "int";
export var double = () => "double";
export var string = () => "string";
export function IsPrimitive(obj) { return IsBool(obj) || IsNumber(obj) || IsString(obj); }
export function IsBool(obj) { return typeof obj == "boolean"; } //|| obj instanceof Boolean
export function ToBool(boolStr) { return boolStr == "true"; }
export function IsNumberString(obj, allowNaN = false) { return IsString(obj) && obj.length && IsNumber(Number(obj), false, allowNaN); }
export function IsNumber(obj, allowNumberObj = false, allowNaN = false) {
    if (!allowNaN && IsNaN(obj))
        return false;
    return typeof obj == "number" || (allowNumberObj && obj instanceof Number);
}
/** Basically the same as Number(...), accepting numbers, and converting number-strings of these forms:
1) "010" -> 10 [ES5+], 8 [<ES5]
2) "0x10" -> 16
3) "5e3" -> 5000
Does *not* convert values of these forms (instead returns valIfConversionFails -- by default NaN):
4) null -> ?
5) "" -> ?*/
// Why do we choose NaN as the valIfConversionFails? Because it's "safer" than null -- it infects results of math ops, so root issues easier to notice.
export function ToNumber(stringOrFloatVal, valIfConversionFails = NaN, allowParseNaN = false) {
    if (!IsString(stringOrFloatVal) && !IsNumber(stringOrFloatVal))
        return valIfConversionFails;
    if (IsString(stringOrFloatVal) && stringOrFloatVal.length == 0)
        return valIfConversionFails;
    const result = Number(stringOrFloatVal);
    if (IsNaN(result) && !allowParseNaN)
        return valIfConversionFails;
    return result;
}
export function IsInt(obj) { return IsNumber(obj) && parseInt(obj) == obj; }
export function ToInt(stringOrFloatVal, valIfConversionFails = NaN, allowParseNaN = false) {
    const result = parseInt(`${ToNumber(stringOrFloatVal, valIfConversionFails)}`);
    if (IsNaN(result) && !allowParseNaN)
        return valIfConversionFails;
    return result;
}
/*export function IsFloat(obj) : obj is number { return typeof obj == "number" && parseFloat(obj as any) != parseInt(obj as any); }
export function ToFloat(stringOrIntVal) { return parseFloat(stringOrIntVal); }*/
export function IsNaN(obj) { return typeof obj == "number" && obj != obj; }
export function IsString(obj, allowStringObj = false) {
    return typeof obj == "string" || (allowStringObj && obj instanceof String);
}
export function ToString(val) { return `${val}`; }
export function IsSymbol(obj, allowSymbolObj = false) {
    return typeof obj == "symbol" || (allowSymbolObj && typeof Symbol != undefined && obj instanceof Symbol);
}
export function IsFunction(obj) {
    //return obj instanceof Function;
    return typeof obj == "function";
}
export function IsArray(obj) { return Array.isArray(obj); } // for briefness and/or consistency
export function IsObject(obj) { return typeof obj == "object"; }
//export function IsObjectOf<T>(obj) : obj is T { return typeof obj == "object"; }
//export function IsOfType<T>(obj, typeConstructor: new()=>T) : obj is T { return obj.constructor.name == typeConstructor.name; }
export function IsTypeX(obj, typeConstructor) { return obj instanceof typeConstructor; }
export function IsConstructor(obj) {
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
export function GetEntries(enumType, nameModifierFunc) {
    if (nameModifierFunc == "ui")
        nameModifierFunc = name => ModifyString(name, m => [
            m.startLower_to_upper,
            m.lowerUpper_to_lowerSpaceLower,
        ]);
    //let entryNames = Object.keys(enumType).filter(a=>a.match(/^\D/) != null);
    // valid enum values are numbers and null, so any props other than those are the name->value props we want
    /*let nameValuePairs = enumType.Pairs().filter(pair=>!IsNumberString(pair.key) && pair.key != "null");
    return nameValuePairs.map(pair=>({name: nameModifierFunc ? nameModifierFunc(pair.key) : pair.key, value: pair.value as number}));*/
    // valid enum values are numbers and null, so any keys other than those are the ones we want (they're the keys for the key->value pairs)
    const entryNames = Object.keys(enumType).filter(key => !IsNumberString(key) && key != "null");
    return entryNames.map(name => ({ name: nameModifierFunc instanceof Function ? nameModifierFunc(name) : name, value: enumType[name] }));
}
export function GetValues(enumType) {
    return GetEntries(enumType).map(a => a.value);
}
export function GetValues_ForSchema(enumType) {
    return GetValues(enumType).map(value => ({ const: value }));
}
/**
 * This isn't really recommended anymore. Instead, I suggest using "real enums", but with string values rather than auto/number values.
 * If you want to rename something quickly, and not change value for entry yet (eg. because you don't want to have to change cell values in db's and such yet):
 * 	Rename the key, but then add an underscore at the end to mark it as such. (until the value is changed too -- probably in a batch with other such "buffered renames")
*/
export function CreateStringEnum(keysObj) {
    const optionsObj = {};
    const keys = Object.keys(keysObj);
    const values = keys; // could also check for string value-overrides on keysObj
    for (const key of keys) {
        optionsObj[key] = key;
    }
    return [optionsObj, values];
}
//# sourceMappingURL=Types.js.map