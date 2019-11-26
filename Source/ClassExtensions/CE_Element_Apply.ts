import {TransferPrototypeProps} from "../Utils/General";
import {ElementCE, ElementCEClass} from "./CE_Element";

if (typeof Element != "undefined") {
	TransferPrototypeProps(Element.prototype, ElementCE, {}, {configurable: true, enumerable: false});
}

declare global {
	interface Element extends ElementCEClass {}
	/*interface Element {
		GetParents(topDown?: boolean): HTMLElement[];
		GetSelfAndParents(topDown?: boolean): HTMLElement[];
		QuerySelector_BreadthFirst(selector: string): HTMLElement;
		$(queryStr: string): HTMLElement[];
	}*/
}