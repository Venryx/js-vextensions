import {TransferPrototypeProps} from "../Utils/General";
import {ElementCE} from "./CE_Element";

if (typeof Element != "undefined") {
	TransferPrototypeProps(Element.prototype, ElementCE.prototype, {}, {configurable: true, enumerable: false});
}

declare global {
	interface Element {
		GetParents(topDown?: boolean): HTMLElement[];
		GetSelfAndParents(topDown?: boolean): HTMLElement[];
		QuerySelector_BreadthFirst(selector: string): HTMLElement;
		$(queryStr: string): HTMLElement[];
	}
}