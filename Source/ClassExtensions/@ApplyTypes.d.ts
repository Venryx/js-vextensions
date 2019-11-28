import {ObjectCEClass, ArrayCEClass, ElementCEClass, FunctionCEClass, DateCEClass, StringCEClass, NumberCEClass} from "..";

declare global {
	interface Array<T> extends ArrayCEClass<T> {}
	//interface NodeList<T> extends NodeListCEClass<T> {}
	interface Element extends ElementCEClass {}
	interface Number extends NumberCEClass {}
	interface Object extends ObjectCEClass<Object> {}
	interface Function extends FunctionCEClass {}
	interface Date extends DateCEClass {}
	//interface Error extends ErrorCEClass {}
	interface String extends StringCEClass {}
}