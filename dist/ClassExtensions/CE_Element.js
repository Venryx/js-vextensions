"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = require("../Utils/General");
exports.ElementCE_funcs = {
    GetParents: function (topDown) {
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
    },
    GetSelfAndParents: function (topDown) {
        if (topDown === void 0) { topDown = false; }
        var result = exports.ElementCE(this).GetParents(topDown);
        return topDown ? result.concat([this]) : [this].concat(result);
    },
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
    QuerySelector_BreadthFirst: function (selector) {
        var currentLayerElements = Array.from(this.childNodes);
        while (currentLayerElements.length) {
            var firstMatchInLayer = currentLayerElements.find(function (a) { return a["matches"] && a["matches"](selector); });
            if (firstMatchInLayer)
                return firstMatchInLayer;
            //currentLayerElements = currentLayerElements.SelectMany(a=>[...a.childNodes]);
            currentLayerElements = currentLayerElements.reduce(function (acc, item) { return acc.concat(Array.from(item.childNodes)); }, []);
        }
        return null;
    },
    $: function (queryStr) {
        return Array.from(this.querySelectorAll(queryStr));
    },
};
exports.ElementCE = General_1.CreateProxyForClassExtensions(exports.ElementCE_funcs);
// maybe make ElementCE preserve the target-type, like ObjectCE and ArrayCE do (not needed atm, since the CE-methods don't make any/much use of the target's type-data)
//export const ElementCE = CreateProxyForClassExtensions(ElementCE_funcs) as <T>(nextThis: T)=>ElementCEProxy;
exports.ElementCES = General_1.WithFuncsStandalone(exports.ElementCE_funcs);
//# sourceMappingURL=CE_Element.js.map