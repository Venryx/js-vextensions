import {ArrayCE} from "../ClassExtensions/CE_Array.js";
import {Assert} from "./Assert.js";
import {E} from "./General.js";

export class FancyFormatOptions {
	toJSONOptions?: Partial<ToJSON_Advanced_Options>;
}
/** For converting log-strings and objects into a single string. (like node-js console.log, except usable anywhere, eg. as Assert message) */
export function FancyFormat(options: Partial<FancyFormatOptions>, ...parts: any[]) {
	const opts = E(new FancyFormatOptions(), options);
	let result = "";
	for (const [i, part] of parts.entries()) {
		if (i > 0) result += " ";
		if (typeof part == "string") {
			result += part;
		} else {
			result += ToJSON_Advanced(part, opts.toJSONOptions);
		}
	}
	return result;
}

// object-Json
export function FromJSON(json: string) { return JSON.parse(json); }

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
export function ToJSON(obj, replacerFunc?: (this: any, key: string, value: any)=>any, spacing?: number): string {
	return JSON.stringify(obj, replacerFunc, spacing);
}

// option defaults set to match the regular JSON.stringify (so can be swapped in without issue)
export class ToJSON_Advanced_Options {
	keysToIgnore = [] as string[];
	stringifyUndefinedAs = null;
	trimDuplicates = false;
	trimDuplicates_replaceStr = "[circular/duplicate] ";
	catchErrors = false;
	catchErrors_replaceStr = "[converting to JSON failed]";
	indent?: number;
	addSpacesAt?: AddSpacesAt_Options;
	//maxDepth = 4;
}
export class AddSpacesAt_Options {
	insideObjectBraces = false;
	insideArrayBrackets = false;
	betweenPropsOrItems = true;
	betweenPropNameAndValue = true;
}
export function ToJSON_Advanced(obj, options?: Partial<ToJSON_Advanced_Options>) {
	const opt = E(new ToJSON_Advanced_Options(), options);
	Assert(!(opt.indent != null && opt.addSpacesAt), "Cannot enable indent and addSpaceAt simultaneously.");
	const indent = opt.indent ?? (opt.addSpacesAt ? 1 : undefined);

	const cache = new Set();
	//let foundDuplicates = false;
	try {
		var result = JSON.stringify(obj, (key, value)=>{
			if (ArrayCE(opt.keysToIgnore).Contains(key)) return;
			if (opt.trimDuplicates && typeof value == "object" && value != null) {
				// if duplicate found, ignore key (for more advanced, see: flatted, json-stringify-safe, etc.)
				if (cache.has(value)) {
					//foundDuplicates = true;
					return opt.trimDuplicates_replaceStr;
				}
				cache.add(value);
			}
			if (value === undefined && opt.stringifyUndefinedAs !== undefined) {
				return opt.stringifyUndefinedAs;
			}
			return value;
		}, indent);
	} catch (ex) {
		if (opt.catchErrors) {
			return opt.catchErrors_replaceStr;
		}
		throw ex;
	}

	if (opt.addSpacesAt) {
		result = result.replace(/^ +/gm, " "); // remove all but the first space for each line
		result = result.replace(/\n/g, ""); // remove line-breaks
		if (!opt.addSpacesAt.insideObjectBraces) result = result.replace(/{ /g, "{").replace(/ }/g, "}");
		if (!opt.addSpacesAt.insideArrayBrackets) result = result.replace(/\[ /g, "[").replace(/ \]/g, "]");
		if (!opt.addSpacesAt.betweenPropsOrItems) result = result.replace(/, /g, ",");
		if (!opt.addSpacesAt.betweenPropNameAndValue) result = result.replace(/": /g, `":`);
	}
	//cache = null; // enable garbage collection
	/*if (opt.trimCircular && foundDuplicates) {
		result = opt.trimCircular_replaceStr + result;
	}*/
	return result;
}

export function Clone(obj, keepPrototype = false as boolean) {
	if (obj == null) return obj;

	const result = FromJSON(ToJSON(obj));
	if (keepPrototype == true) {
		Object.setPrototypeOf(result, Object.getPrototypeOf(obj));
	}
	return result;
}

/** Variant of Clone which preserves prototypes, non-enumerable properties, and circular links (if enabled). */
export function CloneWithPrototypes(originalObject, keepCircularLinks = false) {
	if (originalObject == null) return originalObject;

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
			const descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex])!;

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

			copies.push({source: nextSource, target: descriptor.value});
		}
	}

	return cloneObject;
}