import {IsNumberString} from "./Types";

export function ToAbsoluteUrl(url: string) {
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
export function JumpToHash(hashStr: string) {
    var url = location.href; // Save down the URL without hash.
    location.href = "#" + hashStr; // Go to the target element.
    history.replaceState(null, null, url); // Don't like hashes. Changing it back.
	//document.getElementById(hashStr).scrollIntoView(); //Even IE6 supports this
}

/** Returns [domainStr, pathStr, varsStr, hashStr], without the separator-chars. */
export function GetCurrentURLString() {
	return window.location.href.replace(/%22/, "\"");
}
export function GetUrlParts(url?: string): [string, string, string, string] {
	url = url || GetCurrentURLString();

	let [domainStr, pathStr, varsStr, hashStr] = Array(4).fill(0).map(a=>"");

	let urlToProcess = url;
	if (urlToProcess.Contains("#") && !varsStr.Contains("runJS=")) {
		[urlToProcess, hashStr] = urlToProcess.SplitAt(urlToProcess.indexOf("#"));
	}
	if (urlToProcess.Contains("?")) {
		[urlToProcess, varsStr] = urlToProcess.SplitAt(urlToProcess.indexOf("?"));
	}
	//if (urlToProcess.Matches("/").length == )
	[domainStr, pathStr] = urlToProcess.SplitAt(urlToProcess.IndexOf_X("/", 2).IfN1Then(urlToProcess.length));

	return [domainStr, pathStr, varsStr, hashStr];
}
function GetUrlPath(url?: string, fromDomain = true) {
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
function GetUrlVars(url?: string, allowQuestionMarkAsVarSep = true) {
	let varSeparators = allowQuestionMarkAsVarSep ? ["&", "?"] : ["&"];
	
	let [_, __, varsStr] = GetUrlParts(url);
	var vars = {} as any; //{[key: string]: string};
	var parts = varsStr.SplitByAny(...varSeparators).filter(a=>a);
	for (let part of parts) {
		let [key, value] = part.SplitAt(part.indexOf("="))
		vars[key] = value;
	}
	return vars;
}

/*export function GetCurrentURL(fromAddressBar = false) {
	return fromAddressBar ? URL.Parse(GetCurrentURLString()) : URL.FromState(State("router"));
}*/

export class VURL {
	static Parse(urlStr: string, useCurrentDomainIfMissing = true, allowQuestionMarkAsVarSep = true) {
		if (useCurrentDomainIfMissing && !urlStr.startsWith("http"))
			urlStr = window.location.origin + (urlStr.startsWith("/") ? "" : "/") + urlStr;
		
		let [domainStr, pathStr, varsStr, hashStr] = GetUrlParts(urlStr);
		let queryVarsMap = GetUrlVars(urlStr, allowQuestionMarkAsVarSep);
		
		let result = new VURL();
		result.domain = domainStr;
		result.pathNodes = pathStr.length ? pathStr.split("/") : [];
		for (let key in queryVarsMap) {
			result.queryVars.push(new QueryVar(key, queryVarsMap[key]));
		}
		result.hash = hashStr;
		return result;
	}
	static FromState(state: {pathname?: string, search?: string, hash?: string}) {
		let result = VURL.Parse(state ? (state.pathname||"") + (state.search||"") + (state.hash||"") : "");
		//if (normalize) result = result.Normalized();
		return result;
	}
	ToState() {
		return {
			pathname: this.toString({domain: false, path: true, queryVars: false, hash: false}),
			search: this.toString({domain: false, pathStartSlash: false, path: false, queryVars: true, hash: false}),
			hash: this.toString({domain: false, pathStartSlash: false, path: false, queryVars: false, hash: true}),
			key: "URLKey_" + Date.now(),
		}
	}

	constructor(domain = "", pathNodes = [] as string[], queryVars = [] as QueryVar[], hash = "") {
		this.domain = domain;
		this.pathNodes = pathNodes;
		this.queryVars = queryVars;
		this.hash = hash;
	}

	domain: string;
	DomainStr(withProtocol = true) {
		return withProtocol ? this.domain : this.DomainWithoutProtocol;
	}
	get Protocol() { return this.domain && this.domain.Contains("://") ? this.domain.substr(0, this.domain.indexOf("://")) : null; }
	get DomainWithoutProtocol() { return this.domain && this.domain.Contains("://") ? this.domain.substr(this.domain.indexOf("://") + 3) : this.domain; }

	pathNodes: string[];
	PathStr(pathStartSlash?: boolean) {
		let result = "";
		if (pathStartSlash) {
			result += "/";
		}
		// path-nodes
		if (this.pathNodes.length)
			result += this.pathNodes.join("/");
		return result;
	}

	queryVars: QueryVar[];
	get QueryStr() {
		let result = "";
		for (let [index, queryVar] of this.queryVars.entries()) {
			result += (index == 0 ? "?" : "&") + queryVar.name + "=" + queryVar.value;
		}
		return result;
	}
	GetQueryVar(name: string) {
		let entry = this.queryVars.find(a=>a.name == name);
		return entry ? entry.value : undefined;
	}
	SetQueryVar(name: string, value) {
		let existingEntry = this.queryVars.find(a=>a.name == name);
		if (existingEntry) {
			existingEntry.value = value;
		} else {
			this.queryVars.push(new QueryVar(name, value));
		}
	}

	hash: string;
	get HashStr() {
		if (!this.hash) return "";
		return "#" + this.hash;
	}

	Clone() {
		return new VURL(this.domain, this.pathNodes.slice(), this.queryVars.map(a=>a.Clone()), this.hash);
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

	toString(options?: {domain?: boolean, domain_protocol?: boolean, pathStartSlash?: boolean | "auto", path?: boolean, queryVars?: boolean, hash?: boolean}) {
		options = E({domain: true, domain_protocol: true, pathStartSlash: "auto", path: true, queryVars: true, hash: true}, options);
		let result = "";
		
		// domain
		if (options.domain) result += this.DomainStr(options.domain_protocol);
		
		//if (options.forceSlashAfterDomain || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash))
		let pathStartSlash_auto = result.length == 0 || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash);
		let pathStartSlash = options.pathStartSlash == true || (options.pathStartSlash == "auto" && pathStartSlash_auto);
		if (pathStartSlash) {
			result += "/";
		}

		if (options.path) result += this.PathStr(false);
		if (options.queryVars) result += this.QueryStr;
		if (options.hash) result += this.HashStr;
		Assert(!result.startsWith("//"), `URL toString() result cannot start with "//". (it's probably an error)`);
		return result;
	}
	toString_OptIn(options?: {domain?: boolean, domain_protocol?: boolean, pathStartSlash?: boolean | "auto", path?: boolean, queryVars?: boolean, hash?: boolean}) {
		options = E({domain: false, path: false, queryVars: false, hash: false}, options) as any;	
		return this.toString(options);
	}
}
function AsPartial<T>(obj: T): Partial<T> { return obj; }
export class QueryVar {
	constructor(name: string, value: string) {
		this.name = name;
		this.value = value;
	}
	name: string;
	value: string;
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