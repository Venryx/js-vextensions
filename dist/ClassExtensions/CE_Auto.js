"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CE_Array_1 = require("./CE_Array");
var CE_Number_1 = require("./CE_Number");
var CE_Object_1 = require("./CE_Object");
var CE_String_1 = require("./CE_String");
var __1 = require("..");
var Types_1 = require("../Utils/Types");
var CE_Others_1 = require("./CE_Others");
/*interface CE_Auto_I {
    (obj: Array<any>): typeof ArrayCE;
    (obj: Element): typeof ElementCE;
    (obj: number): typeof NumberCE;
    (obj: Object): typeof ObjectCE;
    (obj: string): typeof StringCE;
}

export const CE_Auto = ((obj)=> {
}) as CE_Auto_I;*/
var classExtensionMap = {
    Number: CE_Number_1.NumberCE,
    String: CE_String_1.StringCE,
    Date: CE_Others_1.DateCE,
    Element: __1.ElementCE,
    Function: CE_Others_1.FunctionCE,
    Array: CE_Array_1.ArrayCE,
    Object: CE_Object_1.ObjectCE,
};
//export function CE<T extends Object>(obj: T): WithFuncThisArgsAsXOrWrapped_Type<ObjectCEProxy<T>>;
function CE(obj, checkForUncommonDerived) {
    if (checkForUncommonDerived === void 0) { checkForUncommonDerived = false; }
    // first, try to get class-extension func based on direct constructor name (most common case)
    var typeName = obj.constructor ? obj.constructor.name : null;
    if (typeName && classExtensionMap[typeName]) {
        return classExtensionMap[typeName](obj);
    }
    // else, check each option using "instanceof" and such (needed for derived classes)
    if (checkForUncommonDerived) {
        if (Types_1.IsNumber(obj, true))
            return CE_Number_1.NumberCE(obj);
        if (Types_1.IsString(obj, true))
            return CE_String_1.StringCE(obj);
        if (obj instanceof Date)
            return CE_Others_1.DateCE(obj);
        if (Types_1.IsFunction(obj))
            return CE_Others_1.FunctionCE(obj);
        if (Types_1.IsArray(obj))
            return CE_Array_1.ArrayCE(obj);
    }
    if (obj instanceof Element)
        return __1.ElementCE(obj);
    /*if (IsObject(obj)) return ObjectCE(obj);
    throw new Error(`Could not find class-extension helper for type "${obj.constructor ? obj.constructor.name : "n/a"}".`);*/
    return CE_Object_1.ObjectCE(obj);
}
exports.CE = CE;
//# sourceMappingURL=CE_Auto.js.map