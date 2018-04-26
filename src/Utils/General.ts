declare var global;
let g = typeof window == "object" ? window : global;

if (Number.MIN_SAFE_INTEGER == null)
	(Number as any).MIN_SAFE_INTEGER = -9007199254740991;
if (Number.MAX_SAFE_INTEGER == null)
	(Number as any).MAX_SAFE_INTEGER = 9007199254740991;

declare global { function G(...globalHolders); } g["G"] = G;
function G(...globalHolders) {
	for (let globalHolder of globalHolders) {
		Object.assign(g, globalHolder);
	}
}

declare global { function DoNothing(...args); } G({DoNothing});
export function DoNothing(...args) {}
declare global { function DN(...args); } G({DN});
export function DN(...args) {}

//var quickIncrementValues = {};
//export function QuickIncrement(name = new Error().stack.split("\n")[2]) { // this doesn't always work, fsr
export function QuickIncrement(name = "default") {
	QuickIncrement["values"][name] = (QuickIncrement["values"][name]|0) + 1;
	return QuickIncrement["values"][name];
}
QuickIncrement["values"] = [];
G({QuickIncrement});

export var emptyEntities = {emptyObj: {}, emptyArray: [], emptyArray_forLoading: []};

G({E}); declare global {	function E<E1,E2,E3,E4,E5,E6,E7,E8>(e1?:E1,e2?:E2,e3?:E3,e4?:E4,e5?:E5,e6?:E6,e7?:E7,e8?:E8):E1&E2&E3&E4&E5&E6&E7&E8; }
export							function E<E1,E2,E3,E4,E5,E6,E7,E8>(e1?:E1,e2?:E2,e3?:E3,e4?:E4,e5?:E5,e6?:E6,e7?:E7,e8?:E8):E1&E2&E3&E4&E5&E6&E7&E8 {
	var result = {} as any;
	for (var extend of arguments) {
		result.Extend(extend);
	}

	// if result is empty, return the same empty-obj each time so it doesn't trigger react-js rerenders
	if (emptyEntities.emptyObj && result.VKeys().length == 0) {
		return emptyEntities.emptyObj as any;
	}

	return result;
	//return StyleSheet.create(result);
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

// methods: serialization
// ==========

// object-Json
declare global { function FromJSON(json: string); } G({FromJSON});
export function FromJSON(json: string) { return JSON.parse(json); }

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
G({ToJSON}); declare global { function ToJSON(obj, replacerFunc?, spacing?: number): string; }
export function ToJSON(obj, replacerFunc?, spacing?: number): string {
	try {
		return JSON.stringify(obj, replacerFunc, spacing);
	} catch (ex) {
		if (ex.toString() == "TypeError: Converting circular structure to JSON")
			return ToJSON_Safe.apply(this, arguments);
		throw ex;
	}
}

declare global { function ToJSON_Safe(obj, ...excludePropNames): string; } G({ToJSON_Safe});
export function ToJSON_Safe(obj, ...excludePropNames) {
	var cache = [];
	var foundDuplicates = false;
	var result = JSON.stringify(obj, function(key, value) {
		if (excludePropNames.Contains(key))
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

declare global { function ToJSON_Try(obj, ...excludePropNames): string; } G({ToJSON_Try});
export function ToJSON_Try(...args) {
	try {
		return ToJSON.apply(this, args);
	} catch (ex) {}
	return "[converting to JSON failed]";
}

declare global { function Clone(obj): any; } G({Clone});
function Clone(obj) {
	return FromJSON(ToJSON(obj));
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
export function Range(min: number, max: number, step = 1, includeMax = true, roundToStep = true) {
	var result: number[] = [];
	for (
		let i = min;
		includeMax ? i <= max : i < max;
		i = roundToStep ? (i + step).RoundTo(step) : i + step
	) {
		result.push(i);
	}
	return result;
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

//const nl = "\n";
G({nl: "\n"}); declare global { var nl: string; }

export function AsArray(args) { return Slice(args, 0); };
//s.ToArray = function(args) { return s.Slice(args, 0); };
export function Slice(args, start, end?) { return Array.prototype.slice.call(args, start != null ? start : 0, end); };

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

export function StableSort(array, compare: (aItem, bItem, aIndex: number, bIndex: number)=>number) { // needed for Chrome
	var array2 = array.map((item, index)=>({index, item}));
	array2.sort((a, b)=> {
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

// just use the word 'percent', even though value is represented as fraction (e.g. 0.5, rather than 50[%])
export function Lerp(from: number, to: number, percentFromXToY: number, keepResultInRange = true) {
	let result = from + ((to - from) * percentFromXToY);
	if (keepResultInRange) result = result.KeepBetween(from, to);
	return result;
}
export function GetPercentFromXToY(start: number, end: number, val: number, keepResultInRange = true) {
	// distance-from-x / distance-from-x-required-for-result-'1'
	var result = (val - start) / (end - start);
	if (keepResultInRange) result = result.KeepBetween(0, 1);
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

export function CloneObject(obj, propMatchFunc?: Function, depth = 0) {
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

declare var $;
let GetContentSize_cache = {};
export function GetContentSize(content: string | Element, includeMargin = false, allowCache = true) {
	/*var holder = $("#jsve_hiddenContainer");
	var contentClone = content.clone();
	holder.append(contentClone);
	var width = contentClone.outerWidth();
	var height = contentClone.outerHeight();
	contentClone.remove();*/

	let result = IsString(content) ? GetContentSize_cache[content] : null;
	if (result == null) {
		var holder = document.querySelector("#jsve_hiddenContainer") as HTMLDivElement;
		if (holder == null) {
			holder = document.createElement("div");
			holder.id = "jsve_hiddenContainer";
			holder.style.Extend({position: "absolute", left: -1000, top: -1000, width: 1000, height: 1000, overflow: "hidden"});
			document.body.appendChild(holder);
		}

		let contentClone = IsString(content) ? $(content) : $(content).clone();
		holder.appendChild(contentClone[0]);
		var width = contentClone.outerWidth(includeMargin) as number;
		var height = contentClone.outerHeight(includeMargin) as number;
		contentClone.remove();

		result = {width, height};
		if (IsString(content) && allowCache) {
			GetContentSize_cache[content] = result;
		}
	}

	return result;
}
export function GetContentWidth(content: string | Element, includeMargin = false, allowCache = true) { return GetContentSize(content, includeMargin, allowCache).width; }
export function GetContentHeight(content: string | Element, includeMargin = false, allowCache = true) { return GetContentSize(content, includeMargin, allowCache).height; }

export class TreeNode {
	constructor(ancestorNodes: TreeNode[], obj, prop) {
		this.ancestorNodes = ancestorNodes;
		this.obj = obj;
		this.prop = prop;
	}

	ancestorNodes: TreeNode[];
	get PathNodes(): string[] {
		if (this.prop == "_root") return [];
		return this.ancestorNodes.Select(a=>a.prop).concat(this.prop);
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
		if (this.obj == null)
			return undefined;
		return this.obj[this.prop];
	}
	set Value(newVal) {
		this.obj[this.prop] = newVal;
	}
}
export function GetTreeNodesInObjTree(obj: any, includeRootNode = false, _ancestorNodes = []) {
	Assert(_ancestorNodes.length <= 300, "Cannot traverse more than 300 levels into object tree. (probably circular)");

	let result = [] as TreeNode[];
	if (includeRootNode)
		result.push(new TreeNode([], {_root: obj}, "_root"));
	for (let key in obj) {
		let value = obj[key];
		let currentNode = new TreeNode(_ancestorNodes, obj, key);
		result.push(currentNode);
		if (typeof value == "object")
			result.AddRange(GetTreeNodesInObjTree(value, false, _ancestorNodes.concat(currentNode)));
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

export function GetTreeNodesInPath(treeRoot, pathNodesOrStr: string[] | string, includeRootNode = false, _ancestorNodes = []) {
	let descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
	let childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
	var result = [];
	if (includeRootNode)
		result.push(new TreeNode([], {_root: treeRoot}, "_root"));
	result.push(childTreeNode);
	if (descendantPathNodes.length > 1) // if the path goes deeper than the current child-tree-node
		result.push(...GetTreeNodesInPath(childTreeNode ? childTreeNode.Value : null, descendantPathNodes.Skip(1).join("/"), false, _ancestorNodes.concat(childTreeNode)));
	return result;
}
/*export function GetTreeNodesInPath_WithRoot(treeRoot, path: string) {
	return GetTreeNodesInPath({root: treeRoot}, "root/" + path).Skip(1);
}*/

export function VisitTreeNodesInPath(treeRoot, pathNodesOrStr: string[] | string, visitFunc: (node: TreeNode)=>any, visitRootNode = false, _ancestorNodes = []) {
	if (visitRootNode)
		visitFunc(new TreeNode([], {_root: treeRoot}, "_root"));
	let descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
	let childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
	visitFunc(childTreeNode);
	if (descendantPathNodes.length > 1) // if the path goes deeper than the current child-tree-node
		VisitTreeNodesInPath(childTreeNode.Value, descendantPathNodes.Skip(1).join("/"), visitFunc, false, _ancestorNodes.concat(childTreeNode));
	return treeRoot;
}
/*export function VisitTreeNodesInPath_WithRoot(treeRoot, path: string, visitFunc: (node: TreeNode)=>any) {
	VisitTreeNodesInPath({root: treeRoot}, "root/" + path, visitFunc);
	return treeRoot;
}*/

//export function DeepGet(obj, path, resultIfNullOrUndefined = null, resultIfUndefined_override = undefined) {
export function DeepGet<T>(obj, pathOrPathNodes: string | (string | number)[], resultIfNull: T = null, sepChar = "/"): T {
	//let pathNodes = path.SplitByAny("\\.", "\\/");
	let pathNodes = pathOrPathNodes instanceof Array ? pathOrPathNodes : pathOrPathNodes.split(sepChar);
	let result = obj;
	for (let pathNode of pathNodes) {
		if (result == null) break;
		result = result[pathNode];
	}
	/*if (result === undefined)
		return arguments.length == 4 ? resultIfUndefined_override : resultIfNullOrUndefined;
	if (result == null)
		return resultIfNullOrUndefined;*/
	if (result == null)
		return resultIfNull;
	return result;
}
export function DeepSet(obj, pathOrPathNodes: string | (string | number)[], newValue, sepChar = "/") {
	//let pathNodes = path.SplitByAny("\\.", "\\/");
	let pathNodes = pathOrPathNodes instanceof Array ? pathOrPathNodes : pathOrPathNodes.split(sepChar);
	let deepObj = obj;
	// tunnel down to the object holding the path-specified prop
	for (let pathNode of pathNodes.slice(0, -1)) {
		if (deepObj == null) break;
		deepObj = deepObj[pathNode];
	}
	deepObj[pathNodes.Last()] = newValue;
}

//static GetStackTraceStr(stackTrace?: string, sourceStackTrace?: boolean);
export function GetStackTraceStr(sourceStackTrace?: boolean);
//@((()=> { if (g.onclick == null) g.onclick = ()=>console.log(V.GetStackTraceStr()); }) as any)
export function GetStackTraceStr(...args) {
	var stackTrace: string, sourceStackTrace = true;
	if (IsString(args[0])) [stackTrace, sourceStackTrace] = args;
	else [sourceStackTrace] = args;

	//stackTrace = stackTrace || new Error()[sourceStackTrace ? "Stack" : "stack"];
	//stackTrace = stackTrace || (sourceStackTrace ? StackTrace.get().then(stack=>stackTrace = stack.map(a=>a.toString()).join("\n")) : new Error().stack);
	//stackTrace = stackTrace || new Error().stack;

	if (stackTrace == null) {
		//let fakeError = {}.VAct(a=>Error.captureStackTrace(a));
		let oldStackLimit = (Error as any).stackTraceLimit;
		(Error as any).stackTraceLimit = Infinity;

		let fakeError = new Error();
		stackTrace = fakeError.stack;
		
		(Error as any).stackTraceLimit = oldStackLimit;
	}

	return stackTrace.substr(stackTrace.IndexOf_X("\n", 1)); // remove "Error" line and first stack-frame (that of this method)
}

export function GetErrorMessagesUnderElement(element) {
	//return element.querySelectorAll(":invalid").ToList().map(node=>node.validationMessage || `Invalid value.`);
	return Array.from(element.querySelectorAll(":invalid")).map(node=>(node as any).validationMessage || `Invalid value.`);
}

export const DEL = "JS_VEXTENSIONS_SPECIAL_DELETE_KEY";