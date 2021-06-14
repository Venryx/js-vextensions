// Use this variant if you're importing the library from its Source folder, rather than its root/Dist.

import {TransferPrototypeProps} from "../Source/index.js";
import {ArrayCE_funcs} from "../Source/ClassExtensions/CE_Array.js";
import {ElementCE_funcs} from "../Source/ClassExtensions/CE_Element.js";
import {NumberCE_funcs} from "../Source/ClassExtensions/CE_Number.js";
import {ObjectCE_funcs} from "../Source/ClassExtensions/CE_Object.js";
import {DateCE_funcs, FunctionCE_funcs} from "../Source/ClassExtensions/CE_Others.js";
import {StringCE_funcs} from "../Source/ClassExtensions/CE_String.js";

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