// @ts-check

const {TransferPrototypeProps} = require("../Dist");
const {ArrayCE_funcs} = require("../Dist/ClassExtensions/CE_Array");
const {ElementCE_funcs} = require("../Dist/ClassExtensions/CE_Element");
const {NumberCE_funcs} = require("../Dist/ClassExtensions/CE_Number");
const {ObjectCE_funcs} = require("../Dist/ClassExtensions/CE_Object");
const {DateCE_funcs, FunctionCE_funcs} = require("../Dist/ClassExtensions/CE_Others");
const {StringCE_funcs} = require("../Dist/ClassExtensions/CE_String");

function ClassExtensions_ApplyCode() {
	TransferPrototypeProps(Array.prototype, ArrayCE_funcs, {}, {configurable: true, enumerable: false});
	if (typeof Element != "undefined") {
		TransferPrototypeProps(Element.prototype, ElementCE_funcs, {}, {configurable: true, enumerable: false});
	}
	TransferPrototypeProps(Number.prototype, NumberCE_funcs, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(Object.prototype, ObjectCE_funcs, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(Function.prototype, FunctionCE_funcs, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(Date.prototype, DateCE_funcs, {}, {configurable: true, enumerable: false});
	//TransferPrototypeProps(Error.prototype, ErrorCE_funcs, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(String.prototype, StringCE_funcs, {}, {configurable: true, enumerable: false});
}

// this file is only imported if user manually imports it; if so, apply immediately when imported
ClassExtensions_ApplyCode();