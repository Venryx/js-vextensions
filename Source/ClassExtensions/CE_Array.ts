import ".";
import {Assert} from "..";

declare global { interface Array<T> { Contains(item: T): boolean; } }
Array.prototype._AddFunction_Inline = function Contains(item) { return this.indexOf(item) != -1; };
declare global { interface Array<T> { ContainsAny(...items: T[]): boolean; } }
Array.prototype._AddFunction_Inline = function ContainsAny(...items) {
    for (let item of items) {
        if (this.indexOf(item) != -1) {
				return true;
		  }
	 }
    return false;
};

// for some reason, this platform doesn't have entries() defined
Array.prototype._AddFunction_Inline = function entries() {
	var result = [];
	for (var i = 0; i < this.length; i++)
		result.push([i, this[i]]);
	return result;
};

Array.prototype._AddFunction_Inline = function Prepend(...newItems) { this.splice(0, 0, ...newItems); };
Array.prototype._AddFunction_Inline = function Add(item) { return this.push(item); };
Array.prototype._AddFunction_Inline = function CAdd(item) { this.push(item); return this; }; // CAdd = ChainAdd
Array.prototype._AddFunction_Inline = function TAdd(item) { this.push(item); return item; }; // TAdd = TransparentAdd
declare global { interface Array<T> { AddRange(items: T[]): this; } }
Array.prototype._AddFunction_Inline = function AddRange(array) {
	//this.push(...array);
	// use loop, since sending them all as arguments fails when there are ~10000+ items
	for (let item of array) {
		this.push(item);
	}
	return this;
};
declare global { interface Array<T> { Remove(item: T): boolean; } }
Array.prototype._AddFunction_Inline = function Remove(item) {
	var itemIndex = this.indexOf(item);
	if (itemIndex == -1) return false;

	this.splice(itemIndex, 1);
	return true;
};
declare global { interface Array<T> { RemoveAll(items: T[]): void; } }
Array.prototype._AddFunction_Inline = function RemoveAll(items) {
    for (let item of items)
        this.Remove(item);
};
declare global { interface Array<T> { RemoveAt(index: number): T; } }
Array.prototype._AddFunction_Inline = function RemoveAt(index: number) { return this.splice(index, 1)[0]; };
declare global { interface Array<T> { Insert(index: number, obj: T): void; } }
Array.prototype._AddFunction_Inline = function Insert(index, obj) { this.splice(index, 0, obj); }
declare global { interface Array<T> { SetItems(items: T[]): this; } }
Array.prototype._AddFunction_Inline = function SetItems(items) { this.splice(0, this.length, ...items); }

declare global { interface Array<T> { Reversed(): T[]; } }
Array.prototype._AddFunction_Inline = function Reversed() { 
	var clone = this.slice(0);
	clone.reverse();
	return clone;
}

//Object.prototype._AddFunction_Inline = function AsRef() { return new NodeReference_ByPath(this); }

// Linq replacements
// ----------

declare global { interface Array<T> { Any(matchFunc: (item: T, index?: number)=>boolean): boolean; } }
Array.prototype._AddFunction_Inline = function Any(matchFunc) {
    for (let [index, item] of this.entries()) {
		if (matchFunc == null || matchFunc.call(item, item, index)) {
			return true;
		}
	 }
    return false;
};
declare global { interface Array<T> { All(matchFunc: (item: T, index?: number)=>boolean): boolean; } }
Array.prototype._AddFunction_Inline = function All(matchFunc) {
    for (let [index, item] of this.entries()) {
        if (!matchFunc.call(item, item, index)) {
				return false;
		  }
	 }
    return true;
};
declare global { interface Array<T> { Where(matchFunc: (item: T, index?: number)=>boolean): T[]; } }
Array.prototype._AddFunction_Inline = function Where(matchFunc) {
	var result = [];
	for (let [index, item] of this.entries()) {
		if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
			result.push(item);
		}
	}
	return result;
};
declare global { interface Array<T> { Select<T2>(matchFunc: (item: T, index?: number)=>T2): T2[]; } }
Array.prototype._AddFunction_Inline = function Select(selectFunc) {
	var result = [];
	for (let [index, item] of this.entries()) {
		result.push(selectFunc.call(item, item, index));
	}
	return result;
};
declare global { interface Array<T> { SelectMany<T2>(matchFunc: (item: T, index?: number)=>T2[]): T2[]; } }
Array.prototype._AddFunction_Inline = function SelectMany(selectFunc) {
	var result = [];
	for (let [index, item] of this.entries()) {
		result.AddRange(selectFunc.call(item, item, index));
	}
	return result;
};
//Array.prototype._AddFunction_Inline = function Count(matchFunc) { return this.Where(matchFunc).length; };
//Array.prototype._AddFunction_Inline = function Count(matchFunc) { return this.Where(matchFunc).length; }; // needed for items to be added properly to custom classes that extend Array
Array.prototype._AddGetter_Inline = function Count() { return this.length; }; // needed for items to be added properly to custom classes that extend Array
declare global { interface Array<T> { VCount(matchFunc: (item: T)=>boolean): number; } }
Array.prototype._AddFunction_Inline = function VCount(matchFunc) { return this.Where(matchFunc).length; };
declare global { interface Array<T> { Clear(): void; } }
Array.prototype._AddFunction_Inline = function Clear() {
	/*while (this.length > 0)
		this.pop();*/
	this.splice(0, this.length);
};

/* interface Array<T> { /** Same as forEach, except breaks the loop when "true" is returned. *#/ forEach_break(callbackfn: (value: any, index: number, array: any[]) => boolean, thisArg?: any); }
Array.prototype._AddFunction_Inline = function forEach_break(...args) { return this.some(...args); } */

declare global { interface Array<T> { /** Throws an error if no items match. */ First(matchFunc?: (item: T, index: number)=>boolean): T; } }
Array.prototype._AddFunction_Inline = function First(matchFunc?) {
	var result = this.FirstOrX(matchFunc);
	if (result == null) {
		throw new Error("Matching item not found.");
	}
	return result;
}
declare global { interface Array<T> { FirstOrX(matchFunc?: (item: T, index: number)=>boolean, x?): T; } }
Array.prototype._AddFunction_Inline = function FirstOrX(matchFunc?, x = null) {
	if (matchFunc) {
		for (let [index, item] of this.entries()) {
			if (matchFunc.call(item, item, index)) {
				return item;
			}
		}
	} else if (this.length > 0) {
		return this[0];
	}
	return x;
}
//Array.prototype._AddFunction_Inline = function FirstWithPropValue(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };
Array.prototype._AddFunction_Inline = function FirstWith(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };
declare global { interface Array<T> { /** Throws an error if no items match. */ Last(matchFunc?: (item: T, index: number)=>boolean): T; } }
Array.prototype._AddFunction_Inline = function Last(matchFunc?) {
	var result = this.LastOrX(matchFunc);
	if (result == null) {
		throw new Error("Matching item not found.");
	}
	return result;
}
declare global { interface Array<T> { LastOrX(matchFunc?: (item: T, index: number)=>boolean, x?): T; } }
Array.prototype._AddFunction_Inline = function LastOrX(matchFunc?, x = null) {
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
}
declare global { interface Array<T> { XFromLast(x: number): T; } }
Array.prototype._AddFunction_Inline = function XFromLast(x: number) { return this[(this.length - 1) - x]; };

// since JS doesn't have basic "foreach" system
Array.prototype._AddFunction_Inline = function ForEach(func) {
	for (var i in this) {
		func.call(this[i], this[i], i); // call, having the item be "this", as well as the first argument
	}
};

declare global { interface Array<T> { Move(item: any, newIndex: number, shiftInsertPointToPreserveFinalNeighbors?: boolean): number; } }
Array.prototype._AddFunction_Inline = function Move(this: any[], item, newIndex, shiftInsertPointToPreserveFinalNeighbors = false) {
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

Array.prototype._AddFunction_Inline = function ToList(itemType = null) { return [].concat(this); }
/*Array.prototype._AddFunction_Inline = function ToDictionary(keyFunc, valFunc) {
	var result = new Dictionary();
	for (var i in this)
		result.Add(keyFunc(this[i]), valFunc(this[i]));
	return result;
}*/
declare global { interface Array<T> { ToMap(keyFunc: (item: T, index: number)=>string, valFunc: (item: T, index: number)=>any): any; } }
Array.prototype._AddFunction_Inline = function ToMap(this: any[], keyFunc, valFunc) {
	var result = {};
	for (let [index, item] of this.entries()) {
		result[keyFunc(item, index)] = valFunc(item, index);
	}
	return result;
}
declare global { interface Array<T> { Skip(count: number): T[]; } }
Array.prototype._AddFunction_Inline = function Skip(count) {
	var result = [];
	for (var i = count; i < this.length; i++) {
		result.push(this[i]);
	}
	return result;
};
declare global { interface Array<T> { Take(count: number): T[]; } }
Array.prototype._AddFunction_Inline = function Take(count) {
	var result = [];
	for (var i = 0; i < count && i < this.length; i++) {
		result.push(this[i]);
	}
	return result;
};
Array.prototype._AddFunction_Inline = function TakeLast(count) {
	var result = [];
	for (var i = 0; i < count && (this.length - 1) - i >= 0; i++) {
		result.push(this[(this.length - 1) - i]);
	}
	return result;
};
declare global { interface Array<T> { FindIndex(matchFunc?: (item: T, index: number)=>boolean): number; } }
Array.prototype._AddFunction_Inline = function FindIndex(matchFunc) {
	for (let [index, item] of this.entries()) {
		if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
			return index;
		}
	}
	return -1;
};
/*Array.prototype._AddFunction_Inline = function FindIndex(matchFunc) {
    for (let [index, item] of this.entries())
        if (matchFunc.call(item, item))
            return index;
    return -1;
};*/
declare global { interface Array<T> { OrderBy(valFunc?: (item: T, index: number)=>any): T[]; } }
Array.prototype._AddFunction_Inline = function OrderBy(valFunc = (item, index: number)=>item) {
	/*var temp = this.ToList();
	temp.sort((a, b)=>V.Compare(valFunc(a), valFunc(b)));
	return temp;*/
   return StableSort(this, (a, b, aIndex, bIndex)=>Compare(valFunc(a, aIndex), valFunc(b, bIndex)));
};
declare global { interface Array<T> { OrderByDescending(valFunc?: (item: T, index: number)=>any): T[]; } }
Array.prototype._AddFunction_Inline = function OrderByDescending(valFunc = (item, index: number)=>item) {
	return this.OrderBy((item, index)=>-valFunc(item, index));
};

declare global { interface Array<T> { Distinct(): T[]; } }
Array.prototype._AddFunction_Inline = function Distinct() {
	var result = [];
	for (var i in this) {
		if (!result.Contains(this[i])) {
			result.push(this[i]);
		}
	}
	return result;
};
declare global {
	interface Array<T> {
		Except(...excludeItems: T[]): T[];
		Except(excludeItems: T[], excludeEachOnlyOnce?: boolean): T[];
	}
}
Array.prototype._AddFunction_Inline = function Except(this: Array<any>, ...args) {
	let excludeItems, excludeEachOnlyOnce = true;
	if (args[0] instanceof Array) [excludeItems, excludeEachOnlyOnce] = args;
	else excludeItems = args;

	if (excludeEachOnlyOnce) {
		let result = this.slice();
		for (let excludeItem of excludeItems) {
			result.Remove(excludeItem);
		}
		return result;
	}
	return this.Where(a=>!excludeItems.Contains(a));
};

declare global { interface Array<T> { IfEmptyThen<T>(valIfSelfIsEmpty: T): T; } }
Array.prototype._AddFunction_Inline = function IfEmptyThen(this: Array<any>, valIfSelfIsEmpty) {
	return this.length == 0 ? valIfSelfIsEmpty : this;
};

//Array.prototype._AddFunction_Inline = function JoinUsing(separator) { return this.join(separator);};
declare global { interface Array<T> { Min(valFunc?: (item: T)=>number, asNumbers?: boolean): T; } }
Array.prototype._AddFunction_Inline = function Min(valFunc?, asNumbers = false) {
	if (asNumbers) {
		/*let values = valFunc ? this.map(valFunc) : this;
		return Math.min(...values);*/
		Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
		return Math.min(...this);
	}
    return this.OrderBy(valFunc).First();
};
declare global { interface Array<T> { Max(valFunc?: (item: T)=>number, asNumbers?: boolean): T; } }
Array.prototype._AddFunction_Inline = function Max(valFunc?, asNumbers = false) {
	if (asNumbers) {
		/*let values = valFunc ? this.map(valFunc) : this;
		return Math.max(...values);*/
		Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
		return Math.max(...this);
	}
	return this.OrderBy(valFunc).Last();
};
declare global { interface Array<T> { Sum(): number; } }
Array.prototype._AddFunction_Inline = function Sum() {
   var total = 0;
	for (let item of this) {
		total += item;
	}
	return total;
};
declare global { interface Array<T> { Average(): number; } }
Array.prototype._AddFunction_Inline = function Average() {
   var total = this.Sum();
	return total / this.length;
};
declare global { interface Array<T> { Median(): number; } }
Array.prototype._AddFunction_Inline = function Median() {
   var ordered = this.OrderBy(a=>a);
	if (this.length % 2 == 0) { // if even number of elements, average two middlest ones
		return ordered[(this.length / 2) - 1] + ordered[this.length / 2];
	}
	return ordered[this.length / 2]; // otherwise, return the exactly-middle one
};

declare global { interface Array<T> { Random(): T; } }
Array.prototype._AddFunction_Inline = function Random() {
	let index = Math.floor(Math.random() * this.length);
   return this[index];
};

var oldJoin = [].join;
Array.prototype._AddFunction_Inline = function join(separator = ",") {
	if (this.length == 0) return "";
	
	//let result = "" + this[0];
	let result = this[0] != null ? this[0] : ""; // to match behavior of native join
	for (var i = 1, len = this.length; i < len; i++) {
		result += separator;
		result += this[i] != null ? this[i] : "";
	}

	/*let oldResult = oldJoin.apply(this, arguments);
	if (oldResult != result) debugger;*/

	return result;
};

// ArrayIterator
// ==========

/*var ArrayIterator = [].entries().constructor;
ArrayIterator.prototype._AddFunction_Inline = function ToArray() {
    return Array.from(this);
};*/

// NodeList
// ==========

declare global { interface NodeList { ToArray(): any[]; } }
if (typeof NodeList != "undefined") {
	NodeList.prototype._AddFunction_Inline = function ToArray() {
		return Array.from(this);
	};
}

// late imports
// ==========

var {StableSort, Compare} = require("../Utils/General");