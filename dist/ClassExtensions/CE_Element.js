"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = require("../Utils/General");
var ElementCEClass = /** @class */ (function () {
    function ElementCEClass() {
    }
    ElementCEClass.prototype.GetParents = function (topDown) {
        if (topDown === void 0) { topDown = false; }
        var result = [];
        var currentParent = this.parentElement;
        while (currentParent) {
            result.push(currentParent);
            currentParent = currentParent.parentElement;
        }
        if (topDown)
            result.reverse();
        return result;
    };
    ElementCEClass.prototype.GetSelfAndParents = function (topDown) {
        if (topDown === void 0) { topDown = false; }
        var result = exports.ElementCE(this).GetParents(topDown);
        return topDown ? result.concat([this]) : [this].concat(result);
    };
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
    ElementCEClass.prototype.QuerySelector_BreadthFirst = function (selector) {
        var currentLayerElements = Array.from(this.childNodes);
        while (currentLayerElements.length) {
            var firstMatchInLayer = currentLayerElements.find(function (a) { return a["matches"] && a["matches"](selector); });
            if (firstMatchInLayer)
                return firstMatchInLayer;
            //currentLayerElements = currentLayerElements.SelectMany(a=>[...a.childNodes]);
            currentLayerElements = currentLayerElements.reduce(function (acc, item) { return acc.concat(Array.from(item.childNodes)); }, []);
        }
        return null;
    };
    ElementCEClass.prototype.$ = function (queryStr) {
        return Array.from(this.querySelectorAll(queryStr));
    };
    return ElementCEClass;
}());
exports.ElementCEClass = ElementCEClass;
exports.ElementCE = General_1.CreateWrapperForClassExtensions(ElementCEClass);
//# sourceMappingURL=CE_Element.js.map