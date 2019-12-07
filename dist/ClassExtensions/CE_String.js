"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var CE_Array_1 = require("./CE_Array");
var General_1 = require("../Utils/General");
exports.StringCE_funcs = {
    TrimStart: function () {
        // fix for if called by VDF (which has a different signature)
        //if (arguments[0] instanceof Array) chars = arguments[0];
        var chars = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            chars[_i] = arguments[_i];
        }
        for (var iOfFirstToKeep = 0; iOfFirstToKeep < this.length && CE_Array_1.ArrayCE(chars).Contains(this[iOfFirstToKeep]); iOfFirstToKeep++)
            ;
        return this.slice(iOfFirstToKeep, this.length);
    },
    TrimEnd: function () {
        var chars = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            chars[_i] = arguments[_i];
        }
        for (var iOfLastToKeep = this.length - 1; iOfLastToKeep >= 0 && CE_Array_1.ArrayCE(chars).Contains(this[iOfLastToKeep]); iOfLastToKeep--)
            ;
        return this.substr(0, iOfLastToKeep + 1);
    },
    Contains: function (str, startIndex) {
        return this.indexOf(str, startIndex) !== -1;
    },
    hashCode: function () {
        var hash = 0;
        for (var i = 0; i < this.length; i++) {
            var char = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // convert to 32-bit integer
        }
        return hash;
    },
    Matches: function (strOrRegex) {
        if (typeof strOrRegex == "string") {
            var str = strOrRegex;
            var result_1 = [];
            var lastMatchIndex = -1;
            while (true) {
                var matchIndex = this.indexOf(str, lastMatchIndex + 1);
                if (matchIndex == -1)
                    break; // if another match was not found
                result_1.push({ index: matchIndex });
                lastMatchIndex = matchIndex;
            }
            return result_1;
        }
        var regex = strOrRegex;
        if (!regex.global) {
            throw new Error("Regex must have the 'g' flag added. (otherwise an infinite loop occurs)"); // todo: make alternate solution, like setting flag ourselves
        }
        var result = [];
        var match;
        while (match = regex.exec(this)) {
            result.push(match);
        }
        return result;
    },
    /*matches_group(regex, /*o:*#/ groupIndex) {
        if (!regex.global)
            throw new Error("Regex must have the 'g' flag added. (otherwise an infinite loop occurs)");

        groupIndex = groupIndex || 0; // default to the first capturing group
        var matches = [];
        var match;
        while (match = regex.exec(this))
            matches.push(match[groupIndex]);
        return matches;
    }*/
    /** indexX is 0-based */
    IndexOf_X: function (str, indexX) {
        var currentPos = -1;
        for (var i = 0; i <= indexX; i++) {
            var subIndex = this.indexOf(str, currentPos + 1);
            if (subIndex == -1)
                return -1; // no such xth index
            currentPos = subIndex;
        }
        return currentPos;
    },
    /** indexFromLastX is 0-based */
    IndexOf_XFromLast: function (str, indexFromLastX) {
        var currentPos = (this.length - str.length) + 1; // index just after the last-index-where-match-could-occur
        for (var i = 0; i <= indexFromLastX; i++) {
            var subIndex = this.lastIndexOf(str, currentPos - 1);
            if (subIndex == -1)
                return -1; // no such xth index
            currentPos = subIndex;
        }
        return currentPos;
    },
    IndexOfAny: function () {
        var e_1, _a;
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        var lowestIndex = -1;
        try {
            for (var strings_1 = __values(strings), strings_1_1 = strings_1.next(); !strings_1_1.done; strings_1_1 = strings_1.next()) {
                var str = strings_1_1.value;
                var indexOfChar = this.indexOf(str);
                if (indexOfChar != -1 && (indexOfChar < lowestIndex || lowestIndex == -1))
                    lowestIndex = indexOfChar;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (strings_1_1 && !strings_1_1.done && (_a = strings_1.return)) _a.call(strings_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return lowestIndex;
    },
    LastIndexOfAny: function () {
        var e_2, _a;
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        var highestIndex = -1;
        try {
            for (var strings_2 = __values(strings), strings_2_1 = strings_2.next(); !strings_2_1.done; strings_2_1 = strings_2.next()) {
                var str = strings_2_1.value;
                var indexOfChar = this.lastIndexOf(str);
                if (indexOfChar > highestIndex)
                    highestIndex = indexOfChar;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (strings_2_1 && !strings_2_1.done && (_a = strings_2.return)) _a.call(strings_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return highestIndex;
    },
    StartsWithAny: function () {
        var _this = this;
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        return CE_Array_1.ArrayCE(strings).Any(function (str) { return _this.startsWith(str); });
    },
    EndsWithAny: function () {
        var _this = this;
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        return CE_Array_1.ArrayCE(strings).Any(function (str) { return _this.endsWith(str); });
    },
    ContainsAny: function () {
        var _this = this;
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        return CE_Array_1.ArrayCE(strings).Any(function (str) { return exports.StringCE(_this).Contains(str); });
    },
    /** Separator-strings must be escaped. (they're passed into a regular-expression) */
    SplitByAny: function () {
        var separators = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            separators[_i] = arguments[_i];
        }
        /*var splitStr = "/";
        for (let sep of separators)
            splitStr += (splitStr.length > 1 ? "|" : "") + sep;
        splitStr += "/";
        return this.split(splitStr);*/
        var regex = new RegExp(separators.map(function (a) { return "\\" + a; }).join("|"));
        return this.split(regex);
    },
    SplitAt: function (index, includeCharAtIndex) {
        if (includeCharAtIndex === void 0) { includeCharAtIndex = false; }
        if (index == -1) // if no split-index, pass source-string as part2 (makes more sense for paths and such)
            return ["", this];
        var part1 = this.substr(0, index);
        var part2 = includeCharAtIndex ? this.substr(index) : this.substr(index + 1);
        return [part1, part2];
    },
    Splice: function (index, removeCount, insert) {
        return this.slice(0, index) + insert + this.slice(index + Math.abs(removeCount));
    },
    Indent: function (indentCount) {
        var indentStr = "\t".repeat(indentCount);
        return this.replace(/^|(\n)/g, "$1" + indentStr);
    },
    KeepAtMost: function (maxLength, moreMarkerStr) {
        if (moreMarkerStr === void 0) { moreMarkerStr = "..."; }
        if (this.length <= maxLength)
            return this;
        return this.substr(0, maxLength - moreMarkerStr.length) + moreMarkerStr;
    },
    // for firebase entry keys
    /*interface String { readonly KeyToInt: number; }
    String.prototype._AddGetter_Inline = function KeyToInt() {
        return parseInt((this as string).substr(1));
    }
    interface Number { readonly IntToKey: string; }
    Number.prototype._AddGetter_Inline = function IntToKey() {
        return "e" + this;
    }*/
    /** Creates a function from "func", setting its name to the "this" string's value. */
    Func: function (func) {
        func.SetName(this);
        return func;
    },
    // special; creates a function with the given name, but also caches it per caller-line,
    //   so every call from that line returns the same function instance
    // REMOVED, because: we need to create new funcs to capture new closure values
    /*var oneFuncCache = {};
    OneFunc(func) {
        var funcName = this;
        var callerLineStr = new Error().stack.split("\n")[3];
        var funcKey = `${funcName}@${callerLineStr}`;
        if (oneFuncCache[funcKey] == null) {
            func.SetName(this);
            //func.cached = true;
            oneFuncCache[funcKey] = func;
        }
        return oneFuncCache[funcKey];
    }*/
    /**
     * Reformats a multi-line string to represent the actual intended "block" of text.
     * @param desiredIndent How much to indent each line. (after removal of the first-non-empty-line indent-length from each of them)
     * @param removeLineStr A special string which, if found in a line, will cause that line to be removed from the result.
     */
    AsMultiline: function (desiredIndent, removeLineStr) {
        if (desiredIndent === void 0) { desiredIndent = null; }
        if (removeLineStr === void 0) { removeLineStr = "@RL"; }
        var result = this.substring(this.indexOf("\n") + 1, this.lastIndexOf("\n"));
        if (desiredIndent != null) {
            var firstLineIndent_1 = (result.match(/^\t+/) || [""])[0].length;
            if (firstLineIndent_1) {
                var lines = result.split("\n");
                // remove X tabs from start of each line (where X is firstLineIndent)
                lines = lines.map(function (line) { return line.replace(new RegExp("^\t{0," + firstLineIndent_1 + "}"), ""); });
                // add the desired indent
                lines = lines.map(function (line) { return "\t".repeat(desiredIndent) + line; });
                // filter out lines with the special remove-line string
                lines = lines.filter(function (a) { return !a.includes(removeLineStr); });
                result = lines.join("\n");
            }
        }
        return result;
    },
    Substring: function (start, end) {
        if (end < 0)
            end = this.length + end;
        return this.substring(start, end);
    },
    ToInt: function () { return parseInt(Number(this) + ""); },
    ToFloat: function () { return Number(this); },
};
exports.StringCE = General_1.CreateProxyForClassExtensions(exports.StringCE_funcs);
exports.StringCES = General_1.WithFuncsStandalone(exports.StringCE_funcs);
//# sourceMappingURL=CE_String.js.map