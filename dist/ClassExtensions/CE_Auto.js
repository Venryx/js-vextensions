"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CE_Array_1 = require("./CE_Array");
var CE_Number_1 = require("./CE_Number");
var CE_Object_1 = require("./CE_Object");
var CE_String_1 = require("./CE_String");
var __1 = require("..");
var Types_1 = require("../Utils/Types");
var CE_Others_1 = require("./CE_Others");
function CE(obj) {
    if (Types_1.IsNumber(obj))
        return CE_Number_1.NumberCE(obj);
    if (Types_1.IsString(obj))
        return CE_String_1.StringCE(obj);
    if (obj instanceof Date)
        return CE_Others_1.DateCE(obj);
    if (obj instanceof Element)
        return __1.ElementCE(obj);
    if (Types_1.IsFunction(obj))
        return CE_Others_1.FunctionCE(obj);
    if (Array.isArray(obj))
        return CE_Array_1.ArrayCE(obj);
    if (Types_1.IsObject(obj))
        return CE_Object_1.ObjectCE(obj);
    throw new Error("Could not find class-extension helper for type \"" + (obj.constructor ? obj.constructor.name : "n/a") + "\".");
}
exports.CE = CE;
//# sourceMappingURL=CE_Auto.js.map