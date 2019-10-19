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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClassExtensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _JSVE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSVE", function() { return _JSVE__WEBPACK_IMPORTED_MODULE_1__["JSVE"]; });

/* harmony import */ var _Utils_General__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DoNothing", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["DoNothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DN", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["DN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuickIncrement", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["QuickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyObj", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["emptyObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eo", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["eo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyArray", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["emptyArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyArray_forLoading", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["emptyArray_forLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "E", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["E"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyText", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["CopyText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FromJSON", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["FromJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToJSON", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["ToJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToJSON_WithSpaces_Options", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["ToJSON_WithSpaces_Options"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToJSON_WithSpaces", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["ToJSON_WithSpaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToJSON_Safe", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["ToJSON_Safe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToJSON_Try", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["ToJSON_Try"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clone", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["Clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloneWithPrototypes", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["CloneWithPrototypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["Range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["Global"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDProvider", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["IDProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nl", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["nl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsObj", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["AsObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsArray", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["AsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slice", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["Slice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multiline", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["Multiline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multiline_NotCommented", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["Multiline_NotCommented"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StableSort", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["StableSort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compare", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["Compare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lerp", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["Lerp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPercentFromXToY", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["GetPercentFromXToY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetXToY", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["GetXToY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetXToYOut", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["GetXToYOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloneObject", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["CloneObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloneArray", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["CloneArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bind", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["Bind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetContentSize", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["GetContentSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetContentWidth", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["GetContentWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetContentHeight", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["GetContentHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoElements", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["autoElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAutoElement", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["GetAutoElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["TreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTreeNodesInObjTree", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["GetTreeNodesInObjTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTreeNodesInPath", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["GetTreeNodesInPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitTreeNodesInPath", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["VisitTreeNodesInPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeepGet", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["DeepGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeepSet", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["DeepSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WithDeepSet", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["WithDeepSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetStackTraceStr", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["GetStackTraceStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetErrorMessagesUnderElement", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["GetErrorMessagesUnderElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEL", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["DEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindDOM", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["FindDOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindDOMAll", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["FindDOMAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaitTillDataPathIsSet", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["WaitTillDataPathIsSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaitTillPropertyIsSet", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["WaitTillPropertyIsSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapScheme", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["CapScheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangeCapitalization", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["ChangeCapitalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartDownload", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["StartDownload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartUpload", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_2__["StartUpload"]; });

/* harmony import */ var _Utils_Changes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPropsChanged", function() { return _Utils_Changes__WEBPACK_IMPORTED_MODULE_3__["GetPropsChanged"]; });

/* harmony import */ var _Utils_Assert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Assert", function() { return _Utils_Assert__WEBPACK_IMPORTED_MODULE_4__["Assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssertWarn", function() { return _Utils_Assert__WEBPACK_IMPORTED_MODULE_4__["AssertWarn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A", function() { return _Utils_Assert__WEBPACK_IMPORTED_MODULE_4__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A_NotEqualTo_Wrapper", function() { return _Utils_Assert__WEBPACK_IMPORTED_MODULE_4__["A_NotEqualTo_Wrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A_OfType_Wrapper", function() { return _Utils_Assert__WEBPACK_IMPORTED_MODULE_4__["A_OfType_Wrapper"]; });

/* harmony import */ var _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerContext", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__["TimerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TryCall", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__["TryCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TryCall_OnX", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__["TryCall_OnX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaitXThenRun", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__["WaitXThenRun"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaitUntilXThenRun", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__["WaitUntilXThenRun"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SleepAsync", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__["SleepAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SleepAsyncUntil", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__["SleepAsyncUntil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DoNothingXTimesThenDoY", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__["DoNothingXTimesThenDoY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__["Timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerS", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__["TimerS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferAction", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_5__["BufferAction"]; });

/* harmony import */ var _Utils_Types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bool", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["bool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "int", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["int"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "double", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["double"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsNaN", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["IsNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsPrimitive", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["IsPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsBool", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["IsBool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToBool", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["ToBool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsObject", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["IsObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsTypeX", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["IsTypeX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsNumberString", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["IsNumberString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsNumber", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["IsNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToNumber", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["ToNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsInt", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["IsInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToInt", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["ToInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsString", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["IsString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToString", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["ToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsFunction", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["IsFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsConstructor", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["IsConstructor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetEntries", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["GetEntries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetValues", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["GetValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetValues_ForSchema", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_6__["GetValues_ForSchema"]; });

/* harmony import */ var _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsVector2iShape", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_7__["IsVector2iShape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector2i", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_7__["Vector2i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsVector3iShape", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_7__["IsVector3iShape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector3i", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_7__["Vector3i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsVRectShape", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_7__["IsVRectShape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRect", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_7__["VRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VBounds", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_7__["VBounds"]; });

/* harmony import */ var _Utils_URLs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToAbsoluteUrl", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_8__["ToAbsoluteUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JumpToHash", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_8__["JumpToHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCurrentURLString", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_8__["GetCurrentURLString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUrlParts", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_8__["GetUrlParts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VURL", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_8__["VURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryVar", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_8__["QueryVar"]; });

/* harmony import */ var _Utils_VCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _Utils_VCache__WEBPACK_IMPORTED_MODULE_9__["Storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storages", function() { return _Utils_VCache__WEBPACK_IMPORTED_MODULE_9__["storages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetStorageForCachedTransform", function() { return _Utils_VCache__WEBPACK_IMPORTED_MODULE_9__["GetStorageForCachedTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CachedTransform", function() { return _Utils_VCache__WEBPACK_IMPORTED_MODULE_9__["CachedTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CombineDynamicPropMaps", function() { return _Utils_VCache__WEBPACK_IMPORTED_MODULE_9__["CombineDynamicPropMaps"]; });

/* harmony import */ var _Utils_Bridge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BridgeMessage", function() { return _Utils_Bridge__WEBPACK_IMPORTED_MODULE_10__["BridgeMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bridge", function() { return _Utils_Bridge__WEBPACK_IMPORTED_MODULE_10__["Bridge"]; });













/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClassExtensions_CE_Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _ClassExtensions_CE_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _ClassExtensions_CE_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _ClassExtensions_CE_Number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _ClassExtensions_CE_String__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _ClassExtensions_CE_Others__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);







/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


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

  var info = {
    configurable: true,
    enumerable: false
  };
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
}); //Function.prototype._AddFunction_Inline = function GetName() { return this.name_fake || this.name || this.toString().match(/^function\s*([^\s(]+)/)[1]; };


Function.prototype._AddFunction("GetName", function () {
  return this.name_fake || this.name || (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
});

Function.prototype._AddFunction_Inline = function SetName(name) {
  this.name_fake = name;
  return this;
};

Object.prototype._AddFunction_Inline = function Extend(x) {
  for (var name in x) {
    var value = x[name]; //if (value !== undefined)

    this[name] = value;
  }

  return this;
};

;

Object.prototype._AddFunction_Inline = function VSet() {
  var _this = this;

  var props, options, propName, propValue;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (_typeof(args[0]) == "object") {
    props = args[0];
    options = args[1];
  } else {
    propName = args[0];
    propValue = args[1];
    options = args[2];
  }

  options = options || {};

  var SetProp = function SetProp(name, value) {
    if (value === ___WEBPACK_IMPORTED_MODULE_0__["DEL"] || value === undefined && options.deleteUndefined || value === null && options.deleteNull || value === "" && options.deleteEmpty) {
      delete _this[name];
      return;
    }

    if (options.prop) {
      Object.defineProperty(_this, name, Object.assign({
        configurable: true
      }, options.prop, {
        value: value
      }));
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
  var result = this instanceof Array ? [] : {};

  for (var name in this) {
    result[name] = this[name];
  }

  if (x) {
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

Object.prototype._AddFunction_Inline = function Strip() {
  Object.setPrototypeOf(this, Object.getPrototypeOf({}));
  return this;
};

Object.prototype._AddFunction_Inline = function Including() {
  var result = {};

  for (var _len2 = arguments.length, propNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    propNames[_key2] = arguments[_key2];
  }

  for (var _i = 0; _i < propNames.length; _i++) {
    var propName = propNames[_i];

    if (propName in this) {
      result[propName] = this[propName];
    }
  }

  return result;
};

Object.prototype._AddFunction_Inline = function Excluding() {
  var result = this.Extended();

  for (var _len3 = arguments.length, propNames = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    propNames[_key3] = arguments[_key3];
  }

  for (var _i2 = 0; _i2 < propNames.length; _i2++) {
    var propName = propNames[_i2];
    delete result[propName];
  }

  return result;
};

Object.prototype._AddFunction_Inline = function IsOneOf() {
  for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    values[_key4] = arguments[_key4];
  }

  if (values.Contains(this)) {
    return true;
  } // if the value-list contains the primitive-version of self, consider it a match -- otherwise calling "test1".IsOneOf("test1", "test2") would fail


  var isObjectFormOfPrimitive = this instanceof Boolean || this instanceof Number || this instanceof String;

  if (isObjectFormOfPrimitive && values.Contains(this.valueOf())) {
    return true;
  }

  return false;
};

var specialProps = ["_", "_key", "_id"]; //interface Object { Props<ValueType>(excludeSpecialProps?: boolean): {index: number, name: string, value: ValueType}[]; }

Object.prototype._AddFunction_Inline = function Props() {
  var excludeSpecialProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var result = [];
  var i = 0;

  for (var propName in this) {
    if (excludeSpecialProps && (propName == "_" || propName == "_key" || propName == "_id")) continue; //result.push({index: i++, key: propName, name: propName, value: this[propName]});

    result.push({
      index: i++,
      name: propName,
      value: this[propName]
    });
  }

  return result;
};

Object.prototype._AddFunction_Inline = function Pairs() {
  var excludeSpecialProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var result = [];
  var i = 0;

  for (var key in this) {
    if (excludeSpecialProps && (key == "_" || key == "_key" || key == "_id")) continue;
    var entry = {
      index: i++,
      key: key,
      keyNum: Number(key),
      value: this[key]
    };
    if (Object(___WEBPACK_IMPORTED_MODULE_0__["IsNaN"])(entry.keyNum)) delete entry.keyNum;
    result.push(entry);
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
  Object(___WEBPACK_IMPORTED_MODULE_0__["Assert"])(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
  /*var result = this instanceof List ? new List(this.itemType) : [];
  for (let [index, item] of this.entries())
      result.Add(selectFunc.call(item, item, index));
  return result;*/

  return this.VValues(true).map(selectFunc);
};

Object.prototype._AddFunction_Inline = function FA_RemoveAt(index) {
  Object(___WEBPACK_IMPORTED_MODULE_0__["Assert"])(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
  if (!(index in this)) return; // remove target entry

  delete this[index]; // move all the later entries down one index

  for (var i = index + 1; i in this; i++) {
    this[i - 1] = this[i];
  }

  delete this[i - 1]; // remove the extra copy of the last-item 
};

Object.prototype._AddFunction_Inline = function FA_Add(item) {
  Object(___WEBPACK_IMPORTED_MODULE_0__["Assert"])(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");

  for (var openIndex = 0; openIndex in this; openIndex++) {
    ;
  }

  this[openIndex] = item;
}; // late-require things from other modules, that are used in the methods
// ==========
// Use "require" instead, so doesn't make TS see this as an external module. (and thus disable interface extension)
// And use alternate names, so they don't get used in other files.

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};




Array.prototype._AddFunction_Inline = function ForEach(func) {
  for (var i = 0; i < this.length; i++) {
    var shouldBreak = false;
    var shouldContinue = false;
    var extras = {
      index: i,
      Break: function Break() {
        return shouldBreak = true;
      },
      Continue: function Continue() {
        return shouldContinue = true;
      }
    };
    func(this[i], extras);
    if (shouldBreak) break;
    if (shouldContinue) continue;
  }
};

Array.prototype._AddFunction_Inline = function ForEachAsync(func) {
  return __awaiter(this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var i, shouldBreak, shouldContinue, extras;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < this.length)) {
              _context.next = 14;
              break;
            }

            shouldBreak = false;
            shouldContinue = false;
            extras = {
              index: i,
              Break: function Break() {
                return shouldBreak = true;
              },
              Continue: function Continue() {
                return shouldContinue = true;
              }
            };
            _context.next = 7;
            return func(this[i], extras);

          case 7:
            if (!shouldBreak) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("break", 14);

          case 9:
            if (!shouldContinue) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("continue", 11);

          case 11:
            i++;
            _context.next = 1;
            break;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
};

Array.prototype._AddFunction_Inline = function Contains(item) {
  return this.indexOf(item) != -1;
};

Array.prototype._AddFunction_Inline = function ContainsAny() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  for (var _i = 0; _i < items.length; _i++) {
    var item = items[_i];

    if (this.indexOf(item) != -1) {
      return true;
    }
  }

  return false;
}; // for some reason, this platform doesn't have entries() defined


Array.prototype._AddFunction_Inline = function entries() {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    result.push([i, this[i]]);
  }

  return result;
};

Array.prototype._AddFunction_Inline = function Prepend() {
  for (var _len2 = arguments.length, newItems = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    newItems[_key2] = arguments[_key2];
  }

  this.splice.apply(this, [0, 0].concat(newItems));
};

Array.prototype._AddFunction_Inline = function Add(item) {
  return this.push(item);
};

Array.prototype._AddFunction_Inline = function CAdd(item) {
  this.push(item);
  return this;
}; // CAdd = ChainAdd


Array.prototype._AddFunction_Inline = function TAdd(item) {
  this.push(item);
  return item;
}; // TAdd = TransparentAdd


Array.prototype._AddFunction_Inline = function AddRange(array) {
  //this.push(...array);
  // use loop, since sending them all as arguments fails when there are ~10000+ items
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      this.push(item);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
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
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;
      this.Remove(item);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
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
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = this.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _step3$value = _slicedToArray(_step3.value, 2),
          index = _step3$value[0],
          item = _step3$value[1];

      if (matchFunc == null || matchFunc.call(item, item, index)) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return false;
};

Array.prototype._AddFunction_Inline = function All(matchFunc) {
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = this.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var _step4$value = _slicedToArray(_step4.value, 2),
          index = _step4$value[0],
          item = _step4$value[1];

      if (!matchFunc.call(item, item, index)) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return true;
};

Array.prototype._AddFunction_Inline = function Where(matchFunc) {
  var result = [];
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = this.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var _step5$value = _slicedToArray(_step5.value, 2),
          index = _step5$value[0],
          item = _step5$value[1];

      if (matchFunc.call(item, item, index)) {
        // call, having the item be "this", as well as the first argument
        result.push(item);
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return result;
};

Array.prototype._AddFunction_Inline = function Select(selectFunc) {
  var result = [];
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = this.entries()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var _step6$value = _slicedToArray(_step6.value, 2),
          index = _step6$value[0],
          item = _step6$value[1];

      result.push(selectFunc.call(item, item, index));
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
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

Array.prototype._AddFunction_Inline = function SelectMany(selectFunc) {
  //return [...this.entries()].reduce((acc, [index, item])=>acc.concat(selectFunc.call(item, item, index)), []);
  var result = [];
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = this.entries()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var _step7$value = _slicedToArray(_step7.value, 2),
          index = _step7$value[0],
          item = _step7$value[1];

      result.AddRange(selectFunc.call(item, item, index));
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
        _iterator7.return();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }

  return result;
}; //Array.prototype._AddFunction_Inline = function Count(matchFunc) { return this.Where(matchFunc).length; };
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

  if (result == null) {
    throw new Error("Matching item not found.");
  }

  return result;
};

Array.prototype._AddFunction_Inline = function FirstOrX(matchFunc) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (matchFunc) {
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = this.entries()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var _step8$value = _slicedToArray(_step8.value, 2),
            index = _step8$value[0],
            item = _step8$value[1];

        if (matchFunc.call(item, item, index)) {
          return item;
        }
      }
    } catch (err) {
      _didIteratorError8 = true;
      _iteratorError8 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
          _iterator8.return();
        }
      } finally {
        if (_didIteratorError8) {
          throw _iteratorError8;
        }
      }
    }
  } else if (this.length > 0) {
    return this[0];
  }

  return x;
}; //Array.prototype._AddFunction_Inline = function FirstWithPropValue(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };


Array.prototype._AddFunction_Inline = function FirstWith(propName, propValue) {
  return this.Where(function () {
    return this[propName] == propValue;
  })[0];
};

Array.prototype._AddFunction_Inline = function Last(matchFunc) {
  var result = this.LastOrX(matchFunc);

  if (result === undefined) {
    throw new Error("Matching item not found.");
  }

  return result;
};

Array.prototype._AddFunction_Inline = function LastOrX(matchFunc) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (matchFunc) {
    for (var i = this.length - 1; i >= 0; i--) {
      if (matchFunc.call(this[i], this[i], i)) {
        return this[i];
      }
    }
  } else if (this.length > 0) {
    return this[this.length - 1];
  }

  return x;
};

Array.prototype._AddFunction_Inline = function XFromLast(x) {
  return this[this.length - 1 - x];
};

Array.prototype._AddFunction_Inline = function Move(item, newIndex) {
  var newIndexAsPreRemovalIndexVSFinalIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var oldIndex = this.indexOf(item);
  /*if (oldIndex != -1) {
      this.RemoveAt(oldIndex);
      // New-index is understood to be the position-in-list to move the item to, as seen before the item started being moved.
      // So compensate for remove-from-old-position list modification.
      if (shiftInsertPointToPreserveFinalNeighbors && oldIndex < newIndex) {
          newIndex--;
      }
  }
  this.Insert(newIndex, item);*/

  if (newIndexAsPreRemovalIndexVSFinalIndex) {
    this.Insert(newIndex, item);

    if (oldIndex != -1) {
      var oldEntry_currentIndex = newIndex <= oldIndex ? oldIndex + 1 : oldIndex; // if we just inserted the new version before the old entry, fix the old-entry's index by adding 1

      this.RemoveAt(oldEntry_currentIndex);
    }
  } else {
    if (oldIndex != -1) {
      this.RemoveAt(oldIndex);
    }

    this.Insert(newIndex, item);
  }

  return oldIndex;
};

Array.prototype._AddFunction_Inline = function ToList() {
  var itemType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return [].concat(this);
};

Array.prototype._AddFunction_Inline = function ToMap(keyFunc, valFunc) {
  var result = {};
  var _iteratorNormalCompletion9 = true;
  var _didIteratorError9 = false;
  var _iteratorError9 = undefined;

  try {
    for (var _iterator9 = this.entries()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
      var _step9$value = _slicedToArray(_step9.value, 2),
          index = _step9$value[0],
          item = _step9$value[1];

      result[keyFunc(item, index)] = valFunc(item, index);
    }
  } catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
        _iterator9.return();
      }
    } finally {
      if (_didIteratorError9) {
        throw _iteratorError9;
      }
    }
  }

  return result;
};

Array.prototype._AddFunction_Inline = function Skip(count) {
  var result = [];

  for (var i = count; i < this.length; i++) {
    result.push(this[i]);
  }

  return result;
};

Array.prototype._AddFunction_Inline = function Take(count) {
  var result = [];

  for (var i = 0; i < count && i < this.length; i++) {
    result.push(this[i]);
  }

  return result;
};

Array.prototype._AddFunction_Inline = function TakeLast(count) {
  var result = [];

  for (var i = 0; i < count && this.length - 1 - i >= 0; i++) {
    result.push(this[this.length - 1 - i]);
  }

  return result;
};

Array.prototype._AddFunction_Inline = function FindIndex(matchFunc) {
  var _iteratorNormalCompletion10 = true;
  var _didIteratorError10 = false;
  var _iteratorError10 = undefined;

  try {
    for (var _iterator10 = this.entries()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
      var _step10$value = _slicedToArray(_step10.value, 2),
          index = _step10$value[0],
          item = _step10$value[1];

      if (matchFunc.call(item, item, index)) {
        // call, having the item be "this", as well as the first argument
        return index;
      }
    }
  } catch (err) {
    _didIteratorError10 = true;
    _iteratorError10 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
        _iterator10.return();
      }
    } finally {
      if (_didIteratorError10) {
        throw _iteratorError10;
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
    if (!result.Contains(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype._AddFunction_Inline = function Except() {
  var excludeItems,
      excludeEachOnlyOnce = true;

  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (args[0] instanceof Array) {
    excludeItems = args[0];
    excludeEachOnlyOnce = args[1];
  } else excludeItems = args;

  if (excludeEachOnlyOnce) {
    var result = this.slice();
    var _iteratorNormalCompletion11 = true;
    var _didIteratorError11 = false;
    var _iteratorError11 = undefined;

    try {
      for (var _iterator11 = excludeItems[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
        var excludeItem = _step11.value;
        result.Remove(excludeItem);
      }
    } catch (err) {
      _didIteratorError11 = true;
      _iteratorError11 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
          _iterator11.return();
        }
      } finally {
        if (_didIteratorError11) {
          throw _iteratorError11;
        }
      }
    }

    return result;
  }

  return this.Where(function (a) {
    return !excludeItems.Contains(a);
  });
};

Array.prototype._AddFunction_Inline = function IfEmptyThen(valIfSelfIsEmpty) {
  return this.length == 0 ? valIfSelfIsEmpty : this;
};

Array.prototype._AddFunction_Inline = function Min(valFunc) {
  var asNumbers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (asNumbers) {
    /*let values = valFunc ? this.map(valFunc) : this;
    return Math.min(...values);*/
    Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
    return Math.min.apply(Math, _toConsumableArray(this));
  }

  return this.OrderBy(valFunc).FirstOrX();
};

Array.prototype._AddFunction_Inline = function Max(valFunc) {
  var asNumbers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (asNumbers) {
    /*let values = valFunc ? this.map(valFunc) : this;
    return Math.max(...values);*/
    Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
    return Math.max.apply(Math, _toConsumableArray(this));
  }

  return this.OrderBy(valFunc).LastOrX();
};

Array.prototype._AddFunction_Inline = function Sum() {
  var total = 0;
  var _iteratorNormalCompletion12 = true;
  var _didIteratorError12 = false;
  var _iteratorError12 = undefined;

  try {
    for (var _iterator12 = this[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
      var item = _step12.value;
      total += item;
    }
  } catch (err) {
    _didIteratorError12 = true;
    _iteratorError12 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
        _iterator12.return();
      }
    } finally {
      if (_didIteratorError12) {
        throw _iteratorError12;
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

  if (this.length % 2 == 0) {
    // if even number of elements, average two middlest ones
    return ordered[this.length / 2 - 1] + ordered[this.length / 2];
  }

  return ordered[this.length / 2]; // otherwise, return the exactly-middle one
};

Array.prototype._AddFunction_Inline = function Random() {
  var index = Math.floor(Math.random() * this.length);
  return this[index];
};

var oldJoin = [].join;

Array.prototype._AddFunction_Inline = function join() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ",";
  if (this.length == 0) return ""; //let result = "" + this[0];

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
} // late imports
// ==========


var _require = __webpack_require__(5),
    StableSort = _require.StableSort,
    Compare = _require.Compare;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoNothing", function() { return DoNothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DN", function() { return DN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickIncrement", function() { return QuickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyObj", function() { return emptyObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eo", function() { return eo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyArray", function() { return emptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyArray_forLoading", function() { return emptyArray_forLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyText", function() { return CopyText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromJSON", function() { return FromJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToJSON", function() { return ToJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToJSON_WithSpaces_Options", function() { return ToJSON_WithSpaces_Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToJSON_WithSpaces", function() { return ToJSON_WithSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToJSON_Safe", function() { return ToJSON_Safe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToJSON_Try", function() { return ToJSON_Try; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clone", function() { return Clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneWithPrototypes", function() { return CloneWithPrototypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDProvider", function() { return IDProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nl", function() { return nl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsObj", function() { return AsObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsArray", function() { return AsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slice", function() { return Slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiline", function() { return Multiline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiline_NotCommented", function() { return Multiline_NotCommented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StableSort", function() { return StableSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compare", function() { return Compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lerp", function() { return Lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPercentFromXToY", function() { return GetPercentFromXToY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetXToY", function() { return GetXToY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetXToYOut", function() { return GetXToYOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneObject", function() { return CloneObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneArray", function() { return CloneArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bind", function() { return Bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetContentSize", function() { return GetContentSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetContentWidth", function() { return GetContentWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetContentHeight", function() { return GetContentHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoElements", function() { return autoElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutoElement", function() { return GetAutoElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return TreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTreeNodesInObjTree", function() { return GetTreeNodesInObjTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTreeNodesInPath", function() { return GetTreeNodesInPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitTreeNodesInPath", function() { return VisitTreeNodesInPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepGet", function() { return DeepGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepSet", function() { return DeepSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithDeepSet", function() { return WithDeepSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStackTraceStr", function() { return GetStackTraceStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetErrorMessagesUnderElement", function() { return GetErrorMessagesUnderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL", function() { return DEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindDOM", function() { return FindDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindDOMAll", function() { return FindDOMAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitTillDataPathIsSet", function() { return WaitTillDataPathIsSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitTillPropertyIsSet", function() { return WaitTillPropertyIsSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapScheme", function() { return CapScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeCapitalization", function() { return ChangeCapitalization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartDownload", function() { return StartDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartUpload", function() { return StartUpload; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



var g = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" ? window : global;

if (Number.MIN_SAFE_INTEGER == null) {
  Number.MIN_SAFE_INTEGER = -9007199254740991;
}

if (Number.MAX_SAFE_INTEGER == null) {
  Number.MAX_SAFE_INTEGER = 9007199254740991;
}

g["G"] = G;

function G() {
  for (var _len = arguments.length, globalHolders = new Array(_len), _key = 0; _key < _len; _key++) {
    globalHolders[_key] = arguments[_key];
  }

  for (var _i = 0; _i < globalHolders.length; _i++) {
    var globalHolder = globalHolders[_i];
    Object.assign(g, globalHolder);
  }
}

function DoNothing() {}
function DN() {} //var quickIncrementValues = {};
//export function QuickIncrement(name = new Error().stack.split("\n")[2]) { // this doesn't always work, fsr

function QuickIncrement() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";
  QuickIncrement["values"][name] = (QuickIncrement["values"][name] | 0) + 1;
  return QuickIncrement["values"][name];
}
QuickIncrement["values"] = [];
var emptyObj = {};
var eo = emptyObj; // used for (maybeNullVar || eo).prop;

var emptyArray = [];
var emptyArray_forLoading = [];
function E(e1, e2, e3, e4, e5, e6, e7, e8) {
  var result = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var extend = _step.value;
      result.Extend(extend);
    } // if result is empty, return the same empty-obj each time so it doesn't trigger react-js rerenders

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (emptyObj && result.VKeys().length == 0) {
    return emptyObj;
  }

  return result; //return StyleSheet.create(result);
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
} // methods: serialization
// ==========
// object-Json

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

function ToJSON(obj, replacerFunc, spacing) {
  try {
    return JSON.stringify(obj, replacerFunc, spacing);
  } catch (ex) {
    if (ex.toString() == "TypeError: Converting circular structure to JSON") return ToJSON_Safe.apply(this, arguments);
    throw ex;
  }
}
var ToJSON_WithSpaces_Options = function ToJSON_WithSpaces_Options() {
  _classCallCheck(this, ToJSON_WithSpaces_Options);

  this.insideObjectBraces = false;
  this.insideArrayBrackets = false;
  this.betweenPropsOrItems = true;
  this.betweenPropNameAndValue = true;
};
function ToJSON_WithSpaces(obj, options) {
  options = E(new ToJSON_WithSpaces_Options(), options);
  var result = JSON.stringify(obj, null, 1); // stringify, with line-breaks and indents

  result = result.replace(/^ +/gm, " "); // remove all but the first space for each line

  result = result.replace(/\n/g, ""); // remove line-breaks

  if (!options.insideObjectBraces) result = result.replace(/{ /g, "{").replace(/ }/g, "}");
  if (!options.insideArrayBrackets) result = result.replace(/\[ /g, "[").replace(/ \]/g, "]");
  if (!options.betweenPropsOrItems) result = result.replace(/, /g, ",");
  if (!options.betweenPropNameAndValue) result = result.replace(/": /g, "\":");
  return result;
}
function ToJSON_Safe(obj) {
  for (var _len2 = arguments.length, excludePropNames = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    excludePropNames[_key2 - 1] = arguments[_key2];
  }

  var cache = [];
  var foundDuplicates = false;
  var result = JSON.stringify(obj, function (key, value) {
    if (excludePropNames.Contains(key)) return;

    if (_typeof(value) == 'object' && value !== null) {
      // if circular reference found, discard key
      if (cache.indexOf(value) !== -1) {
        foundDuplicates = true;
        return;
      }

      cache.push(value); // store value in our cache
    }

    return value;
  }); //cache = null; // enable garbage collection

  if (foundDuplicates) result = "[was circular]" + result;
  return result;
}
function ToJSON_Try() {
  try {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return ToJSON.apply(this, args);
  } catch (ex) {}

  return "[converting to JSON failed]";
}
function Clone(obj) {
  var keepPrototype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (obj == null) return obj;
  var result = FromJSON(ToJSON(obj));

  if (keepPrototype == true) {
    Object.setPrototypeOf(result, Object.getPrototypeOf(obj));
  }

  return result;
}
function CloneWithPrototypes(originalObject) {
  var keepCircularLinks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (originalObject == null) return originalObject;
  var copies = [{
    source: originalObject,
    target: Array.isArray(originalObject) ? [] : Object.create(Object.getPrototypeOf(originalObject))
  }];
  var cloneObject = copies[0].target;
  var sourceReferences = [originalObject];
  var targetReferences = [cloneObject]; // First in, first out

  var current;

  while (current = copies.shift()) {
    var keys = Object.getOwnPropertyNames(current.source);

    for (var propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
      // Save the source's descriptor
      var descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);

      if (!descriptor.value || _typeof(descriptor.value) !== 'object') {
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
      copies.push({
        source: nextSource,
        target: descriptor.value
      });
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
  var name = target["name_fake"] || target.name || (target.toString().match(/^function\s*([^\s(]+)/) || [])[1]; //console.log("Globalizing: " + name);

  g[name] = target;
}
var IDProvider =
/*#__PURE__*/
function () {
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
var nl = "\n";
function AsObj(obj) {
  if (_typeof(obj) == "object") return obj;
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
; //s.ToArray = function(args) { return s.Slice(args, 0); };

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
  var text = functionWithInCommentMultiline.toString().replace(/\r/g, ""); // some extra preprocessing

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
  result = result.replace(/\t/g, "    "); // replace the start and end tokens of special string-containers (used for keeping comments in-tact)

  result = result.replace(/['"]@((?:.|\n)+)@['"];(\n(?=\n))?/g, function (match, sub1) {
    return sub1.replace(/\\n/, "\n");
  });
  return result;
}
function StableSort(array, compare) {
  var array2 = array.map(function (item, index) {
    return {
      index: index,
      item: item
    };
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
} // just use the word 'percent', even though value is represented as fraction (e.g. 0.5, rather than 50[%])

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
  if (Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsPrimitive"])(obj)) return obj; //if (obj.GetType() == Array)

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
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = obj.Props()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var prop = _step2.value;
      if (!(prop.value instanceof Function) && (propMatchFunc == null || propMatchFunc.call(obj, prop.name, prop.value))) result[prop.name] = CloneObject(prop.value, propMatchFunc, depth + 1);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
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
    holder.style.Extend({
      position: "absolute",
      left: "-1000px",
      top: "-1000px",
      width: "1000px",
      height: "1000px",
      overflow: "hidden"
    });
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
  var cacheStore = Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsString"])(content) ? GetContentSize_cache : content["GetContentSize_cache"] = content["GetContentSize_cache"] || {};
  var currentHTML = Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsString"])(content) ? content : content.outerHTML;
  var result = cacheStore[currentHTML];

  if (result == null) {
    var holder = GetHiddenHolder();
    var testElement = Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsString"])(content) ? $(content) : createClone ? $(content).clone() : $(content);
    holder.appendChild(testElement[0]);
    var width = testElement.outerWidth(includeMargin);
    var height = testElement.outerHeight(includeMargin);
    testElement.remove();
    result = {
      width: width,
      height: height
    };

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
var autoElements = {};
function GetAutoElement(startHTML) {
  if (autoElements[startHTML] == null) {
    var holder = GetHiddenHolder();
    var element = $(startHTML)[0];
    holder.appendChild(element);
    autoElements[startHTML] = element;
  }

  return autoElements[startHTML];
}
var TreeNode =
/*#__PURE__*/
function () {
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
    } //value;

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

  Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(_ancestorNodes.length <= 300, "Cannot traverse more than 300 levels into object tree. (probably circular)");
  var result = [];
  if (includeRootNode) result.push(new TreeNode([], {
    _root: obj
  }, "_root"));

  for (var key in obj) {
    var value = obj[key];
    var currentNode = new TreeNode(_ancestorNodes, obj, key);
    result.push(currentNode);
    if (_typeof(value) == "object") result.AddRange(GetTreeNodesInObjTree(value, false, _ancestorNodes.concat(currentNode)));
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
  if (includeRootNode) result.push(new TreeNode([], {
    _root: treeRoot
  }, "_root"));
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

  if (visitRootNode) visitFunc(new TreeNode([], {
    _root: treeRoot
  }, "_root"));
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

/** @param sepChar Default: "/" */

function DeepGet(obj, pathOrPathSegments) {
  var resultIfNull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var sepChar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";
  var pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
  var result = obj;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = pathSegments[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var pathNode = _step3.value;
      if (result == null) break;
      result = result[pathNode];
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  if (result == null) return resultIfNull;
  return result;
}
/** @param sepChar Default: "/" */

function DeepSet(obj, pathOrPathSegments, newValue) {
  var sepChar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";
  var createPathSegmentsIfMissing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var deleteUndefined = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
  var deepObj = obj; // tunnel down to the object holding the path-specified prop

  pathSegments.slice(0, -1).forEach(function (segment) {
    if (deepObj[segment] == null) {
      if (createPathSegmentsIfMissing) {
        deepObj[segment] = {};
      } else {
        Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(false, "The given path (".concat(pathSegments.join("/"), ") had a missing segment (").concat(segment, "), so the deep-set failed."));
      }
    }

    deepObj = deepObj[segment];
  });

  if (newValue === undefined && deleteUndefined) {
    delete deepObj[pathSegments.Last()];
  } else {
    deepObj[pathSegments.Last()] = newValue;
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

function WithDeepSet(baseObj, pathOrPathSegments, newValue) {
  var sepChar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";
  var pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
  return Object.assign({}, baseObj, _defineProperty({}, pathSegments[0], pathSegments.length > 1 ? WithDeepSet(baseObj[pathSegments[0]], pathSegments.slice(1), newValue) : newValue));
} //@((()=> { if (g.onclick == null) g.onclick = ()=>console.log(V.GetStackTraceStr()); }) as any)

function GetStackTraceStr() {
  var stackTrace,
      sourceStackTrace = true;

  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  if (Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsString"])(args[0])) {
    stackTrace = args[0];
    sourceStackTrace = args[1];
  } else {
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
var DEL = "JS_VEXTENSIONS_SPECIAL_DELETE_KEY";
function FindDOM(selector) {
  return document.querySelector(selector);
}
function FindDOMAll(selector) {
  return Array.from(document.querySelectorAll(selector));
}
function WaitTillDataPathIsSet(dataPath) {
  var _this = this;

  return new Promise(function (resolve, reject) {
    return __awaiter(_this, void 0, void 0,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var dataPathParts, currentParent, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, part;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dataPathParts = dataPath.split(".");
              currentParent = g;
              _iteratorNormalCompletion4 = true;
              _didIteratorError4 = false;
              _iteratorError4 = undefined;
              _context.prev = 5;
              _iterator4 = dataPathParts[Symbol.iterator]();

            case 7:
              if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                _context.next = 18;
                break;
              }

              part = _step4.value;

            case 9:
              if (!(currentParent[part] == null)) {
                _context.next = 14;
                break;
              }

              _context.next = 12;
              return WaitTillPropertyIsSet(currentParent, part);

            case 12:
              _context.next = 9;
              break;

            case 14:
              currentParent = currentParent[part];

            case 15:
              _iteratorNormalCompletion4 = true;
              _context.next = 7;
              break;

            case 18:
              _context.next = 24;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](5);
              _didIteratorError4 = true;
              _iteratorError4 = _context.t0;

            case 24:
              _context.prev = 24;
              _context.prev = 25;

              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }

            case 27:
              _context.prev = 27;

              if (!_didIteratorError4) {
                _context.next = 30;
                break;
              }

              throw _iteratorError4;

            case 30:
              return _context.finish(27);

            case 31:
              return _context.finish(24);

            case 32:
              resolve();

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[5, 20, 24, 32], [25,, 27, 31]]);
    }));
  });
}
function WaitTillPropertyIsSet(obj, prop) {
  return new Promise(function (resolve, reject) {
    obj._AddGetterSetter(prop, function () {}, function (value) {
      delete obj[prop]; // remove this hook

      obj[prop] = value; // set to provided value

      resolve();
    });
  });
}
var CapScheme;

(function (CapScheme) {
  /** examplePropNameWithDuoWord */
  CapScheme[CapScheme["PropName"] = 0] = "PropName";
  /** Example Title With Duo-Word */

  CapScheme[CapScheme["Title"] = 1] = "Title";
  /** Example sentence with duo-word */

  CapScheme[CapScheme["Sentence"] = 2] = "Sentence";
})(CapScheme || (CapScheme = {}));

function ChangeCapitalization(text, fromScheme, toScheme) {
  var inStandardScheme = ConvertFromSchemeXToStandardScheme(text, fromScheme);
  return ConvertFromStandardSchemeToSchemeX(inStandardScheme, toScheme);
} // "standard scheme" is currently CapitalizeScheme.Sentence

function ConvertFromSchemeXToStandardScheme(text, fromScheme) {
  if (fromScheme == CapScheme.PropName) {
    // demo string: somePropName
    return text // somePropName -> some prop name
    .replace(/[A-Z]/g, function (a) {
      return " " + a.toLowerCase();
    }) // some prop name -> Some prop name
    .replace(/^./, function (a) {
      return a.toUpperCase();
    });
  } else if (fromScheme == CapScheme.Title) {
    Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(false, "Not yet implemented.");
  } else if (fromScheme == CapScheme.Sentence) {
    return text;
  }
}

function ConvertFromStandardSchemeToSchemeX(text, toScheme) {
  if (toScheme == CapScheme.PropName) {
    Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(false, "Not yet implemented.");
  } else if (toScheme == CapScheme.Title) {
    Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(false, "Not yet implemented.");
  } else if (toScheme == CapScheme.Sentence) {
    return text;
  }
}

function StartDownload(content, filename) {
  var dataTypeStr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "data:application/octet-stream,";
  var encodeContentAsURIComp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var link = document.createElement("a");
  Object.assign(link.style, {
    display: "none"
  });
  link.innerText = "Save to disk";
  link.setAttribute("href", dataTypeStr + (encodeContentAsURIComp ? encodeURIComponent(content) : content));
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
}
function StartUpload() {
  return new Promise(function (resolve) {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.style.display = "none";

    fileInput.onchange = function (e) {
      var file = e.target["files"][0];
      if (!file) return;
      var reader = new FileReader();

      reader.onload = function (e) {
        var contents = e.target["result"];
        resolve(contents);
      };

      reader.readAsText(file);
    };

    document.body.appendChild(fileInput);
    fileInput.click();
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bool", function() { return bool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function() { return int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "double", function() { return double; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNaN", function() { return IsNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsPrimitive", function() { return IsPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsBool", function() { return IsBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToBool", function() { return ToBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsObject", function() { return IsObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTypeX", function() { return IsTypeX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumberString", function() { return IsNumberString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumber", function() { return IsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToNumber", function() { return ToNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsInt", function() { return IsInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToInt", function() { return ToInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsString", function() { return IsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToString", function() { return ToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFunction", function() { return IsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsConstructor", function() { return IsConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEntries", function() { return GetEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetValues", function() { return GetValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetValues_ForSchema", function() { return GetValues_ForSchema; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// standard types
// ----------

/*export class bool extends Boolean {}
export class int extends Number {}
export class double extends Number {}
export var string = "string" as any as (new(..._)=>string);*/
var bool = function bool() {
  return "bool";
};
var int = function int() {
  return "int";
};
var double = function double() {
  return "double";
};
var string = function string() {
  return "string";
};
function IsNaN(obj) {
  return typeof obj == "number" && obj != obj;
}
function IsPrimitive(obj) {
  return IsBool(obj) || IsNumber(obj) || IsString(obj);
}
function IsBool(obj) {
  return typeof obj == "boolean";
} //|| obj instanceof Boolean

function ToBool(boolStr) {
  return boolStr == "true" ? true : false;
}
function IsObject(obj) {
  return _typeof(obj) == "object";
} //export function IsObjectOf<T>(obj) : obj is T { return typeof obj == "object"; }
//export function IsOfType<T>(obj, typeConstructor: new()=>T) : obj is T { return obj.constructor.name == typeConstructor.name; }

function IsTypeX(obj, typeConstructor) {
  return obj instanceof typeConstructor;
}
function IsNumberString(obj) {
  var allowNaN = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return IsString(obj) && obj.length && IsNumber(Number(obj), false, allowNaN);
}
function IsNumber(obj) {
  var allowNumberObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var allowNaN = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!allowNaN && IsNaN(obj)) return false;
  return typeof obj == "number" || allowNumberObj && obj instanceof Number;
}
/** Basically the same as Number(...), accepting numbers, and converting number-strings of these forms:
1) "010" -> 10 [ES5+], 8 [<ES5]
2) "0x10" -> 16
3) "5e3" -> 5000
Does *not* convert values of these forms (instead returns valIfConversionFails -- by default NaN):
4) null -> ?
5) "" -> ?*/

function ToNumber(stringOrFloatVal) {
  var valIfConversionFails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  if (!IsString(stringOrFloatVal) && !IsNumber(stringOrFloatVal)) return valIfConversionFails;
  if (IsString(stringOrFloatVal) && stringOrFloatVal.length == 0) return valIfConversionFails;
  return Number(stringOrFloatVal);
}
function IsInt(obj) {
  return IsNumber(obj) && parseInt(obj) == obj;
}
function ToInt(stringOrFloatVal) {
  var valIfConversionFails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  return parseInt(ToNumber(stringOrFloatVal, valIfConversionFails) + "");
}
/*export function IsFloat(obj) : obj is number { return typeof obj == "number" && parseFloat(obj as any) != parseInt(obj as any); }
export function ToFloat(stringOrIntVal) { return parseFloat(stringOrIntVal); }*/

function IsString(obj) {
  var allowStringObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return typeof obj == "string" || allowStringObj && obj instanceof String;
}
function ToString(val) {
  return "" + val;
}
function IsFunction(obj) {
  //return obj instanceof Function;
  return typeof obj == "function";
}
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
// enums
// ==========

/**
 * Typescript enums compile to an object with each `key = value` pair converted into two props: key->value, value->key
 * This function returns just the key->value pairs. (with each entry having the form {name: string, value: number | null})
 */

function GetEntries(enumType, nameModifierFunc) {
  //let entryNames = Object.keys(enumType).filter(a=>a.match(/^\D/) != null);
  // valid enum values are numbers and null, so any props other than those are the name->value props we want

  /*let nameValuePairs = enumType.Pairs().filter(pair=>!IsNumberString(pair.key) && pair.key != "null");
  return nameValuePairs.map(pair=>({name: nameModifierFunc ? nameModifierFunc(pair.key) : pair.key, value: pair.value as number}));*/
  // valid enum values are numbers and null, so any keys other than those are the ones we want (they're the keys for the key->value pairs)
  var entryNames = Object.keys(enumType).filter(function (key) {
    return !IsNumberString(key) && key != "null";
  });
  return entryNames.map(function (name) {
    return {
      name: nameModifierFunc ? nameModifierFunc(name) : name,
      value: enumType[name]
    };
  });
}
function GetValues(enumType) {
  return GetEntries(enumType).map(function (a) {
    return a.value;
  });
}
function GetValues_ForSchema(enumType) {
  return GetValues(enumType).map(function (value) {
    return {
      const: value
    };
  });
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


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
if (typeof Element != "undefined") Element.prototype._AddItem("QuerySelector_BreadthFirst", function (selector) {
  var currentLayerElements = _toConsumableArray(this.childNodes);

  while (currentLayerElements.length) {
    var firstMatchInLayer = currentLayerElements.find(function (a) {
      return a["matches"] && a["matches"](selector);
    });
    if (firstMatchInLayer) return firstMatchInLayer; //currentLayerElements = currentLayerElements.SelectMany(a=>[...a.childNodes]);

    currentLayerElements = currentLayerElements.reduce(function (acc, item) {
      return acc.concat(_toConsumableArray(item.childNodes));
    }, []);
  }

  return null;
});
if (typeof Element != "undefined") Element.prototype._AddItem("$", function (queryStr) {
  return this.querySelectorAll(queryStr).ToArray();
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


Number.prototype._AddFunction_Inline = function IfN1Then(valIfSelfIsNeg1) {
  return this == -1 ? valIfSelfIsNeg1 : this;
};

Number.prototype._AddFunction_Inline = function NaNTo(valIfSelfIsNaN) {
  return Object(___WEBPACK_IMPORTED_MODULE_0__["IsNaN"])(this) ? valIfSelfIsNaN : this;
};

Number.prototype._AddFunction_Inline = function ToPercentStr(precision) {
  var number = this * 100;
  if (precision != null) return number.toFixed(precision) + "%";
  return number.toString() + "%";
};

Number.prototype._AddFunction_Inline = function IsMultipleOf(multipleOf, maxDistToBeMultiple) {
  var valRoundedToMultiple = this.RoundTo(multipleOf);
  var distance = valRoundedToMultiple.Distance(this);
  return distance <= maxDistToBeMultiple;
};

Number.prototype._AddFunction_Inline = function RoundTo(multiple) {
  //return Math.round(this / multiple) * multiple;
  // Don't ask me why this works, but it does, and is faster. From: http://phrogz.net/round-to-nearest-via-modulus-division

  /*var half = multiple / 2;
  return (this + half) - ((this + half) % multiple);*/
  // Realign/scale the possible values/multiples, so that each value is given an integer slot. Place the actual value (this) within the appropriate slot using Math.round() int-rounding, then reverse the scaling to get the true rounded value.
  // (This version handles fractions better. Ex: (.2 + .1).RoundTo(.1) == .3 [NOT 0.3000000000000004, as the simpler approach gives])
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
  }

  while (maxOut ? val >= max : val > max) {
    val -= size;
  }

  return val;
};

Number.prototype._AddFunction_Inline = function Distance(other) {
  return Math.abs(this - other);
};

Number.prototype._AddFunction_Inline = function ToPower(power) {
  return Math.pow(this, power);
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


String.prototype._AddFunction_Inline = function TrimStart() {
  for (var _len = arguments.length, chars = new Array(_len), _key = 0; _key < _len; _key++) {
    chars[_key] = arguments[_key];
  }

  // fix for if called by VDF (which has a different signature)
  //if (arguments[0] instanceof Array) chars = arguments[0];
  for (var iOfFirstToKeep = 0; iOfFirstToKeep < this.length && chars.Contains(this[iOfFirstToKeep]); iOfFirstToKeep++) {
    ;
  }

  return this.slice(iOfFirstToKeep, this.length);
};

String.prototype._AddFunction_Inline = function TrimEnd() {
  for (var _len2 = arguments.length, chars = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    chars[_key2] = arguments[_key2];
  }

  for (var iOfLastToKeep = this.length - 1; iOfLastToKeep >= 0 && chars.Contains(this[iOfLastToKeep]); iOfLastToKeep--) {
    ;
  }

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

      _result.push({
        index: matchIndex
      });

      lastMatchIndex = matchIndex;
    }

    return _result;
  }

  var regex = strOrRegex;
  if (!regex.global) throw new Error("Regex must have the 'g' flag added. (otherwise an infinite loop occurs)");
  var result = [];
  var match;

  while (match = regex.exec(this)) {
    result.push(match);
  }

  return result;
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

  for (var _len3 = arguments.length, strings = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    strings[_key3] = arguments[_key3];
  }

  for (var _i = 0; _i < strings.length; _i++) {
    var str = strings[_i];
    var indexOfChar = this.indexOf(str);
    if (indexOfChar != -1 && (indexOfChar < lowestIndex || lowestIndex == -1)) lowestIndex = indexOfChar;
  }

  return lowestIndex;
};

String.prototype._AddFunction_Inline = function LastIndexOfAny() {
  var highestIndex = -1;

  for (var _len4 = arguments.length, strings = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    strings[_key4] = arguments[_key4];
  }

  for (var _i2 = 0; _i2 < strings.length; _i2++) {
    var str = strings[_i2];
    var indexOfChar = this.lastIndexOf(str);
    if (indexOfChar > highestIndex) highestIndex = indexOfChar;
  }

  return highestIndex;
};

String.prototype._AddFunction_Inline = function StartsWithAny() {
  var _this = this;

  for (var _len5 = arguments.length, strings = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    strings[_key5] = arguments[_key5];
  }

  return strings.Any(function (str) {
    return _this.startsWith(str);
  });
};

String.prototype._AddFunction_Inline = function EndsWithAny() {
  var _this2 = this;

  for (var _len6 = arguments.length, strings = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    strings[_key6] = arguments[_key6];
  }

  return strings.Any(function (str) {
    return _this2.endsWith(str);
  });
};

String.prototype._AddFunction_Inline = function ContainsAny() {
  var _this3 = this;

  for (var _len7 = arguments.length, strings = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    strings[_key7] = arguments[_key7];
  }

  return strings.Any(function (str) {
    return _this3.Contains(str);
  });
};

String.prototype._AddFunction_Inline = function SplitByAny() {
  for (var _len8 = arguments.length, separators = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    separators[_key8] = arguments[_key8];
  }

  /*var splitStr = "/";
  for (let sep of separators)
      splitStr += (splitStr.length > 1 ? "|" : "") + sep;
  splitStr += "/";
  return this.split(splitStr);*/
  var regex = new RegExp(separators.map(function (a) {
    return "\\".concat(a);
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

String.prototype._AddFunction_Inline = function AsMultiline() {
  var desiredIndent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var removeLineStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "@RL";
  var result = this.substring(this.indexOf("\n") + 1, this.lastIndexOf("\n"));

  if (desiredIndent != null) {
    var firstLineIndent = (result.match(/^\t+/) || [""])[0].length;

    if (firstLineIndent) {
      var lines = result.split("\n"); // remove X tabs from start of each line (where X is firstLineIndent)

      lines = lines.map(function (line) {
        return line.replace(new RegExp("^\t{0,".concat(firstLineIndent, "}")), "");
      }); // add the desired indent

      lines = lines.map(function (line) {
        return "\t".repeat(desiredIndent) + line;
      }); // filter out lines with the special remove-line string

      lines = lines.filter(function (a) {
        return !a.includes(removeLineStr);
      });
      result = lines.join("\n");
    }
  }

  return result;
};

String.prototype._AddFunction_Inline = function Substring(start, end) {
  if (end < 0) end = this.length + end;
  return this.substring(start, end);
};

String.prototype._AddFunction_Inline = function ToInt() {
  return parseInt(Number(this) + "");
};

String.prototype._AddFunction_Inline = function ToFloat() {
  return Number(this);
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
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


Function.prototype._AddFunction_Inline = function GetTags(
/*o:*/
type) {
  return (this.tags || []).Where(function (a) {
    return type == null || a instanceof type;
  });
}; //Function.prototype._AddFunction_Inline = function AsStr(...args) { return require("../../V/V").Multiline(this, ...args); };
//Function.prototype._AddFunction_Inline = function AsStr(useExtraPreprocessing) { return require("../../V/V").Multiline(this, useExtraPreprocessing); };


Function.prototype._AddFunction_Inline = function RunThenReturn(args___) {
  this.apply(null, arguments);
  return this;
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
}; // Error
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

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSVE", function() { return JSVE; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSVE = function JSVE() {
  _classCallCheck(this, JSVE);
};
JSVE.logFunc = console.log;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPropsChanged", function() { return GetPropsChanged; });
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

function GetPropsChanged(oldObj, newObj) {
  var returnNullIfSame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var useJSONCompare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  oldObj = oldObj || {}, newObj = newObj || {};
  var keys = oldObj.VKeys().concat(newObj.VKeys()).Distinct();
  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      var newVal_forComparison = useJSONCompare ? Object(_General__WEBPACK_IMPORTED_MODULE_0__["ToJSON"])(newObj[key]) : newObj[key];
      var oldVal_forComparison = useJSONCompare ? Object(_General__WEBPACK_IMPORTED_MODULE_0__["ToJSON"])(oldObj[key]) : oldObj[key];

      if (newVal_forComparison !== oldVal_forComparison) {
        result.push({
          key: key,
          oldVal: oldObj[key],
          newVal: newObj[key]
        });
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
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
/*export function GetUpdates(oldData, newData, useNullInsteadOfUndefined = true) {
    const result = {};
    for (const key of oldData.VKeys(true).concat(newData.VKeys(true))) {
        if (newData[key] !== oldData[key]) {
            result[key] = newData[key];
            if (newData[key] === undefined && useNullInsteadOfUndefined) {
                result[key] = null;
            }
        }
    }
    return RemoveHelpers(result);
}*/

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assert", function() { return Assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertWarn", function() { return AssertWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_NotEqualTo_Wrapper", function() { return A_NotEqualTo_Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_OfType_Wrapper", function() { return A_OfType_Wrapper; });
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _JSVE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



function Assert(condition, messageOrMessageFunc) {
  if (condition) return;
  var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
  _JSVE__WEBPACK_IMPORTED_MODULE_1__["JSVE"].logFunc("Assert failed) ".concat(message, "\n\nStackTrace) ").concat(Object(_General__WEBPACK_IMPORTED_MODULE_0__["GetStackTraceStr"])()));
  console.error("Assert failed) " + message);
  var skipError = false; // add flag which you can use to skip the error, when paused in debugger

  debugger;
  if (!skipError) throw new Error("Assert failed) " + message);
}
function AssertWarn(condition, messageOrMessageFunc) {
  if (condition) return;
  var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
  console.warn("Assert-warn failed) ".concat(message, "\n\nStackTrace) ").concat(Object(_General__WEBPACK_IMPORTED_MODULE_0__["GetStackTraceStr"])()));
} // this version throws an error with only the provided message -- for ones the user may well see, and which don't need the stack (or "Assert failed) " text)

/*g.Extend({AssertSimple});
export function AssertSimple(condition, messageOrMessageFunc?: string | Function) {
    if (condition) return;

    var message = (messageOrMessageFunc as any) instanceof Function ? (messageOrMessageFunc as any)() : messageOrMessageFunc;

    Log(`Assert failed) ${message}\n\nStackTrace) ${V.GetStackTraceStr()}`);
    console.error("Assert failed) " + message);
    debugger;
    throw new Error(message);
}*/

var A =
/*#__PURE__*/
function () {
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
          return "Value cannot be null. (provided value: ".concat(value, ")");
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
var A_NotEqualTo_Wrapper =
/*#__PURE__*/
function () {
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
var A_OfType_Wrapper =
/*#__PURE__*/
function () {
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

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerContext", function() { return TimerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryCall", function() { return TryCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryCall_OnX", function() { return TryCall_OnX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitXThenRun", function() { return WaitXThenRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitUntilXThenRun", function() { return WaitUntilXThenRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepAsync", function() { return SleepAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepAsyncUntil", function() { return SleepAsyncUntil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoNothingXTimesThenDoY", function() { return DoNothingXTimesThenDoY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerS", function() { return TimerS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferAction", function() { return BufferAction; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var TimerContext =
/*#__PURE__*/
function () {
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
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.timers = [];
    } // Can be useful on platforms (eg. Android) where setInterval() and setTimeout() stop working when the screen is off.
    // Just have the Android code call the js every second or so, running this method; this will force the timer-functions to be manually triggered once they've passed the expected tick-time.

  }, {
    key: "ManuallyTriggerOverdueTimers",
    value: function ManuallyTriggerOverdueTimers() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.timers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var timer = _step2.value;

          if (timer.NextTickFuncOverdue) {
            timer.nextTickFunc();
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return TimerContext;
}();
TimerContext.default = new TimerContext();
TimerContext.default_autoAddAll = false; // methods
// ==========

function TryCall(func) {
  //if (!(func instanceof Function)) return;
  if (typeof func != "function") return;

  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return func.apply(this, args);
  } catch (ex) {}
}
function TryCall_OnX(obj, func) {
  if (typeof func != "function") return;

  try {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return func.apply(obj, args);
  } catch (ex) {}
}
/*let oldTimeout = setTimeout;
g.setTimeout = function(func: Function, delayInMS = 0, ...args) {
    // setTimeout can take really long on Chrome mobile (eg. while scrolling), for some reason (like, 1.5 seconds)
    // on desktop, setImmediate is better as well, since it takes ~0ms instead of 1-15ms
    if (delayInMS == 0)
        return setImmediate(func, ...args);
    return oldTimeout(func, delayInMS, ...args);
}*/

/*export function Sleep(ms) {
    var startTime = new Date().getTime();
    while (new Date().getTime() - startTime < ms) {}
}*/

var maxTimeoutLength = 0x7FFFFFFF; // setTimeout limit is MAX_INT32=(2^31-1)

function WaitXThenRun(delayInMS, func) {
  Object(___WEBPACK_IMPORTED_MODULE_0__["Assert"])(delayInMS <= maxTimeoutLength, "Cannot wait for longer than ".concat(maxTimeoutLength, " ms. (use WaitUntilXThenRun, if a long-delay is needed)")); // setTimeout can take really long on Chrome mobile (eg. while scrolling), for some reason (like, 1.5 seconds)
  // on desktop, setImmediate is better as well, since it takes ~0ms instead of 1-15ms

  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  if (delayInMS == 0) {
    var _window;

    return (_window = window)["setImmediate"].apply(_window, [func].concat(args));
  }

  return setTimeout.apply(void 0, [func, delayInMS].concat(args)); // "as any": maybe temp; used to allow source-importing from NodeJS
}
function WaitUntilXThenRun(targetDateTimeInMS, func) {
  var now = Date.now();
  var diff = (targetDateTimeInMS - now).KeepAtLeast(0);

  if (diff > maxTimeoutLength) {
    WaitXThenRun(maxTimeoutLength, function () {
      return WaitUntilXThenRun(targetDateTimeInMS, func);
    });
  } else {
    WaitXThenRun(diff, func);
  }
}
function SleepAsync(timeMS) {
  return new Promise(function (resolve, reject) {
    WaitXThenRun(timeMS, resolve);
  });
}
function SleepAsyncUntil(targetDateTimeInMS) {
  return new Promise(function (resolve, reject) {
    WaitUntilXThenRun(targetDateTimeInMS, resolve);
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
} // interval is in seconds (can be decimal)

var Timer =
/*#__PURE__*/
function () {
  function Timer(intervalInMS, func) {
    var maxCallCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    _classCallCheck(this, Timer);

    this.timerID = -1;
    this.callCount_thisRun = 0;
    this.callCount_total = 0;
    Object(___WEBPACK_IMPORTED_MODULE_0__["Assert"])(Object(___WEBPACK_IMPORTED_MODULE_0__["IsNumber"])(intervalInMS), "Interval must be a number.");
    this.intervalInMS = intervalInMS;
    this.func = func;
    this.maxCallCount = maxCallCount;

    if (TimerContext.default_autoAddAll) {
      TimerContext.default.timers.push(this);
    }
  }

  _createClass(Timer, [{
    key: "SetContext",
    value: function SetContext(timerContext) {
      Object(___WEBPACK_IMPORTED_MODULE_0__["Assert"])(timerContext, "TimerContext cannot be null.");
      this.timerContexts = (this.timerContexts || []).concat(timerContext);
      timerContext.timers.push(this);
      return this;
    }
  }, {
    key: "RemoveFromContext",
    value: function RemoveFromContext(timerContext) {
      this.timerContexts.Remove(timerContext);
      timerContext.timers.Remove(this);
    }
  }, {
    key: "ClearContexts",
    value: function ClearContexts() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.timerContexts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var context = _step3.value;
          this.RemoveFromContext(context);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "Start",
    value: function Start() {
      var _this = this;

      var initialDelayOverride = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      // if start is called when it's already running, stop the timer first (thus we restart the timer instead of causing overlapping setIntervals/delayed-func-calls)
      if (this.IsRunning) this.Stop();
      this.startTime = Date.now();

      var StartRegularInterval = function StartRegularInterval() {
        _this.nextTickTime = _this.startTime + _this.intervalInMS;
        _this.timerID = setInterval(_this.nextTickFunc = function () {
          _this.callCount_thisRun++;
          _this.callCount_total++;

          _this.func();

          if (_this.maxCallCount != -1 && _this.callCount_thisRun >= _this.maxCallCount) {
            _this.Stop();
          } else {
            //this.nextTickTime += this.intervalInMS;
            _this.nextTickTime = Date.now() + _this.intervalInMS; // using Date.now() prevents the prop from getting out-of-sync (from sleep-mode)
          }
        }, _this.intervalInMS); // "as any": maybe temp; used to allow source-importing from NodeJS
      };

      if (initialDelayOverride != null) {
        this.nextTickTime = this.startTime + initialDelayOverride;
        this.timerID = setTimeout(this.nextTickFunc = function () {
          _this.callCount_thisRun++;
          _this.callCount_total++;

          _this.func();

          if (_this.maxCallCount != -1 && _this.callCount_thisRun >= _this.maxCallCount) {
            _this.Stop();
          } else {
            StartRegularInterval();
          }
        }, initialDelayOverride); // "as any": maybe temp; used to allow source-importing from NodeJS
      } else {
        StartRegularInterval();
      }

      return this; // enable chaining, for SetContext() call
    }
  }, {
    key: "Stop",
    value: function Stop() {
      clearInterval(this.timerID); //this.startTime = null;

      this.nextTickTime = null;
      this.nextTickFunc = null;
      this.timerID = -1;
      this.callCount_thisRun = 0;
    }
  }, {
    key: "IsRunning",
    get: function get() {
      return this.timerID != -1;
    }
  }, {
    key: "NextTickFuncOverdue",
    get: function get() {
      return this.nextTickTime != null && Date.now() > this.nextTickTime && this.nextTickFunc != null;
    }
  }]);

  return Timer;
}();
var TimerS =
/*#__PURE__*/
function (_Timer) {
  _inherits(TimerS, _Timer);

  function TimerS(interval_decimal, func) {
    var maxCallCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    _classCallCheck(this, TimerS);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimerS).call(this, interval_decimal * 1000, func, maxCallCount));
  }

  return TimerS;
}(Timer);
var funcLastScheduledRunTimes = {};
function BufferAction() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
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

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsVector2iShape", function() { return IsVector2iShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2i", function() { return Vector2i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsVector3iShape", function() { return IsVector3iShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector3i", function() { return Vector3i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsVRectShape", function() { return IsVRectShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRect", function() { return VRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBounds", function() { return VBounds; });
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Vector2i_1, Vector3i_1, VRect_1;



function IsNullOrNaN(value) {
  return value === null || Object(___WEBPACK_IMPORTED_MODULE_1__["IsNaN"])(value);
}

function IsVector2iShape(obj) {
  return obj.hasOwnProperty("x") && obj.hasOwnProperty("y");
}

var Vector2i = Vector2i_1 =
/*#__PURE__*/
function () {
  function Vector2i() {
    _classCallCheck(this, Vector2i);

    var x = 0,
        y = 0;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] == "number") {
      x = args[0];
      y = args[1];
    } else if (args[0] && args[0].x != null) {
      var _ref = [args[0].x, args[0].y];
      x = _ref[0];
      y = _ref[1];
    } else if (args[0] && args[0].left != null) {
      var _ref2 = [args[0].left, args[0].top];
      x = _ref2[0];
      y = _ref2[1];
    }

    Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(!IsNullOrNaN(x) && !IsNullOrNaN(y), "Cannot initialize Vector2i's x/y to null/NaN. (if needed, initialize to undefined)");
    this.x = x;
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
    key: "Plus",
    value: function Plus() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _ref3 = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args,
          _ref4 = _slicedToArray(_ref3, 2),
          x = _ref4[0],
          y = _ref4[1];

      return new Vector2i_1(this.x + x, this.y + y);
    }
  }, {
    key: "Minus",
    value: function Minus() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var _ref5 = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args,
          _ref6 = _slicedToArray(_ref5, 2),
          x = _ref6[0],
          y = _ref6[1];

      return new Vector2i_1(this.x - x, this.y - y);
    }
  }, {
    key: "Times",
    value: function Times() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var _ref7 = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args.length == 1 ? [args[0], args[0]] : args,
          _ref8 = _slicedToArray(_ref7, 2),
          x = _ref8[0],
          y = _ref8[1];

      return new Vector2i_1(this.x * x, this.y * y);
    }
  }, {
    key: "DividedBy",
    value: function DividedBy() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var _ref9 = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args.length == 1 ? [args[0], args[0]] : args,
          _ref10 = _slicedToArray(_ref9, 2),
          x = _ref10[0],
          y = _ref10[1];

      return new Vector2i_1(this.x / x, this.y / y);
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

Vector2i = Vector2i_1 = __decorate([_General__WEBPACK_IMPORTED_MODULE_0__["Global"]], Vector2i);

function IsVector3iShape(obj) {
  return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("z");
}

var Vector3i = Vector3i_1 =
/*#__PURE__*/
function () {
  function Vector3i() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Vector3i);

    Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(z), "Cannot initialize Vector3i's x/y/z to null/NaN. (if needed, initialize to undefined)");
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
  }, {
    key: "Minus",
    value: function Minus() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      var _ref11 = IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args,
          _ref12 = _slicedToArray(_ref11, 3),
          x = _ref12[0],
          y = _ref12[1],
          z = _ref12[2];

      return new Vector3i_1(this.x - x, this.y - y, this.z - z);
    }
  }, {
    key: "Plus",
    value: function Plus() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      var _ref13 = IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args,
          _ref14 = _slicedToArray(_ref13, 3),
          x = _ref14[0],
          y = _ref14[1],
          z = _ref14[2];

      return new Vector3i_1(this.x + x, this.y + y, this.z + z);
    }
  }, {
    key: "Times",
    value: function Times() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      var _ref15 = IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args.length == 1 ? [args[0], args[0], args[0]] : args,
          _ref16 = _slicedToArray(_ref15, 3),
          x = _ref16[0],
          y = _ref16[1],
          z = _ref16[2];

      return new Vector3i_1(this.x * x, this.y * y, this.z * z);
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

Vector3i = Vector3i_1 = __decorate([_General__WEBPACK_IMPORTED_MODULE_0__["Global"]], Vector3i);

function IsVRectShape(obj) {
  return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("width") && obj.hasOwnProperty("height");
}

var VRect = VRect_1 =
/*#__PURE__*/
function () {
  function VRect() {
    _classCallCheck(this, VRect);

    var x, y, width, height, y0IsBottom;

    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    if (args.length == 2 || args.length == 3) {
      var _ref17 = [args[0].x, args[0].y, args[1].x, args[1].y, args[2]];
      x = _ref17[0];
      y = _ref17[1];
      width = _ref17[2];
      height = _ref17[3];
      y0IsBottom = _ref17[4];
    } else {
      x = args[0];
      y = args[1];
      width = args[2];
      height = args[3];
      y0IsBottom = args[4];
    }

    Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(width) && !IsNullOrNaN(height), "Cannot initialize VRect's x/y/width/height to null/NaN. (if needed, initialize to undefined)");
    this.x = x;
    this.y = y;
    this.width = width != null ? width : 0;
    this.height = height != null ? height : 0; //this.y0IsBottom = y0IsBottom != null ? y0IsBottom : false;

    if (y0IsBottom) this.y0IsBottom = y0IsBottom;
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
      return this.Clone().VSet({
        x: valOrFunc instanceof Function ? valOrFunc(this.x) : valOrFunc
      });
    }
  }, {
    key: "NewLeft",
    value: function NewLeft(valOrFunc) {
      return this.Clone().VSet({
        Left: valOrFunc instanceof Function ? valOrFunc(this.Left) : valOrFunc
      });
    }
  }, {
    key: "NewRight",
    value: function NewRight(valOrFunc) {
      return this.Clone().VSet({
        Right: valOrFunc instanceof Function ? valOrFunc(this.Right) : valOrFunc
      });
    }
  }, {
    key: "NewY",
    value: function NewY(valOrFunc) {
      return this.Clone().VSet({
        y: valOrFunc instanceof Function ? valOrFunc(this.y) : valOrFunc
      });
    }
  }, {
    key: "NewBottom",
    value: function NewBottom(valOrFunc) {
      return this.Clone().VSet({
        Bottom: valOrFunc instanceof Function ? valOrFunc(this.Bottom) : valOrFunc
      });
    }
  }, {
    key: "NewTop",
    value: function NewTop(valOrFunc) {
      return this.Clone().VSet({
        Top: valOrFunc instanceof Function ? valOrFunc(this.Top) : valOrFunc
      });
    }
  }, {
    key: "NewWidth",
    value: function NewWidth(valOrFunc) {
      return this.Clone().VSet({
        width: valOrFunc instanceof Function ? valOrFunc(this.width) : valOrFunc
      });
    }
  }, {
    key: "NewHeight",
    value: function NewHeight(valOrFunc) {
      return this.Clone().VSet({
        height: valOrFunc instanceof Function ? valOrFunc(this.height) : valOrFunc
      });
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
      return this.Right > other.Left && this.Left < other.Right && this.Bottom > other.Top && this.Top < other.Bottom;
    }
    /** Returns true if rect would intersect the other, when wrapped to the 2/8 potential "other-sides" of given frame/backdrop. (-x, +x, -y, +y, -x -y, -x +y, +x -y, +x +y)
     * (note that it does the checks "stupidly", ie. just checking all possible switch-side variants, without checking if "switched side" version is actually on or even near the actual frame/backdrop) */

  }, {
    key: "Intersects_Advanced",
    value: function Intersects_Advanced(other, options) {
      var variantsToCompare = [this];

      if (options.xWrappedBy) {
        variantsToCompare.push.apply(variantsToCompare, _toConsumableArray(variantsToCompare.SelectMany(function (base) {
          return [base, base.NewX(function (x) {
            return x - options.xWrappedBy;
          }), base.NewX(function (x) {
            return x + options.xWrappedBy;
          })];
        })));
      }

      if (options.yWrappedBy) {
        variantsToCompare.push.apply(variantsToCompare, _toConsumableArray(variantsToCompare.SelectMany(function (base) {
          return [base, base.NewY(function (y) {
            return y - options.yWrappedBy;
          }), base.NewY(function (y) {
            return y + options.yWrappedBy;
          })];
        })));
      }

      return variantsToCompare.Any(function (a) {
        return a.Intersects(other);
      });
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
      if (this.y0IsBottom) {
        var oldTop = this.Top;
        this.y = val;
        this.Top = oldTop;
      } else {
        this.height = val - this.y;
      }
    }
  }, {
    key: "Top",
    get: function get() {
      return this.y0IsBottom ? this.y + this.height : this.y;
    },
    set: function set(val) {
      if (this.y0IsBottom) {
        this.height = val - this.y;
      } else {
        var oldBottom = this.Bottom;
        this.y = val;
        this.Bottom = oldBottom;
      }
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
    },
    set: function set(val) {
      var offset = val.Minus(this.Center);
      this.Position = this.Position.Plus(offset);
    }
  }], [{
    key: "FromLTWH",
    value: function FromLTWH(rect) {
      var y0IsBottom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return new VRect_1(rect.left, rect.top, rect.width, rect.height, y0IsBottom);
    }
  }]);

  return VRect;
}();

VRect = VRect_1 = __decorate([_General__WEBPACK_IMPORTED_MODULE_0__["Global"]], VRect);


var VBounds =
/*#__PURE__*/
function () {
  function VBounds(position, size) {
    _classCallCheck(this, VBounds);

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

VBounds = __decorate([_General__WEBPACK_IMPORTED_MODULE_0__["Global"]], VBounds);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToAbsoluteUrl", function() { return ToAbsoluteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumpToHash", function() { return JumpToHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentURLString", function() { return GetCurrentURLString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUrlParts", function() { return GetUrlParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VURL", function() { return VURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryVar", function() { return QueryVar; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function ToAbsoluteUrl(url) {
  // Handle absolute URLs (with protocol-relative prefix)
  // Example: //domain.com/file.png
  if (url.search(/^\/\//) != -1) {
    return window.location.protocol + url;
  } // Handle absolute URLs (with explicit origin)
  // Example: http://domain.com/file.png


  if (url.search(/:\/\//) != -1) {
    return url;
  } // Handle absolute URLs (without explicit origin)
  // Example: /file.png


  if (url.search(/^\//) != -1) {
    return window.location.origin + url;
  } // Handle relative URLs
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
  } //if (urlToProcess.Matches("/").length == )


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
      if (!_iteratorNormalCompletion && _iterator.return != null) {
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


var VURL =
/*#__PURE__*/
function () {
  _createClass(VURL, [{
    key: "ToLocationObject",
    // doesn't supply all the properties of a Location object, but supplies the most common
    value: function ToLocationObject() {
      return {
        pathname: this.toString({
          domain: false,
          path: true,
          queryVars: false,
          hash: false
        }),
        search: this.toString({
          domain: false,
          pathStartSlash: false,
          path: false,
          queryVars: true,
          hash: false
        }),
        hash: this.toString({
          domain: false,
          pathStartSlash: false,
          path: false,
          queryVars: false,
          hash: true
        }),
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
    key: "FromLocationObject",
    value: function FromLocationObject(location) {
      // todo: have this support all Location properties, not just those used by connected-react-router
      var result = VURL.Parse(location ? (location.pathname || "") + (location.search || "") + (location.hash || "") : ""); //if (normalize) result = result.Normalized();

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
      } // path-nodes


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
      options = Object(___WEBPACK_IMPORTED_MODULE_0__["E"])({
        domain: true,
        domain_protocol: true,
        pathStartSlash: "auto",
        path: true,
        queryVars: true,
        hash: true
      }, options);
      var result = ""; // domain

      if (options.domain) result += this.DomainStr(options.domain_protocol); //if (options.forceSlashAfterDomain || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash))

      var pathStartSlash_auto = result.length == 0 || options.path && this.pathNodes.length || options.queryVars && this.queryVars.length || options.hash && this.hash;
      var pathStartSlash = options.pathStartSlash == true || options.pathStartSlash == "auto" && pathStartSlash_auto;

      if (pathStartSlash) {
        result += "/";
      }

      if (options.path) result += this.PathStr(false);
      if (options.queryVars) result += this.QueryStr;
      if (options.hash) result += this.HashStr;
      Object(___WEBPACK_IMPORTED_MODULE_0__["Assert"])(!result.startsWith("//"), "URL toString() result cannot start with \"//\". (it's probably an error)");
      return result;
    }
  }, {
    key: "toString_OptIn",
    value: function toString_OptIn(options) {
      options = Object(___WEBPACK_IMPORTED_MODULE_0__["E"])({
        domain: false,
        path: false,
        queryVars: false,
        hash: false
      }, options);
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
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
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

var QueryVar =
/*#__PURE__*/
function () {
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
}(); // todo: merge this functionality into the URL class

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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storages", function() { return storages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStorageForCachedTransform", function() { return GetStorageForCachedTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachedTransform", function() { return CachedTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineDynamicPropMaps", function() { return CombineDynamicPropMaps; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hasOwnProperty = Object.prototype.hasOwnProperty; // Performs equality by iterating through keys on an object and returning false when any key has values which are not strictly equal between the arguments.
// Returns true when the values of all keys are strictly equal.

function shallowEqual(objA, objB) {
  if (Object.is(objA, objB)) return true;
  if (_typeof(objA) !== 'object' || objA === null || _typeof(objB) !== 'object' || objB === null) return false;
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false; // test for A's keys different from B

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

var Storage = function Storage() {
  _classCallCheck(this, Storage);
};
var storages = {};
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

  for (var _len = arguments.length, maps = new Array(_len), _key = 0; _key < _len; _key++) {
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
      if (!_iteratorNormalCompletion && _iterator.return != null) {
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BridgeMessage", function() { return BridgeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bridge", function() { return Bridge; });
/* harmony import */ var _Timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



var BridgeMessage = function BridgeMessage(initialData) {
  _classCallCheck(this, BridgeMessage);

  this.Extend(initialData);
};
/*export class Bridge_Options {
    receiveChannelMessageFunc_adder: (receiveDataFunc: (channelMessage: string | Object)=>any)=>any;
    receiveChannelMessageFunc_addImmediately? = true;
    sendChannelMessageFunc: (channelMessage: string | Object)=>any;
    channel_wrapBridgeMessage? = true;
    channel_stringifyChannelMessageObj? = true;
    channel_safeCallbacks? = false;
}*/

var Bridge =
/*#__PURE__*/
function () {
  /** Don't worry about having to discard some calls before receiveTextFunc receives it. We automatically discard entries that aren't valid bridge-messages. */
  function Bridge(options) {
    _classCallCheck(this, Bridge);

    /** Useful to ensure we ignore non-jsve-bridge messages. (the channel might be used by other systems as well) */
    this.channel_wrapBridgeMessage = true;
    /** Needed if the channel only supports strings being sent/received. */

    this.channel_stringifyChannelMessageObj = true;
    /** Needed if the channel has >2 members; makes-so call-ids are random-numbers, and are filtered by each member to just the ones it knows it initiated. */

    this.channel_safeCallbacks = false; // for receiving function-calls (and callbacks) from external bridge
    // ==========

    this.functions = {};
    this.ignoreMissingFunctions = false; // for sending function-calls to external bridge
    // ==========

    this.lastCallID = -1;
    this.callCallbacks = {};
    this.Extend(options.Excluding("receiveChannelMessageFunc_addImmediately"));
    if (options.receiveChannelMessageFunc_addImmediately != false) this.SetUpReceiver();
  } // low level data-transfer
  // ==========


  _createClass(Bridge, [{
    key: "SetUpReceiver",
    value: function SetUpReceiver() {
      var _this = this;

      // add our own receive-text-func right now
      this.receiveChannelMessageFunc = function (channelMessage) {
        var channelMessageObj;
        if (_this.channel_stringifyChannelMessageObj && Object(___WEBPACK_IMPORTED_MODULE_1__["IsString"])(channelMessage)) channelMessageObj = Object(_Timers__WEBPACK_IMPORTED_MODULE_0__["TryCall"])(function () {
          return Object(___WEBPACK_IMPORTED_MODULE_1__["FromJSON"])(channelMessage);
        }) || {};
        if (!_this.channel_stringifyChannelMessageObj && Object(___WEBPACK_IMPORTED_MODULE_1__["IsObject"])(channelMessage)) channelMessageObj = channelMessage;
        var bridgeMessage = _this.channel_wrapBridgeMessage ? channelMessageObj && channelMessageObj["JSVE_Bridge_message"] : channelMessageObj;
        if (!Object(___WEBPACK_IMPORTED_MODULE_1__["IsObject"])(bridgeMessage)) return;
        if (bridgeMessage.functionCall_name) _this.OnReceiveFunctionCall(bridgeMessage);
        if (bridgeMessage.callback_callID != null) _this.OnReceiveCallback(bridgeMessage);
      };

      this.receiveChannelMessageFunc_adder(this.receiveChannelMessageFunc);
    }
  }, {
    key: "SendBridgeMessage",
    value: function SendBridgeMessage(bridgeMessage) {
      var channelMessageObj = this.channel_wrapBridgeMessage ? {
        JSVE_Bridge_message: bridgeMessage
      } : bridgeMessage;
      var channelMessage = this.channel_stringifyChannelMessageObj ? Object(___WEBPACK_IMPORTED_MODULE_1__["ToJSON"])(channelMessageObj) : channelMessageObj;
      this.sendChannelMessageFunc(channelMessage);
    }
  }, {
    key: "RegisterFunction",
    value: function RegisterFunction(name, func) {
      if (this.functions[name]) throw new Error("Cannot register the same function-name twice: \"".concat(name, "\""));
      this.functions[name] = func;
    }
  }, {
    key: "UnregisterFunction",
    value: function UnregisterFunction(name) {
      delete this.functions[name];
    }
  }, {
    key: "OnReceiveFunctionCall",
    value: function OnReceiveFunctionCall(bridgeMessage) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var result, responseBridgeMessage;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.CallInternal.apply(this, [bridgeMessage.functionCall_name].concat(_toConsumableArray(bridgeMessage.functionCall_args)));

              case 2:
                result = _context.sent;
                responseBridgeMessage = new BridgeMessage({
                  callback_callID: bridgeMessage.functionCall_callID,
                  callback_result: result
                });
                this.SendBridgeMessage(responseBridgeMessage);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    } // we use async/await here, to support waiting for the registered function if it happens to be async (if it isn't, that's fine -- the async/await doesn't hurt anything)

  }, {
    key: "CallInternal",
    value: function CallInternal(funcName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var func;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                func = this.functions[funcName];

                if (!(this.ignoreMissingFunctions && func == null)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(func, "Cannot find function \"".concat(funcName, "\"."));
                _context2.next = 6;
                return func.apply(void 0, args);

              case 6:
                return _context2.abrupt("return", _context2.sent);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "OnReceiveCallback",
    value: function OnReceiveCallback(bridgeMessage) {
      var callback = this.callCallbacks[bridgeMessage.callback_callID];

      if (callback == null) {
        if (this.channel_safeCallbacks) return;
        Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(false, "Cannot find callback for call-id ".concat(bridgeMessage.callback_callID, "!"));
      }

      callback(bridgeMessage.callback_result);
    }
  }, {
    key: "Call",
    value: function Call(funcName) {
      var _this2 = this;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return new Promise(function (resolve, reject) {
        var callID = _this2.channel_safeCallbacks ? Math.random() : _this2.lastCallID + 1;
        _this2.lastCallID = callID;
        var bridgeMessage = new BridgeMessage({
          functionCall_callID: callID,
          functionCall_name: funcName,
          functionCall_args: args
        });

        _this2.SendBridgeMessage(bridgeMessage);

        _this2.callCallbacks[callID] = resolve;
      });
    }
  }]);

  return Bridge;
}();

/***/ })
/******/ ]);
});