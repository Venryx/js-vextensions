(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== "undefined" ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _JSVE = __webpack_require__(2);

Object.keys(_JSVE).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _JSVE[key];
    }
  });
});

var _General = __webpack_require__(3);

Object.keys(_General).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _General[key];
    }
  });
});

var _Changes = __webpack_require__(5);

Object.keys(_Changes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Changes[key];
    }
  });
});

var _Assert = __webpack_require__(6);

Object.keys(_Assert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Assert[key];
    }
  });
});

var _Timers = __webpack_require__(7);

Object.keys(_Timers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Timers[key];
    }
  });
});

var _Types = __webpack_require__(11);

Object.keys(_Types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Types[key];
    }
  });
});

var _VectorStructs = __webpack_require__(12);

Object.keys(_VectorStructs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VectorStructs[key];
    }
  });
});

var _URLs = __webpack_require__(13);

Object.keys(_URLs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _URLs[key];
    }
  });
});

var _VCache = __webpack_require__(14);

Object.keys(_VCache).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VCache[key];
    }
  });
});

__webpack_require__(15);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSVE = exports.JSVE = function JSVE() {
  _classCallCheck(this, JSVE);
};

JSVE.logFunc = console.log;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.DoNothing = DoNothing;
exports.DN = DN;
exports.QuickIncrement = QuickIncrement;
exports.E = E;
exports.CopyText = CopyText;
exports.FromJSON = FromJSON;
exports.ToJSON = ToJSON;
exports.ToJSON_Safe = ToJSON_Safe;
exports.ToJSON_Try = ToJSON_Try;
exports.Range = Range;
exports.Global = Global;
exports.AsArray = AsArray;
exports.Slice = Slice;
exports.Multiline = Multiline;
exports.Multiline_NotCommented = Multiline_NotCommented;
exports.StableSort = StableSort;
exports.Compare = Compare;
exports.Lerp = Lerp;
exports.GetPercentFromXToY = GetPercentFromXToY;
exports.GetXToY = GetXToY;
exports.GetXToYOut = GetXToYOut;
exports.CloneObject = CloneObject;
exports.CloneArray = CloneArray;
exports.Bind = Bind;
exports.GetContentSize = GetContentSize;
exports.GetContentWidth = GetContentWidth;
exports.GetContentHeight = GetContentHeight;
exports.GetAutoElement = GetAutoElement;
exports.GetTreeNodesInObjTree = GetTreeNodesInObjTree;
exports.GetTreeNodesInPath = GetTreeNodesInPath;
exports.VisitTreeNodesInPath = VisitTreeNodesInPath;
exports.DeepGet = DeepGet;
exports.DeepSet = DeepSet;
exports.GetStackTraceStr = GetStackTraceStr;
exports.GetErrorMessagesUnderElement = GetErrorMessagesUnderElement;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var g = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" ? window : global;
if (Number.MIN_SAFE_INTEGER == null) Number.MIN_SAFE_INTEGER = -9007199254740991;
if (Number.MAX_SAFE_INTEGER == null) Number.MAX_SAFE_INTEGER = 9007199254740991;
g["G"] = G;
function G() {
    for (var _len = arguments.length, globalHolders = Array(_len), _key = 0; _key < _len; _key++) {
        globalHolders[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = globalHolders[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var globalHolder = _step.value;

            Object.assign(g, globalHolder);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
G({ DoNothing: DoNothing });
function DoNothing() {}
G({ DN: DN });
function DN() {}
//var quickIncrementValues = {};
//export function QuickIncrement(name = new Error().stack.split("\n")[2]) { // this doesn't always work, fsr
function QuickIncrement() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";

    QuickIncrement["values"][name] = (QuickIncrement["values"][name] | 0) + 1;
    return QuickIncrement["values"][name];
}
QuickIncrement["values"] = [];
G({ QuickIncrement: QuickIncrement });
var emptyEntities = exports.emptyEntities = { emptyObj: {}, emptyArray: [], emptyArray_forLoading: [] };
G({ E: E });
function E(e1, e2, e3, e4, e5, e6, e7, e8) {
    var result = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = arguments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var extend = _step2.value;

            result.Extend(extend);
        }
        // if result is empty, return the same empty-obj each time so it doesn't trigger react-js rerenders
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    if (emptyEntities.emptyObj && result.VKeys().length == 0) {
        return emptyEntities.emptyObj;
    }
    return result;
    //return StyleSheet.create(result);
}
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
G({ FromJSON: FromJSON });
function FromJSON(json) {
    return JSON.parse(json);
}
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
G({ ToJSON: ToJSON });
function ToJSON(obj, replacerFunc, spacing) {
    try {
        return JSON.stringify(obj, replacerFunc, spacing);
    } catch (ex) {
        if (ex.toString() == "TypeError: Converting circular structure to JSON") return ToJSON_Safe.apply(this, arguments);
        throw ex;
    }
}
G({ ToJSON_Safe: ToJSON_Safe });
function ToJSON_Safe(obj) {
    for (var _len2 = arguments.length, excludePropNames = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        excludePropNames[_key2 - 1] = arguments[_key2];
    }

    var cache = [];
    var foundDuplicates = false;
    var result = JSON.stringify(obj, function (key, value) {
        if (excludePropNames.Contains(key)) return;
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object' && value !== null) {
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
    if (foundDuplicates) result = "[was circular]" + result;
    return result;
}
G({ ToJSON_Try: ToJSON_Try });
function ToJSON_Try() {
    try {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return ToJSON.apply(this, args);
    } catch (ex) {}
    return "[converting to JSON failed]";
}
G({ Clone: Clone });
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
function Range(min, max) {
    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var includeMax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var roundToStep = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    var result = [];
    for (var i = min; includeMax ? i <= max : i < max; i = roundToStep ? (i + step).RoundTo(step) : i + step) {
        result.push(i);
    }
    return result;
}
function Global(target) {
    //var name = (target as any).GetName();
    var name = target["name_fake"] || target.name || (target.toString().match(/^function\s*([^\s(]+)/) || [])[1];
    //console.log("Globalizing: " + name);
    g[name] = target;
}

var IDProvider = exports.IDProvider = function () {
    function IDProvider() {
        _classCallCheck(this, IDProvider);

        this.lastID = -1;
    }

    _createClass(IDProvider, [{
        key: "GetID",
        value: function GetID() {
            return ++this.lastID;
        }
    }]);

    return IDProvider;
}();
//const nl = "\n";


G({ nl: "\n" });
G({ AsObj: AsObj });
function AsObj(obj) {
    if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object") return obj;
    if (obj != null) return obj.Props().ToMap(function (a) {
        return a.name;
    }, function (a) {
        return a.value;
    });
    return {};
}
function AsArray(args) {
    return Slice(args, 0);
}
;
//s.ToArray = function(args) { return s.Slice(args, 0); };
function Slice(args, start, end) {
    return Array.prototype.slice.call(args, start != null ? start : 0, end);
}
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
function Multiline_NotCommented(functionWithCode) {
    var text = functionWithCode.toString().replace(/\r/g, "");
    var firstCharOfSecondLinePos = text.indexOf("\n") + 1;
    var enderOfSecondLastLine = text.lastIndexOf("\n");
    var result = text.substring(firstCharOfSecondLinePos, enderOfSecondLastLine);
    result = result.replace(/\t/g, "    ");
    // replace the start and end tokens of special string-containers (used for keeping comments in-tact)
    result = result.replace(/['"]@((?:.|\n)+)@['"];(\n(?=\n))?/g, function (match, sub1) {
        return sub1.replace(/\\n/, "\n");
    });
    return result;
}
function StableSort(array, compare) {
    var array2 = array.map(function (item, index) {
        return { index: index, item: item };
    });
    array2.sort(function (a, b) {
        var r = compare(a.item, b.item, a.index, b.index);
        return r != 0 ? r : Compare(a.index, b.index);
    });
    return array2.map(function (pack) {
        return pack.item;
    });
}
function Compare(a, b) {
    var caseSensitive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (!caseSensitive && typeof a == "string" && typeof b == "string") {
        a = a.toLowerCase();
        b = b.toLowerCase();
    }
    return a < b ? -1 : a > b ? 1 : 0;
}
// just use the word 'percent', even though value is represented as fraction (e.g. 0.5, rather than 50[%])
function Lerp(from, to, percentFromXToY) {
    var keepResultInRange = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    var result = from + (to - from) * percentFromXToY;
    if (keepResultInRange) result = result.KeepBetween(from, to);
    return result;
}
function GetPercentFromXToY(start, end, val) {
    var keepResultInRange = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    // distance-from-x / distance-from-x-required-for-result-'1'
    var result = (val - start) / (end - start);
    if (keepResultInRange) result = result.KeepBetween(0, 1);
    return result;
}
function GetXToY(minX, maxY) {
    var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var result = [];
    for (var val = minX; val <= maxY; val += interval) {
        result.push(val);
    }
    return result;
}
function GetXToYOut(minX, maxOutY) {
    var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var result = [];
    for (var val = minX; val < maxOutY; val += interval) {
        result.push(val);
    }
    return result;
}
function CloneObject(obj, propMatchFunc) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

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
    var result = {};
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = obj.Props()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var prop = _step3.value;

            if (!(prop.value instanceof Function) && (propMatchFunc == null || propMatchFunc.call(obj, prop.name, prop.value))) result[prop.name] = CloneObject(prop.value, propMatchFunc, depth + 1);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return result;
}
function CloneArray(array) {
    //array.slice(0); //deep: JSON.parse(JSON.stringify(array));
    return Array.prototype.slice.call(array, 0);
}
/*static IsEqual(a, b) {
    function _equals(a, b) { return JSON.stringify(a) === JSON.stringify($.extend(true, {}, a, b)); }
    return _equals(a, b) && _equals(b, a);
};*/
function Bind(func, newThis) {
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
    var holder = document.querySelector("#jsve_hiddenContainer");
    if (holder == null) {
        holder = document.createElement("div");
        holder.id = "jsve_hiddenContainer";
        holder.style.Extend({ position: "absolute", left: "-1000px", top: "-1000px", width: "1000px", height: "1000px", overflow: "hidden" });
        document.body.appendChild(holder);
    }
    return holder;
}
var GetContentSize_cache = {};
function GetContentSize(content) {
    var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var createClone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var allowCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    /*var holder = $("#jsve_hiddenContainer");
    var contentClone = content.clone();
    holder.append(contentClone);
    var width = contentClone.outerWidth();
    var height = contentClone.outerHeight();
    contentClone.remove();*/
    var cacheStore = IsString(content) ? GetContentSize_cache : content["GetContentSize_cache"] = content["GetContentSize_cache"] || {};
    var currentHTML = IsString(content) ? content : content.outerHTML;
    var result = cacheStore[currentHTML];
    if (result == null) {
        var holder = GetHiddenHolder();
        var testElement = IsString(content) ? $(content) : createClone ? $(content).clone() : $(content);
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
function GetContentWidth(content) {
    var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var createClone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var allowCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    return GetContentSize(content, includeMargin, createClone, allowCache).width;
}
function GetContentHeight(content) {
    var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var createClone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var allowCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    return GetContentSize(content, includeMargin, createClone, allowCache).height;
}
var autoElements = exports.autoElements = {};
function GetAutoElement(startHTML) {
    if (autoElements[startHTML] == null) {
        var holder = GetHiddenHolder();
        var element = $(startHTML)[0];
        holder.appendChild(element);
        autoElements[startHTML] = element;
    }
    return autoElements[startHTML];
}

var TreeNode = exports.TreeNode = function () {
    function TreeNode(ancestorNodes, obj, prop) {
        _classCallCheck(this, TreeNode);

        this.ancestorNodes = ancestorNodes;
        this.obj = obj;
        this.prop = prop;
    }

    _createClass(TreeNode, [{
        key: "PathNodes",
        get: function get() {
            if (this.prop == "_root") return [];
            return this.ancestorNodes.Select(function (a) {
                return a.prop;
            }).concat(this.prop);
        }
    }, {
        key: "PathStr",
        get: function get() {
            return this.PathNodes.join("/");
        }
    }, {
        key: "PathStr_Updeep",
        get: function get() {
            return this.PathNodes.join(".");
        }
        //value;

    }, {
        key: "Value",
        get: function get() {
            if (this.obj == null) return undefined;
            return this.obj[this.prop];
        },
        set: function set(newVal) {
            this.obj[this.prop] = newVal;
        }
    }]);

    return TreeNode;
}();

function GetTreeNodesInObjTree(obj) {
    var includeRootNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _ancestorNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    Assert(_ancestorNodes.length <= 300, "Cannot traverse more than 300 levels into object tree. (probably circular)");
    var result = [];
    if (includeRootNode) result.push(new TreeNode([], { _root: obj }, "_root"));
    for (var key in obj) {
        var value = obj[key];
        var currentNode = new TreeNode(_ancestorNodes, obj, key);
        result.push(currentNode);
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object") result.AddRange(GetTreeNodesInObjTree(value, false, _ancestorNodes.concat(currentNode)));
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
function GetTreeNodesInPath(treeRoot, pathNodesOrStr) {
    var includeRootNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var _ancestorNodes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    var descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
    var childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
    var result = [];
    if (includeRootNode) result.push(new TreeNode([], { _root: treeRoot }, "_root"));
    result.push(childTreeNode);
    if (descendantPathNodes.length > 1) // if the path goes deeper than the current child-tree-node
        result.push.apply(result, _toConsumableArray(GetTreeNodesInPath(childTreeNode ? childTreeNode.Value : null, descendantPathNodes.Skip(1).join("/"), false, _ancestorNodes.concat(childTreeNode))));
    return result;
}
/*export function GetTreeNodesInPath_WithRoot(treeRoot, path: string) {
    return GetTreeNodesInPath({root: treeRoot}, "root/" + path).Skip(1);
}*/
function VisitTreeNodesInPath(treeRoot, pathNodesOrStr, visitFunc) {
    var visitRootNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var _ancestorNodes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

    if (visitRootNode) visitFunc(new TreeNode([], { _root: treeRoot }, "_root"));
    var descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
    var childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
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
function DeepGet(obj, pathOrPathNodes) {
    var resultIfNull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var sepChar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";

    //let pathNodes = path.SplitByAny("\\.", "\\/");
    var pathNodes = pathOrPathNodes instanceof Array ? pathOrPathNodes : pathOrPathNodes.split(sepChar);
    var result = obj;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = pathNodes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var pathNode = _step4.value;

            if (result == null) break;
            result = result[pathNode];
        }
        /*if (result === undefined)
            return arguments.length == 4 ? resultIfUndefined_override : resultIfNullOrUndefined;
        if (result == null)
            return resultIfNullOrUndefined;*/
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    if (result == null) return resultIfNull;
    return result;
}
function DeepSet(obj, pathOrPathNodes, newValue) {
    var sepChar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";

    //let pathNodes = path.SplitByAny("\\.", "\\/");
    var pathNodes = pathOrPathNodes instanceof Array ? pathOrPathNodes : pathOrPathNodes.split(sepChar);
    var deepObj = obj;
    // tunnel down to the object holding the path-specified prop
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = pathNodes.slice(0, -1)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var pathNode = _step5.value;

            if (deepObj == null) break;
            deepObj = deepObj[pathNode];
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    deepObj[pathNodes.Last()] = newValue;
}
//@((()=> { if (g.onclick == null) g.onclick = ()=>console.log(V.GetStackTraceStr()); }) as any)
function GetStackTraceStr() {
    var stackTrace,
        sourceStackTrace = true;

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
    }

    if (IsString(args[0])) {
        ;
        stackTrace = args[0];
        sourceStackTrace = args[1];
    } else {
        ;
        sourceStackTrace = args[0];
    } //stackTrace = stackTrace || new Error()[sourceStackTrace ? "Stack" : "stack"];
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
    return stackTrace.substr(stackTrace.IndexOf_X("\n", 1)); // remove "Error" line and first stack-frame (that of this method)
}
function GetErrorMessagesUnderElement(element) {
    //return element.querySelectorAll(":invalid").ToList().map(node=>node.validationMessage || `Invalid value.`);
    return Array.from(element.querySelectorAll(":invalid")).map(function (node) {
        return node.validationMessage || "Invalid value.";
    });
}
var DEL = exports.DEL = "JS_VEXTENSIONS_SPECIAL_DELETE_KEY";
G({ FindDOM: FindDOM });
function FindDOM(selector) {
    return document.querySelector(selector);
}
G({ FindDOMAll: FindDOMAll });
function FindDOMAll(selector) {
    return Array.from(document.querySelectorAll(selector));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GetPropsChanged = GetPropsChanged;
exports.GetPropsChanged_WithValues = GetPropsChanged_WithValues;
function GetPropsChanged(obj1, obj2) {
    var returnNullIfSame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    obj1 = obj1 || {}, obj2 = obj2 || {};
    var keys = obj1.VKeys().concat(obj2.VKeys()).Distinct();
    var result = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (obj1[key] !== obj2[key]) {
                result.push(key);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (result.length == 0 && returnNullIfSame) return null;
    return result;
}
function GetPropsChanged_WithValues(obj1, obj2) {
    var returnNullIfSame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    obj1 = obj1 || {}, obj2 = obj2 || {};
    var keys = obj1.VKeys().concat(obj2.VKeys()).Distinct();
    var result = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            if (obj1[key] !== obj2[key]) {
                result[key] = { 1: obj1[key], 2: obj2[key] };
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    if (result.VKeys().length == 0 && returnNullIfSame) return null;
    return result;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.A_OfType_Wrapper = exports.A_NotEqualTo_Wrapper = exports.A = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.Assert = Assert;
exports.AssertWarn = AssertWarn;

var _General = __webpack_require__(3);

var _JSVE = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

G({ Assert: Assert });
function Assert(condition, messageOrMessageFunc) {
    if (condition) return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    _JSVE.JSVE.logFunc("Assert failed) " + message + "\n\nStackTrace) " + (0, _General.GetStackTraceStr)());
    console.error("Assert failed) " + message);
    var skipError = false; // add flag which you can use to skip the error, when paused in debugger
    debugger;
    if (!skipError) throw new Error("Assert failed) " + message);
}
G({ AssertWarn: AssertWarn });
function AssertWarn(condition, messageOrMessageFunc) {
    if (condition) return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    console.warn("Assert-warn failed) " + message + "\n\nStackTrace) " + (0, _General.GetStackTraceStr)());
}
// this version throws an error with only the provided message -- for ones the user may well see, and which don't need the stack (or "Assert failed) " text)
/*g.Extend({AssertSimple});
export function AssertSimple(condition, messageOrMessageFunc?: string | Function) {
    if (condition) return;

    var message = (messageOrMessageFunc as any) instanceof Function ? (messageOrMessageFunc as any)() : messageOrMessageFunc;

    Log(`Assert failed) ${message}\n\nStackTrace) ${V.GetStackTraceStr()}`);
    console.error("Assert failed) " + message);
    debugger;
    throw new Error(message);
}*/

var A = exports.A = function () {
    function A() {
        _classCallCheck(this, A);
    }

    _createClass(A, null, [{
        key: "NotEqualTo",
        value: function NotEqualTo(val1) {
            return new A_NotEqualTo_Wrapper(val1);
        }
    }, {
        key: "NonNull",
        get: function get() {
            return function (value) {
                Assert(value != null, function () {
                    return "Value cannot be null. (provided value: " + value + ")";
                });
                return value;
            };
        },
        set: function set(value) {
            A.NonNull(value);
        }
    }]);

    return A;
}();

var A_NotEqualTo_Wrapper = exports.A_NotEqualTo_Wrapper = function () {
    function A_NotEqualTo_Wrapper(val1) {
        _classCallCheck(this, A_NotEqualTo_Wrapper);

        this.val1 = val1;
    }

    _createClass(A_NotEqualTo_Wrapper, [{
        key: "a",
        set: function set(val2) {
            Assert(val2 != this.val1);
        }
    }]);

    return A_NotEqualTo_Wrapper;
}();

var A_OfType_Wrapper = exports.A_OfType_Wrapper = function () {
    function A_OfType_Wrapper(type) {
        _classCallCheck(this, A_OfType_Wrapper);

        this.type = type;
    }

    _createClass(A_OfType_Wrapper, [{
        key: "a",
        set: function set(val) {
            Assert(val != null && val.GetType().IsDerivedFrom(this.type));
        }
    }]);

    return A_OfType_Wrapper;
}();

G({ A: A, A_NotEqualTo_Wrapper: A_NotEqualTo_Wrapper, A_OfType_Wrapper: A_OfType_Wrapper });

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.TryCall = TryCall;
exports.TryCall_OnX = TryCall_OnX;
exports.WaitXThenRun = WaitXThenRun;
exports.Sleep = Sleep;
exports.SleepAsync = SleepAsync;
exports.DoNothingXTimesThenDoY = DoNothingXTimesThenDoY;
exports.BufferAction = BufferAction;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimerContext = exports.TimerContext = function () {
    function TimerContext() {
        _classCallCheck(this, TimerContext);

        this.timers = [];
    }

    _createClass(TimerContext, [{
        key: "Reset",
        value: function Reset() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.timers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var timer = _step.value;

                    timer.Stop();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.timers = [];
        }
    }]);

    return TimerContext;
}();
// methods
// ==========


function TryCall(func) {
    //if (!(func instanceof Function)) return;
    if (typeof func != "function") return;
    try {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        return func.apply(this, args);
    } catch (ex) {}
}
function TryCall_OnX(obj, func) {
    if (typeof func != "function") return;
    try {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
        }

        return func.apply(obj, args);
    } catch (ex) {}
}
G({ TryCall: TryCall, TryCall_OnX: TryCall_OnX });
G({ WaitXThenRun: WaitXThenRun });
function WaitXThenRun(delayInMS, func) {
    for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
    }

    // setTimeout can take really long on Chrome mobile (eg. while scrolling), for some reason (like, 1.5 seconds)
    // on desktop, setImmediate is better as well, since it takes ~0ms instead of 1-15ms
    if (delayInMS == 0) {
        return setImmediate.apply(undefined, [func].concat(args));
    }
    return setTimeout.apply(undefined, [func, delayInMS].concat(args));
}
function Sleep(ms) {
    var startTime = new Date().getTime();
    while (new Date().getTime() - startTime < ms) {}
}
function SleepAsync(timeMS) {
    return new Promise(function (resolve, reject) {
        WaitXThenRun(timeMS, resolve);
    });
}
var DoNothingXTimesThenDoY_counters = {};
function DoNothingXTimesThenDoY(doNothingCount, func) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "default";

    if (DoNothingXTimesThenDoY_counters[key] == null) {
        DoNothingXTimesThenDoY_counters[key] = 0;
    }
    if (DoNothingXTimesThenDoY_counters[key] >= doNothingCount) {
        func();
    }
    DoNothingXTimesThenDoY_counters[key]++;
}
// interval is in seconds (can be decimal)

var Timer = exports.Timer = function () {
    function Timer(intervalInMS, func) {
        var maxCallCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        _classCallCheck(this, Timer);

        this.timerID = -1;
        this.callCount = 0;
        this.intervalInMS = intervalInMS;
        this.func = func;
        this.maxCallCount = maxCallCount;
    }

    _createClass(Timer, [{
        key: "SetContext",
        value: function SetContext(timerContext) {
            Assert(timerContext, "TimerContext cannot be null.");
            timerContext.timers.push(this);
            return this;
        }
    }, {
        key: "Start",
        value: function Start() {
            var _this = this;

            // if start is called when it's already running, stop the timer first (thus we restart the timer instead of causing a second triggering)
            if (this.IsRunning) {
                this.Stop();
            }
            this.timerID = setInterval(function () {
                _this.func();
                _this.callCount++;
                if (_this.maxCallCount != -1 && _this.callCount >= _this.maxCallCount) {
                    _this.Stop();
                }
            }, this.intervalInMS);
            return this;
        }
    }, {
        key: "Stop",
        value: function Stop() {
            clearInterval(this.timerID);
            this.timerID = -1;
        }
    }, {
        key: "IsRunning",
        get: function get() {
            return this.timerID != -1;
        }
    }]);

    return Timer;
}();

var TimerS = exports.TimerS = function (_Timer) {
    _inherits(TimerS, _Timer);

    function TimerS(interval_decimal, func) {
        var maxCallCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        _classCallCheck(this, TimerS);

        return _possibleConstructorReturn(this, (TimerS.__proto__ || Object.getPrototypeOf(TimerS)).call(this, interval_decimal * 1000, func, maxCallCount));
    }

    return TimerS;
}(Timer);

var funcLastScheduledRunTimes = {};
function BufferAction() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
    }

    if (args.length == 2) var minInterval = args[0],
            func = args[1],
            key = null;else if (args.length == 3) var key = args[0],
            minInterval = args[1],
            func = args[2];
    var lastScheduledRunTime = funcLastScheduledRunTimes[key] || 0;
    var now = new Date().getTime();
    var timeSinceLast = now - lastScheduledRunTime;
    if (timeSinceLast >= minInterval) {
        // if we've waited enough since last run, run right now
        func();
        funcLastScheduledRunTimes[key] = now;
    } else {
        var waitingForNextRunAlready = lastScheduledRunTime > now;
        if (!waitingForNextRunAlready) {
            // else, if we're not already waiting for next-run, schedule next-run
            var nextRunTime = lastScheduledRunTime + minInterval;
            var timeTillNextRun = nextRunTime - now;
            WaitXThenRun(timeTillNextRun, func);
            funcLastScheduledRunTimes[key] = nextRunTime;
        }
    }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8).setImmediate))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(9);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4), __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.IsNaN = IsNaN;
exports.IsPrimitive = IsPrimitive;
exports.IsBool = IsBool;
exports.ToBool = ToBool;
exports.IsObject = IsObject;
exports.IsObjectOf = IsObjectOf;
exports.IsNumber = IsNumber;
exports.IsNumberString = IsNumberString;
exports.IsInt = IsInt;
exports.ToInt = ToInt;
exports.IsDouble = IsDouble;
exports.ToDouble = ToDouble;
exports.IsString = IsString;
exports.ToString = ToString;
exports.IsFunction = IsFunction;
exports.IsConstructor = IsConstructor;
// standard types
// ----------
/*export class bool extends Boolean {}
export class int extends Number {}
export class double extends Number {}
export var string = "string" as any as (new(..._)=>string);*/
var bool = exports.bool = function bool() {
    return "bool";
};
var int = exports.int = function int() {
    return "int";
};
var double = exports.double = function double() {
    return "double";
};
var string = exports.string = function string() {
    return "string";
};
G({ IsNaN: IsNaN });
function IsNaN(obj) {
    return typeof obj == "number" && obj != obj;
}
G({ IsPrimitive: IsPrimitive });
function IsPrimitive(obj) {
    return IsBool(obj) || IsNumber(obj) || IsString(obj);
}
G({ IsBool: IsBool });
function IsBool(obj) {
    return typeof obj == "boolean";
} //|| obj instanceof Boolean
G({ ToBool: ToBool });
function ToBool(boolStr) {
    return boolStr == "true" ? true : false;
}
G({ IsObject: IsObject });
function IsObject(obj) {
    return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object";
}
G({ IsObjectOf: IsObjectOf });
function IsObjectOf(obj) {
    return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object";
}
G({ IsNumber: IsNumber });
function IsNumber(obj) {
    var allowNumberObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var allowNaN = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!allowNaN && IsNaN(obj)) return false;
    return typeof obj == "number" || allowNumberObj && obj instanceof Number;
}
G({ IsNumberString: IsNumberString });
function IsNumberString(obj) {
    var allowNaN = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!allowNaN && obj == "NaN") return false;
    return IsString(obj) && parseInt(obj).toString() == obj;
}
G({ IsInt: IsInt });
function IsInt(obj) {
    return typeof obj == "number" && parseFloat(obj) == parseInt(obj);
}
G({ ToInt: ToInt });
function ToInt(stringOrFloatVal) {
    return parseInt(stringOrFloatVal);
}
G({ IsDouble: IsDouble });
function IsDouble(obj) {
    return typeof obj == "number" && parseFloat(obj) != parseInt(obj);
}
G({ ToDouble: ToDouble });
function ToDouble(stringOrIntVal) {
    return parseFloat(stringOrIntVal);
}
G({ IsString: IsString });
function IsString(obj) {
    var allowStringObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return typeof obj == "string" || allowStringObj && obj instanceof String;
}
G({ ToString: ToString });
function ToString(val) {
    return "" + val;
}
G({ IsFunction: IsFunction });
function IsFunction(obj) {
    //return obj instanceof Function;
    return typeof obj == "function";
}
G({ IsConstructor: IsConstructor });
function IsConstructor(obj) {
    //return obj instanceof Function && obj.name;
    return typeof obj == "function" && obj.name;
}
/*function TypeOrNameOrGetter_ToName<T>(typeOrNameOrGetter?: string | (new(..._)=>T) | ((_?)=>new(..._)=>T)): string {
    return typeOrNameOrGetter instanceof Function && typeOrNameOrGetter.name ? typeOrNameOrGetter.name :
        typeOrNameOrGetter instanceof Function ? (typeOrNameOrGetter as any)().name :
        typeOrNameOrGetter;
}*/
// classes/enums
// ==========
/*var constructorHelper = function() {};
export function CreateClass(baseClass, classMembers) {
    baseClass = baseClass || Object;

    var result;

    if (classMembers && classMembers.hasOwnProperty("constructor"))
        result = classMembers.constructor;
    else
        result = function () { return baseClass.apply(this, arguments); };

    constructorHelper.prototype = baseClass.prototype;
    result.prototype = new constructorHelper();

    if (classMembers)
        result.prototype.Extend(classMembers);

    result.prototype.constructor = result;
    result.__super__ = baseClass.prototype;

    return result;
}*/

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VBounds = exports.VRect = exports.VVector3 = exports.Vector3i = exports.VVector2 = exports.Vector2i = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _General = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*function _VDFSerialize(): any {}
function _VDFDeserialize(): any {}*/
var Vector2i = Vector2i_1 = function () {
    function Vector2i() {
        _classCallCheck(this, Vector2i);

        var x, y;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (typeof args[0] == "number") {
            ;
            x = args[0];
            y = args[1];
        } else if (args[0].x != null) {
            ;
            var _ref = [args[0].x, args[0].y];
            x = _ref[0];
            y = _ref[1];
        } else if (args[0].left != null) {
            ;
            var _ref2 = [args[0].left, args[0].top];
            x = _ref2[0];
            y = _ref2[1];
        }this.x = x;
        this.y = y;
    }

    _createClass(Vector2i, [{
        key: "toString",

        /*@_VDFDeserialize() Deserialize(node) {
            var strParts = node.primitiveValue.split(" ");
            this.x = parseInt(strParts[0]);
            this.y = parseInt(strParts[1]);
        }
        @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
        value: function toString() {
            return this.x + " " + this.y;
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return other && this.toString() == other.toString();
        }
    }, {
        key: "NewX",
        value: function NewX(xOrFunc) {
            return new Vector2i_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y);
        }
    }, {
        key: "NewY",
        value: function NewY(yOrFunc) {
            return new Vector2i_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc);
        }
    }, {
        key: "Minus",
        value: function Minus() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            var _ref3 = args[0] instanceof Vector2i_1 ? [args[0].x, args[0].y] : args,
                _ref4 = _slicedToArray(_ref3, 2),
                x = _ref4[0],
                y = _ref4[1];

            return new Vector2i_1(this.x - x, this.y - y);
        }
    }, {
        key: "Plus",
        value: function Plus() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            var _ref5 = args[0] instanceof Vector2i_1 ? [args[0].x, args[0].y] : args,
                _ref6 = _slicedToArray(_ref5, 2),
                x = _ref6[0],
                y = _ref6[1];

            return new Vector2i_1(this.x + x, this.y + y);
        }
    }, {
        key: "Times",
        value: function Times() {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            var _ref7 = args[0] instanceof Vector2i_1 ? [args[0].x, args[0].y] : args.length == 1 ? [args[0], args[0]] : args,
                _ref8 = _slicedToArray(_ref7, 2),
                x = _ref8[0],
                y = _ref8[1];

            return new Vector2i_1(this.x * x, this.y * y);
        }
    }, {
        key: "DistanceTo",
        value: function DistanceTo(other) {
            return Math.sqrt((other.x - this.x).ToPower(2) + (other.y - this.y).ToPower(2));
        }
    }], [{
        key: "zero",
        get: function get() {
            return new Vector2i_1(0, 0);
        }
    }, {
        key: "one",
        get: function get() {
            return new Vector2i_1(1, 1);
        }
    }]);

    return Vector2i;
}();
exports.Vector2i = Vector2i = Vector2i_1 = __decorate([_General.Global], Vector2i);
exports.Vector2i = Vector2i;

var VVector2 = VVector2_1 = function () {
    function VVector2() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, VVector2);

        this.x = x != null ? x : 0;
        this.y = y != null ? y : 0;
    }

    _createClass(VVector2, [{
        key: "toString",

        /*@_VDFDeserialize() Deserialize(node) {
            var strParts = node.primitiveValue.split(" ");
            this.x = parseInt(strParts[0]);
            this.y = parseInt(strParts[1]);
        }
        @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
        value: function toString() {
            return this.x + " " + this.y;
        }
    }, {
        key: "NewX",
        value: function NewX(xOrFunc) {
            return new VVector2_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y);
        }
    }, {
        key: "NewY",
        value: function NewY(yOrFunc) {
            return new VVector2_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc);
        }
    }, {
        key: "Minus",
        value: function Minus(arg1, arg2) {
            if (arg1 instanceof VVector2_1) return new VVector2_1(this.x - arg1.x, this.y - arg1.y);
            return new VVector2_1(this.x - arg1, this.y - arg2);
        }
    }, {
        key: "Plus",
        value: function Plus(arg1, arg2) {
            if (arg1 instanceof VVector2_1) return new VVector2_1(this.x + arg1.x, this.y + arg1.y);
            return new VVector2_1(this.x + arg1, this.y + arg2);
        }
    }], [{
        key: "zero",
        get: function get() {
            return new VVector2_1(0, 0);
        }
    }, {
        key: "one",
        get: function get() {
            return new VVector2_1(1, 1);
        }
    }]);

    return VVector2;
}();
exports.VVector2 = VVector2 = VVector2_1 = __decorate([_General.Global], VVector2);
exports.VVector2 = VVector2;

var Vector3i = Vector3i_1 = function () {
    function Vector3i() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, Vector3i);

        this.x = x != null ? x : 0;
        this.y = y != null ? y : 0;
        this.z = z != null ? z : 0;
    }

    _createClass(Vector3i, [{
        key: "toString",

        /*@_VDFDeserialize() Deserialize(node) {
            var strParts = node.primitiveValue.split(" ");
            this.x = parseInt(strParts[0]);
            this.y = parseInt(strParts[1]);
            this.z = parseInt(strParts[2]);
        }
        //VDFSerialize() { return this.toString(); } //Swapped().toString(); }
        @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
        value: function toString() {
            return this.x + " " + this.y + " " + this.z;
        }
    }, {
        key: "NewX",
        value: function NewX(xOrFunc) {
            return new Vector3i_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y, this.z);
        }
    }, {
        key: "NewY",
        value: function NewY(yOrFunc) {
            return new Vector3i_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc, this.z);
        }
    }, {
        key: "NewZ",
        value: function NewZ(zOrFunc) {
            return new Vector3i_1(this.x, this.y, zOrFunc instanceof Function ? zOrFunc(this.z) : zOrFunc);
        }
    }], [{
        key: "zero",
        get: function get() {
            return new Vector3i_1(0, 0, 0);
        }
    }, {
        key: "one",
        get: function get() {
            return new Vector3i_1(1, 1, 1);
        }
    }]);

    return Vector3i;
}();
exports.Vector3i = Vector3i = Vector3i_1 = __decorate([_General.Global], Vector3i);
exports.Vector3i = Vector3i;

var VVector3 = VVector3_1 = function () {
    function VVector3() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var _this = this;

        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, VVector3);

        /*@_VDFDeserialize() Deserialize(node) {
            var strParts = node.primitiveValue.split(" ");
            this.x = parseInt(strParts[0]);
            this.y = parseInt(strParts[1]);
            this.z = parseInt(strParts[2]);
            //this.Swap();
        }
        //VDFSerialize() { return this.toString(); }; //Swapped().toString(); };
        @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
        this.toString = function () {
            return _this.x + " " + _this.y + " " + _this.z;
        };
        this.x = x != null ? x : 0;
        this.y = y != null ? y : 0;
        this.z = z != null ? z : 0;
    }

    _createClass(VVector3, [{
        key: "NewX",
        value: function NewX(xOrFunc) {
            return new VVector3_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y, this.z);
        }
    }, {
        key: "NewY",
        value: function NewY(yOrFunc) {
            return new VVector3_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc, this.z);
        }
    }, {
        key: "NewZ",
        value: function NewZ(zOrFunc) {
            return new VVector3_1(this.x, this.y, zOrFunc instanceof Function ? zOrFunc(this.z) : zOrFunc);
        }
    }, {
        key: "Minus",
        value: function Minus(arg1, arg2, arg3) {
            if (arg1 instanceof VVector3_1) return new VVector3_1(this.x - arg1.x, this.y - arg1.y, this.z - arg1.z);
            return new VVector3_1(this.x - arg1, this.y - arg2, this.z - arg3);
        }
    }, {
        key: "Plus",
        value: function Plus(arg1, arg2, arg3) {
            if (arg1 instanceof VVector3_1) return new VVector3_1(this.x + arg1.x, this.y + arg1.y, this.z + arg1.z);
            return new VVector3_1(this.x + arg1, this.y + arg2, this.z + arg3);
        }
    }], [{
        key: "zero",
        get: function get() {
            return new VVector3_1(0, 0, 0);
        }
    }, {
        key: "one",
        get: function get() {
            return new VVector3_1(1, 1, 1);
        }
    }]);

    return VVector3;
}();
exports.VVector3 = VVector3 = VVector3_1 = __decorate([_General.Global], VVector3);
exports.VVector3 = VVector3;

var VRect = VRect_1 = function () {
    function VRect() {
        _classCallCheck(this, VRect);

        var x = void 0,
            y = void 0,
            width = void 0,
            height = void 0,
            y0IsBottom = void 0;

        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        if (args.length == 2 || args.length == 3) {
            ;
            var _ref9 = [args[0].x, args[0].y, args[1].x, args[1].y, args[2]];
            x = _ref9[0];
            y = _ref9[1];
            width = _ref9[2];
            height = _ref9[3];
            y0IsBottom = _ref9[4];
        } else {
            ;
            x = args[0];
            y = args[1];
            width = args[2];
            height = args[3];
            y0IsBottom = args[4];
        }this.x = x;
        this.y = y;
        this.width = width != null ? width : 0;
        this.height = height != null ? height : 0;
        this.y0IsBottom = y0IsBottom != null ? y0IsBottom : true;
    }

    _createClass(VRect, [{
        key: "toString",

        /*@_VDFDeserialize() Deserialize(node) {
            var strParts = node.primitiveValue.split(" ");
            this.x = parseInt(strParts[0]);
            this.y = parseInt(strParts[1]);
            this.width = parseInt(strParts[2]);
            this.height = parseInt(strParts[3]);
        }
        @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
        value: function toString() {
            return this.x + " " + this.y + " " + this.width + " " + this.height;
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            if (!(other instanceof VRect_1)) return false;
            return this.toString() == other.toString();
        }
    }, {
        key: "NewX",
        value: function NewX(valOrFunc) {
            return this.Clone().VSet({ x: valOrFunc instanceof Function ? valOrFunc(this.x) : valOrFunc });
        }
    }, {
        key: "NewLeft",
        value: function NewLeft(valOrFunc) {
            return this.Clone().VSet({ Left: valOrFunc instanceof Function ? valOrFunc(this.Left) : valOrFunc });
        }
    }, {
        key: "NewRight",
        value: function NewRight(valOrFunc) {
            return this.Clone().VSet({ Right: valOrFunc instanceof Function ? valOrFunc(this.Right) : valOrFunc });
        }
    }, {
        key: "NewY",
        value: function NewY(valOrFunc) {
            return this.Clone().VSet({ y: valOrFunc instanceof Function ? valOrFunc(this.y) : valOrFunc });
        }
    }, {
        key: "NewBottom",
        value: function NewBottom(valOrFunc) {
            return this.Clone().VSet({ Bottom: valOrFunc instanceof Function ? valOrFunc(this.Bottom) : valOrFunc });
        }
    }, {
        key: "NewTop",
        value: function NewTop(valOrFunc) {
            return this.Clone().VSet({ Top: valOrFunc instanceof Function ? valOrFunc(this.Top) : valOrFunc });
        }
    }, {
        key: "NewWidth",
        value: function NewWidth(valOrFunc) {
            return this.Clone().VSet({ width: valOrFunc instanceof Function ? valOrFunc(this.width) : valOrFunc });
        }
    }, {
        key: "NewHeight",
        value: function NewHeight(valOrFunc) {
            return this.Clone().VSet({ height: valOrFunc instanceof Function ? valOrFunc(this.height) : valOrFunc });
        }
    }, {
        key: "Grow",
        value: function Grow(amountOnEachSide) {
            return new VRect_1(this.x - amountOnEachSide, this.y - amountOnEachSide, this.width + amountOnEachSide * 2, this.height + amountOnEachSide * 2);
        }
    }, {
        key: "Encapsulating",
        value: function Encapsulating(rect) {
            var posX = Math.min(this.x, rect.x);
            var posY = Math.min(this.y, rect.y);
            return new VRect_1(posX, posY, Math.max(this.x + this.width, rect.x + rect.width) - posX, Math.max(this.y + this.height, rect.y + rect.height) - posY);
        }
    }, {
        key: "Encapsulate",
        value: function Encapsulate(rect) {
            var oldRight = this.x + this.width;
            var oldBottom = this.y + this.height;
            this.x = Math.min(this.x, rect.x);
            this.y = Math.min(this.y, rect.y);
            this.width = Math.max(oldRight, rect.x + rect.width) - this.x;
            this.height = Math.max(oldBottom, rect.y + rect.height) - this.y;
        }
    }, {
        key: "Intersects",
        value: function Intersects(other) {
            return this.Right > other.x && this.x < other.Right && this.Top > other.Bottom && this.Bottom < other.Top;
        }
    }, {
        key: "Clone",
        value: function Clone() {
            return new VRect_1(this.x, this.y, this.width, this.height);
        }
    }, {
        key: "Left",
        get: function get() {
            return this.x;
        },
        set: function set(val) {
            var oldRight = this.Right;
            this.x = val;
            this.Right = oldRight;
        }
    }, {
        key: "Right",
        get: function get() {
            return this.x + this.width;
        },
        set: function set(val) {
            this.width = val - this.x;
        }
    }, {
        key: "Bottom",
        get: function get() {
            return this.y0IsBottom ? this.y : this.y + this.height;
        },
        set: function set(val) {
            var oldTop = this.Top;
            this.y = val;
            this.Top = oldTop;
        }
    }, {
        key: "Top",
        get: function get() {
            return this.y0IsBottom ? this.y + this.height : this.y;
        },
        set: function set(val) {
            this.height = val - this.y;
        }
    }, {
        key: "Position",
        get: function get() {
            return new Vector2i(this.x, this.y);
        },
        set: function set(val) {
            this.x = val.x;
            this.y = val.y;
        }
    }, {
        key: "Size",
        get: function get() {
            return new Vector2i(this.width, this.height);
        },
        set: function set(val) {
            this.width = val.x;
            this.height = val.y;
        }
    }, {
        key: "Center",
        get: function get() {
            return new Vector2i(this.x + this.width / 2, this.y + this.height / 2);
        }
    }]);

    return VRect;
}();
exports.VRect = VRect = VRect_1 = __decorate([_General.Global], VRect);
exports.VRect = VRect;

var VBounds = function () {
    function VBounds(position, size) {
        _classCallCheck(this, VBounds);

        this.position = null;
        this.size = null;
        this.position = position;
        this.size = size;
    }
    /*@_VDFDeserialize() Deserialize(node) {
        var parts = node.primitiveValue.split("|");
        var posParts = parts[0].split(" ");
        this.position = new VVector3(parseFloat(posParts[0]), parseFloat(posParts[1]), parseFloat(posParts[2]));
        var sizeParts = parts[1].split(" ");
        this.size = new VVector3(parseFloat(sizeParts[0]), parseFloat(sizeParts[1]), parseFloat(sizeParts[2]));
    }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/


    _createClass(VBounds, [{
        key: "toString",
        value: function toString() {
            return this.position.x + " " + this.position.y + " " + this.position.z + "|" + this.size.x + " " + this.size.y + " " + this.size.z;
        }
    }]);

    return VBounds;
}();
exports.VBounds = VBounds = __decorate([_General.Global], VBounds);
exports.VBounds = VBounds;

var Vector2i_1, VVector2_1, Vector3i_1, VVector3_1, VRect_1;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.ToAbsoluteUrl = ToAbsoluteUrl;
exports.JumpToHash = JumpToHash;
exports.GetCurrentURLString = GetCurrentURLString;
exports.GetUrlParts = GetUrlParts;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ToAbsoluteUrl(url) {
    // Handle absolute URLs (with protocol-relative prefix)
    // Example: //domain.com/file.png
    if (url.search(/^\/\//) != -1) {
        return window.location.protocol + url;
    }
    // Handle absolute URLs (with explicit origin)
    // Example: http://domain.com/file.png
    if (url.search(/:\/\//) != -1) {
        return url;
    }
    // Handle absolute URLs (without explicit origin)
    // Example: /file.png
    if (url.search(/^\//) != -1) {
        return window.location.origin + url;
    }
    // Handle relative URLs
    // Example: file.png
    var base = window.location.href.match(/(.*\/)/)[0];
    return base + url;
}
function JumpToHash(hashStr) {
    var url = location.href; // Save down the URL without hash.
    location.href = "#" + hashStr; // Go to the target element.
    history.replaceState(null, null, url); // Don't like hashes. Changing it back.
    //document.getElementById(hashStr).scrollIntoView(); //Even IE6 supports this
}
/** Returns [domainStr, pathStr, varsStr, hashStr], without the separator-chars. */
function GetCurrentURLString() {
    return window.location.href.replace(/%22/, "\"");
}
function GetUrlParts(url) {
    url = url || GetCurrentURLString();

    var _Array$fill$map = Array(4).fill(0).map(function (a) {
        return "";
    }),
        _Array$fill$map2 = _slicedToArray(_Array$fill$map, 4),
        domainStr = _Array$fill$map2[0],
        pathStr = _Array$fill$map2[1],
        varsStr = _Array$fill$map2[2],
        hashStr = _Array$fill$map2[3];

    var urlToProcess = url;
    if (urlToProcess.Contains("#") && !varsStr.Contains("runJS=")) {
        var _urlToProcess$SplitAt = urlToProcess.SplitAt(urlToProcess.indexOf("#"));

        var _urlToProcess$SplitAt2 = _slicedToArray(_urlToProcess$SplitAt, 2);

        urlToProcess = _urlToProcess$SplitAt2[0];
        hashStr = _urlToProcess$SplitAt2[1];
    }
    if (urlToProcess.Contains("?")) {
        var _urlToProcess$SplitAt3 = urlToProcess.SplitAt(urlToProcess.indexOf("?"));

        var _urlToProcess$SplitAt4 = _slicedToArray(_urlToProcess$SplitAt3, 2);

        urlToProcess = _urlToProcess$SplitAt4[0];
        varsStr = _urlToProcess$SplitAt4[1];
    }
    //if (urlToProcess.Matches("/").length == )

    var _urlToProcess$SplitAt5 = urlToProcess.SplitAt(urlToProcess.IndexOf_X("/", 2).IfN1Then(urlToProcess.length));

    var _urlToProcess$SplitAt6 = _slicedToArray(_urlToProcess$SplitAt5, 2);

    domainStr = _urlToProcess$SplitAt6[0];
    pathStr = _urlToProcess$SplitAt6[1];

    return [domainStr, pathStr, varsStr, hashStr];
}
function GetUrlPath(url) {
    var fromDomain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    /*let [pathStr, varsStr, hashStr] = GetUrlParts(url);
    if (fromDomain)
        pathStr = pathStr.SplitAt(pathStr.IndexOf_X("/", 2).IfN1Then(pathStr.length))[1];
    if (pathStr.endsWith("/"))
        pathStr = pathStr.substr(0, pathStr.length - 1);*/
    var _GetUrlParts = GetUrlParts(url),
        _GetUrlParts2 = _slicedToArray(_GetUrlParts, 2),
        _ = _GetUrlParts2[0],
        pathStr = _GetUrlParts2[1];

    if (pathStr.endsWith("/")) pathStr = pathStr.slice(0, -1);
    return pathStr;
}
function GetUrlVars(url) {
    var allowQuestionMarkAsVarSep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var varSeparators = allowQuestionMarkAsVarSep ? ["&", "?"] : ["&"];

    var _GetUrlParts3 = GetUrlParts(url),
        _GetUrlParts4 = _slicedToArray(_GetUrlParts3, 3),
        _ = _GetUrlParts4[0],
        __ = _GetUrlParts4[1],
        varsStr = _GetUrlParts4[2];

    var vars = {}; //{[key: string]: string};
    var parts = varsStr.SplitByAny.apply(varsStr, varSeparators).filter(function (a) {
        return a;
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var part = _step.value;

            var _part$SplitAt = part.SplitAt(part.indexOf("=")),
                _part$SplitAt2 = _slicedToArray(_part$SplitAt, 2),
                key = _part$SplitAt2[0],
                value = _part$SplitAt2[1];

            vars[key] = value;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return vars;
}
/*export function GetCurrentURL(fromAddressBar = false) {
    return fromAddressBar ? URL.Parse(GetCurrentURLString()) : URL.FromState(State("router"));
}*/

var VURL = exports.VURL = function () {
    _createClass(VURL, [{
        key: "ToState",
        value: function ToState() {
            return {
                pathname: this.toString({ domain: false, path: true, queryVars: false, hash: false }),
                search: this.toString({ domain: false, pathStartSlash: false, path: false, queryVars: true, hash: false }),
                hash: this.toString({ domain: false, pathStartSlash: false, path: false, queryVars: false, hash: true }),
                key: "URLKey_" + Date.now()
            };
        }
    }], [{
        key: "Parse",
        value: function Parse(urlStr) {
            var useCurrentDomainIfMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var allowQuestionMarkAsVarSep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (useCurrentDomainIfMissing && !urlStr.startsWith("http")) urlStr = window.location.origin + (urlStr.startsWith("/") ? "" : "/") + urlStr;

            var _GetUrlParts5 = GetUrlParts(urlStr),
                _GetUrlParts6 = _slicedToArray(_GetUrlParts5, 4),
                domainStr = _GetUrlParts6[0],
                pathStr = _GetUrlParts6[1],
                varsStr = _GetUrlParts6[2],
                hashStr = _GetUrlParts6[3];

            var queryVarsMap = GetUrlVars(urlStr, allowQuestionMarkAsVarSep);
            var result = new VURL();
            result.domain = domainStr;
            result.pathNodes = pathStr.length ? pathStr.split("/") : [];
            for (var key in queryVarsMap) {
                result.queryVars.push(new QueryVar(key, queryVarsMap[key]));
            }
            result.hash = hashStr;
            return result;
        }
    }, {
        key: "FromState",
        value: function FromState(state) {
            var result = VURL.Parse(state ? (state.pathname || "") + (state.search || "") + (state.hash || "") : "");
            //if (normalize) result = result.Normalized();
            return result;
        }
    }]);

    function VURL() {
        var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var pathNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var queryVars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

        _classCallCheck(this, VURL);

        this.domain = domain;
        this.pathNodes = pathNodes;
        this.queryVars = queryVars;
        this.hash = hash;
    }

    _createClass(VURL, [{
        key: "DomainStr",
        value: function DomainStr() {
            var withProtocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            return withProtocol ? this.domain : this.DomainWithoutProtocol;
        }
    }, {
        key: "PathStr",
        value: function PathStr(pathStartSlash) {
            var result = "";
            if (pathStartSlash) {
                result += "/";
            }
            // path-nodes
            if (this.pathNodes.length) result += this.pathNodes.join("/");
            return result;
        }
    }, {
        key: "GetQueryVar",
        value: function GetQueryVar(name) {
            var entry = this.queryVars.find(function (a) {
                return a.name == name;
            });
            return entry ? entry.value : undefined;
        }
    }, {
        key: "SetQueryVar",
        value: function SetQueryVar(name, value) {
            var existingEntry = this.queryVars.find(function (a) {
                return a.name == name;
            });
            if (existingEntry) {
                existingEntry.value = value;
            } else {
                this.queryVars.push(new QueryVar(name, value));
            }
        }
    }, {
        key: "Clone",
        value: function Clone() {
            return new VURL(this.domain, this.pathNodes.slice(), this.queryVars.map(function (a) {
                return a.Clone();
            }), this.hash);
        }
        /*Normalized() {
            let result = this.Clone();
            if (!rootPages.Contains(result.pathNodes[0])) {
                result.pathNodes.Insert(0, "home");
            }
            if (result.pathNodes[1] == null && rootPageDefaultChilds[result.pathNodes[0]]) {
                result.pathNodes.Insert(1, rootPageDefaultChilds[result.pathNodes[0]]);
            }
            return result;
        }*/

    }, {
        key: "toString",
        value: function toString(options) {
            options = E({ domain: true, domain_protocol: true, pathStartSlash: "auto", path: true, queryVars: true, hash: true }, options);
            var result = "";
            // domain
            if (options.domain) result += this.DomainStr(options.domain_protocol);
            //if (options.forceSlashAfterDomain || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash))
            var pathStartSlash_auto = result.length == 0 || options.path && this.pathNodes.length || options.queryVars && this.queryVars.length || options.hash && this.hash;
            var pathStartSlash = options.pathStartSlash == true || options.pathStartSlash == "auto" && pathStartSlash_auto;
            if (pathStartSlash) {
                result += "/";
            }
            if (options.path) result += this.PathStr(false);
            if (options.queryVars) result += this.QueryStr;
            if (options.hash) result += this.HashStr;
            Assert(!result.startsWith("//"), "URL toString() result cannot start with \"//\". (it's probably an error)");
            return result;
        }
    }, {
        key: "toString_OptIn",
        value: function toString_OptIn(options) {
            options = E({ domain: false, path: false, queryVars: false, hash: false }, options);
            return this.toString(options);
        }
    }, {
        key: "Protocol",
        get: function get() {
            return this.domain && this.domain.Contains("://") ? this.domain.substr(0, this.domain.indexOf("://")) : null;
        }
    }, {
        key: "DomainWithoutProtocol",
        get: function get() {
            return this.domain && this.domain.Contains("://") ? this.domain.substr(this.domain.indexOf("://") + 3) : this.domain;
        }
    }, {
        key: "QueryStr",
        get: function get() {
            var result = "";
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.queryVars.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _step2$value = _slicedToArray(_step2.value, 2),
                        index = _step2$value[0],
                        queryVar = _step2$value[1];

                    result += (index == 0 ? "?" : "&") + queryVar.name + "=" + queryVar.value;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return result;
        }
    }, {
        key: "HashStr",
        get: function get() {
            if (!this.hash) return "";
            return "#" + this.hash;
        }
    }]);

    return VURL;
}();

function AsPartial(obj) {
    return obj;
}

var QueryVar = exports.QueryVar = function () {
    function QueryVar(name, value) {
        _classCallCheck(this, QueryVar);

        this.name = name;
        this.value = value;
    }

    _createClass(QueryVar, [{
        key: "Clone",
        value: function Clone() {
            return new QueryVar(this.name, this.value);
        }
    }]);

    return QueryVar;
}();
// todo: merge this functionality into the URL class
/*export function GetPathNodes(path = GetUrlPath(), makeFull = true) {
    /*let location = State().router;
    if (location == null) return "/";
    return location.pathname.split("/")[1];*#/
    
    let pathNodes = path.split("/").Where(a=>a.length > 0);
    if (makeFull) {
        if (!rootPages.Contains(pathNodes[0]))
            pathNodes.Insert(0, "home");
        if (pathNodes[1] == null)
            pathNodes.Insert(1, rootPageDefaultChilds[pathNodes[0]]);
    }
    return pathNodes;
}
export function GetPath(path = GetUrlPath(), makeFull = true) {
    return GetPathNodes(path, makeFull).join("/");
}*/

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.GetStorageForCachedTransform = GetStorageForCachedTransform;
exports.CachedTransform = CachedTransform;
exports.CombineDynamicPropMaps = CombineDynamicPropMaps;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var hasOwnProperty = Object.prototype.hasOwnProperty;
// Performs equality by iterating through keys on an object and returning false when any key has values which are not strictly equal between the arguments.
// Returns true when the values of all keys are strictly equal.
function shallowEqual(objA, objB) {
    if (Object.is(objA, objB)) return true;
    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) return false;
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
}

var Storage = exports.Storage = function Storage() {
    _classCallCheck(this, Storage);
};

var storages = exports.storages = {};
function GetStorageForCachedTransform(transformType, staticProps) {
    //let storageKey = transformType + "|" + JSON.stringify(staticProps);
    var storageKey = transformType + "|" + staticProps.join("|");
    var storage = storages[storageKey] || (storages[storageKey] = new Storage());
    return storage;
}
/**
 * Basically, by wrapping code in this function, you're saying:
 *		"Do not re-evaluate the code below unless the dynamic-props have changed since the last time we were here."
 *		(with the transformType and staticProps defining what "here" means)
 * @param transformType The name of the transformation; usually a function-name like "GetSomeThing", or "connectProp_processX". (used, along with static-props, to form a "storage key", where cache is checked for and stored)
 * @param staticProps An array.
 * @param dynamicProps Can be either an object or array.
 * @param transformFunc The data-transformer. Whenever a dynamic-prop changes, this will be called, and the new result will be cached.
 */
//export function CachedTransform<T, T2, T3>(transformType: string, staticProps: T, dynamicProps: T2, transformFunc: (staticProps: T, dynamicProps: T2)=>T3): T3 {
function CachedTransform(transformType, staticProps, dynamicProps, transformFunc) {
    var storage = GetStorageForCachedTransform(transformType, staticProps);
    if (!shallowEqual(dynamicProps, storage.lastDynamicProps)) {
        /*MaybeLog(a=>a.cacheUpdates,
            ()=>`Recalculating cache. @Type:${transformType} @StaticProps:${ToJSON(staticProps)} @DynamicProps:${ToJSON(dynamicProps)} @TransformFunc:${transformFunc}`);*/
        storage.lastDynamicProps = dynamicProps;
        storage.lastDebugInfo = {};
        storage.lastResult = transformFunc(storage.lastDebugInfo, staticProps, dynamicProps);
    }
    return storage.lastResult;
}
function CombineDynamicPropMaps() {
    var result = {};

    for (var _len = arguments.length, maps = Array(_len), _key = 0; _key < _len; _key++) {
        maps[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = maps.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                mapIndex = _step$value[0],
                map = _step$value[1];

            for (var key in map) {
                result[mapIndex + "_" + key] = map[key];
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(20);

__webpack_require__(21);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// (ClassExtensions.ts)
Object.defineProperty(Object.prototype, "_AddItem", {
    //configurable: true,
    enumerable: false,
    value: function value(name, _value, forceAdd) {
        if (name == null || name.length == 0) throw new Error("No prop-name was specified for _AddItem() call.");
        if (name in this) delete this[name];
        if (name in this && !forceAdd) return; // workaround for some properties not being deleted
        Object.defineProperty(this, name, {
            configurable: true,
            enumerable: false,
            value: _value
        });
        /*if (this[name] == null)
            throw new Error(`Failed to add property "${name}" to type "${this}".`);*/
    }
});
Object.prototype._AddItem("_AddFunction", function (name, func) {
    //this._AddItem(func.name || func.toString().match(/^function\s*([^\s(]+)/)[1], func);
    this._AddItem(name, func);
});
Object.prototype._AddFunction("_AddGetterSetter", function (name, getter, setter) {
    //var name = (getter || setter).name || (getter || setter).toString().match(/^function\s*([^\s(]+)/)[1];
    if (name in this) delete this[name];
    if (name in this) return; // workaround for some properties not being deleted
    var info = { configurable: true, enumerable: false };
    if (getter) info.get = getter;
    if (setter) info.set = setter;
    Object.defineProperty(this, name, info);
});
Object.prototype._AddGetterSetter("_AddFunction_Inline", null, function (func) {
    this._AddFunction(func.GetName(), func);
});
Object.prototype._AddGetterSetter("_AddGetter_Inline", null, function (func) {
    this._AddGetterSetter(func.GetName(), func, null);
});
Object.prototype._AddGetterSetter("_AddSetter_Inline", null, function (func) {
    this._AddGetterSetter(func.GetName(), null, func);
});
//Function.prototype._AddFunction_Inline = function GetName() { return this.name_fake || this.name || this.toString().match(/^function\s*([^\s(]+)/)[1]; };
Function.prototype._AddFunction("GetName", function () {
    return this.name_fake || this.name || (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
});
Function.prototype._AddFunction_Inline = function SetName(name) {
    this.name_fake = name;return this;
};
Object.prototype._AddFunction_Inline = function Extend(x) {
    for (var name in x) {
        var value = x[name];
        //if (value !== undefined)
        this[name] = value;
    }
    return this;
};
;
Object.prototype._AddFunction_Inline = function VSet() {
    var _this = this;

    var props = void 0,
        options = void 0,
        propName = void 0,
        propValue = void 0;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    if (_typeof(args[0]) == "object") {
        ;
        props = args[0];
        options = args[1];
    } else {
        ;
        propName = args[0];
        propValue = args[1];
        options = args[2];
    }options = options || {};
    // also defined (and exported) from General.ts
    var DEL = "JS_VEXTENSIONS_SPECIAL_DELETE_KEY";
    var SetProp = function SetProp(name, value) {
        if (value === DEL || value === undefined && options.deleteUndefined || value === null && options.deleteNull || value === "" && options.deleteEmpty) {
            delete _this[name];
            return;
        }
        if (options.prop) {
            Object.defineProperty(_this, name, Object.assign({ configurable: true }, options.prop, { value: value }));
        } else {
            _this[name] = value;
        }
    };
    if (props) {
        for (var name in props) {
            SetProp(name, props[name]);
        }
    } else {
        SetProp(propName, propValue);
    }
    return this;
};
Object.prototype._AddFunction_Inline = function Extended(x) {
    var result = {};
    for (var name in this) {
        result[name] = this[name];
    }if (x) {
        for (var name in x) {
            result[name] = x[name];
        }
    }
    return result;
};
Object.prototype._AddFunction_Inline = function VAct(action) {
    action.call(this, this);
    return this;
};
Object.prototype._AddFunction_Inline = function As(type) {
    Object.setPrototypeOf(this, type.prototype);
    return this;
};
Object.prototype._AddFunction_Inline = function Including() {
    var result = {};

    for (var _len2 = arguments.length, propNames = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        propNames[_key2] = arguments[_key2];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var propName = _step.value;

            if (propName in this) {
                result[propName] = this[propName];
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
};
Object.prototype._AddFunction_Inline = function Excluding() {
    var result = this.Extended();

    for (var _len3 = arguments.length, propNames = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        propNames[_key3] = arguments[_key3];
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = propNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var propName = _step2.value;

            delete result[propName];
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return result;
};
var specialProps = ["_", "_key", "_id"];
//interface Object { Props<ValueType>(excludeSpecialProps?: boolean): {index: number, name: string, value: ValueType}[]; }
Object.prototype._AddFunction_Inline = function Props() {
    var excludeSpecialProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var result = [];
    var i = 0;
    for (var propName in this) {
        if (excludeSpecialProps && (propName == "_" || propName == "_key" || propName == "_id")) continue;
        //result.push({index: i++, key: propName, name: propName, value: this[propName]});
        result.push({ index: i++, name: propName, value: this[propName] });
    }
    return result;
};
Object.prototype._AddFunction_Inline = function VKeys() {
    var excludeSpecialProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    //if (excludeSpecialProps) return this.Props(true).map(a=>a.name);
    if (excludeSpecialProps) return Object.keys(this).Except(specialProps);
    return Object.keys(this);
};
Object.prototype._AddFunction_Inline = function VValues() {
    var _this2 = this;

    var excludeSpecialProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    //if (excludeSpecialProps) return this.Props(true).map(a=>a.value);
    if (excludeSpecialProps) return Object.keys(this).Except(specialProps).map(function (a) {
        return _this2[a];
    });
    return Object.keys(this).map(function (a) {
        return _this2[a];
    });
};
Object.prototype._AddFunction_Inline = function FA_Select() {
    var selectFunc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (a) {
        return a;
    };

    Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
    /*var result = this instanceof List ? new List(this.itemType) : [];
    for (let [index, item] of this.entries())
        result.Add(selectFunc.call(item, item, index));
    return result;*/
    return this.VValues(true).map(selectFunc);
};
Object.prototype._AddFunction_Inline = function FA_RemoveAt(index) {
    Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
    if (!(index in this)) return;
    // remove target entry
    delete this[index];
    // move all the later entries down one index
    for (var i = index + 1; i in this; i++) {
        this[i - 1] = this[i];
    }delete this[i - 1]; // remove the extra copy of the last-item 
};
Object.prototype._AddFunction_Inline = function FA_Add(item) {
    Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
    for (var openIndex = 0; openIndex in this; openIndex++) {}
    this[openIndex] = item;
};
// [offset construct] (e.g. {left: 10, top: 10})
// ==========
Object.prototype._AddFunction_Inline = function plus(offset) {
    return { left: this.left + offset.left, top: this.top + offset.top };
};
// late-require things from other modules, that are used in the methods
// ==========
// Use "require" instead, so doesn't make TS see this as an external module. (and thus disable interface extension)
// And use alternate names, so they don't get used in other files.

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

Array.prototype._AddFunction_Inline = function Contains(item) {
    return this.indexOf(item) != -1;
};
Array.prototype._AddFunction_Inline = function ContainsAny() {
    for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (this.indexOf(item) != -1) {
                return true;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return false;
};
// for some reason, this platform doesn't have entries() defined
Array.prototype._AddFunction_Inline = function entries() {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result.push([i, this[i]]);
    }return result;
};
Array.prototype._AddFunction_Inline = function Prepend() {
    for (var _len2 = arguments.length, newItems = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        newItems[_key2] = arguments[_key2];
    }

    this.splice.apply(this, [0, 0].concat(newItems));
};
Array.prototype._AddFunction_Inline = function Add(item) {
    return this.push(item);
};
Array.prototype._AddFunction_Inline = function CAdd(item) {
    this.push(item);return this;
}; // CAdd = ChainAdd
Array.prototype._AddFunction_Inline = function TAdd(item) {
    this.push(item);return item;
}; // TAdd = TransparentAdd
Array.prototype._AddFunction_Inline = function AddRange(array) {
    //this.push(...array);
    // use loop, since sending them all as arguments fails when there are ~10000+ items
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            this.push(item);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return this;
};
Array.prototype._AddFunction_Inline = function Remove(item) {
    var itemIndex = this.indexOf(item);
    if (itemIndex == -1) return false;
    this.splice(itemIndex, 1);
    return true;
};
Array.prototype._AddFunction_Inline = function RemoveAll(items) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var item = _step3.value;

            this.Remove(item);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
};
Array.prototype._AddFunction_Inline = function RemoveAt(index) {
    return this.splice(index, 1)[0];
};
Array.prototype._AddFunction_Inline = function Insert(index, obj) {
    this.splice(index, 0, obj);
};
Array.prototype._AddFunction_Inline = function SetItems(items) {
    this.splice.apply(this, [0, this.length].concat(_toConsumableArray(items)));
};
Array.prototype._AddFunction_Inline = function Reversed() {
    var clone = this.slice(0);
    clone.reverse();
    return clone;
};
Array.prototype._AddFunction_Inline = function Any(matchFunc) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = this.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _step4$value = _slicedToArray(_step4.value, 2),
                index = _step4$value[0],
                item = _step4$value[1];

            if (matchFunc == null || matchFunc.call(item, item, index)) return true;
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    return false;
};
Array.prototype._AddFunction_Inline = function All(matchFunc) {
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = this.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _step5$value = _slicedToArray(_step5.value, 2),
                index = _step5$value[0],
                item = _step5$value[1];

            if (!matchFunc.call(item, item, index)) return false;
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    return true;
};
Array.prototype._AddFunction_Inline = function Where(matchFunc) {
    var result = [];
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = this.entries()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _step6$value = _slicedToArray(_step6.value, 2),
                index = _step6$value[0],
                item = _step6$value[1];

            if (matchFunc.call(item, item, index)) // call, having the item be "this", as well as the first argument
                result.push(item);
        }
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
            }
        } finally {
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }

    return result;
};
Array.prototype._AddFunction_Inline = function Select(selectFunc) {
    var result = [];
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
        for (var _iterator7 = this.entries()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _step7$value = _slicedToArray(_step7.value, 2),
                index = _step7$value[0],
                item = _step7$value[1];

            result.push(selectFunc.call(item, item, index));
        }
    } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
            }
        } finally {
            if (_didIteratorError7) {
                throw _iteratorError7;
            }
        }
    }

    return result;
};
Array.prototype._AddFunction_Inline = function SelectMany(selectFunc) {
    var result = [];
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
        for (var _iterator8 = this.entries()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var _step8$value = _slicedToArray(_step8.value, 2),
                index = _step8$value[0],
                item = _step8$value[1];

            result.AddRange(selectFunc.call(item, item, index));
        }
    } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
                _iterator8.return();
            }
        } finally {
            if (_didIteratorError8) {
                throw _iteratorError8;
            }
        }
    }

    return result;
};
//Array.prototype._AddFunction_Inline = function Count(matchFunc) { return this.Where(matchFunc).length; };
//Array.prototype._AddFunction_Inline = function Count(matchFunc) { return this.Where(matchFunc).length; }; // needed for items to be added properly to custom classes that extend Array
Array.prototype._AddGetter_Inline = function Count() {
    return this.length;
}; // needed for items to be added properly to custom classes that extend Array
Array.prototype._AddFunction_Inline = function VCount(matchFunc) {
    return this.Where(matchFunc).length;
};
Array.prototype._AddFunction_Inline = function Clear() {
    /*while (this.length > 0)
        this.pop();*/
    this.splice(0, this.length);
};
Array.prototype._AddFunction_Inline = function First(matchFunc) {
    var result = this.FirstOrX(matchFunc);
    if (result == null) throw new Error("Matching item not found.");
    return result;
};
Array.prototype._AddFunction_Inline = function FirstOrX(matchFunc) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (matchFunc) {
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
            for (var _iterator9 = this.entries()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var _step9$value = _slicedToArray(_step9.value, 2),
                    index = _step9$value[0],
                    item = _step9$value[1];

                if (matchFunc.call(item, item, index)) return item;
            }
        } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion9 && _iterator9.return) {
                    _iterator9.return();
                }
            } finally {
                if (_didIteratorError9) {
                    throw _iteratorError9;
                }
            }
        }
    } else if (this.length > 0) return this[0];
    return x;
};
//Array.prototype._AddFunction_Inline = function FirstWithPropValue(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };
Array.prototype._AddFunction_Inline = function FirstWith(propName, propValue) {
    return this.Where(function () {
        return this[propName] == propValue;
    })[0];
};
Array.prototype._AddFunction_Inline = function Last(matchFunc) {
    var result = this.LastOrX(matchFunc);
    if (result == null) throw new Error("Matching item not found.");
    return result;
};
Array.prototype._AddFunction_Inline = function LastOrX(matchFunc) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (matchFunc) {
        for (var i = this.length - 1; i >= 0; i--) {
            if (matchFunc.call(this[i], this[i], i)) return this[i];
        }
    } else if (this.length > 0) return this[this.length - 1];
    return x;
};
Array.prototype._AddFunction_Inline = function XFromLast(x) {
    return this[this.length - 1 - x];
};
// since JS doesn't have basic "foreach" system
Array.prototype._AddFunction_Inline = function ForEach(func) {
    for (var i in this) {
        func.call(this[i], this[i], i);
    } // call, having the item be "this", as well as the first argument
};
Array.prototype._AddFunction_Inline = function Move(item, newIndex) {
    var shiftInsertPointToPreserveFinalNeighbors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var oldIndex = this.indexOf(item);
    if (oldIndex != -1) {
        this.RemoveAt(oldIndex);
        // New-index is understood to be the position-in-list to move the item to, as seen before the item started being moved.
        // So compensate for remove-from-old-position list modification.
        if (shiftInsertPointToPreserveFinalNeighbors && oldIndex < newIndex) {
            newIndex--;
        }
    }
    this.Insert(newIndex, item);
    return oldIndex;
};
Array.prototype._AddFunction_Inline = function ToList() {
    var itemType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return [].concat(this);
};
Array.prototype._AddFunction_Inline = function ToMap(keyFunc, valFunc) {
    var result = {};
    var _iteratorNormalCompletion10 = true;
    var _didIteratorError10 = false;
    var _iteratorError10 = undefined;

    try {
        for (var _iterator10 = this.entries()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var _step10$value = _slicedToArray(_step10.value, 2),
                index = _step10$value[0],
                item = _step10$value[1];

            result[keyFunc(item, index)] = valFunc(item, index);
        }
    } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion10 && _iterator10.return) {
                _iterator10.return();
            }
        } finally {
            if (_didIteratorError10) {
                throw _iteratorError10;
            }
        }
    }

    return result;
};
Array.prototype._AddFunction_Inline = function Skip(count) {
    var result = [];
    for (var i = count; i < this.length; i++) {
        result.push(this[i]);
    }return result;
};
Array.prototype._AddFunction_Inline = function Take(count) {
    var result = [];
    for (var i = 0; i < count && i < this.length; i++) {
        result.push(this[i]);
    }return result;
};
Array.prototype._AddFunction_Inline = function TakeLast(count) {
    var result = [];
    for (var i = 0; i < count && this.length - 1 - i >= 0; i++) {
        result.push(this[this.length - 1 - i]);
    }return result;
};
Array.prototype._AddFunction_Inline = function FindIndex(matchFunc) {
    var _iteratorNormalCompletion11 = true;
    var _didIteratorError11 = false;
    var _iteratorError11 = undefined;

    try {
        for (var _iterator11 = this.entries()[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var _step11$value = _slicedToArray(_step11.value, 2),
                index = _step11$value[0],
                item = _step11$value[1];

            if (matchFunc.call(item, item, index)) // call, having the item be "this", as well as the first argument
                return index;
        }
    } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion11 && _iterator11.return) {
                _iterator11.return();
            }
        } finally {
            if (_didIteratorError11) {
                throw _iteratorError11;
            }
        }
    }

    return -1;
};
Array.prototype._AddFunction_Inline = function OrderBy() {
    var valFunc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (item, index) {
        return item;
    };

    /*var temp = this.ToList();
    temp.sort((a, b)=>V.Compare(valFunc(a), valFunc(b)));
    return temp;*/
    return StableSort(this, function (a, b, aIndex, bIndex) {
        return Compare(valFunc(a, aIndex), valFunc(b, bIndex));
    });
};
Array.prototype._AddFunction_Inline = function OrderByDescending() {
    var valFunc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (item, index) {
        return item;
    };

    return this.OrderBy(function (item, index) {
        return -valFunc(item, index);
    });
};
Array.prototype._AddFunction_Inline = function Distinct() {
    var result = [];
    for (var i in this) {
        if (!result.Contains(this[i])) result.push(this[i]);
    }return result;
};
Array.prototype._AddFunction_Inline = function Except() {
    var excludeItems = void 0,
        excludeEachOnlyOnce = true;

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
    }

    if (args[0] instanceof Array) {
        ;
        excludeItems = args[0];
        excludeEachOnlyOnce = args[1];
    } else excludeItems = args;
    if (excludeEachOnlyOnce) {
        var result = this.slice();
        var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
            for (var _iterator12 = excludeItems[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var excludeItem = _step12.value;

                result.Remove(excludeItem);
            }
        } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion12 && _iterator12.return) {
                    _iterator12.return();
                }
            } finally {
                if (_didIteratorError12) {
                    throw _iteratorError12;
                }
            }
        }

        return result;
    }
    return this.Where(function (a) {
        return !excludeItems.Contains(a);
    });
};
Array.prototype._AddFunction_Inline = function Min(valFunc) {
    var asNumbers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (asNumbers) {
        /*let values = valFunc ? this.map(valFunc) : this;
        return Math.min(...values);*/
        Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
        return Math.min.apply(Math, _toConsumableArray(this));
    }
    return this.OrderBy(valFunc).First();
};
Array.prototype._AddFunction_Inline = function Max(valFunc) {
    var asNumbers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (asNumbers) {
        /*let values = valFunc ? this.map(valFunc) : this;
        return Math.max(...values);*/
        Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
        return Math.max.apply(Math, _toConsumableArray(this));
    }
    return this.OrderBy(valFunc).Last();
};
Array.prototype._AddFunction_Inline = function Sum() {
    var total = 0;
    var _iteratorNormalCompletion13 = true;
    var _didIteratorError13 = false;
    var _iteratorError13 = undefined;

    try {
        for (var _iterator13 = this[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var item = _step13.value;

            total += item;
        }
    } catch (err) {
        _didIteratorError13 = true;
        _iteratorError13 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion13 && _iterator13.return) {
                _iterator13.return();
            }
        } finally {
            if (_didIteratorError13) {
                throw _iteratorError13;
            }
        }
    }

    return total;
};
Array.prototype._AddFunction_Inline = function Average() {
    var total = this.Sum();
    return total / this.length;
};
Array.prototype._AddFunction_Inline = function Median() {
    var ordered = this.OrderBy(function (a) {
        return a;
    });
    if (this.length % 2 == 0) // if even number of elements, average two middlest ones
        return ordered[this.length / 2 - 1] + ordered[this.length / 2];
    return ordered[this.length / 2]; // otherwise, return the exactly-middle one
};
var oldJoin = [].join;
Array.prototype._AddFunction_Inline = function join() {
    var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ",";

    if (this.length == 0) return "";
    //let result = "" + this[0];
    var result = this[0] != null ? this[0] : ""; // to match behavior of native join
    for (var i = 1, len = this.length; i < len; i++) {
        result += separator;
        result += this[i] != null ? this[i] : "";
    }
    /*let oldResult = oldJoin.apply(this, arguments);
    if (oldResult != result) debugger;*/
    return result;
};
if (typeof NodeList != "undefined") {
    NodeList.prototype._AddFunction_Inline = function ToArray() {
        return Array.from(this);
    };
}

var _require = __webpack_require__(3),
    StableSort = _require.StableSort,
    Compare = _require.Compare;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Element != "undefined") Element.prototype._AddItem("GetParents", function () {
    var topDown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var result = [];
    var currentParent = this.parentElement;
    while (currentParent) {
        result.push(currentParent);
        currentParent = currentParent.parentElement;
    }
    if (topDown) result.reverse();
    return result;
});
if (typeof Element != "undefined") Element.prototype._AddItem("GetSelfAndParents", function () {
    var topDown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var result = this.GetParents(topDown);
    return topDown ? result.concat([this]) : [this].concat(result);
});
if (typeof Element != "undefined") Element.prototype._AddItem("$", function (queryStr) {
    return this.querySelectorAll(queryStr).ToArray();
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Number.prototype._AddFunction_Inline = function IfN1Then(valIfSelfIsNeg1) {
    return this == -1 ? valIfSelfIsNeg1 : this;
};
Number.prototype._AddFunction_Inline = function NaNTo(valIfSelfIsNaN) {
    return IsNaN(this) ? valIfSelfIsNaN : this;
};
Number.prototype._AddFunction_Inline = function ToPercentStr(precision) {
    var number = this * 100;
    if (precision != null) return number.toFixed(precision) + "%";
    return number.toString() + "%";
};
Number.prototype._AddFunction_Inline = function RoundTo(multiple) {
    //return Math.round(this / multiple) * multiple;
    // Don't ask me why this works, but it does, and is faster. From: http://phrogz.net/round-to-nearest-via-modulus-division
    /*var half = multiple / 2;
    return (this + half) - ((this + half) % multiple);*/
    // This version handles fractions better. Ex: (.2 + .1).RoundTo(.1) == .3 (NOT 0.3000000000000004, as the simpler approach gives)
    var multiple_inverted = 1 / multiple;
    return Math.round(this * multiple_inverted) / multiple_inverted;
};
Number.prototype._AddFunction_Inline = function RoundTo_Str(multipleOf) {
    var fractionDigits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var removeEmptyFraction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var resultValue = this.RoundTo(multipleOf);
    var result = resultValue.toFixed(fractionDigits != null ? fractionDigits : multipleOf.toString().TrimStart("0").length - 1); // - 0);
    if (removeEmptyFraction && result.Contains(".")) {
        result = result.TrimEnd("0").TrimEnd(".");
    }
    return result;
};
Number.prototype._AddFunction_Inline = function FloorTo(multipleOf) {
    return Math.floor(new Number(this) / multipleOf) * multipleOf;
};
Number.prototype._AddFunction_Inline = function FloorTo_Str(multipleOf) {
    var resultValue = this.FloorTo(multipleOf);
    var result = resultValue.toFixed(multipleOf.toString().TrimStart("0").length); // - 1);
    if (result.Contains(".")) result = result.TrimEnd("0").TrimEnd(".");
    return result;
};
Number.prototype._AddFunction_Inline = function CeilingTo(multipleOf) {
    return Math.ceil(new Number(this) / multipleOf) * multipleOf;
};
Number.prototype._AddFunction_Inline = function CeilingTo_Str(multipleOf) {
    var resultValue = this.CeilingTo(multipleOf);
    var result = resultValue.toFixed(multipleOf.toString().TrimStart("0").length); // - 1);
    if (result.Contains(".")) result = result.TrimEnd("0").TrimEnd(".");
    return result;
};
Number.prototype._AddFunction_Inline = function KeepAtLeast(min) {
    return Math.max(min, this);
};
Number.prototype._AddFunction_Inline = function KeepAtMost(max) {
    return Math.min(max, this);
};
Number.prototype._AddFunction_Inline = function KeepBetween(min, max) {
    var allowFixMinMax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (min > max && allowFixMinMax) {
        var _ref = [max, min];
        min = _ref[0];
        max = _ref[1];
    }
    if (this < min) return min;
    if (this > max) return max;
    return this;
};
Number.prototype._AddFunction_Inline = function WrapToRange(min, max) {
    var maxOut = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var val = this;
    var size = max - min;
    while (val < min) {
        val += size;
    }while (maxOut ? val >= max : val > max) {
        val -= size;
    }return val;
};
Number.prototype._AddFunction_Inline = function Distance(other) {
    return Math.abs(this - other);
};
Number.prototype._AddFunction_Inline = function ToPower(power) {
    return Math.pow(this, power);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


String.prototype._AddFunction_Inline = function TrimStart() {
    for (var _len = arguments.length, chars = Array(_len), _key = 0; _key < _len; _key++) {
        chars[_key] = arguments[_key];
    }

    // fix for if called by VDF (which has a different signature)
    //if (arguments[0] instanceof Array) chars = arguments[0];
    for (var iOfFirstToKeep = 0; iOfFirstToKeep < this.length && chars.Contains(this[iOfFirstToKeep]); iOfFirstToKeep++) {}
    return this.slice(iOfFirstToKeep, this.length);
};
String.prototype._AddFunction_Inline = function TrimEnd() {
    for (var _len2 = arguments.length, chars = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        chars[_key2] = arguments[_key2];
    }

    for (var iOfLastToKeep = this.length - 1; iOfLastToKeep >= 0 && chars.Contains(this[iOfLastToKeep]); iOfLastToKeep--) {}
    return this.substr(0, iOfLastToKeep + 1);
};
String.prototype._AddFunction_Inline = function Contains(str, startIndex) {
    return this.indexOf(str, startIndex) !== -1;
};
String.prototype._AddFunction_Inline = function hashCode() {
    var hash = 0;
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // convert to 32-bit integer
    }
    return hash;
};
String.prototype._AddFunction_Inline = function Matches(strOrRegex) {
    if (typeof strOrRegex == "string") {
        var str = strOrRegex;
        var _result = [];
        var lastMatchIndex = -1;
        while (true) {
            var matchIndex = this.indexOf(str, lastMatchIndex + 1);
            if (matchIndex == -1) // if another match was not found
                break;
            _result.push({ index: matchIndex });
            lastMatchIndex = matchIndex;
        }
        return _result;
    }
    var regex = strOrRegex;
    if (!regex.global) throw new Error("Regex must have the 'g' flag added. (otherwise an infinite loop occurs)");
    var result = [];
    var match = void 0;
    while (match = regex.exec(this)) {
        result.push(match);
    }return result;
};
/** indexX is 0-based */
String.prototype._AddFunction_Inline = function IndexOf_X(str, indexX) {
    var currentPos = -1;
    for (var i = 0; i <= indexX; i++) {
        var subIndex = this.indexOf(str, currentPos + 1);
        if (subIndex == -1) return -1; // no such xth index
        currentPos = subIndex;
    }
    return currentPos;
};
/** indexFromLastX is 0-based */
String.prototype._AddFunction_Inline = function IndexOf_XFromLast(str, indexFromLastX) {
    var currentPos = this.length - str.length + 1; // index just after the last-index-where-match-could-occur
    for (var i = 0; i <= indexFromLastX; i++) {
        var subIndex = this.lastIndexOf(str, currentPos - 1);
        if (subIndex == -1) return -1; // no such xth index
        currentPos = subIndex;
    }
    return currentPos;
};
String.prototype._AddFunction_Inline = function IndexOfAny() {
    var lowestIndex = -1;

    for (var _len3 = arguments.length, strings = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        strings[_key3] = arguments[_key3];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = strings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var str = _step.value;

            var indexOfChar = this.indexOf(str);
            if (indexOfChar != -1 && (indexOfChar < lowestIndex || lowestIndex == -1)) lowestIndex = indexOfChar;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return lowestIndex;
};
String.prototype._AddFunction_Inline = function LastIndexOfAny() {
    var highestIndex = -1;

    for (var _len4 = arguments.length, strings = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        strings[_key4] = arguments[_key4];
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = strings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var str = _step2.value;

            var indexOfChar = this.lastIndexOf(str);
            if (indexOfChar > highestIndex) highestIndex = indexOfChar;
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return highestIndex;
};
String.prototype._AddFunction_Inline = function StartsWithAny() {
    var _this = this;

    for (var _len5 = arguments.length, strings = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        strings[_key5] = arguments[_key5];
    }

    return strings.Any(function (str) {
        return _this.startsWith(str);
    });
};
String.prototype._AddFunction_Inline = function EndsWithAny() {
    var _this2 = this;

    for (var _len6 = arguments.length, strings = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        strings[_key6] = arguments[_key6];
    }

    return strings.Any(function (str) {
        return _this2.endsWith(str);
    });
};
String.prototype._AddFunction_Inline = function ContainsAny() {
    var _this3 = this;

    for (var _len7 = arguments.length, strings = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        strings[_key7] = arguments[_key7];
    }

    return strings.Any(function (str) {
        return _this3.Contains(str);
    });
};
String.prototype._AddFunction_Inline = function SplitByAny() {
    for (var _len8 = arguments.length, separators = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        separators[_key8] = arguments[_key8];
    }

    /*var splitStr = "/";
    for (let sep of separators)
        splitStr += (splitStr.length > 1 ? "|" : "") + sep;
    splitStr += "/";
    return this.split(splitStr);*/
    var regex = new RegExp(separators.map(function (a) {
        return "\\" + a;
    }).join("|"));
    return this.split(regex);
};
String.prototype.SplitAt = function (index) {
    var includeCharAtIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (index == -1) // if no split-index, pass source-string as part2 (makes more sense for paths and such)
        return ["", this];
    var part1 = this.substr(0, index);
    var part2 = includeCharAtIndex ? this.substr(index) : this.substr(index + 1);
    return [part1, part2];
};
String.prototype._AddFunction_Inline = function Splice(index, removeCount, insert) {
    return this.slice(0, index) + insert + this.slice(index + Math.abs(removeCount));
};
String.prototype._AddFunction_Inline = function Indent(indentCount) {
    var indentStr = "\t".repeat(indentCount);
    return this.replace(/^|(\n)/g, "$1" + indentStr);
};
String.prototype._AddFunction_Inline = function KeepAtMost(maxLength) {
    var moreMarkerStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "...";

    if (this.length <= maxLength) return this;
    return this.substr(0, maxLength - moreMarkerStr.length) + moreMarkerStr;
};
String.prototype._AddFunction_Inline = function Func(func) {
    func.SetName(this);
    return func;
};
// special; creates a function with the given name, but also caches it per caller-line,
//   so every call from that line returns the same function instance
// REMOVED, because: we need to create new funcs to capture new closure values
/*var oneFuncCache = {};
String.prototype._AddFunction_Inline = function OneFunc(func) {
    var funcName = this;
    var callerLineStr = new Error().stack.split("\n")[3];
    var funcKey = `${funcName}@${callerLineStr}`;
    if (oneFuncCache[funcKey] == null) {
        func.SetName(this);
        //func.cached = true;
        oneFuncCache[funcKey] = func;
    }
    return oneFuncCache[funcKey];
};*/
String.prototype._AddFunction_Inline = function AsMultiline() {
    return this.substring(this.indexOf("\n") + 1, this.lastIndexOf("\n"));
};
String.prototype._AddFunction_Inline = function Substring(start, end) {
    if (end < 0) end = this.length + end;
    return this.substring(start, end);
};
String.prototype._AddFunction_Inline = function ToInt() {
    return parseInt(this);
};
String.prototype._AddFunction_Inline = function ToFloat() {
    return parseFloat(this);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Function
// ==========
Function.prototype._AddFunction_Inline = function AddTag(tag) {
    if (this.tags == null) this.tags = [];
    this.tags.push(tag);
    return this;
};
/*Function.prototype._AddFunction_Inline = function AddTags(/*o:*#/ tags___) { // (already implemented in VDF.js file)
    if (this.tags == null)
        this.tags = [];
    for (var i in arguments)
        this.tags.push(arguments[i]);
    return this;
};*/
/*function AddTags() {
    var tags = V.Slice(arguments, 0, arguments.length - 1);
    var func = V.Slice(arguments).Last();
    func.AddTags.apply(func, tags);
};*/
Function.prototype._AddFunction_Inline = function GetTags( /*o:*/type) {
    return (this.tags || []).Where(function (a) {
        return type == null || a instanceof type;
    });
};
//Function.prototype._AddFunction_Inline = function AsStr(...args) { return require("../../V/V").Multiline(this, ...args); };
//Function.prototype._AddFunction_Inline = function AsStr(useExtraPreprocessing) { return require("../../V/V").Multiline(this, useExtraPreprocessing); };
Function.prototype._AddFunction_Inline = function RunThenReturn(args___) {
    this.apply(null, arguments);return this;
};
Date.prototype._AddGetter_Inline = function MonthDate() {
    return new Date(this.getFullYear(), this.getMonth(), 1);
};
function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
;
Date.prototype.isLeapYear = function () {
    return isLeapYear(this.getFullYear());
};
function getDaysInMonth(year, month) {
    return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}
;
Date.prototype.getDaysInMonth = function () {
    return getDaysInMonth(this.getFullYear(), this.getMonth());
};
Date.prototype.AddMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};
Date.prototype.Clone = function () {
    return new Date(this.getTime());
};
// Error
// ==========
/*interface Error { readonly Stack: string; }
Error.prototype._AddGetter_Inline = function Stack() {
    // this causes the full stack-trace to be attached to the Error object (in Chrome)
    if ((Error as any).captureStackTrace) {
        //(Error as any).captureStackTrace(instance, GetStackTraceStr);
        (Error as any).captureStackTrace(this);
    }
    return this.stack;
}*/

/***/ })
/******/ ]);
});