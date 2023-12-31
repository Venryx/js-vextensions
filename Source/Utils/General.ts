import {IsPrimitive, IsString, IsObject} from "./Types.js";
import {Assert, ArrayCE, NumberCE, ObjectCE, StringCE} from "../index.js";
import {g} from "./@Internal.js";
import {emptyObj} from "./Collections.js";

if (Number.MIN_SAFE_INTEGER == null) {
	(Number as any).MIN_SAFE_INTEGER = -9007199254740991;
}
if (Number.MAX_SAFE_INTEGER == null) {
	(Number as any).MAX_SAFE_INTEGER = 9007199254740991;
}

declare global { function G(...globalHolders); } g["G"] = G;
function G(...globalHolders) {
	for (const globalHolder of globalHolders) {
		Object.assign(g, globalHolder);
	}
}

export function DoNothing(...args) {}
export function DN(...args) {}

//var quickIncrementValues = {};
//export function QuickIncrement(name = new Error().stack.split("\n")[2]) { // this doesn't always work, fsr
export function QuickIncrement(name = "default") {
	QuickIncrement["values"][name] = (QuickIncrement["values"][name]|0) + 1; // eslint-disable-line
	return QuickIncrement["values"][name];
}
QuickIncrement["values"] = [];

/* eslint-disable */
/** Alias for `Object.assign({}, ...)`. */
export function E<E1,E2,E3,E4,E5,E6,E7,E8,E9,E10,E11,E12,E13,E14,E15,E16,E17,E18,E19,E20>(
	e1?:E1,e2?:E2,e3?:E3,e4?:E4,e5?:E5,e6?:E6,e7?:E7,e8?:E8,e9?:E9,e10?:E10,
	e11?:E11,e12?:E12,e13?:E13,e14?:E14,e15?:E15,e16?:E16,e17?:E17,e18?:E18,e19?:E19,e20?:E20,
):E1&E2&E3&E4&E5&E6&E7&E8&E9&E10&E11&E12&E13&E14&E15&E16&E17&E18&E19&E20 {
/* eslint-enable */
	return Object.assign({}, ...arguments);
}

/** Variant of `E()` that uses `VSet()` to apply each extend object (for extra options), rather than calling `Object.assign({}, ...)`. */
/* eslint-disable */
export function EV<E1,E2,E3,E4,E5,E6,E7,E8,E9,E10,E11,E12,E13,E14,E15,E16,E17,E18,E19,E20>(
	e1?:E1,e2?:E2,e3?:E3,e4?:E4,e5?:E5,e6?:E6,e7?:E7,e8?:E8,e9?:E9,e10?:E10,
	e11?:E11,e12?:E12,e13?:E13,e14?:E14,e15?:E15,e16?:E16,e17?:E17,e18?:E18,e19?:E19,e20?:E20,
):E1&E2&E3&E4&E5&E6&E7&E8&E9&E10&E11&E12&E13&E14&E15&E16&E17&E18&E19&E20 {
/* eslint-enable */
	var result = {} as any;
	for (const extend of Array.from(arguments)) { // eslint-disable-line
		if (!IsObject(extend)) continue;
		//Object.assign(result, extend);
		// use VSet, for its extra options (eg. using EF({someKey: false ? "someValue" : OMIT}) to omit "someKey" entirely)
		ObjectCE(result).VSet(extend);
	}

	// if result is empty, return the same empty-obj each time so it doesn't trigger react-js rerenders
	if (emptyObj && ObjectCE(result).VKeys().length == 0) {
		return emptyObj as any;
	}

	return result;
	//return StyleSheet.create(result);
}

export type GetFirstParamType<T> = T extends (val: infer Arg1Type)=>any ? Arg1Type : never;
export function WrapWithGo<Func extends(val)=>any>(func: Func): Func & {Go: GetFirstParamType<Func>} {
	Object.defineProperty(func, "Go", {
		/*set: arg1=>{
			func(arg1);
		},*/
		set: func,
	});
	return func as any;
}

const hasOwnProperty = Object.prototype.hasOwnProperty;
export function DeepEquals(x: any, y: any, keyCheckLayersLeft = -1) {
	// fast route: if values are identical, return true
	if (Object.is(x, y)) return true;

	// values are non-identical; so if one is a primitive or null/undefined, they can't be equal, thus return false
	if (typeof x !== "object" || x == null || typeof y !== "object" || y == null) return false;
	
	// special case (since it's the one "json relevant" object-type): if only one value is an array, consider them non-equal, thus return false
	if (Array.isArray(x) != Array.isArray(y)) return false;

	// values are non-identical objects; so if we've reached the key-check layer-limit, return false
	if (keyCheckLayersLeft == 0) return false;

	// check for differences in the objects' field-names and field-values; if any such difference is found, return false
	// NOTE: Objects.keys() excludes non-enumerable properties; to include them, use Object.getOwnPropertyNames() instead
	const xKeys = Object.keys(x), yKeys = Object.keys(y);
	if (xKeys.length != yKeys.length) return false;
	for (const key of xKeys) {
		//if (!(key in y)) return false;
		//if (!y.hasOwnProperty(key)) return false;
		if (!hasOwnProperty.call(y, key)) return false;
		if (!DeepEquals(x[key], y[key], keyCheckLayersLeft - 1)) return false;
	}

	// none of the checks found a difference, so the objects must be equal
	return true;
}

// Performs equality by iterating through keys on an object and returning false when any key has values which are not strictly equal between the arguments.
// Returns true when the values of all keys are strictly equal.
/*export function ShallowEquals(objA, objB) {
	if (Object.is(objA, objB)) return true;
	if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;

	var keysA = Object.keys(objA);
	var keysB = Object.keys(objB);
	if (keysA.length !== keysB.length) return false;

	// test for A's keys different from B
	for (var i = 0; i < keysA.length; i++) {
		if (!hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
			return false;
		}
	}

	return true;
}*/
export function ShallowEquals(objA, objB) {
	return DeepEquals(objA, objB, 1);
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

	(document as any).oncopy = function(event) {
		event.clipboardData.setData("text/plain", text);
		event.preventDefault();
		(document as any).oncopy = null;
	};
	(document as any).execCommand("copy", false, null);
}

export function Global(target: Function) {
	//var name = (target as any).GetName();
	var name = target["name_fake"] || target.name || (target.toString().match(/^function\s*([^\s(]+)/) || [])[1];

	//console.log("Globalizing: " + name);
	g[name] = target;
}

export class IDProvider {
	lastID = -1;
	GetID() {
		return ++this.lastID;
	}
}

export const nl = "\n";

/*export function AsObj(obj: any) { 
	if (typeof obj == "object") return obj;
	if (obj != null) return ArrayCE(ObjectCE(obj).Pairs()).ToMap(a=>a.key, a=>a.value);
	return {};
}*/

export function AsArray(args) { return Slice(args, 0); }
//s.ToArray = function(args) { return s.Slice(args, 0); };
export function Slice(args, start, end?) { return Array.prototype.slice.call(args, start != null ? start : 0, end); }

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
	result = result.replace(/['"]@((?:.|\n)+)@['"];(\n(?=\n))?/g, (match, sub1)=>sub1.replace(/\\n/, "\n"));

	return result;
}

/** ES2019+ defines Array.sort as stable, so this isn't really necessary anymore. (although it does augment the comparator with each entry's original-index) */
export function StableSort<T>(array: T[], compare: (aItem, bItem, aIndex: number, bIndex: number)=>number): T[] { // needed for Chrome
	var array2 = array.map((item, index)=>({index, item}));
	array2.sort((a, b)=>{
		var r = compare(a.item, b.item, a.index, b.index);
		return r != 0 ? r : Compare(a.index, b.index);
	});
	return array2.map(pack=>pack.item);
}
export function Compare(a, b, caseSensitive = true) {
	if (!caseSensitive && typeof a == "string" && typeof b == "string") {
		a = a.toLowerCase();
		b = b.toLowerCase();
	}
	return a < b ? -1 : (a > b ? 1 : 0);
}

export function CloneObject(obj, propMatchFunc?: Function, depth = 0) {
	/*var Assert = require("../../Frame/General/Assert").Assert;
	Assert(depth < 100, "CloneObject cannot work past depth 100! (probably circular ref)");*/

	if (obj == null) return null;
	if (IsPrimitive(obj)) return obj;
	//if (obj.GetType() == Array)
	if (obj.constructor == Array) return CloneArray(obj);
	/*if (obj instanceof List)
		return List.apply(null, [obj.itemType].concat(V.CloneArray(obj)));
		if (obj instanceof Dictionary) {
			let result = new Dictionary(obj.keyType, obj.valueType);
			for (let pair of obj.Pairs)
				result.Add(pair.key, pair.value);
			return result;
		}*/

	const result = {};
	for (const pair of ObjectCE(obj).Pairs()) {
		if (!(pair.value instanceof Function) && (propMatchFunc == null || propMatchFunc.call(obj, pair.key, pair.value))) {
			result[pair.key as any] = CloneObject(pair.value, propMatchFunc, depth + 1);
		}
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

export function Bind<T extends Function>(func: T, newThis: any): T {
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

export class TreeNode {
	constructor(ancestorNodes: TreeNode[], obj, prop) {
		this.ancestorNodes = ancestorNodes;
		this.obj = obj;
		this.prop = prop;
	}

	ancestorNodes: TreeNode[];
	get PathNodes(): string[] {
		if (this.prop == "_root") return [];
		return ArrayCE(this.ancestorNodes).Select(a=>a.prop).concat(this.prop);
	}
	get PathStr() {
		return this.PathNodes.join("/");
	}
	get PathStr_Updeep() {
		return this.PathNodes.join(".");
	}

	obj;
	prop: string;
	//value;
	get Value() {
		if (this.obj == null) { return undefined; }
		return this.obj[this.prop];
	}
	set Value(newVal) {
		this.obj[this.prop] = newVal;
	}
}
export function GetTreeNodesInObjTree(obj: Object, includeRootNode = false, _ancestorNodes: TreeNode[] = []) {
	Assert(_ancestorNodes.length <= 300, "Cannot traverse more than 300 levels into object tree. (probably circular)");

	const result = [] as TreeNode[];
	if (includeRootNode) { result.push(new TreeNode([], {_root: obj}, "_root")); }
	const objIsMapLike = obj instanceof Map || obj.constructor.name == "ObservableMap"; // ObservableMap from mobx
	for (const key of objIsMapLike ? obj["keys"]() : Object.keys(obj)) {
		const value = objIsMapLike ? obj["get"](key) : obj[key];
		const currentNode = new TreeNode(_ancestorNodes, obj, key);
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

export function GetTreeNodesInPath(treeRoot, pathNodesOrStr: string[] | string, includeRootNode = false, _ancestorNodes: TreeNode[] = []) {
	const descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
	const childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
	var result: TreeNode[] = [];
	if (includeRootNode) {
		result.push(new TreeNode([], {_root: treeRoot}, "_root"));
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

export function VisitTreeNodesInPath(treeRoot, pathNodesOrStr: string[] | string, visitFunc: (node: TreeNode)=>any, visitRootNode = false, _ancestorNodes: TreeNode[] = []) {
	if (visitRootNode) {
		visitFunc(new TreeNode([], {_root: treeRoot}, "_root"));
	}
	const descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
	const childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
	visitFunc(childTreeNode);
	if (descendantPathNodes.length > 1) { // if the path goes deeper than the current child-tree-node
		VisitTreeNodesInPath(childTreeNode.Value, ArrayCE(descendantPathNodes).Skip(1).join("/"), visitFunc, false, _ancestorNodes.concat(childTreeNode));
	}
	return treeRoot;
}
/*export function VisitTreeNodesInPath_WithRoot(treeRoot, path: string, visitFunc: (node: TreeNode)=>any) {
	VisitTreeNodesInPath({root: treeRoot}, "root/" + path, visitFunc);
	return treeRoot;
}*/

// probably todo: make this either handle, or warn about, path-getter-func's containing method-calls
// probably todo: make this include the first variable-name (or at least have an option to do so -- the first var is not always "this"/"a")
export function ConvertPathGetterFuncToPropChain(pathGetterFunc: Function) {
	const funcStr = pathGetterFunc.toString();
	Assert(!funcStr.includes("["), "Path-getter-func cannot contain bracket-based property-access.");
	/*const pathStr = funcStr.match(/return [^.]+\.(.+?);/)[1] as string;
	//let result = pathStr.replace(/\./g, "/");
	const result = pathStr.split(".");*/

	const parts = funcStr.split(".").slice(1); // remove first segment, since it's just the "return xxx." part
	parts[parts.length - 1] = parts[parts.length - 1].match(/^([a-zA-Z0-9_$]+)/)![1]; // remove semicolon (or whatever else) at the end
	return parts;
}

/** @param sepChar Default: "/" */
export function DeepGet<T>(obj, pathOrPathSegments: string | (string | number)[], resultIfNull: T|null = null, sepChar = "/"): T|null {
	const pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
	let result = obj;
	for (const pathNode of pathSegments) {
		if (result == null) break;
		result = result[pathNode];
	}
	if (result == null) return resultIfNull;
	return result;
}
/** @param sepChar Default: "/" */
export function DeepSet(obj, pathOrPathSegments: string | (string | number)[], newValue, sepChar = "/", createPathSegmentsIfMissing = true, deleteUndefined = false) {
	const pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
	let deepObj = obj;
	// tunnel down to the object holding the path-specified prop
	pathSegments.slice(0, -1).forEach(segment=>{
		if (deepObj[segment] == null) {
			if (createPathSegmentsIfMissing) {
				deepObj[segment] = {};
			} else {
				Assert(false, `The given path (${pathSegments.join("/")}) had a missing segment (${segment}), so the deep-set failed.`);
			}
		}
		deepObj = deepObj[segment];
	});
	if (newValue === undefined && deleteUndefined) {
		delete deepObj[ArrayCE(pathSegments).Last()];
	} else {
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
export function WithDeepSet(baseObj, pathOrPathSegments: string | (string | number)[], newValue, sepChar = "/") {
	const pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
	return {
		...baseObj,
		[pathSegments[0]]: pathSegments.length > 1 ? WithDeepSet(baseObj[pathSegments[0]], pathSegments.slice(1), newValue) : newValue,
	};
}

export function GetStackTraceStr(opt?: {stackTrace?: string, sourceStackTrace?: boolean}) {
	opt = E({sourceStackTrace: true}, opt);

	//stackTrace = stackTrace || new Error()[sourceStackTrace ? "Stack" : "stack"];
	//stackTrace = stackTrace || (sourceStackTrace ? StackTrace.get().then(stack=>stackTrace = stack.map(a=>a.toString()).join("\n")) : new Error().stack);
	//stackTrace = stackTrace || new Error().stack;

	let stackTrace_final = opt!.stackTrace!;
	if (stackTrace_final == null) {
		//let fakeError = {}.VAct(a=>Error.captureStackTrace(a));
		let oldStackLimit = (Error as any).stackTraceLimit;
		(Error as any).stackTraceLimit = Infinity;

		let fakeError = new Error();
		stackTrace_final = fakeError.stack!;
		
		(Error as any).stackTraceLimit = oldStackLimit;
	}

	return stackTrace_final.substr(StringCE(stackTrace_final).IndexOf_X("\n", 1)); // remove "Error" line and first stack-frame (that of this method)
}

export function GetErrorMessagesUnderElement(element) {
	//return element.querySelectorAll(":invalid").ToList().map(node=>node.validationMessage || `Invalid value.`);
	return Array.from(element.querySelectorAll(":invalid")).map(node=>(node as any).validationMessage || `Invalid value.`);
}

export function CreateSymbol(name: string) {
	if (typeof Symbol != "undefined") return Symbol(name);
	//return `FakeSymbol(${name})`;
	// match how real Symbols get stringified, so we can always do, eg. DEL.toString() to send over network, for end-points that accept it using: baseData.VSet(sentData, {allowStringOperators: true})
	return `Symbol(${name})`;
}
export const OMIT = CreateSymbol("$JSVE_SYMBOL_OMIT");
export const DEL = CreateSymbol("$JSVE_SYMBOL_DELETE");
export function OmitIfFalsy<T>(value: T): T {
	if (!value) return OMIT as any;
	return value;
}
export function OmitIfNull<T>(value: T): T {
	if (value == null) return OMIT as any;
	return value;
}
export function DelIfFalsy<T>(value: T): T {
	if (!value) return DEL as any;
	return value;
}
export function DelIfNull<T>(value: T): T {
	if (value == null) return DEL as any;
	return value;
}

export function FindDOM(selector: string) {
	return document.querySelector(selector);
}
export function FindDOMAll(selector: string) {
	return Array.from(document.querySelectorAll(selector));
}

/*export enum CapScheme {
	/** examplePropNameWithDuoWord *#/ PropName,
	/** Example Title With Duo-Word *#/ Title,
	/** Example sentence with duo-word *#/ Sentence,
}
export function ChangeCapitalization(text: string, fromScheme: CapScheme, toScheme: CapScheme) {
	let inStandardScheme = ConvertFromSchemeXToStandardScheme(text, fromScheme);
	return ConvertFromStandardSchemeToSchemeX(inStandardScheme, toScheme);
}

// "standard scheme" is currently CapitalizeScheme.Sentence
function ConvertFromSchemeXToStandardScheme(text: string, fromScheme: CapScheme) {
	if (fromScheme == CapScheme.PropName) {
		// demo string: somePropName
		return text
			// somePropName -> some prop name
			.replace(/[A-Z]/g, a=>" " + a.toLowerCase())
			// some prop name -> Some prop name
			.replace(/^./, a=>a.toUpperCase());
	} else if (fromScheme == CapScheme.Title) {
		Assert(false, "Not yet implemented.");
	} else if (fromScheme == CapScheme.Sentence) {
		return text;
	}
}
function ConvertFromStandardSchemeToSchemeX(text: string, toScheme: CapScheme) {
	if (toScheme == CapScheme.PropName) {
		Assert(false, "Not yet implemented.");
	} else if (toScheme == CapScheme.Title) {
		Assert(false, "Not yet implemented.");
	} else if (toScheme == CapScheme.Sentence) {
		return text;
	}
}*/

// roughly ordered by average position in string at which mod would be applied
export const stringModifiers = {
	// bi-directional
	// ==========

	// start letter, change case
	/** some prop name -> Some prop name */
	startLower_to_upper: str=>str.replace(/^./, a=>a.toUpperCase()),
	/** Some prop name -> some prop name */
	startUpper_to_lower: str=>str.replace(/^./, a=>a.toLowerCase()),

	// space letter, change case
	/** some prop name -> some Prop Name */
	spaceLower_to_spaceUpper: str=>str.replace(/ ([a-z])/g, (m, sub1)=>` ${sub1.toUpperCase()}`),
	/** Some Prop Name -> Some prop name */
	spaceUpper_to_spaceLower: str=>str.replace(/ ([A-Z])/g, (m, sub1)=>` ${sub1.toLowerCase()}`),

	// hyphen letter, change case
	/** some-prop-name -> some-Prop-Name */
	hyphenLower_to_hyphenUpper: str=>str.replace(/-([a-z])/g, (m, sub1)=>`-${sub1.toUpperCase()}`),
	/** Some-Prop-Name -> Some-prop-name */
	hyphenUpper_to_hyphenLower: str=>str.replace(/-([A-Z])/g, (m, sub1)=>`-${sub1.toLowerCase()}`),

	// underscore letter, change case
	/** some_prop_name -> some_Prop_Name */
	underscoreLower_to_underscoreUpper: str=>str.replace(/_([a-z])/g, (m, sub1)=>`_${sub1.toUpperCase()}`),
	/** Some_Prop_Name -> Some_prop_name */
	underscoreUpper_to_underscoreLower: str=>str.replace(/_([A-Z])/g, (m, sub1)=>`_${sub1.toLowerCase()}`),

	// one-directional
	// ==========

	/** somePropName -> some prop name */
	lowerUpper_to_lowerSpaceLower: str=>str.replace(/([a-z])([A-Z])/g, (m, sub1, sub2)=>`${sub1} ${sub2.toLowerCase()}`),

	/** some prop Name -> somepropName */
	removeSpaces: str=>str.replace(/ /g, (m, sub1)=>""),
	/** some-prop-Name -> somepropName */
	removeHyphens: str=>str.replace(/-/g, (m, sub1)=>""),
};
export function ModifyString(text: string, modifiersGetter: (modifierNames: typeof stringModifiers)=>((str: string)=>string)[]) {
	let result = text;
	const chosenModifiers = modifiersGetter(stringModifiers);
	for (const mod of chosenModifiers) {
		result = mod(result);
	}
	return result;
}

/**
Downloads the given content to disk. Call must be triggered by an input event, or run from the console.
Very large strings may fail to download directly, but can be resolved by placing in a Blob:
StartDownload(new Blob(["someVeryLongString"]), "Backup.txt");
*/
export function StartDownload(content: string | Blob, filename: string, dataTypeStr = "data:application/octet-stream,", encodeContentAsURIComp = true) {
	var link = document.createElement("a");
	Object.assign(link.style, {display: "none"});
	link.innerText = "Save to disk";
	if (content instanceof Blob) {
		// todo: make sure this works correctly, even for different data-types (since data-type args are ignored if Blob supplied)
		link.setAttribute("href", URL.createObjectURL(content));
	} else {
		link.setAttribute("href", dataTypeStr + (encodeContentAsURIComp ? encodeURIComponent(content) : content));
	}
	link.setAttribute("download", filename);
	document.body.appendChild(link);
	link.click();
	link.remove();
}

/** If the dialog is closed/canceled, the promise will just never resolve. */
export function StartUpload(): Promise<File> {
	return new Promise((resolve, reject)=>{
		const fileInput = document.createElement("input");
		fileInput.type = "file";
		fileInput.style.display = "none";
		fileInput.onchange = e=>{
			//var file = e.target!["files"][0];
			var file = fileInput.files![0];
			if (file) resolve(file);
			//else reject("No file selected.");
			//else resolve(null);
		};
		document.body.appendChild(fileInput);
		fileInput.click();
	});
}
/*#* If the dialog is closed/canceled, the promise will just never resolve. */
/*export async function StartUpload_ReadAsText(): Promise<string | ArrayBuffer> {
	const file = await StartUpload();
	/*return new Promise((resolve, reject)=>{
		//if (file == null) reject("No file selected.");

		var reader = new FileReader();
		reader.onload = e=>{
			var contents = e.target!["result"];
			//Assert(typeof contents == "string")
			resolve(contents!);
		};
		reader.readAsText(file);
	});*#/
	return await file.text();
}*/

export function TransferPrototypeProps(target: Object, source: Object, descriptorBase: PropertyDescriptor, descriptorOverride: PropertyDescriptor) {
	//for (let [name, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(source))) {
	for (const name of Object.getOwnPropertyNames(source)) {
		if (name == "constructor") continue;
		const descriptor = Object.getOwnPropertyDescriptor(source, name);
		Object.defineProperty(target, name, {...descriptorBase, ...descriptor, ...descriptorOverride});
	}
}

export type WithFuncsStandalone_Type<T> = {
	[P in keyof T]:
		// todo: maybe try to make this infer the type for the thisArg param, from the source-func's actual this-arg
		T[P] extends (...args)=>any ? (thisArg: Object, ...args: Parameters<T[P]>)=>ReturnType<T[P]> :
		T[P];
};
export function WithFuncsStandalone<T>(source: T): WithFuncsStandalone_Type<T> {
	const result = {} as any;
	for (const key of Object.getOwnPropertyNames(source)) {
		if (key == "constructor") continue; // no reason to call the wrapper's constructor
		const descriptor = Object.getOwnPropertyDescriptor(source, key)!;
		const newDescriptor = {...descriptor};
		if (descriptor.value instanceof Function) {
			const oldFunc = descriptor.value as Function;
			newDescriptor.value = (thisArg, ...callArgs)=>{
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
export function CreateProxyForClassExtensions<TargetType, ProxyType>(sourceClass_prototype: any) {
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
	const proxy = {} as ProxyType;
	const thisArgStack = [] as TargetType[];
	for (const key of Object.getOwnPropertyNames(sourceClass_prototype)) {
		if (key == "constructor") continue; // no reason to call the wrapper's constructor
		const descriptor = Object.getOwnPropertyDescriptor(sourceClass_prototype, key)!;
		const newDescriptor = {...descriptor};
		if (descriptor.value instanceof Function) {
			const oldFunc = descriptor.value as Function;
			newDescriptor.value = (...callArgs)=>{
				const thisArg = thisArgStack[thisArgStack.length - 1];
				try {
					var result = oldFunc.apply(thisArg, callArgs);
				} finally {
					// ensure that stack-entry is removed at end; else error in func would make the stack invalid (ie. left with a "dangling stack-entry")
					//thisArgStack.length--;
					thisArgStack.splice(thisArgStack.length - 1, 1);
				}
				return result;
			};
		}
		Object.defineProperty(proxy, key, newDescriptor);
	}
	//return (nextThis: any)=> {
	return (nextThis: TargetType)=>{
		thisArgStack.push(nextThis);
		return proxy;
	};
}

/*export class SpecialTypeHandler<T> {
	constructor(initialData: Partial<SpecialTypeHandler<T>>) {
		//ObjectCE(this).VSet(initialData);
		Object.assign(this, initialData);
	}
	type: new()=>T;
	keys: (a: T)=>IterableIterator<any>;
	get: (a: T, key: string)=>any;
	delete: (a: T, key: string)=>any;
}
export const RemoveCircularLinks_specialTypeHandlers: SpecialTypeHandler<any>[] = [
	// Set and Map are included by default, since JSON.stringify tries (and fails) to serialize them by default
	new SpecialTypeHandler({type: Set, keys: a=>a.keys(), get: (a, key)=>key, delete: (a, key)=>a.delete(key)}),
	new SpecialTypeHandler({type: Map, keys: a=>a.keys(), get: (a, key)=>a.get(key), delete: (a, key)=>a.set(key, undefined)}),
];*/
export const RemoveCircularLinks_specialTypeHandlers = [
	// Set and Map are included by default, since JSON.stringify tries (and fails) to serialize them by default
	{type: Set, keys: a=>a.keys(), get: (a, key)=>key, delete: (a, key)=>a.delete(key)},
	{type: Map, keys: a=>a.keys(), get: (a, key)=>a.get(key), delete: (a, key)=>a.set(key, undefined)},
];
export function RemoveCircularLinks(node: any, specialTypeHandlers = RemoveCircularLinks_specialTypeHandlers, nodeStack_set = new Set<any>()) {
	nodeStack_set.add(node);

	const specialHandler = specialTypeHandlers.find(a=>node instanceof a.type);
	for (const key of specialHandler ? specialHandler.keys(node) : Object.keys(node)) {
		const value = specialHandler ? specialHandler.get(node, key) : node[key];
		// if the value is already part of visited-stack, delete the value (and don't tunnel into it)
		if (nodeStack_set.has(value)) {
			if (specialHandler) specialHandler.delete(node, key);
			else node[key] = undefined;
		}
		// else, tunnel into it, looking for circular-links at deeper levels
		else if (typeof value == "object" && value != null) {
			RemoveCircularLinks(value, specialTypeHandlers, nodeStack_set);
		}
	}

	nodeStack_set.delete(node);
}