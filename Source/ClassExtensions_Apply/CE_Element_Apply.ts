import {TransferPrototypeProps} from "../Utils/General";
import {ElementCE, ElementCEClass} from "../ClassExtensions/CE_Element";

if (typeof Element != "undefined") {
	TransferPrototypeProps(Element.prototype, ElementCEClass.prototype, {}, {configurable: true, enumerable: false});
}

declare global {
	// @ts-ignore
	interface Element extends ElementCEClass {}
	/*interface Element {
		GetParents(topDown?: boolean): HTMLElement[];
		GetSelfAndParents(topDown?: boolean): HTMLElement[];
		QuerySelector_BreadthFirst(selector: string): HTMLElement;
		$(queryStr: string): HTMLElement[];
	}*/
}