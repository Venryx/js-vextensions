"use strict";
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
var __1 = require("..");
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
exports.ToAbsoluteUrl = ToAbsoluteUrl;
function JumpToHash(hashStr) {
    var url = location.href; // Save down the URL without hash.
    location.href = "#" + hashStr; // Go to the target element.
    history.replaceState(null, null, url); // Don't like hashes. Changing it back.
    //document.getElementById(hashStr).scrollIntoView(); //Even IE6 supports this
}
exports.JumpToHash = JumpToHash;
/** Returns [domainStr, pathStr, varsStr, hashStr], without the separator-chars. */
function GetCurrentURLString() {
    return window.location.href.replace(/%22/, "\"");
}
exports.GetCurrentURLString = GetCurrentURLString;
function GetUrlParts(url) {
    var _a, _b, _c;
    url = url || GetCurrentURLString();
    var _d = __read(Array(4).fill(0).map(function (a) { return ""; }), 4), domainStr = _d[0], pathStr = _d[1], varsStr = _d[2], hashStr = _d[3];
    var urlToProcess = url;
    if (urlToProcess.includes("#") && !varsStr.includes("runJS=")) {
        _a = __read(__1.StringCE.SplitAt(urlToProcess, urlToProcess.indexOf("#")), 2), urlToProcess = _a[0], hashStr = _a[1];
    }
    if (urlToProcess.includes("?")) {
        _b = __read(__1.StringCE.SplitAt(urlToProcess, urlToProcess.indexOf("?")), 2), urlToProcess = _b[0], varsStr = _b[1];
    }
    //if (urlToProcess.Matches("/").length == )
    var splitAtSlash_pos = __1.NumberCE.IfN1Then(__1.StringCE.IndexOf_X(urlToProcess, "/", 2), urlToProcess.length);
    _c = __read(__1.StringCE.SplitAt(urlToProcess, splitAtSlash_pos), 2), domainStr = _c[0], pathStr = _c[1];
    return [domainStr, pathStr, varsStr, hashStr];
}
exports.GetUrlParts = GetUrlParts;
function GetUrlPath(url, fromDomain) {
    if (fromDomain === void 0) { fromDomain = true; }
    /*let [pathStr, varsStr, hashStr] = GetUrlParts(url);
    if (fromDomain)
        pathStr = pathStr.SplitAt(pathStr.IndexOf_X("/", 2).IfN1Then(pathStr.length))[1];
    if (pathStr.endsWith("/"))
        pathStr = pathStr.substr(0, pathStr.length - 1);*/
    var _a = __read(GetUrlParts(url), 2), _ = _a[0], pathStr = _a[1];
    if (pathStr.endsWith("/"))
        pathStr = pathStr.slice(0, -1);
    return pathStr;
}
function GetUrlVars(url, allowQuestionMarkAsVarSep) {
    var e_1, _a;
    if (allowQuestionMarkAsVarSep === void 0) { allowQuestionMarkAsVarSep = true; }
    var varSeparators = allowQuestionMarkAsVarSep ? ["&", "?"] : ["&"];
    var _b = __read(GetUrlParts(url), 3), _ = _b[0], __ = _b[1], varsStr = _b[2];
    var vars = {}; //{[key: string]: string};
    var parts = __1.StringCE.SplitByAny.apply(__1.StringCE, __spread([varsStr], varSeparators)).filter(function (a) { return a; });
    try {
        for (var parts_1 = __values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
            var part = parts_1_1.value;
            var _c = __read(__1.StringCE.SplitAt(part, part.indexOf("=")), 2), key = _c[0], value = _c[1];
            vars[key] = value;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (parts_1_1 && !parts_1_1.done && (_a = parts_1.return)) _a.call(parts_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return vars;
}
/*export function GetCurrentURL(fromAddressBar = false) {
    return fromAddressBar ? URL.Parse(GetCurrentURLString()) : URL.FromState(State("router"));
}*/
var VURL = /** @class */ (function () {
    function VURL(domain, pathNodes, queryVars, hash) {
        if (domain === void 0) { domain = ""; }
        if (pathNodes === void 0) { pathNodes = []; }
        if (queryVars === void 0) { queryVars = []; }
        if (hash === void 0) { hash = ""; }
        this.domain = domain;
        this.pathNodes = pathNodes;
        this.queryVars = queryVars;
        this.hash = hash;
    }
    VURL.Parse = function (urlStr, useCurrentDomainIfMissing, allowQuestionMarkAsVarSep) {
        if (useCurrentDomainIfMissing === void 0) { useCurrentDomainIfMissing = true; }
        if (allowQuestionMarkAsVarSep === void 0) { allowQuestionMarkAsVarSep = true; }
        if (useCurrentDomainIfMissing && !urlStr.startsWith("http"))
            urlStr = window.location.origin + (urlStr.startsWith("/") ? "" : "/") + urlStr;
        var _a = __read(GetUrlParts(urlStr), 4), domainStr = _a[0], pathStr = _a[1], varsStr = _a[2], hashStr = _a[3];
        var queryVarsMap = GetUrlVars(urlStr, allowQuestionMarkAsVarSep);
        var result = new VURL();
        result.domain = domainStr;
        result.pathNodes = pathStr.length ? pathStr.split("/") : [];
        for (var key in queryVarsMap) {
            result.queryVars.push(new QueryVar(key, queryVarsMap[key]));
        }
        result.hash = hashStr;
        return result;
    };
    VURL.FromLocationObject = function (location) {
        // todo: have this support all Location properties, not just those used by connected-react-router
        var result = VURL.Parse(location ? (location.pathname || "") + (location.search || "") + (location.hash || "") : "");
        //if (normalize) result = result.Normalized();
        return result;
    };
    // doesn't supply all the properties of a Location object, but supplies the most common
    VURL.prototype.ToLocationObject = function () {
        return {
            pathname: this.toString({ domain: false, path: true, queryVars: false, hash: false }),
            search: this.toString({ domain: false, pathStartSlash: false, path: false, queryVars: true, hash: false }),
            hash: this.toString({ domain: false, pathStartSlash: false, path: false, queryVars: false, hash: true }),
            key: "URLKey_" + Date.now(),
        };
    };
    VURL.prototype.DomainStr = function (withProtocol) {
        if (withProtocol === void 0) { withProtocol = true; }
        return withProtocol ? this.domain : this.DomainWithoutProtocol;
    };
    Object.defineProperty(VURL.prototype, "Protocol", {
        get: function () { return this.domain && __1.StringCE.Contains(this.domain, "://") ? this.domain.substr(0, this.domain.indexOf("://")) : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VURL.prototype, "DomainWithoutProtocol", {
        get: function () { return this.domain && __1.StringCE.Contains(this.domain, "://") ? this.domain.substr(this.domain.indexOf("://") + 3) : this.domain; },
        enumerable: true,
        configurable: true
    });
    VURL.prototype.PathStr = function (pathStartSlash) {
        var result = "";
        if (pathStartSlash) {
            result += "/";
        }
        // path-nodes
        if (this.pathNodes.length)
            result += this.pathNodes.join("/");
        return result;
    };
    Object.defineProperty(VURL.prototype, "QueryStr", {
        get: function () {
            var e_2, _a;
            var result = "";
            try {
                for (var _b = __values(this.queryVars.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), index = _d[0], queryVar = _d[1];
                    result += (index == 0 ? "?" : "&") + queryVar.name + "=" + queryVar.value;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    VURL.prototype.GetQueryVar = function (name) {
        var entry = this.queryVars.find(function (a) { return a.name == name; });
        return entry ? entry.value : undefined;
    };
    VURL.prototype.SetQueryVar = function (name, value) {
        var existingEntry = this.queryVars.find(function (a) { return a.name == name; });
        if (existingEntry) {
            existingEntry.value = value;
        }
        else {
            this.queryVars.push(new QueryVar(name, value));
        }
    };
    Object.defineProperty(VURL.prototype, "HashStr", {
        get: function () {
            if (!this.hash)
                return "";
            return "#" + this.hash;
        },
        enumerable: true,
        configurable: true
    });
    VURL.prototype.Clone = function () {
        return new VURL(this.domain, this.pathNodes.slice(), this.queryVars.map(function (a) { return a.Clone(); }), this.hash);
    };
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
    VURL.prototype.toString = function (options) {
        options = __1.E({ domain: true, domain_protocol: true, pathStartSlash: "auto", path: true, queryVars: true, hash: true }, options);
        var result = "";
        // domain
        if (options.domain)
            result += this.DomainStr(options.domain_protocol);
        //if (options.forceSlashAfterDomain || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash))
        var pathStartSlash_auto = result.length == 0 || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash);
        var pathStartSlash = options.pathStartSlash == true || (options.pathStartSlash == "auto" && pathStartSlash_auto);
        if (pathStartSlash) {
            result += "/";
        }
        if (options.path)
            result += this.PathStr(false);
        if (options.queryVars)
            result += this.QueryStr;
        if (options.hash)
            result += this.HashStr;
        __1.Assert(!result.startsWith("//"), "URL toString() result cannot start with \"//\". (it's probably an error)");
        return result;
    };
    VURL.prototype.toString_OptIn = function (options) {
        options = __1.E({ domain: false, path: false, queryVars: false, hash: false }, options);
        return this.toString(options);
    };
    return VURL;
}());
exports.VURL = VURL;
function AsPartial(obj) { return obj; }
var QueryVar = /** @class */ (function () {
    function QueryVar(name, value) {
        this.name = name;
        this.value = value;
    }
    QueryVar.prototype.Clone = function () {
        return new QueryVar(this.name, this.value);
    };
    return QueryVar;
}());
exports.QueryVar = QueryVar;
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
//# sourceMappingURL=URLs.js.map