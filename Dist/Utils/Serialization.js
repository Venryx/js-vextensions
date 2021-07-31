import { ArrayCE } from "../ClassExtensions/CE_Array.js";
import { Assert } from "./Assert.js";
import { E } from "./General.js";
export class FancyFormatOptions {
    constructor() {
        this.toJSON_autoIndent_minLength = 70; // NodeJS's console.log appears to use ~70 as the cutoff
        this.toJSON_autoIndent_indent = 2;
    }
}
/** For converting log-strings and objects into a single string. (like node-js console.log, except usable anywhere, eg. as Assert message) */
export function FancyFormat(options, ...parts) {
    const opts = E(new FancyFormatOptions(), options);
    let result = "";
    for (const [i, part] of parts.entries()) {
        if (i > 0)
            result += " ";
        if (typeof part == "string") {
            result += part;
        }
        else {
            let json = ToJSON_Advanced(part, opts.toJSON_opts);
            if (opts.toJSON_autoIndent_minLength != null && json.length >= opts.toJSON_autoIndent_minLength) {
                json = ToJSON_Advanced(part, E(opts.toJSON_opts, { indent: opts.toJSON_autoIndent_indent }));
            }
            result += json;
        }
    }
    return result;
}
// object-Json
export function FromJSON(json) { return JSON.parse(json); }
/*export function ToJSON(obj, replacerFunc?: (this: any, key: string, value: any)=>any, spacing?: number, stringifyUndefinedAs = null): string {
    if (stringifyUndefinedAs !== undefined) {
        Assert(replacerFunc == null, "Cannot supply replacerFunc if stringifyUndefinedAs is !== undefined.");
        replacerFunc = (key, value)=> {
            if (value === undefined) return stringifyUndefinedAs;
            return value;
        };
    }
    return JSON.stringify(obj, replacerFunc, spacing);
}*/
export function ToJSON(obj, replacerFunc, spacing) {
    return JSON.stringify(obj, replacerFunc, spacing);
}
// option defaults set to match the regular JSON.stringify (so can be swapped in without issue)
export class ToJSON_Advanced_Options {
    constructor() {
        this.keysToIgnore = [];
        this.stringifyUndefinedAs = null;
        this.trimDuplicates = false;
        this.trimDuplicates_replaceStr = "[circular/duplicate] ";
        this.catchErrors = false;
        this.catchErrors_replaceStr = "[converting to JSON failed]";
        //maxDepth = 4;
    }
}
export class AddSpacesAt_Options {
    constructor() {
        this.insideObjectBraces = false;
        this.insideArrayBrackets = false;
        this.betweenPropsOrItems = true;
        this.betweenPropNameAndValue = true;
    }
}
export function ToJSON_Advanced(obj, options) {
    var _a;
    const opts = E(new ToJSON_Advanced_Options(), options);
    Assert(!(opts.indent != null && opts.addSpacesAt), "Cannot enable indent and addSpaceAt simultaneously.");
    const indent = (_a = opts.indent) !== null && _a !== void 0 ? _a : (opts.addSpacesAt ? 1 : undefined);
    const cache = new Set();
    //let foundDuplicates = false;
    try {
        var result = JSON.stringify(obj, (key, value) => {
            let replacer_lastResult;
            const callReplacer = (replacerFunc) => {
                replacer_lastResult = replacerFunc(key, value);
                // as per func's description, "undefined" being returned means "make no change"
                if (replacer_lastResult === undefined)
                    return false;
                if (replacer_lastResult != null && replacer_lastResult.$omit === true && Object.keys(replacer_lastResult).length == 1) {
                    replacer_lastResult = undefined;
                }
                return true;
            };
            if (opts.entryReplacer_pre && callReplacer(opts.entryReplacer_pre))
                return replacer_lastResult;
            if (ArrayCE(opts.keysToIgnore).Contains(key))
                return;
            if (opts.trimDuplicates && typeof value == "object" && value != null) {
                // if duplicate found, ignore key (for more advanced, see: flatted, json-stringify-safe, etc.)
                if (cache.has(value)) {
                    //foundDuplicates = true;
                    return opts.trimDuplicates_replaceStr;
                }
                cache.add(value);
            }
            if (value === undefined && opts.stringifyUndefinedAs !== undefined) {
                return opts.stringifyUndefinedAs;
            }
            if (opts.entryReplacer_post && callReplacer(opts.entryReplacer_post))
                return replacer_lastResult;
            return value;
        }, indent);
    }
    catch (ex) {
        if (opts.catchErrors) {
            return opts.catchErrors_replaceStr;
        }
        throw ex;
    }
    if (opts.addSpacesAt) {
        result = result.replace(/^ +/gm, " "); // remove all but the first space for each line
        result = result.replace(/\n/g, ""); // remove line-breaks
        if (!opts.addSpacesAt.insideObjectBraces)
            result = result.replace(/{ /g, "{").replace(/ }/g, "}");
        if (!opts.addSpacesAt.insideArrayBrackets)
            result = result.replace(/\[ /g, "[").replace(/ \]/g, "]");
        if (!opts.addSpacesAt.betweenPropsOrItems)
            result = result.replace(/, /g, ",");
        if (!opts.addSpacesAt.betweenPropNameAndValue)
            result = result.replace(/": /g, `":`);
    }
    //cache = null; // enable garbage collection
    /*if (opt.trimCircular && foundDuplicates) {
        result = opt.trimCircular_replaceStr + result;
    }*/
    return result;
}
export function Clone(obj, keepPrototype = false) {
    if (obj == null)
        return obj;
    const result = FromJSON(ToJSON(obj));
    if (keepPrototype == true) {
        Object.setPrototypeOf(result, Object.getPrototypeOf(obj));
    }
    return result;
}
/** Variant of Clone which preserves prototypes, non-enumerable properties, and circular links (if enabled). */
export function CloneWithPrototypes(originalObject, keepCircularLinks = false) {
    if (originalObject == null)
        return originalObject;
    const copies = [{
            source: originalObject,
            target: Array.isArray(originalObject) ? [] : Object.create(Object.getPrototypeOf(originalObject)),
        }];
    const cloneObject = copies[0].target;
    const sourceReferences = [originalObject];
    const targetReferences = [cloneObject];
    // first in, first out
    let current;
    while (current = copies.shift()) {
        const keys = Object.getOwnPropertyNames(current.source);
        for (let propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
            // Save the source's descriptor
            const descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);
            if (!descriptor.value || typeof descriptor.value !== "object") {
                Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                continue;
            }
            const nextSource = descriptor.value;
            descriptor.value = Array.isArray(nextSource) ? [] : Object.create(Object.getPrototypeOf(nextSource));
            if (keepCircularLinks) {
                const indexOf = sourceReferences.indexOf(nextSource);
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
//# sourceMappingURL=Serialization.js.map