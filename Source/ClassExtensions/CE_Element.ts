import {CreateWrapperForClassExtensions, WithFuncsStandalone} from "../Utils/General";

export class ElementCEClass {
	GetParents(this: Element, topDown = false) {
		let result = [] as HTMLElement[];
		let currentParent = this.parentElement;
		while (currentParent) {
			result.push(currentParent);
			currentParent = currentParent.parentElement;
		}
		if (topDown) result.reverse();
		return result;
	}
	GetSelfAndParents(this: HTMLElement, topDown = false) {
		let result = ElementCE(this).GetParents(topDown);
		return topDown ? result.concat([this]) : [this].concat(result);
	}

	/*QuerySelectorAll_BreadthFirst(this: HTMLElement, selector: string) {
		var $found = [];
		let currentSet = this.childNodes.ToArray();
		while (currentSet.length) {
			let found = currentSet.filter(a=>a.matches(selector));
			if ($found.length) break;
			// Get all children of the current set
			$currentSet = $currentSet.children();
		}
		return $found.first(); // Return first match of the collection
	}*/
	QuerySelector_BreadthFirst(this: Element, selector: string) {
		let currentLayerElements = Array.from(this.childNodes);
		while (currentLayerElements.length) {
			let firstMatchInLayer = currentLayerElements.find(a=>a["matches"] && a["matches"](selector));
			if (firstMatchInLayer) return firstMatchInLayer as HTMLElement;
			//currentLayerElements = currentLayerElements.SelectMany(a=>[...a.childNodes]);
			currentLayerElements = currentLayerElements.reduce((acc, item)=>acc.concat(Array.from(item.childNodes)), []);
		}
		return null;
	}

	$(this: Element, queryStr: string): HTMLElement[] {
		return Array.from(this.querySelectorAll(queryStr)) as HTMLElement[];
	}
}
export const ElementCE = CreateWrapperForClassExtensions(ElementCEClass);
export const ElementCES = WithFuncsStandalone(ElementCEClass.prototype);