import { CreateWrapperForClassExtensions, ArrayCE } from "..";
export class StringCEClass extends String {
    TrimStart(...chars) {
        // fix for if called by VDF (which has a different signature)
        //if (arguments[0] instanceof Array) chars = arguments[0];
        for (var iOfFirstToKeep = 0; iOfFirstToKeep < this.length && ArrayCE(chars).Contains(this[iOfFirstToKeep]); iOfFirstToKeep++)
            ;
        return this.slice(iOfFirstToKeep, this.length);
    }
    TrimEnd(...chars) {
        for (var iOfLastToKeep = this.length - 1; iOfLastToKeep >= 0 && ArrayCE(chars).Contains(this[iOfLastToKeep]); iOfLastToKeep--)
            ;
        return this.substr(0, iOfLastToKeep + 1);
    }
    Contains(str, startIndex) {
        return this.indexOf(str, startIndex) !== -1;
    }
    hashCode() {
        var hash = 0;
        for (var i = 0; i < this.length; i++) {
            var char = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // convert to 32-bit integer
        }
        return hash;
    }
    Matches(strOrRegex) {
        if (typeof strOrRegex == "string") {
            let str = strOrRegex;
            let result = [];
            let lastMatchIndex = -1;
            while (true) {
                let matchIndex = this.indexOf(str, lastMatchIndex + 1);
                if (matchIndex == -1)
                    break; // if another match was not found
                result.push({ index: matchIndex });
                lastMatchIndex = matchIndex;
            }
            return result;
        }
        let regex = strOrRegex;
        if (!regex.global) {
            throw new Error("Regex must have the 'g' flag added. (otherwise an infinite loop occurs)"); // todo: make alternate solution, like setting flag ourselves
        }
        let result = [];
        let match;
        while (match = regex.exec(this)) {
            result.push(match);
        }
        return result;
    }
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
    IndexOf_X(str, indexX) {
        var currentPos = -1;
        for (var i = 0; i <= indexX; i++) {
            var subIndex = this.indexOf(str, currentPos + 1);
            if (subIndex == -1)
                return -1; // no such xth index
            currentPos = subIndex;
        }
        return currentPos;
    }
    /** indexFromLastX is 0-based */
    IndexOf_XFromLast(str, indexFromLastX) {
        var currentPos = (this.length - str.length) + 1; // index just after the last-index-where-match-could-occur
        for (var i = 0; i <= indexFromLastX; i++) {
            var subIndex = this.lastIndexOf(str, currentPos - 1);
            if (subIndex == -1)
                return -1; // no such xth index
            currentPos = subIndex;
        }
        return currentPos;
    }
    IndexOfAny(...strings) {
        var lowestIndex = -1;
        for (let str of strings) {
            var indexOfChar = this.indexOf(str);
            if (indexOfChar != -1 && (indexOfChar < lowestIndex || lowestIndex == -1))
                lowestIndex = indexOfChar;
        }
        return lowestIndex;
    }
    LastIndexOfAny(...strings) {
        var highestIndex = -1;
        for (let str of strings) {
            var indexOfChar = this.lastIndexOf(str);
            if (indexOfChar > highestIndex)
                highestIndex = indexOfChar;
        }
        return highestIndex;
    }
    StartsWithAny(...strings) {
        return ArrayCE(strings).Any(str => this.startsWith(str));
    }
    EndsWithAny(...strings) {
        return ArrayCE(strings).Any(str => this.endsWith(str));
    }
    ContainsAny(...strings) {
        return ArrayCE(strings).Any(str => StringCE(this).Contains(str));
    }
    /** Separator-strings must be escaped. (they're passed into a regular-expression) */
    SplitByAny(...separators) {
        /*var splitStr = "/";
        for (let sep of separators)
            splitStr += (splitStr.length > 1 ? "|" : "") + sep;
        splitStr += "/";
        return this.split(splitStr);*/
        let regex = new RegExp(separators.map(a => `\\${a}`).join("|"));
        return this.split(regex);
    }
    SplitAt(index, includeCharAtIndex = false) {
        if (index == -1) // if no split-index, pass source-string as part2 (makes more sense for paths and such)
            return ["", this];
        let part1 = this.substr(0, index);
        let part2 = includeCharAtIndex ? this.substr(index) : this.substr(index + 1);
        return [part1, part2];
    }
    Splice(index, removeCount, insert) {
        return this.slice(0, index) + insert + this.slice(index + Math.abs(removeCount));
    }
    Indent(indentCount) {
        var indentStr = "\t".repeat(indentCount);
        return this.replace(/^|(\n)/g, "$1" + indentStr);
    }
    KeepAtMost(maxLength, moreMarkerStr = "...") {
        if (this.length <= maxLength)
            return this;
        return this.substr(0, maxLength - moreMarkerStr.length) + moreMarkerStr;
    }
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
    Func(func) {
        func.SetName(this);
        return func;
    }
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
    AsMultiline(desiredIndent = null, removeLineStr = "@RL") {
        let result = this.substring(this.indexOf("\n") + 1, this.lastIndexOf("\n"));
        if (desiredIndent != null) {
            let firstLineIndent = (result.match(/^\t+/) || [""])[0].length;
            if (firstLineIndent) {
                let lines = result.split("\n");
                // remove X tabs from start of each line (where X is firstLineIndent)
                lines = lines.map(line => line.replace(new RegExp(`^\t{0,${firstLineIndent}}`), ""));
                // add the desired indent
                lines = lines.map(line => "\t".repeat(desiredIndent) + line);
                // filter out lines with the special remove-line string
                lines = lines.filter(a => !a.includes(removeLineStr));
                result = lines.join("\n");
            }
        }
        return result;
    }
    Substring(start, end) {
        if (end < 0)
            end = this.length + end;
        return this.substring(start, end);
    }
    ToInt() { return parseInt(Number(this) + ""); }
    ToFloat() { return Number(this); }
}
//export const StringCE = WithFuncsStandalone(StringCEClass.prototype);
export const StringCE = CreateWrapperForClassExtensions(StringCEClass);
//# sourceMappingURL=CE_String.js.map