import ".";

declare global { interface Element { GetParents(topDown?: boolean): HTMLElement[]; } }
if (typeof Element != "undefined")
Element.prototype._AddItem("GetParents", function(this: HTMLElement, topDown = false) {
	let result = [] as HTMLElement[];
	let currentParent = this.parentElement;
	while (currentParent) {
		result.push(currentParent);
		currentParent = currentParent.parentElement;
	}
	if (topDown) result.reverse();
	return result;
});
declare global { interface Element { GetSelfAndParents(topDown?: boolean): HTMLElement[]; } }
if (typeof Element != "undefined")
Element.prototype._AddItem("GetSelfAndParents", function(this: HTMLElement, topDown = false) {
	let result = this.GetParents(topDown);
	return topDown ? result.concat([this]) : [this].concat(result);
});

declare global { interface Element { QuerySelector_BreadthFirst(selector: string): HTMLElement; } }
if (typeof Element != "undefined")
Element.prototype._AddItem("QuerySelector_BreadthFirst", function(this: HTMLElement, selector: string) {
	let currentLayerElements = [...this.childNodes];
	while (currentLayerElements.length) {
		let firstMatchInLayer = currentLayerElements.find(a=>a["matches"] && a["matches"](selector));
		if (firstMatchInLayer) return firstMatchInLayer;
		//currentLayerElements = currentLayerElements.SelectMany(a=>[...a.childNodes]);
		currentLayerElements = currentLayerElements.reduce((acc, item)=>acc.concat([...item.childNodes]), []);
	}
	return null;
});
/*declare global { interface Element { QuerySelector_BreadthFirst(selector: string): HTMLElement[]; } }
if (typeof Element != "undefined")
Element.prototype._AddItem("QuerySelectorAll_BreadthFirst", function(this: HTMLElement, selector: string) {
		var $found = [];
		let currentSet = this.childNodes.ToArray();
		while (currentSet.length) {
			let found = currentSet.filter(a=>a.matches(selector));
			if ($found.length) break;
			 // Get all children of the current set
			 $currentSet = $currentSet.children();
		}
		return $found.first(); // Return first match of the collection
  }    
});*/

declare global { interface Element { $(queryStr: string): HTMLElement[]; } }
if (typeof Element != "undefined")
Element.prototype._AddItem("$", function(this: Element, queryStr: string): HTMLElement[] {
	return this.querySelectorAll(queryStr).ToArray();
});