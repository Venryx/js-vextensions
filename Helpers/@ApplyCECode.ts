import {TransferPrototypeProps, ObjectCEProxy, ArrayCEProxy, ElementCEProxy, FunctionCEProxy, DateCEProxy} from "../Source";
import {StringCEProxy, StringCE_funcs} from "../Source/ClassExtensions/CE_String";
import {NumberCEProxy, NumberCE_funcs} from "../Source/ClassExtensions/CE_Number";
import {ArrayCE_funcs} from "../Source/ClassExtensions/CE_Array";
import {ObjectCE_funcs} from "../Source/ClassExtensions/CE_Object";
import {ElementCE_funcs} from "../Source/ClassExtensions/CE_Element";
import {FunctionCE_funcs, DateCE_funcs} from "../Source/ClassExtensions/CE_Others";

export function ClassExtensions_ApplyCode() {
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