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

declare global { interface Element { $(queryStr: string): HTMLElement[]; } }
if (typeof Element != "undefined")
Element.prototype._AddItem("$", function(this: Element, queryStr: string): HTMLElement[] {
	return this.querySelectorAll(queryStr).ToArray();
});