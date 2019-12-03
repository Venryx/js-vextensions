"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = require("./Types");
var __1 = require("..");
var g = typeof window == "object" ? window : global;
if (Number.MIN_SAFE_INTEGER == null) {
    Number.MIN_SAFE_INTEGER = -9007199254740991;
}
if (Number.MAX_SAFE_INTEGER == null) {
    Number.MAX_SAFE_INTEGER = 9007199254740991;
}
g["G"] = G;
function G() {
    var e_1, _a;
    var globalHolders = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        globalHolders[_i] = arguments[_i];
    }
    try {
        for (var globalHolders_1 = __values(globalHolders), globalHolders_1_1 = globalHolders_1.next(); !globalHolders_1_1.done; globalHolders_1_1 = globalHolders_1.next()) {
            var globalHolder = globalHolders_1_1.value;
            Object.assign(g, globalHolder);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (globalHolders_1_1 && !globalHolders_1_1.done && (_a = globalHolders_1.return)) _a.call(globalHolders_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function DoNothing() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
exports.DoNothing = DoNothing;
function DN() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
exports.DN = DN;
//var quickIncrementValues = {};
//export function QuickIncrement(name = new Error().stack.split("\n")[2]) { // this doesn't always work, fsr
function QuickIncrement(name) {
    if (name === void 0) { name = "default"; }
    QuickIncrement["values"][name] = (QuickIncrement["values"][name] | 0) + 1;
    return QuickIncrement["values"][name];
}
exports.QuickIncrement = QuickIncrement;
QuickIncrement["values"] = [];
exports.emptyObj = {};
exports.eo = exports.emptyObj; // used for (maybeNullVar || eo).prop;
exports.emptyArray = [];
exports.emptyArray_forLoading = [];
function E(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20) {
    var e_2, _a;
    var result = {};
    try {
        for (var _b = __values(Array.from(arguments)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var extend = _c.value;
            Object.assign(result, extend);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    // if result is empty, return the same empty-obj each time so it doesn't trigger react-js rerenders
    if (exports.emptyObj && result.VKeys().length == 0) {
        return exports.emptyObj;
    }
    return result;
    //return StyleSheet.create(result);
}
exports.E = E;
function WrapWithGo(func) {
    Object.defineProperty(func, "Go", {
        /*set: arg1=>{
            func(arg1);
        },*/
        set: func,
    });
    return func;
}
exports.WrapWithGo = WrapWithGo;
function CopyText(text) {
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
exports.CopyText = CopyText;
// methods: serialization
// ==========
// object-Json
function FromJSON(json) { return JSON.parse(json); }
exports.FromJSON = FromJSON;
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
function ToJSON(obj, replacerFunc, spacing) {
    try {
        return JSON.stringify(obj, replacerFunc, spacing);
    }
    catch (ex) {
        if (ex.toString() == "TypeError: Converting circular structure to JSON")
            return ToJSON_Safe.apply(this, arguments);
        throw ex;
    }
}
exports.ToJSON = ToJSON;
var ToJSON_WithSpaces_Options = /** @class */ (function () {
    function ToJSON_WithSpaces_Options() {
        this.insideObjectBraces = false;
        this.insideArrayBrackets = false;
        this.betweenPropsOrItems = true;
        this.betweenPropNameAndValue = true;
    }
    return ToJSON_WithSpaces_Options;
}());
exports.ToJSON_WithSpaces_Options = ToJSON_WithSpaces_Options;
function ToJSON_WithSpaces(obj, options) {
    options = E(new ToJSON_WithSpaces_Options(), options);
    var result = JSON.stringify(obj, null, 1); // stringify, with line-breaks and indents
    result = result.replace(/^ +/gm, " "); // remove all but the first space for each line
    result = result.replace(/\n/g, ""); // remove line-breaks
    if (!options.insideObjectBraces)
        result = result.replace(/{ /g, "{").replace(/ }/g, "}");
    if (!options.insideArrayBrackets)
        result = result.replace(/\[ /g, "[").replace(/ \]/g, "]");
    if (!options.betweenPropsOrItems)
        result = result.replace(/, /g, ",");
    if (!options.betweenPropNameAndValue)
        result = result.replace(/": /g, "\":");
    return result;
}
exports.ToJSON_WithSpaces = ToJSON_WithSpaces;
function ToJSON_Safe(obj) {
    var excludePropNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excludePropNames[_i - 1] = arguments[_i];
    }
    var cache = [];
    var foundDuplicates = false;
    var result = JSON.stringify(obj, function (key, value) {
        if (__1.ArrayCE(excludePropNames).Contains(key))
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
exports.ToJSON_Safe = ToJSON_Safe;
function ToJSON_Try() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    try {
        return ToJSON.apply(this, args);
    }
    catch (ex) { }
    return "[converting to JSON failed]";
}
exports.ToJSON_Try = ToJSON_Try;
function Clone(obj, keepPrototype) {
    if (keepPrototype === void 0) { keepPrototype = false; }
    if (obj == null)
        return obj;
    var result = FromJSON(ToJSON(obj));
    if (keepPrototype == true) {
        Object.setPrototypeOf(result, Object.getPrototypeOf(obj));
    }
    return result;
}
exports.Clone = Clone;
function CloneWithPrototypes(originalObject, keepCircularLinks) {
    if (keepCircularLinks === void 0) { keepCircularLinks = false; }
    if (originalObject == null)
        return originalObject;
    var copies = [{
            source: originalObject,
            target: Array.isArray(originalObject) ? [] : Object.create(Object.getPrototypeOf(originalObject)),
        }];
    var cloneObject = copies[0].target;
    var sourceReferences = [originalObject];
    var targetReferences = [cloneObject];
    // First in, first out
    var current;
    while (current = copies.shift()) {
        var keys = Object.getOwnPropertyNames(current.source);
        for (var propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
            // Save the source's descriptor
            var descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);
            if (!descriptor.value || typeof descriptor.value !== 'object') {
                Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                continue;
            }
            var nextSource = descriptor.value;
            descriptor.value = Array.isArray(nextSource) ? [] : Object.create(Object.getPrototypeOf(nextSource));
            if (keepCircularLinks) {
                var indexOf = sourceReferences.indexOf(nextSource);
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
exports.CloneWithPrototypes = CloneWithPrototypes;
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
function Range(min, max, step, includeMax, roundToStep) {
    if (step === void 0) { step = 1; }
    if (includeMax === void 0) { includeMax = true; }
    if (roundToStep === void 0) { roundToStep = true; }
    var result = [];
    for (var i = min; includeMax ? i <= max : i < max; i = roundToStep ? __1.NumberCE(i + step).RoundTo(step) : i + step) {
        result.push(i);
    }
    return result;
}
exports.Range = Range;
function Global(target) {
    //var name = (target as any).GetName();
    var name = target["name_fake"] || target.name || (target.toString().match(/^function\s*([^\s(]+)/) || [])[1];
    //console.log("Globalizing: " + name);
    g[name] = target;
}
exports.Global = Global;
var IDProvider = /** @class */ (function () {
    function IDProvider() {
        this.lastID = -1;
    }
    IDProvider.prototype.GetID = function () {
        return ++this.lastID;
    };
    return IDProvider;
}());
exports.IDProvider = IDProvider;
exports.nl = "\n";
function AsObj(obj) {
    if (typeof obj == "object")
        return obj;
    if (obj != null)
        return obj.Props().ToMap(function (a) { return a.name; }, function (a) { return a.value; });
    return {};
}
exports.AsObj = AsObj;
function AsArray(args) { return Slice(args, 0); }
exports.AsArray = AsArray;
;
//s.ToArray = function(args) { return s.Slice(args, 0); };
function Slice(args, start, end) { return Array.prototype.slice.call(args, start != null ? start : 0, end); }
exports.Slice = Slice;
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
function Multiline(functionWithInCommentMultiline, useExtraPreprocessing) {
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
exports.Multiline = Multiline;
function Multiline_NotCommented(functionWithCode) {
    var text = functionWithCode.toString().replace(/\r/g, "");
    var firstCharOfSecondLinePos = text.indexOf("\n") + 1;
    var enderOfSecondLastLine = text.lastIndexOf("\n");
    var result = text.substring(firstCharOfSecondLinePos, enderOfSecondLastLine);
    result = result.replace(/\t/g, "    ");
    // replace the start and end tokens of special string-containers (used for keeping comments in-tact)
    result = result.replace(/['"]@((?:.|\n)+)@['"];(\n(?=\n))?/g, function (match, sub1) { return sub1.replace(/\\n/, "\n"); });
    return result;
}
exports.Multiline_NotCommented = Multiline_NotCommented;
function StableSort(array, compare) {
    var array2 = array.map(function (item, index) { return ({ index: index, item: item }); });
    array2.sort(function (a, b) {
        var r = compare(a.item, b.item, a.index, b.index);
        return r != 0 ? r : Compare(a.index, b.index);
    });
    return array2.map(function (pack) { return pack.item; });
}
exports.StableSort = StableSort;
function Compare(a, b, caseSensitive) {
    if (caseSensitive === void 0) { caseSensitive = true; }
    if (!caseSensitive && typeof a == "string" && typeof b == "string") {
        a = a.toLowerCase();
        b = b.toLowerCase();
    }
    return a < b ? -1 : (a > b ? 1 : 0);
}
exports.Compare = Compare;
// just use the word 'percent', even though value is represented as fraction (e.g. 0.5, rather than 50[%])
function Lerp(from, to, percentFromXToY, keepResultInRange) {
    if (keepResultInRange === void 0) { keepResultInRange = true; }
    var result = from + ((to - from) * percentFromXToY);
    if (keepResultInRange)
        result = __1.NumberCE(result).KeepBetween(from, to);
    return result;
}
exports.Lerp = Lerp;
function GetPercentFromXToY(start, end, val, keepResultInRange) {
    if (keepResultInRange === void 0) { keepResultInRange = true; }
    // distance-from-x / distance-from-x-required-for-result-'1'
    var result = (val - start) / (end - start);
    if (keepResultInRange)
        result = __1.NumberCE(result).KeepBetween(0, 1);
    return result;
}
exports.GetPercentFromXToY = GetPercentFromXToY;
function GetXToY(minX, maxY, interval) {
    if (interval === void 0) { interval = 1; }
    var result = [];
    for (var val = minX; val <= maxY; val += interval) {
        result.push(val);
    }
    return result;
}
exports.GetXToY = GetXToY;
function GetXToYOut(minX, maxOutY, interval) {
    if (interval === void 0) { interval = 1; }
    var result = [];
    for (var val = minX; val < maxOutY; val += interval) {
        result.push(val);
    }
    return result;
}
exports.GetXToYOut = GetXToYOut;
function CloneObject(obj, propMatchFunc, depth) {
    /*var Assert = require("../../Frame/General/Assert").Assert;
    Assert(depth < 100, "CloneObject cannot work past depth 100! (probably circular ref)");*/
    var e_3, _a;
    if (depth === void 0) { depth = 0; }
    if (obj == null)
        return null;
    if (Types_1.IsPrimitive(obj))
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
    var result = {};
    try {
        for (var _b = __values(obj.Props()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var prop = _c.value;
            if (!(prop.value instanceof Function) && (propMatchFunc == null || propMatchFunc.call(obj, prop.name, prop.value)))
                result[prop.name] = CloneObject(prop.value, propMatchFunc, depth + 1);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
}
exports.CloneObject = CloneObject;
function CloneArray(array) {
    //array.slice(0); //deep: JSON.parse(JSON.stringify(array));
    return Array.prototype.slice.call(array, 0);
}
exports.CloneArray = CloneArray;
/*static IsEqual(a, b) {
    function _equals(a, b) { return JSON.stringify(a) === JSON.stringify($.extend(true, {}, a, b)); }
    return _equals(a, b) && _equals(b, a);
};*/
function Bind(func, newThis) {
    return func.bind(newThis);
}
exports.Bind = Bind;
/*static ForEachChildInTreeXDoY(treeX: any, actionY: (value, key: string)=>void) {
    for (let key in treeX) {
        let value = treeX[key];
        actionY(value, key);
        if (typeof value == "object" || value instanceof Array)
            V.ForEachChildInTreeXDoY(value, actionY);
    }
}*/
function GetHiddenHolder() {
    var holder = document.querySelector("#jsve_hiddenContainer");
    if (holder == null) {
        holder = document.createElement("div");
        holder.id = "jsve_hiddenContainer";
        __1.ObjectCE(holder.style).Extend({ position: "absolute", left: "-1000px", top: "-1000px", width: "1000px", height: "1000px", overflow: "hidden" });
        document.body.appendChild(holder);
    }
    return holder;
}
var GetContentSize_cache = {};
function GetContentSize(content, includeMargin, createClone, allowCache) {
    /*var holder = $("#jsve_hiddenContainer");
    var contentClone = content.clone();
    holder.append(contentClone);
    var width = contentClone.outerWidth();
    var height = contentClone.outerHeight();
    contentClone.remove();*/
    if (includeMargin === void 0) { includeMargin = false; }
    if (createClone === void 0) { createClone = false; }
    if (allowCache === void 0) { allowCache = true; }
    var cacheStore = Types_1.IsString(content) ? GetContentSize_cache : (content["GetContentSize_cache"] = content["GetContentSize_cache"] || {});
    var currentHTML = Types_1.IsString(content) ? content : content.outerHTML;
    var result = cacheStore[currentHTML];
    if (result == null) {
        var holder = GetHiddenHolder();
        var testElement = Types_1.IsString(content) ? $(content) : (createClone ? $(content).clone() : $(content));
        holder.appendChild(testElement[0]);
        var width = testElement.outerWidth(includeMargin);
        var height = testElement.outerHeight(includeMargin);
        testElement.remove();
        result = { width: width, height: height };
        if (allowCache) {
            cacheStore[currentHTML] = result;
        }
    }
    return result;
}
exports.GetContentSize = GetContentSize;
function GetContentWidth(content, includeMargin, createClone, allowCache) {
    if (includeMargin === void 0) { includeMargin = false; }
    if (createClone === void 0) { createClone = false; }
    if (allowCache === void 0) { allowCache = true; }
    return GetContentSize(content, includeMargin, createClone, allowCache).width;
}
exports.GetContentWidth = GetContentWidth;
function GetContentHeight(content, includeMargin, createClone, allowCache) {
    if (includeMargin === void 0) { includeMargin = false; }
    if (createClone === void 0) { createClone = false; }
    if (allowCache === void 0) { allowCache = true; }
    return GetContentSize(content, includeMargin, createClone, allowCache).height;
}
exports.GetContentHeight = GetContentHeight;
exports.autoElements = {};
function GetAutoElement(startHTML) {
    if (exports.autoElements[startHTML] == null) {
        var holder = GetHiddenHolder();
        var element = $(startHTML)[0];
        holder.appendChild(element);
        exports.autoElements[startHTML] = element;
    }
    return exports.autoElements[startHTML];
}
exports.GetAutoElement = GetAutoElement;
var TreeNode = /** @class */ (function () {
    function TreeNode(ancestorNodes, obj, prop) {
        this.ancestorNodes = ancestorNodes;
        this.obj = obj;
        this.prop = prop;
    }
    Object.defineProperty(TreeNode.prototype, "PathNodes", {
        get: function () {
            if (this.prop == "_root")
                return [];
            return __1.ArrayCE(this.ancestorNodes).Select(function (a) { return a.prop; }).concat(this.prop);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "PathStr", {
        get: function () {
            return this.PathNodes.join("/");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "PathStr_Updeep", {
        get: function () {
            return this.PathNodes.join(".");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "Value", {
        //value;
        get: function () {
            if (this.obj == null)
                return undefined;
            return this.obj[this.prop];
        },
        set: function (newVal) {
            this.obj[this.prop] = newVal;
        },
        enumerable: true,
        configurable: true
    });
    return TreeNode;
}());
exports.TreeNode = TreeNode;
function GetTreeNodesInObjTree(obj, includeRootNode, _ancestorNodes) {
    if (includeRootNode === void 0) { includeRootNode = false; }
    if (_ancestorNodes === void 0) { _ancestorNodes = []; }
    __1.Assert(_ancestorNodes.length <= 300, "Cannot traverse more than 300 levels into object tree. (probably circular)");
    var result = [];
    if (includeRootNode)
        result.push(new TreeNode([], { _root: obj }, "_root"));
    for (var key in obj) {
        var value = obj[key];
        var currentNode = new TreeNode(_ancestorNodes, obj, key);
        result.push(currentNode);
        if (typeof value == "object") {
            __1.ArrayCE(result).AddRange(GetTreeNodesInObjTree(value, false, _ancestorNodes.concat(currentNode)));
        }
    }
    return result;
}
exports.GetTreeNodesInObjTree = GetTreeNodesInObjTree;
/*export function CloneTreeDownToXWhileReplacingXValue(treeRoot, pathToX: string, newValueForX) {
    let pathNodes = pathToX.split("/");
    let currentPathNode = pathNodes[0];
    let currentPathNode_newValue = pathNodes.length > 1
        ? CloneTreeDownToXWhileReplacingXValue(treeRoot[currentPathNode], pathNodes.Skip(1).join("/"), newValueForX)
        : newValueForX;
    return {...treeRoot, [currentPathNode]: currentPathNode_newValue};
}*/
function GetTreeNodesInPath(treeRoot, pathNodesOrStr, includeRootNode, _ancestorNodes) {
    if (includeRootNode === void 0) { includeRootNode = false; }
    if (_ancestorNodes === void 0) { _ancestorNodes = []; }
    var descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
    var childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
    var result = [];
    if (includeRootNode)
        result.push(new TreeNode([], { _root: treeRoot }, "_root"));
    result.push(childTreeNode);
    if (descendantPathNodes.length > 1) // if the path goes deeper than the current child-tree-node
        result.push.apply(// if the path goes deeper than the current child-tree-node
        result, __spread(GetTreeNodesInPath(childTreeNode ? childTreeNode.Value : null, __1.ArrayCE(descendantPathNodes).Skip(1).join("/"), false, _ancestorNodes.concat(childTreeNode))));
    return result;
}
exports.GetTreeNodesInPath = GetTreeNodesInPath;
/*export function GetTreeNodesInPath_WithRoot(treeRoot, path: string) {
    return GetTreeNodesInPath({root: treeRoot}, "root/" + path).Skip(1);
}*/
function VisitTreeNodesInPath(treeRoot, pathNodesOrStr, visitFunc, visitRootNode, _ancestorNodes) {
    if (visitRootNode === void 0) { visitRootNode = false; }
    if (_ancestorNodes === void 0) { _ancestorNodes = []; }
    if (visitRootNode)
        visitFunc(new TreeNode([], { _root: treeRoot }, "_root"));
    var descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
    var childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
    visitFunc(childTreeNode);
    if (descendantPathNodes.length > 1) // if the path goes deeper than the current child-tree-node
        VisitTreeNodesInPath(childTreeNode.Value, __1.ArrayCE(descendantPathNodes).Skip(1).join("/"), visitFunc, false, _ancestorNodes.concat(childTreeNode));
    return treeRoot;
}
exports.VisitTreeNodesInPath = VisitTreeNodesInPath;
/*export function VisitTreeNodesInPath_WithRoot(treeRoot, path: string, visitFunc: (node: TreeNode)=>any) {
    VisitTreeNodesInPath({root: treeRoot}, "root/" + path, visitFunc);
    return treeRoot;
}*/
function ConvertPathGetterFuncToPropChain(pathGetterFunc) {
    var funcStr = pathGetterFunc.toString();
    __1.Assert(!funcStr.includes("["), "State-getter-func cannot contain bracket-based property-access.\n" + exports.nl + "For variable inclusion, use multiple segments as in: ...ToPropChain(\"main\", \"mapViews\", mapID)");
    /*const pathStr = funcStr.match(/return [^.]+\.(.+?);/)[1] as string;
    //let result = pathStr.replace(/\./g, "/");
    const result = pathStr.split(".");*/
    var parts = funcStr.split(".").slice(1); // remove first segment, since it's just the "return xxx." part
    parts[parts.length - 1] = parts[parts.length - 1].match(/^([a-zA-Z0-9_$]+)/)[1]; // remove semicolon (or whatever else) at the end
    return parts;
}
exports.ConvertPathGetterFuncToPropChain = ConvertPathGetterFuncToPropChain;
/** @param sepChar Default: "/" */
function DeepGet(obj, pathOrPathSegments, resultIfNull, sepChar) {
    var e_4, _a;
    if (resultIfNull === void 0) { resultIfNull = null; }
    if (sepChar === void 0) { sepChar = "/"; }
    var pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    var result = obj;
    try {
        for (var pathSegments_1 = __values(pathSegments), pathSegments_1_1 = pathSegments_1.next(); !pathSegments_1_1.done; pathSegments_1_1 = pathSegments_1.next()) {
            var pathNode = pathSegments_1_1.value;
            if (result == null)
                break;
            result = result[pathNode];
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (pathSegments_1_1 && !pathSegments_1_1.done && (_a = pathSegments_1.return)) _a.call(pathSegments_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    if (result == null)
        return resultIfNull;
    return result;
}
exports.DeepGet = DeepGet;
/** @param sepChar Default: "/" */
function DeepSet(obj, pathOrPathSegments, newValue, sepChar, createPathSegmentsIfMissing, deleteUndefined) {
    if (sepChar === void 0) { sepChar = "/"; }
    if (createPathSegmentsIfMissing === void 0) { createPathSegmentsIfMissing = true; }
    if (deleteUndefined === void 0) { deleteUndefined = false; }
    var pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    var deepObj = obj;
    // tunnel down to the object holding the path-specified prop
    pathSegments.slice(0, -1).forEach(function (segment) {
        if (deepObj[segment] == null) {
            if (createPathSegmentsIfMissing) {
                deepObj[segment] = {};
            }
            else {
                __1.Assert(false, "The given path (" + pathSegments.join("/") + ") had a missing segment (" + segment + "), so the deep-set failed.");
            }
        }
        deepObj = deepObj[segment];
    });
    if (newValue === undefined && deleteUndefined) {
        delete deepObj[__1.ArrayCE(pathSegments).Last()];
    }
    else {
        deepObj[__1.ArrayCE(pathSegments).Last()] = newValue;
    }
}
exports.DeepSet = DeepSet;
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
function WithDeepSet(baseObj, pathOrPathSegments, newValue, sepChar) {
    var _a;
    if (sepChar === void 0) { sepChar = "/"; }
    var pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    return __assign(__assign({}, baseObj), (_a = {}, _a[pathSegments[0]] = pathSegments.length > 1 ? WithDeepSet(baseObj[pathSegments[0]], pathSegments.slice(1), newValue) : newValue, _a));
}
exports.WithDeepSet = WithDeepSet;
//@((()=> { if (g.onclick == null) g.onclick = ()=>console.log(V.GetStackTraceStr()); }) as any)
function GetStackTraceStr() {
    var _a, _b;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var stackTrace, sourceStackTrace = true;
    if (Types_1.IsString(args[0]))
        _a = __read(args, 2), stackTrace = _a[0], sourceStackTrace = _a[1];
    else
        _b = __read(args, 1), sourceStackTrace = _b[0];
    //stackTrace = stackTrace || new Error()[sourceStackTrace ? "Stack" : "stack"];
    //stackTrace = stackTrace || (sourceStackTrace ? StackTrace.get().then(stack=>stackTrace = stack.map(a=>a.toString()).join("\n")) : new Error().stack);
    //stackTrace = stackTrace || new Error().stack;
    if (stackTrace == null) {
        //let fakeError = {}.VAct(a=>Error.captureStackTrace(a));
        var oldStackLimit = Error.stackTraceLimit;
        Error.stackTraceLimit = Infinity;
        var fakeError = new Error();
        stackTrace = fakeError.stack;
        Error.stackTraceLimit = oldStackLimit;
    }
    return stackTrace.substr(__1.StringCE(stackTrace).IndexOf_X("\n", 1)); // remove "Error" line and first stack-frame (that of this method)
}
exports.GetStackTraceStr = GetStackTraceStr;
function GetErrorMessagesUnderElement(element) {
    //return element.querySelectorAll(":invalid").ToList().map(node=>node.validationMessage || `Invalid value.`);
    return Array.from(element.querySelectorAll(":invalid")).map(function (node) { return node.validationMessage || "Invalid value."; });
}
exports.GetErrorMessagesUnderElement = GetErrorMessagesUnderElement;
exports.DEL = "JS_VEXTENSIONS_SPECIAL_DELETE_KEY";
function FindDOM(selector) {
    return document.querySelector(selector);
}
exports.FindDOM = FindDOM;
function FindDOMAll(selector) {
    return Array.from(document.querySelectorAll(selector));
}
exports.FindDOMAll = FindDOMAll;
function WaitTillDataPathIsSet(dataPath) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var dataPathParts, currentParent, dataPathParts_1, dataPathParts_1_1, part, e_5_1;
        var e_5, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    dataPathParts = dataPath.split(".");
                    currentParent = g;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 8, 9, 10]);
                    dataPathParts_1 = __values(dataPathParts), dataPathParts_1_1 = dataPathParts_1.next();
                    _b.label = 2;
                case 2:
                    if (!!dataPathParts_1_1.done) return [3 /*break*/, 7];
                    part = dataPathParts_1_1.value;
                    _b.label = 3;
                case 3:
                    if (!(currentParent[part] == null)) return [3 /*break*/, 5];
                    return [4 /*yield*/, WaitTillPropertyIsSet(currentParent, part)];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 5:
                    currentParent = currentParent[part];
                    _b.label = 6;
                case 6:
                    dataPathParts_1_1 = dataPathParts_1.next();
                    return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_5_1 = _b.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (dataPathParts_1_1 && !dataPathParts_1_1.done && (_a = dataPathParts_1.return)) _a.call(dataPathParts_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 10:
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.WaitTillDataPathIsSet = WaitTillDataPathIsSet;
function WaitTillPropertyIsSet(obj, prop) {
    return new Promise(function (resolve, reject) {
        __1.ObjectCE(obj)._AddGetterSetter(prop, function () { }, function (value) {
            delete obj[prop]; // remove this hook
            obj[prop] = value; // set to provided value
            resolve();
        });
    });
}
exports.WaitTillPropertyIsSet = WaitTillPropertyIsSet;
var CapScheme;
(function (CapScheme) {
    /** examplePropNameWithDuoWord */ CapScheme[CapScheme["PropName"] = 0] = "PropName";
    /** Example Title With Duo-Word */ CapScheme[CapScheme["Title"] = 1] = "Title";
    /** Example sentence with duo-word */ CapScheme[CapScheme["Sentence"] = 2] = "Sentence";
})(CapScheme = exports.CapScheme || (exports.CapScheme = {}));
function ChangeCapitalization(text, fromScheme, toScheme) {
    var inStandardScheme = ConvertFromSchemeXToStandardScheme(text, fromScheme);
    return ConvertFromStandardSchemeToSchemeX(inStandardScheme, toScheme);
}
exports.ChangeCapitalization = ChangeCapitalization;
// "standard scheme" is currently CapitalizeScheme.Sentence
function ConvertFromSchemeXToStandardScheme(text, fromScheme) {
    if (fromScheme == CapScheme.PropName) {
        // demo string: somePropName
        return text
            // somePropName -> some prop name
            .replace(/[A-Z]/g, function (a) { return " " + a.toLowerCase(); })
            // some prop name -> Some prop name
            .replace(/^./, function (a) { return a.toUpperCase(); });
    }
    else if (fromScheme == CapScheme.Title) {
        __1.Assert(false, "Not yet implemented.");
    }
    else if (fromScheme == CapScheme.Sentence) {
        return text;
    }
}
function ConvertFromStandardSchemeToSchemeX(text, toScheme) {
    if (toScheme == CapScheme.PropName) {
        __1.Assert(false, "Not yet implemented.");
    }
    else if (toScheme == CapScheme.Title) {
        __1.Assert(false, "Not yet implemented.");
    }
    else if (toScheme == CapScheme.Sentence) {
        return text;
    }
}
function StartDownload(content, filename, dataTypeStr, encodeContentAsURIComp) {
    if (dataTypeStr === void 0) { dataTypeStr = "data:application/octet-stream,"; }
    if (encodeContentAsURIComp === void 0) { encodeContentAsURIComp = true; }
    var link = document.createElement("a");
    Object.assign(link.style, { display: "none" });
    link.innerText = "Save to disk";
    link.setAttribute("href", dataTypeStr + (encodeContentAsURIComp ? encodeURIComponent(content) : content));
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
exports.StartDownload = StartDownload;
function StartUpload() {
    return new Promise(function (resolve) {
        var fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.style.display = "none";
        fileInput.onchange = function (e) {
            var file = e.target["files"][0];
            if (!file)
                return;
            var reader = new FileReader();
            reader.onload = function (e) {
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
exports.StartUpload = StartUpload;
function TransferPrototypeProps(target, source, descriptorBase, descriptorOverride) {
    var e_6, _a;
    try {
        for (var _b = __values(Object.entries(Object.getOwnPropertyDescriptors(source))), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), name_1 = _d[0], descriptor = _d[1];
            if (name_1 == "constructor")
                continue;
            Object.defineProperty(target, name_1, Object.assign({}, descriptorBase, descriptor, descriptorOverride));
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
exports.TransferPrototypeProps = TransferPrototypeProps;
function WithFuncsStandalone(source) {
    var e_7, _a;
    var result = {};
    var _loop_1 = function (key, oldVal) {
        if (oldVal instanceof Function) {
            result[key] = function (thisArg) {
                var callArgs = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    callArgs[_i - 1] = arguments[_i];
                }
                return oldVal.apply(thisArg, callArgs);
            };
        }
        else {
            result[key] = oldVal;
        }
    };
    try {
        for (var _b = __values(Object.entries(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], oldVal = _d[1];
            _loop_1(key, oldVal);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return result;
}
exports.WithFuncsStandalone = WithFuncsStandalone;
function WithFuncThisArgsAsAny(source) {
    /*let result = {} as any;
    for (let [key, oldVal] of Object.entries(source)) {
        if (oldVal instanceof Function) {
            result[key] = (thisArg, ...callArgs)=> {
                return oldVal.apply(thisArg, callArgs);
            };
        } else {
            result[key] = oldVal;
        }
    }
    return result;*/
    return source;
}
exports.WithFuncThisArgsAsAny = WithFuncThisArgsAsAny;
function CreateWrapperForClassExtensions(sourceClass) {
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
    var e_8, _a;
    // Static proxy approach -- a bit faster since it doesn't create any functions, closures, or proxies per wrap/CE-method-call.
    //	(Limitation: you can't store the result of "ObjectCE(something)" and call a method attached to it more than once, since each method-call removes the supplied this-arg from the stack.)
    //let proxy = {} as T;
    var proxy = {};
    var thisArgStack = [];
    var _loop_2 = function (key) {
        if (key == "constructor")
            return "continue"; // no reason to call the wrapper's constructor
        var descriptor = Object.getOwnPropertyDescriptor(sourceClass.prototype, key);
        var newDescriptor = Object.assign({}, descriptor);
        if (descriptor.value instanceof Function) {
            var oldFunc_1 = descriptor.value;
            newDescriptor.value = function () {
                var callArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    callArgs[_i] = arguments[_i];
                }
                var thisArg = thisArgStack[thisArgStack.length - 1];
                var result = oldFunc_1.apply(thisArg, callArgs);
                //thisArgStack.length--;
                thisArgStack.splice(thisArgStack.length - 1, 1);
                return result;
            };
        }
        Object.defineProperty(proxy, key, newDescriptor);
    };
    try {
        for (var _b = __values(Object.getOwnPropertyNames(sourceClass.prototype)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_2(key);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return function (nextThis) {
        thisArgStack.push(nextThis);
        return proxy;
    };
}
exports.CreateWrapperForClassExtensions = CreateWrapperForClassExtensions;
//# sourceMappingURL=General.js.map