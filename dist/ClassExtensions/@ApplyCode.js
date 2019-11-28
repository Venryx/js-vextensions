"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var CE_String_1 = require("./CE_String");
var CE_Number_1 = require("./CE_Number");
function ClassExtensions_ApplyCode() {
    __1.TransferPrototypeProps(Array.prototype, __1.ArrayCEClass.prototype, {}, { configurable: true, enumerable: false });
    if (typeof Element != "undefined") {
        __1.TransferPrototypeProps(Element.prototype, __1.ElementCEClass.prototype, {}, { configurable: true, enumerable: false });
    }
    __1.TransferPrototypeProps(Number.prototype, CE_Number_1.NumberCEClass.prototype, {}, { configurable: true, enumerable: false });
    __1.TransferPrototypeProps(Object.prototype, __1.ObjectCEClass.prototype, {}, { configurable: true, enumerable: false });
    __1.TransferPrototypeProps(Function.prototype, __1.FunctionCEClass.prototype, {}, { configurable: true, enumerable: false });
    __1.TransferPrototypeProps(Date.prototype, __1.DateCEClass.prototype, {}, { configurable: true, enumerable: false });
    //TransferPrototypeProps(Error.prototype, ErrorCEClass.prototype, {}, {configurable: true, enumerable: false});
    __1.TransferPrototypeProps(String.prototype, CE_String_1.StringCEClass.prototype, {}, { configurable: true, enumerable: false });
}
exports.ClassExtensions_ApplyCode = ClassExtensions_ApplyCode;
// this file is only imported if user manually imports it; if so, apply immediately when imported
ClassExtensions_ApplyCode();
//# sourceMappingURL=@ApplyCode.js.map