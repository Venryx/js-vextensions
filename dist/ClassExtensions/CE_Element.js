export class ElementCE extends (Element || {}) {
    GetParents(topDown = false) {
        let result = [];
        let currentParent = this.parentElement;
        while (currentParent) {
            result.push(currentParent);
            currentParent = currentParent.parentElement;
        }
        if (topDown)
            result.reverse();
        return result;
    }
    GetSelfAndParents(topDown = false) {
        let result = this.GetParents(topDown);
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
    QuerySelector_BreadthFirst(selector) {
        let currentLayerElements = [...this.childNodes];
        while (currentLayerElements.length) {
            let firstMatchInLayer = currentLayerElements.find(a => a["matches"] && a["matches"](selector));
            if (firstMatchInLayer)
                return firstMatchInLayer;
            //currentLayerElements = currentLayerElements.SelectMany(a=>[...a.childNodes]);
            currentLayerElements = currentLayerElements.reduce((acc, item) => acc.concat([...item.childNodes]), []);
        }
        return null;
    }
    $(queryStr) {
        return this.querySelectorAll(queryStr).ToArray();
    }
}
//# sourceMappingURL=CE_Element.js.map