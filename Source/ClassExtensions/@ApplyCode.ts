import {TransferPrototypeProps, ObjectCEClass, ArrayCEClass, ElementCEClass, FunctionCEClass, DateCEClass} from "..";
import {StringCEClass} from "./CE_String";
import {NumberCEClass} from "./CE_Number";

export function ClassExtensions_ApplyCode() {
	TransferPrototypeProps(Array.prototype, ArrayCEClass.prototype, {}, {configurable: true, enumerable: false});
	if (typeof Element != "undefined") {
		TransferPrototypeProps(Element.prototype, ElementCEClass.prototype, {}, {configurable: true, enumerable: false});
	}
	TransferPrototypeProps(Number.prototype, NumberCEClass.prototype, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(Object.prototype, ObjectCEClass.prototype, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(Function.prototype, FunctionCEClass.prototype, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(Date.prototype, DateCEClass.prototype, {}, {configurable: true, enumerable: false});
	//TransferPrototypeProps(Error.prototype, ErrorCEClass.prototype, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(String.prototype, StringCEClass.prototype, {}, {configurable: true, enumerable: false});
}

// this file is only imported if user manually imports it; if so, apply immediately when imported
ClassExtensions_ApplyCode();