import {TransferPrototypeProps} from "../Dist";
import {ArrayCE_funcs} from "../Dist/ClassExtensions/CE_Array";
import {ElementCE_funcs} from "../Dist/ClassExtensions/CE_Element";
import {NumberCE_funcs} from "../Dist/ClassExtensions/CE_Number";
import {ObjectCE_funcs} from "../Dist/ClassExtensions/CE_Object";
import {DateCE_funcs, FunctionCE_funcs} from "../Dist/ClassExtensions/CE_Others";
import {StringCE_funcs} from "../Dist/ClassExtensions/CE_String";

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