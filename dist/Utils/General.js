var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { IsPrimitive, IsString, IsObject } from "./Types";
import { Assert, ArrayCE, NumberCE, ObjectCE, StringCE } from "..";
let g = typeof window == "object" ? window : global;
if (Number.MIN_SAFE_INTEGER == null) {
    Number.MIN_SAFE_INTEGER = -9007199254740991;
}
if (Number.MAX_SAFE_INTEGER == null) {
    Number.MAX_SAFE_INTEGER = 9007199254740991;
}
g["G"] = G;
function G(...globalHolders) {
    for (let globalHolder of globalHolders) {
        Object.assign(g, globalHolder);
    }
}
export function DoNothing(...args) { }
export function DN(...args) { }
//var quickIncrementValues = {};
//export function QuickIncrement(name = new Error().stack.split("\n")[2]) { // this doesn't always work, fsr
export function QuickIncrement(name = "default") {
    QuickIncrement["values"][name] = (QuickIncrement["values"][name] | 0) + 1;
    return QuickIncrement["values"][name];
}
QuickIncrement["values"] = [];
export const emptyObj = {};
export const eo = emptyObj; // used for (maybeNullVar || eo).prop;
export const emptyArray = [];
export const emptyArray_forLoading = [];
export function E(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20) {
    var result = {};
    for (let extend of Array.from(arguments)) {
        Object.assign(result, extend);
    }
    // if result is empty, return the same empty-obj each time so it doesn't trigger react-js rerenders
    if (emptyObj && ObjectCE(result).VKeys().length == 0) {
        return emptyObj;
    }
    return result;
    //return StyleSheet.create(result);
}
export function WrapWithGo(func) {
    Object.defineProperty(func, "Go", {
        /*set: arg1=>{
            func(arg1);
        },*/
        set: func,
    });
    return func;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
// Performs equality by iterating through keys on an object and returning false when any key has values which are not strictly equal between the arguments.
// Returns true when the values of all keys are strictly equal.
export function ShallowEquals(objA, objB) {
    if (Object.is(objA, objB))
        return true;
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null)
        return false;
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length)
        return false;
    // test for A's keys different from B
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
export function ShallowChanged(objA, objB) {
    return !ShallowEquals(objA, objB);
}
export function CopyText(text) {
    /*
    //var note = $(`<input type="text">`).appendTo("body");
    var note = document.createElement("textarea");
    document.body.appendChild(note);
    note.innerHTML = text;

    note.focus();
    var range = document.createRange();
    range.setStart(note, 0);
    range.setEnd(note, 1);
    //range.setEnd(note2, 0);

    //range.setEnd(e("notesEnder"), 0); // adds one extra new-line; that's okay, right?
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    document.execCommand("copy");*/
    document.oncopy = function (event) {
        event.clipboardData.setData("text/plain", text);
        event.preventDefault();
        document.oncopy = null;
    };
    document.execCommand("copy", false, null);
}
// methods: serialization
// ==========
// object-Json
export function FromJSON(json) { return JSON.parse(json); }
/*declare global { function ToJSON(obj, ...excludePropNames): string; } g.Extend({ToJSON});
export function ToJSON(obj, ...excludePropNames): string {
    try {
        if (arguments.length > 1) {
            return JSON.stringify(obj, function(key, value) {
                if (excludePropNames.Contains(key))
                    return;
                return value;
            });
        }
        return JSON.stringify(obj);
    }
    catch (ex) {
        if (ex.toString() == "TypeError: Converting circular structure to JSON")
            return ToJSON_Safe.apply(this, arguments);
        throw ex;
    }
}*/
export function ToJSON(obj, replacerFunc, spacing) {
    try {
        return JSON.stringify(obj, replacerFunc, spacing);
    }
    catch (ex) {
        if (ex.toString() == "TypeError: Converting circular structure to JSON")
            return ToJSON_Safe.apply(this, arguments);
        throw ex;
    }
}
export class ToJSON_WithSpaces_Options {
    constructor() {
        this.insideObjectBraces = false;
        this.insideArrayBrackets = false;
        this.betweenPropsOrItems = true;
        this.betweenPropNameAndValue = true;
    }
}
export function ToJSON_WithSpaces(obj, options) {
    options = E(new ToJSON_WithSpaces_Options(), options);
    let result = JSON.stringify(obj, null, 1); // stringify, with line-breaks and indents
    result = result.replace(/^ +/gm, " "); // remove all but the first space for each line
    result = result.replace(/\n/g, ""); // remove line-breaks
    if (!options.insideObjectBraces)
        result = result.replace(/{ /g, "{").replace(/ }/g, "}");
    if (!options.insideArrayBrackets)
        result = result.replace(/\[ /g, "[").replace(/ \]/g, "]");
    if (!options.betweenPropsOrItems)
        result = result.replace(/, /g, ",");
    if (!options.betweenPropNameAndValue)
        result = result.replace(/": /g, `":`);
    return result;
}
export function ToJSON_Safe(obj, ...excludePropNames) {
    var cache = [];
    var foundDuplicates = false;
    var result = JSON.stringify(obj, function (key, value) {
        if (ArrayCE(excludePropNames).Contains(key))
            return;
        if (typeof value == 'object' && value !== null) {
            // if circular reference found, discard key
            if (cache.indexOf(value) !== -1) {
                foundDuplicates = true;
                return;
            }
            cache.push(value); // store value in our cache
        }
        return value;
    });
    //cache = null; // enable garbage collection
    if (foundDuplicates)
        result = "[was circular]" + result;
    return result;
}
export function ToJSON_Try(...args) {
    try {
        return ToJSON.apply(this, args);
    }
    catch (ex) { }
    return "[converting to JSON failed]";
}
export function Clone(obj, keepPrototype = false) {
    if (obj == null)
        return obj;
    let result = FromJSON(ToJSON(obj));
    if (keepPrototype == true) {
        Object.setPrototypeOf(result, Object.getPrototypeOf(obj));
    }
    return result;
}
export function CloneWithPrototypes(originalObject, keepCircularLinks = false) {
    if (originalObject == null)
        return originalObject;
    let copies = [{
            source: originalObject,
            target: Array.isArray(originalObject) ? [] : Object.create(Object.getPrototypeOf(originalObject)),
        }];
    let cloneObject = copies[0].target;
    let sourceReferences = [originalObject];
    let targetReferences = [cloneObject];
    // First in, first out
    let current;
    while (current = copies.shift()) {
        let keys = Object.getOwnPropertyNames(current.source);
        for (let propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
            // Save the source's descriptor
            let descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);
            if (!descriptor.value || typeof descriptor.value !== 'object') {
                Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                continue;
            }
            let nextSource = descriptor.value;
            descriptor.value = Array.isArray(nextSource) ? [] : Object.create(Object.getPrototypeOf(nextSource));
            if (keepCircularLinks) {
                let indexOf = sourceReferences.indexOf(nextSource);
                if (indexOf !== -1) {
                    // The source is already referenced, just assign reference
                    descriptor.value = targetReferences[indexOf];
                    Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                    continue;
                }
                sourceReferences.push(nextSource);
                targetReferences.push(descriptor.value);
            }
            Object.defineProperty(current.target, keys[propertyIndex], descriptor);
            copies.push({ source: nextSource, target: descriptor.value });
        }
    }
    return cloneObject;
}
/*export function Range(min, max, step = 1, includeMax = true) {
    var result: number[] = [];
    for (let i = min; includeMax ? i <= max : i < max; i += step)
        result.push(i);
    return result;
}*/
/**
 * Gets an array of the numbers between min and max.
 * @param min
 * @param max
 * @param step (default: 1)
 * @param includeMax (default: true)
 * @param roundToStep (default: true)
 */
export function Range(min, max, step = 1, includeMax = true, roundToStep = true) {
    var result = [];
    for (let i = min; includeMax ? i <= max : i < max; i = roundToStep ? NumberCE(i + step).RoundTo(step) : i + step) {
        result.push(i);
    }
    return result;
}
export function Global(target) {
    //var name = (target as any).GetName();
    var name = target["name_fake"] || target.name || (target.toString().match(/^function\s*([^\s(]+)/) || [])[1];
    //console.log("Globalizing: " + name);
    g[name] = target;
}
export class IDProvider {
    constructor() {
        this.lastID = -1;
    }
    GetID() {
        return ++this.lastID;
    }
}
export const nl = "\n";
export function AsObj(obj) {
    if (typeof obj == "object")
        return obj;
    if (obj != null)
        return obj.Props().ToMap(a => a.name, a => a.value);
    return {};
}
export function AsArray(args) { return Slice(args, 0); }
;
//s.ToArray = function(args) { return s.Slice(args, 0); };
export function Slice(args, start, end) { return Array.prototype.slice.call(args, start != null ? start : 0, end); }
;
/*static startupInfo = null;
static startupInfoRequested = false;
static postStartupInfoReceivedFuncs = [];
static WaitForStartupInfoThenRun(func) {
    if (startupInfo)
        func(startupInfo);
    else
        V.postStartupInfoReceivedFuncs.push(func);
}*/
// example:
// var multilineText = V.Multiline(function() {/*
//		Text that...
//		spans multiple...
//		lines.
// */});
export function Multiline(functionWithInCommentMultiline, useExtraPreprocessing) {
    useExtraPreprocessing = useExtraPreprocessing != null ? useExtraPreprocessing : true;
    var text = functionWithInCommentMultiline.toString().replace(/\r/g, "");
    // some extra preprocessing
    if (useExtraPreprocessing) {
        text = text.replace(/@@.*/g, ""); // remove single-line comments
        //text = text.replace(/@\**?\*@/g, ""); // remove multi-line comments
        text = text.replace(/@\*/g, "/*").replace(/\*@/g, "*/"); // fix multi-line comments
    }
    var firstCharPos = text.indexOf("\n", text.indexOf("/*")) + 1;
    return text.substring(firstCharPos, text.lastIndexOf("\n"));
}
export function Multiline_NotCommented(functionWithCode) {
    var text = functionWithCode.toString().replace(/\r/g, "");
    var firstCharOfSecondLinePos = text.indexOf("\n") + 1;
    var enderOfSecondLastLine = text.lastIndexOf("\n");
    var result = text.substring(firstCharOfSecondLinePos, enderOfSecondLastLine);
    result = result.replace(/\t/g, "    ");
    // replace the start and end tokens of special string-containers (used for keeping comments in-tact)
    result = result.replace(/['"]@((?:.|\n)+)@['"];(\n(?=\n))?/g, (match, sub1) => sub1.replace(/\\n/, "\n"));
    return result;
}
export function StableSort(array, compare) {
    var array2 = array.map((item, index) => ({ index, item }));
    array2.sort((a, b) => {
        var r = compare(a.item, b.item, a.index, b.index);
        return r != 0 ? r : Compare(a.index, b.index);
    });
    return array2.map(pack => pack.item);
}
export function Compare(a, b, caseSensitive = true) {
    if (!caseSensitive && typeof a == "string" && typeof b == "string") {
        a = a.toLowerCase();
        b = b.toLowerCase();
    }
    return a < b ? -1 : (a > b ? 1 : 0);
}
// just use the word 'percent', even though value is represented as fraction (e.g. 0.5, rather than 50[%])
export function Lerp(from, to, percentFromXToY, keepResultInRange = true) {
    let result = from + ((to - from) * percentFromXToY);
    if (keepResultInRange)
        result = NumberCE(result).KeepBetween(from, to);
    return result;
}
export function GetPercentFromXToY(start, end, val, keepResultInRange = true) {
    // distance-from-x / distance-from-x-required-for-result-'1'
    var result = (val - start) / (end - start);
    if (keepResultInRange)
        result = NumberCE(result).KeepBetween(0, 1);
    return result;
}
export function GetXToY(minX, maxY, interval = 1) {
    var result = [];
    for (var val = minX; val <= maxY; val += interval) {
        result.push(val);
    }
    return result;
}
export function GetXToYOut(minX, maxOutY, interval = 1) {
    var result = [];
    for (var val = minX; val < maxOutY; val += interval) {
        result.push(val);
    }
    return result;
}
export function CloneObject(obj, propMatchFunc, depth = 0) {
    /*var Assert = require("../../Frame/General/Assert").Assert;
    Assert(depth < 100, "CloneObject cannot work past depth 100! (probably circular ref)");*/
    if (obj == null)
        return null;
    if (IsPrimitive(obj))
        return obj;
    //if (obj.GetType() == Array)
    if (obj.constructor == Array)
        return CloneArray(obj);
    /*if (obj instanceof List)
        return List.apply(null, [obj.itemType].concat(V.CloneArray(obj)));
        if (obj instanceof Dictionary) {
            let result = new Dictionary(obj.keyType, obj.valueType);
            for (let pair of obj.Pairs)
                result.Add(pair.key, pair.value);
            return result;
        }*/
    let result = {};
    for (let prop of obj.Props()) {
        if (!(prop.value instanceof Function) && (propMatchFunc == null || propMatchFunc.call(obj, prop.name, prop.value)))
            result[prop.name] = CloneObject(prop.value, propMatchFunc, depth + 1);
    }
    return result;
}
export function CloneArray(array) {
    //array.slice(0); //deep: JSON.parse(JSON.stringify(array));
    return Array.prototype.slice.call(array, 0);
}
/*static IsEqual(a, b) {
    function _equals(a, b) { return JSON.stringify(a) === JSON.stringify($.extend(true, {}, a, b)); }
    return _equals(a, b) && _equals(b, a);
};*/
export function Bind(func, newThis) {
    return func.bind(newThis);
}
/*static ForEachChildInTreeXDoY(treeX: any, actionY: (value, key: string)=>void) {
    for (let key in treeX) {
        let value = treeX[key];
        actionY(value, key);
        if (typeof value == "object" || value instanceof Array)
            V.ForEachChildInTreeXDoY(value, actionY);
    }
}*/
function GetHiddenHolder() {
    let holder = document.querySelector("#jsve_hiddenContainer");
    if (holder == null) {
        holder = document.createElement("div");
        holder.id = "jsve_hiddenContainer";
        ObjectCE(holder.style).Extend({ position: "absolute", left: `-1000px`, top: `-1000px`, width: `1000px`, height: `1000px`, overflow: "hidden" });
        document.body.appendChild(holder);
    }
    return holder;
}
let GetContentSize_cache = {};
export function GetContentSize(content, includeMargin = false, createClone = false, allowCache = true) {
    /*var holder = $("#jsve_hiddenContainer");
    var contentClone = content.clone();
    holder.append(contentClone);
    var width = contentClone.outerWidth();
    var height = contentClone.outerHeight();
    contentClone.remove();*/
    let cacheStore = IsString(content) ? GetContentSize_cache : (content["GetContentSize_cache"] = content["GetContentSize_cache"] || {});
    let currentHTML = IsString(content) ? content : content.outerHTML;
    let result = cacheStore[currentHTML];
    if (result == null) {
        let holder = GetHiddenHolder();
        let testElement = IsString(content) ? $(content) : (createClone ? $(content).clone() : $(content));
        holder.appendChild(testElement[0]);
        var width = testElement.outerWidth(includeMargin);
        var height = testElement.outerHeight(includeMargin);
        testElement.remove();
        result = { width, height };
        if (allowCache) {
            cacheStore[currentHTML] = result;
        }
    }
    return result;
}
export function GetContentWidth(content, includeMargin = false, createClone = false, allowCache = true) {
    return GetContentSize(content, includeMargin, createClone, allowCache).width;
}
export function GetContentHeight(content, includeMargin = false, createClone = false, allowCache = true) {
    return GetContentSize(content, includeMargin, createClone, allowCache).height;
}
export let autoElements = {};
export function GetAutoElement(startHTML) {
    if (autoElements[startHTML] == null) {
        let holder = GetHiddenHolder();
        let element = $(startHTML)[0];
        holder.appendChild(element);
        autoElements[startHTML] = element;
    }
    return autoElements[startHTML];
}
export class TreeNode {
    constructor(ancestorNodes, obj, prop) {
        this.ancestorNodes = ancestorNodes;
        this.obj = obj;
        this.prop = prop;
    }
    get PathNodes() {
        if (this.prop == "_root")
            return [];
        return ArrayCE(this.ancestorNodes).Select(a => a.prop).concat(this.prop);
    }
    get PathStr() {
        return this.PathNodes.join("/");
    }
    get PathStr_Updeep() {
        return this.PathNodes.join(".");
    }
    //value;
    get Value() {
        if (this.obj == null)
            return undefined;
        return this.obj[this.prop];
    }
    set Value(newVal) {
        this.obj[this.prop] = newVal;
    }
}
export function GetTreeNodesInObjTree(obj, includeRootNode = false, _ancestorNodes = []) {
    Assert(_ancestorNodes.length <= 300, "Cannot traverse more than 300 levels into object tree. (probably circular)");
    let result = [];
    if (includeRootNode)
        result.push(new TreeNode([], { _root: obj }, "_root"));
    /*for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue;*/
    for (const key of Object.keys(obj)) {
        let value = obj[key];
        let currentNode = new TreeNode(_ancestorNodes, obj, key);
        result.push(currentNode);
        if (value != null && IsObject(value)) {
            ArrayCE(result).AddRange(GetTreeNodesInObjTree(value, false, _ancestorNodes.concat(currentNode)));
        }
    }
    return result;
}
/*export function CloneTreeDownToXWhileReplacingXValue(treeRoot, pathToX: string, newValueForX) {
    let pathNodes = pathToX.split("/");
    let currentPathNode = pathNodes[0];
    let currentPathNode_newValue = pathNodes.length > 1
        ? CloneTreeDownToXWhileReplacingXValue(treeRoot[currentPathNode], pathNodes.Skip(1).join("/"), newValueForX)
        : newValueForX;
    return {...treeRoot, [currentPathNode]: currentPathNode_newValue};
}*/
export function GetTreeNodesInPath(treeRoot, pathNodesOrStr, includeRootNode = false, _ancestorNodes = []) {
    let descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
    let childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
    var result = [];
    if (includeRootNode) {
        result.push(new TreeNode([], { _root: treeRoot }, "_root"));
    }
    result.push(childTreeNode);
    if (descendantPathNodes.length > 1) { // if the path goes deeper than the current child-tree-node
        result.push(...GetTreeNodesInPath(childTreeNode ? childTreeNode.Value : null, ArrayCE(descendantPathNodes).Skip(1).join("/"), false, _ancestorNodes.concat(childTreeNode)));
    }
    return result;
}
/*export function GetTreeNodesInPath_WithRoot(treeRoot, path: string) {
    return GetTreeNodesInPath({root: treeRoot}, "root/" + path).Skip(1);
}*/
export function VisitTreeNodesInPath(treeRoot, pathNodesOrStr, visitFunc, visitRootNode = false, _ancestorNodes = []) {
    if (visitRootNode)
        visitFunc(new TreeNode([], { _root: treeRoot }, "_root"));
    let descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
    let childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
    visitFunc(childTreeNode);
    if (descendantPathNodes.length > 1) // if the path goes deeper than the current child-tree-node
        VisitTreeNodesInPath(childTreeNode.Value, ArrayCE(descendantPathNodes).Skip(1).join("/"), visitFunc, false, _ancestorNodes.concat(childTreeNode));
    return treeRoot;
}
/*export function VisitTreeNodesInPath_WithRoot(treeRoot, path: string, visitFunc: (node: TreeNode)=>any) {
    VisitTreeNodesInPath({root: treeRoot}, "root/" + path, visitFunc);
    return treeRoot;
}*/
export function ConvertPathGetterFuncToPropChain(pathGetterFunc) {
    let funcStr = pathGetterFunc.toString();
    Assert(!funcStr.includes("["), `State-getter-func cannot contain bracket-based property-access.\n${nl}For variable inclusion, use multiple segments as in: ...ToPropChain("main", "mapViews", mapID)`);
    /*const pathStr = funcStr.match(/return [^.]+\.(.+?);/)[1] as string;
    //let result = pathStr.replace(/\./g, "/");
    const result = pathStr.split(".");*/
    let parts = funcStr.split(".").slice(1); // remove first segment, since it's just the "return xxx." part
    parts[parts.length - 1] = parts[parts.length - 1].match(/^([a-zA-Z0-9_$]+)/)[1]; // remove semicolon (or whatever else) at the end
    return parts;
}
/** @param sepChar Default: "/" */
export function DeepGet(obj, pathOrPathSegments, resultIfNull = null, sepChar = "/") {
    let pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    let result = obj;
    for (let pathNode of pathSegments) {
        if (result == null)
            break;
        result = result[pathNode];
    }
    if (result == null)
        return resultIfNull;
    return result;
}
/** @param sepChar Default: "/" */
export function DeepSet(obj, pathOrPathSegments, newValue, sepChar = "/", createPathSegmentsIfMissing = true, deleteUndefined = false) {
    let pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    let deepObj = obj;
    // tunnel down to the object holding the path-specified prop
    pathSegments.slice(0, -1).forEach(segment => {
        if (deepObj[segment] == null) {
            if (createPathSegmentsIfMissing) {
                deepObj[segment] = {};
            }
            else {
                Assert(false, `The given path (${pathSegments.join("/")}) had a missing segment (${segment}), so the deep-set failed.`);
            }
        }
        deepObj = deepObj[segment];
    });
    if (newValue === undefined && deleteUndefined) {
        delete deepObj[ArrayCE(pathSegments).Last()];
    }
    else {
        deepObj[ArrayCE(pathSegments).Last()] = newValue;
    }
}
/** @param sepChar Default: "/" */
/*export function WithDeepSet(baseObj, pathOrPathSegments: string | (string | number)[], newValue, sepChar = "/") {
    let pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);

    let result;
    let result_deep;
    let baseObj_deep = baseObj;
    // tunnel down to the given path, overwriting the result_deep and baseObj_deep variables along the way
    pathSegments.forEach((segment, index)=> {
        // initialize with correct constructor for special cases (there might be some others, but this is sufficient for now)
        result_deep = baseObj_deep instanceof Array ? [...baseObj_deep] : {...baseObj_deep};
        Object.setPrototypeOf(result_deep, Object.getPrototypeOf(baseObj_deep)); // set the prototype to match
        result = result || result_deep;

        if (index < pathSegments.length - 1) {
            // tunnel down, for next iteration
            result_deep = result_deep[segment];
            baseObj_deep = baseObj_deep[segment];
        } else {
            result_deep[segment] = newValue;
        }
    });
    return result;
}*/
export function WithDeepSet(baseObj, pathOrPathSegments, newValue, sepChar = "/") {
    let pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    return Object.assign(Object.assign({}, baseObj), { [pathSegments[0]]: pathSegments.length > 1 ? WithDeepSet(baseObj[pathSegments[0]], pathSegments.slice(1), newValue) : newValue });
}
//@((()=> { if (g.onclick == null) g.onclick = ()=>console.log(V.GetStackTraceStr()); }) as any)
export function GetStackTraceStr(...args) {
    var stackTrace, sourceStackTrace = true;
    if (IsString(args[0]))
        [stackTrace, sourceStackTrace] = args;
    else
        [sourceStackTrace] = args;
    //stackTrace = stackTrace || new Error()[sourceStackTrace ? "Stack" : "stack"];
    //stackTrace = stackTrace || (sourceStackTrace ? StackTrace.get().then(stack=>stackTrace = stack.map(a=>a.toString()).join("\n")) : new Error().stack);
    //stackTrace = stackTrace || new Error().stack;
    if (stackTrace == null) {
        //let fakeError = {}.VAct(a=>Error.captureStackTrace(a));
        let oldStackLimit = Error.stackTraceLimit;
        Error.stackTraceLimit = Infinity;
        let fakeError = new Error();
        stackTrace = fakeError.stack;
        Error.stackTraceLimit = oldStackLimit;
    }
    return stackTrace.substr(StringCE(stackTrace).IndexOf_X("\n", 1)); // remove "Error" line and first stack-frame (that of this method)
}
export function GetErrorMessagesUnderElement(element) {
    //return element.querySelectorAll(":invalid").ToList().map(node=>node.validationMessage || `Invalid value.`);
    return Array.from(element.querySelectorAll(":invalid")).map(node => node.validationMessage || `Invalid value.`);
}
export const DEL = "JS_VEXTENSIONS_SPECIAL_DELETE_KEY";
export function FindDOM(selector) {
    return document.querySelector(selector);
}
export function FindDOMAll(selector) {
    return Array.from(document.querySelectorAll(selector));
}
export function WaitTillDataPathIsSet(dataPath) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let dataPathParts = dataPath.split(".");
        let currentParent = g;
        for (let part of dataPathParts) {
            while (currentParent[part] == null) {
                yield WaitTillPropertyIsSet(currentParent, part);
            }
            currentParent = currentParent[part];
        }
        resolve();
    }));
}
export function WaitTillPropertyIsSet(obj, prop) {
    return new Promise((resolve, reject) => {
        ObjectCE(obj)._AddGetterSetter(prop, () => { }, value => {
            delete obj[prop]; // remove this hook
            obj[prop] = value; // set to provided value
            resolve();
        });
    });
}
export var CapScheme;
(function (CapScheme) {
    /** examplePropNameWithDuoWord */ CapScheme[CapScheme["PropName"] = 0] = "PropName";
    /** Example Title With Duo-Word */ CapScheme[CapScheme["Title"] = 1] = "Title";
    /** Example sentence with duo-word */ CapScheme[CapScheme["Sentence"] = 2] = "Sentence";
})(CapScheme || (CapScheme = {}));
export function ChangeCapitalization(text, fromScheme, toScheme) {
    let inStandardScheme = ConvertFromSchemeXToStandardScheme(text, fromScheme);
    return ConvertFromStandardSchemeToSchemeX(inStandardScheme, toScheme);
}
// "standard scheme" is currently CapitalizeScheme.Sentence
function ConvertFromSchemeXToStandardScheme(text, fromScheme) {
    if (fromScheme == CapScheme.PropName) {
        // demo string: somePropName
        return text
            // somePropName -> some prop name
            .replace(/[A-Z]/g, a => " " + a.toLowerCase())
            // some prop name -> Some prop name
            .replace(/^./, a => a.toUpperCase());
    }
    else if (fromScheme == CapScheme.Title) {
        Assert(false, "Not yet implemented.");
    }
    else if (fromScheme == CapScheme.Sentence) {
        return text;
    }
}
function ConvertFromStandardSchemeToSchemeX(text, toScheme) {
    if (toScheme == CapScheme.PropName) {
        Assert(false, "Not yet implemented.");
    }
    else if (toScheme == CapScheme.Title) {
        Assert(false, "Not yet implemented.");
    }
    else if (toScheme == CapScheme.Sentence) {
        return text;
    }
}
export function StartDownload(content, filename, dataTypeStr = "data:application/octet-stream,", encodeContentAsURIComp = true) {
    var link = document.createElement("a");
    Object.assign(link.style, { display: "none" });
    link.innerText = "Save to disk";
    link.setAttribute("href", dataTypeStr + (encodeContentAsURIComp ? encodeURIComponent(content) : content));
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
export function StartUpload() {
    return new Promise(resolve => {
        let fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.style.display = "none";
        fileInput.onchange = e => {
            var file = e.target["files"][0];
            if (!file)
                return;
            var reader = new FileReader();
            reader.onload = e => {
                var contents = e.target["result"];
                //Assert(typeof contents == "string")
                resolve(contents);
            };
            reader.readAsText(file);
        };
        document.body.appendChild(fileInput);
        fileInput.click();
    });
}
export function TransferPrototypeProps(target, source, descriptorBase, descriptorOverride) {
    //for (let [name, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(source))) {
    for (let name of Object.getOwnPropertyNames(source)) {
        if (name == "constructor")
            continue;
        let descriptor = Object.getOwnPropertyDescriptor(source, name);
        Object.defineProperty(target, name, Object.assign({}, descriptorBase, descriptor, descriptorOverride));
    }
}
export function WithFuncsStandalone(source) {
    let result = {};
    for (const key of Object.getOwnPropertyNames(source)) {
        if (key == "constructor")
            continue; // no reason to call the wrapper's constructor
        const descriptor = Object.getOwnPropertyDescriptor(source, key);
        const newDescriptor = Object.assign({}, descriptor);
        if (descriptor.value instanceof Function) {
            const oldFunc = descriptor.value;
            newDescriptor.value = (thisArg, ...callArgs) => {
                return oldFunc.apply(thisArg, callArgs);
            };
        }
        Object.defineProperty(result, key, newDescriptor);
    }
    return result;
}
/*export type WithFuncThisArgsAsAny_Type<T> = {
    [P in keyof T]:
        T[P] extends (this: any, ...args)=>any ? (this: any, ...args: Parameters<T[P]>)=>ReturnType<T[P]> :
        T[P];
};
export function WithFuncThisArgsAsAny<T>(source: T): WithFuncThisArgsAsAny_Type<T> {
    return source as any;
}*/
/*export type WithFuncThisArgTypesWrappedBy_Type<T> = {
    [P in keyof T]:
        T[P] extends (this: infer T2, ...args)=>any ? (this: T<T2>, ...args: Parameters<T[P]>)=>ReturnType<T[P]> :
        T[P];
};
export function WithFuncThisArgTypesWrappedBy<T>(source: T): WithFuncThisArgTypesWrappedBy_Type<T> {
    return source as any;
}*/
// use this simpler variant for class-extensions of target-types, where the class-extension methods don't need the type-generics of the target-type
/*export function CreateProxyForClassExtensions_ThisAsAny<T>(sourceClass: new(...args: any[])=>T) {
    return CreateProxyForClassExtensions<WithFuncThisArgsAsAny_Type<T>>(sourceClass as any);
}*/
//export function CreateProxyForClassExtensions<T>(sourceClass: new(...args: any[])=>T) {
//export function CreateProxyForClassExtensions(sourceClass_prototype: any) {
// old comment: we don't use this (specifying types at time of proxy-creation), as it would cause loss/simplifying of type-data for function calls
export function CreateProxyForClassExtensions(sourceClass_prototype) {
    // proxy approach; nicer, but I don't like potential slowdown from creating new proxy each time a class-extension method is called!
    /*return (thisArg: any)=> {
        return new Proxy({}, {
            get(target, key, receiver?) {
                if (key == "constructor") return Reflect.get(target, key, receiver); // no reason to call the wrapper's constructor
                let descriptor = Object.getOwnPropertyDescriptor(sourceClass.prototype, key);
                if (descriptor.value instanceof Function) {
                    let oldFunc = descriptor.value as Function;
                    return (...callArgs)=> {
                        return oldFunc.apply(thisArg, callArgs);
                    };
                }
            }
        //}) as T;
        }) as WithFuncThisArgsAsAny_Type<T>;
    };*/
    // Static proxy approach -- a bit faster since it doesn't create any functions, closures, or proxies per wrap/CE-method-call.
    //	(Limitation: you can't store the result of "ObjectCE(something)" and call a method attached to it more than once, since each method-call removes the supplied this-arg from the stack.)
    /*let proxy = {} as any;
    const thisArgStack = [];*/
    let proxy = {};
    const thisArgStack = [];
    for (const key of Object.getOwnPropertyNames(sourceClass_prototype)) {
        if (key == "constructor")
            continue; // no reason to call the wrapper's constructor
        const descriptor = Object.getOwnPropertyDescriptor(sourceClass_prototype, key);
        const newDescriptor = Object.assign({}, descriptor);
        if (descriptor.value instanceof Function) {
            const oldFunc = descriptor.value;
            newDescriptor.value = (...callArgs) => {
                const thisArg = thisArgStack[thisArgStack.length - 1];
                const result = oldFunc.apply(thisArg, callArgs);
                //thisArgStack.length--;
                thisArgStack.splice(thisArgStack.length - 1, 1);
                return result;
            };
        }
        Object.defineProperty(proxy, key, newDescriptor);
    }
    //return (nextThis: any)=> {
    return (nextThis) => {
        thisArgStack.push(nextThis);
        return proxy;
    };
}
//# sourceMappingURL=General.js.map