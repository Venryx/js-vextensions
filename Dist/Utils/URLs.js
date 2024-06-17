import { NumberCE } from "../ClassExtensions/CE_Number.js";
import { StringCE } from "../ClassExtensions/CE_String.js";
import { Assert } from "./Assert.js";
import { E } from "./General.js";
// Note: It's fine to use `window` instead of `g` in the below, since it fails outside of browsers anyway.
export function ToAbsoluteUrl(url) {
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
export function JumpToHash(hashStr) {
    var url = location.href; // Save down the URL without hash.
    location.href = "#" + hashStr; // Go to the target element.
    history.replaceState(null, null, url); // Don't like hashes. Changing it back.
    //document.getElementById(hashStr).scrollIntoView(); //Even IE6 supports this
}
/** Returns [domainStr, pathStr, varsStr, hashStr], without the separator-chars. */
export function GetCurrentURLString() {
    return window.location.href.replace(/%22/, "\"");
}
export function GetUrlParts(url) {
    url = url || GetCurrentURLString();
    let [domainStr, pathStr, varsStr, hashStr] = Array(4).fill(0).map(a => "");
    let urlToProcess = url;
    if (urlToProcess.includes("#") && !varsStr.includes("runJS=")) {
        [urlToProcess, hashStr] = StringCE(urlToProcess).SplitAt(urlToProcess.indexOf("#"));
    }
    if (urlToProcess.includes("?")) {
        [urlToProcess, varsStr] = StringCE(urlToProcess).SplitAt(urlToProcess.indexOf("?"));
    }
    //if (urlToProcess.Matches("/").length == )
    let splitAtSlash_pos = NumberCE(StringCE(urlToProcess).IndexOf_X("/", 2)).IfN1Then(urlToProcess.length);
    [domainStr, pathStr] = StringCE(urlToProcess).SplitAt(splitAtSlash_pos);
    return [domainStr, pathStr, varsStr, hashStr];
}
function GetUrlPath(url, fromDomain = true) {
    /*let [pathStr, varsStr, hashStr] = GetUrlParts(url);
    if (fromDomain)
        pathStr = pathStr.SplitAt(pathStr.IndexOf_X("/", 2).IfN1Then(pathStr.length))[1];
    if (pathStr.endsWith("/"))
        pathStr = pathStr.substr(0, pathStr.length - 1);*/
    let [_, pathStr] = GetUrlParts(url);
    if (pathStr.endsWith("/"))
        pathStr = pathStr.slice(0, -1);
    return pathStr;
}
function GetUrlVars(url, allowQuestionMarkAsVarSep = true) {
    let varSeparators = allowQuestionMarkAsVarSep ? ["&", "?"] : ["&"];
    let [_, __, varsStr] = GetUrlParts(url);
    var vars = {}; //{[key: string]: string};
    var parts = StringCE(varsStr).SplitByAny(...varSeparators).filter(a => a);
    for (let part of parts) {
        let [key, value] = StringCE(part).SplitAt(part.indexOf("="));
        vars[key] = value;
    }
    return vars;
}
/*export function GetCurrentURL(fromAddressBar = false) {
    return fromAddressBar ? URL.Parse(GetCurrentURLString()) : URL.FromState(State("router"));
}*/
export class VURL {
    /** Note that this url-parser is not quite as robust as the native URL class, so some edge-cases may be misparsed. (using "VURL.Parse(new URL(urlStr).toString())" may improve reliability) */
    static Parse(urlStr, useCurrentDomainIfMissing = true, allowQuestionMarkAsVarSep = true) {
        if (useCurrentDomainIfMissing && !urlStr.startsWith("http")) {
            urlStr = window.location.origin + (urlStr.startsWith("/") ? "" : "/") + urlStr;
        }
        let [domainStr, pathStr, varsStr, hashStr] = GetUrlParts(urlStr);
        let queryVarsMap = GetUrlVars(urlStr, allowQuestionMarkAsVarSep);
        let result = new VURL();
        result.domain = domainStr;
        result.pathNodes = pathStr.length ? pathStr.split("/") : [];
        for (let key of Object.keys(queryVarsMap)) {
            result.queryVars.push(new QueryVar(key, queryVarsMap[key]));
        }
        result.hash = hashStr;
        return result;
    }
    static FromLocationObject(location) {
        // todo: have this support all Location properties, not just those used by connected-react-router
        let result = VURL.Parse(location ? (location.pathname || "") + (location.search || "") + (location.hash || "") : "");
        //if (normalize) result = result.Normalized();
        return result;
    }
    // doesn't supply all the properties of a Location object, but supplies the most common
    ToLocationObject() {
        return {
            pathname: this.toString({ domain: false, path: true, queryVars: false, hash: false }),
            search: this.toString({ domain: false, pathStartSlash: false, path: false, queryVars: true, hash: false }),
            hash: this.toString({ domain: false, pathStartSlash: false, path: false, queryVars: false, hash: true }),
            key: "URLKey_" + Date.now(),
        };
    }
    constructor(domain = "", pathNodes = [], queryVars = [], hash = "") {
        //AssertWarn(domain.match(/^[A-Za-z-:./]+$/) != null, "Domain seems to contain")
        if (domain.includes("?") || domain.includes("#")) {
            Assert(false, "Domain contains invalid characters. Did you mean to call VURL.Parse?");
        }
        this.domain = domain;
        this.pathNodes = pathNodes;
        this.queryVars = queryVars;
        this.hash = hash;
    }
    DomainStr(withProtocol = true) {
        return withProtocol ? this.domain : this.DomainWithoutProtocol;
    }
    get Protocol() { return this.domain && StringCE(this.domain).Contains("://") ? this.domain.substr(0, this.domain.indexOf("://")) : null; }
    get DomainWithoutProtocol() { return this.domain && StringCE(this.domain).Contains("://") ? this.domain.substr(this.domain.indexOf("://") + 3) : this.domain; }
    PathStr(pathStartSlash) {
        let result = "";
        if (pathStartSlash) {
            result += "/";
        }
        // path-nodes
        if (this.pathNodes.length)
            result += this.pathNodes.join("/");
        return result;
    }
    get QueryStr() {
        let result = "";
        for (let [index, queryVar] of this.queryVars.entries()) {
            result += (index == 0 ? "?" : "&") + queryVar.name + "=" + queryVar.value;
        }
        return result;
    }
    GetQueryVar(name) {
        let entry = this.queryVars.find(a => a.name == name);
        return entry ? entry.value : undefined;
    }
    SetQueryVar(name, value) {
        let existingEntry = this.queryVars.find(a => a.name == name);
        if (existingEntry) {
            existingEntry.value = value;
        }
        else {
            this.queryVars.push(new QueryVar(name, value));
        }
    }
    get HashStr() {
        if (!this.hash)
            return "";
        return "#" + this.hash;
    }
    Clone() {
        return new VURL(this.domain, this.pathNodes.slice(), this.queryVars.map(a => a.Clone()), this.hash);
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
    toString(options) {
        options = E({ domain: true, domain_protocol: true, pathStartSlash: "auto", path: true, queryVars: true, hash: true }, options);
        let result = "";
        // domain
        if (options.domain)
            result += this.DomainStr(options.domain_protocol);
        //if (options.forceSlashAfterDomain || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash))
        let pathStartSlash_auto = result.length == 0 || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash);
        let pathStartSlash = options.pathStartSlash == true || (options.pathStartSlash == "auto" && pathStartSlash_auto);
        if (pathStartSlash) {
            result += "/";
        }
        if (options.path)
            result += this.PathStr(false);
        if (options.queryVars)
            result += this.QueryStr;
        if (options.hash)
            result += this.HashStr;
        Assert(!result.startsWith("//"), `URL toString() result cannot start with "//". (it's probably an error)`);
        return result;
    }
    toString_OptIn(options) {
        options = E({ domain: false, path: false, queryVars: false, hash: false }, options);
        return this.toString(options);
    }
}
function AsPartial(obj) { return obj; }
export class QueryVar {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    Clone() {
        return new QueryVar(this.name, this.value);
    }
}
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