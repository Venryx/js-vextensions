import ".";
import {Assert, StableSort, Compare} from "..";

export interface ForEachExtras {
	index: number;
	Break: ()=>void;
	Continue: ()=>void;
}

/*// since JS doesn't have basic "foreach" system
ForEach(func) {
	for (var i in this) {
		func.call(this[i], this[i], i); // call, having the item be "this", as well as the first argument
	}
};*/

export class ArrayCEClass<T> extends Array<T> {
	ForEach(func: Function) {
		for (let i = 0; i < this.length; i++) {
			let shouldBreak = false;
			let shouldContinue = false;
			let extras = {index: i, Break: ()=>shouldBreak = true, Continue: ()=>shouldContinue = true};
			func(this[i], extras);
			if (shouldBreak) break;
			if (shouldContinue) continue;
		}
	}

	async ForEachAsync(func: Function) {
		for (let i = 0; i < this.length; i++) {
			let shouldBreak = false;
			let shouldContinue = false;
			let extras = {index: i, Break: ()=>shouldBreak = true, Continue: ()=>shouldContinue = true};
			await func(this[i], extras);
			if (shouldBreak) break;
			if (shouldContinue) continue;
		}
	}
	/*declare global { interface Array<T> { ForEachAsyncParallel(func: (value: T, index: number, array: T[])): Promise<void>; } }
	Array.prototype.ForEachAsync_Parallel = async function (this: Array<any>, fn) {
		await Promise.all(this.map(fn));
	}*/

	Contains(item) { return this.indexOf(item) != -1; };
	ContainsAny(...items) {
		for (let item of items) {
			if (this.indexOf(item) != -1) {
					return true;
			}
		}
		return false;
	};

	// for some reason, this platform doesn't have entries() defined
	/*entries() {
		var result = [];
		for (var i = 0; i < this.length; i++)
			result.push([i, this[i]]);
		return result;
	};*/

	Prepend(...newItems) { this.splice(0, 0, ...newItems); };
	Add(item) { return this.push(item); };
	CAdd(item) { this.push(item); return this; }; // CAdd = ChainAdd
	TAdd(item) { this.push(item); return item; }; // TAdd = TransparentAdd
	AddRange(array) {
		//this.push(...array);
		// use loop, since sending them all as arguments fails when there are ~10000+ items
		for (let item of array) {
			this.push(item);
		}
		return this;
	};
	Remove(item) {
		var itemIndex = this.indexOf(item);
		if (itemIndex == -1) return false;

		this.splice(itemIndex, 1);
		return true;
	};
	RemoveAll(items) {
		for (let item of items)
			this.Remove(item);
	};
	RemoveAt(index: number) { return this.splice(index, 1)[0]; };
	Insert(index, obj) { this.splice(index, 0, obj); }
	SetItems(items) {
		this.splice(0, this.length, ...items);
		return this;
	}

	Reversed() { 
		var clone = this.slice(0);
		clone.reverse();
		return clone;
	}

	//Object.prototype._AddFunction_Inline = function AsRef() { return new NodeReference_ByPath(this); }

	// Linq replacements
	// ----------

	Any(matchFunc) {
		for (let [index, item] of this.entries()) {
			if (matchFunc == null || matchFunc.call(item, item, index)) {
				return true;
			}
		}
		return false;
	};
	All(matchFunc) {
		for (let [index, item] of this.entries()) {
			if (!matchFunc.call(item, item, index)) {
					return false;
			}
		}
		return true;
	};
	Where(matchFunc) {
		var result = [];
		for (let [index, item] of this.entries()) {
			if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
				result.push(item);
			}
		}
		return result;
	};
	Select(selectFunc) {
		var result = [];
		for (let [index, item] of this.entries()) {
			result.push(selectFunc.call(item, item, index));
		}
		return result;
	};
	SelectMany(this: Array<any>, selectFunc) {
		//return [...this.entries()].reduce((acc, [index, item])=>acc.concat(selectFunc.call(item, item, index)), []);
		var result = [];
		for (let [index, item] of this.entries()) {
			result.AddRange(selectFunc.call(item, item, index));
		}
		return result;
	};
	//Count(matchFunc) { return this.Where(matchFunc).length; };
	//Count(matchFunc) { return this.Where(matchFunc).length; }; // needed for items to be added properly to custom classes that extend Array
	Count() { return this.length; }; // needed for items to be added properly to custom classes that extend Array
	VCount(matchFunc) { return this.Where(matchFunc).length; };
	Clear() {
		/*while (this.length > 0)
			this.pop();*/
		this.splice(0, this.length);
	};

	/* interface Array<T> { /** Same as forEach, except breaks the loop when "true" is returned. *#/ forEach_break(callbackfn: (value: any, index: number, array: any[]) => boolean, thisArg?: any); }
	forEach_break(...args) { return this.some(...args); } */

	First(matchFunc?) {
		var result = this.FirstOrX(matchFunc);
		if (result == null) {
			throw new Error("Matching item not found.");
		}
		return result;
	}
	FirstOrX(matchFunc?, x = null) {
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
	//FirstWithPropValue(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };
	FirstWith(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };
	Last(matchFunc?) {
		var result = this.LastOrX(matchFunc);
		if (result === undefined) {
			throw new Error("Matching item not found.");
		}
		return result;
	}
	LastOrX(matchFunc?, x = null) {
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
	XFromLast(x: number) { return this[(this.length - 1) - x]; };

	Move(this: any[], item, newIndex, newIndexAsPreRemovalIndexVSFinalIndex = false) {
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
				let oldEntry_currentIndex = newIndex <= oldIndex ? oldIndex + 1 : oldIndex; // if we just inserted the new version before the old entry, fix the old-entry's index by adding 1
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

	ToList(itemType = null) { return [].concat(this); }
	/*ToDictionary(keyFunc, valFunc) {
		var result = new Dictionary();
		for (var i in this)
			result.Add(keyFunc(this[i]), valFunc(this[i]));
		return result;
	}*/
	ToMap(this: any[], keyFunc, valFunc) {
		var result = {};
		for (let [index, item] of this.entries()) {
			result[keyFunc(item, index)] = valFunc(item, index);
		}
		return result;
	}
	Skip(count) {
		var result = [];
		for (var i = count; i < this.length; i++) {
			result.push(this[i]);
		}
		return result;
	};
	Take(count) {
		var result = [];
		for (var i = 0; i < count && i < this.length; i++) {
			result.push(this[i]);
		}
		return result;
	}
	TakeLast(count) {
		var result = [];
		for (var i = 0; i < count && (this.length - 1) - i >= 0; i++) {
			result.push(this[(this.length - 1) - i]);
		}
		return result;
	}
	FindIndex(matchFunc) {
		for (let [index, item] of this.entries()) {
			if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
				return index;
			}
		}
		return -1;
	}
	/*FindIndex(matchFunc) {
		for (let [index, item] of this.entries())
			if (matchFunc.call(item, item))
					return index;
		return -1;
	};*/
	OrderBy(valFunc = (item, index: number)=>item) {
		/*var temp = this.ToList();
		temp.sort((a, b)=>V.Compare(valFunc(a), valFunc(b)));
		return temp;*/
		return StableSort(this, (a, b, aIndex, bIndex)=>Compare(valFunc(a, aIndex), valFunc(b, bIndex)));
	}
	OrderByDescending(valFunc = (item, index: number)=>item) {
		return this.OrderBy((item, index)=>-valFunc(item, index));
	}

	Distinct() {
		var result = [];
		for (var i in this) {
			if (!result.Contains(this[i])) {
				result.push(this[i]);
			}
		}
		return result;
	}
	Except(this: Array<any>, ...args) {
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
	}

	IfEmptyThen(this: Array<any>, valIfSelfIsEmpty) {
		return this.length == 0 ? valIfSelfIsEmpty : this;
	}

	//JoinUsing(separator) { return this.join(separator);};
	Min(valFunc?, asNumbers = false) {
		if (asNumbers) {
			/*let values = valFunc ? this.map(valFunc) : this;
			return Math.min(...values);*/
			Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
			return Math.min(...this as any as number[]);
		}
		return this.OrderBy(valFunc).FirstOrX();
	}
	Max(valFunc?, asNumbers = false) {
		if (asNumbers) {
			/*let values = valFunc ? this.map(valFunc) : this;
			return Math.max(...values);*/
			Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
			return Math.max(...this as any as number[]);
		}
		return this.OrderBy(valFunc).LastOrX();
	}
	Sum() {
		var total = 0;
		for (let item of this) {
			total += item as any as number;
		}
		return total;
	}
	Average() {
		var total = this.Sum();
		return total / this.length;
	}
	Median() {
		var ordered = this.OrderBy(a=>a);
		if (this.length % 2 == 0) { // if even number of elements, average two middlest ones
			return ordered[(this.length / 2) - 1] + ordered[this.length / 2];
		}
		return ordered[this.length / 2]; // otherwise, return the exactly-middle one
	}

	Random() {
		let index = Math.floor(Math.random() * this.length);
		return this[index];
	}

	oldJoin = [].join;
	join(separator = ",") {
		if (this.length == 0) return "";
		
		//let result = "" + this[0];
		let result = this[0] != null ? ""+this[0] : ""; // to match behavior of native join
		for (var i = 1, len = this.length; i < len; i++) {
			result += separator;
			result += this[i] != null ? ""+this[i] : "";
		}

		/*let oldResult = oldJoin.apply(this, arguments);
		if (oldResult != result) debugger;*/

		return result;
	}
}
export const ArrayCE = ArrayCEClass.prototype;

// ArrayIterator
// ==========

/*var ArrayIterator = [].entries().constructor;
ArrayIterator.prototype._AddFunction_Inline = function ToArray() {
	return Array.from(this);
};*/

// NodeList
// ==========

export class NodeListCEClass extends (NodeList || ({} as new()=>NodeList)) {
	ToArray() {
		return Array.from(this);
	}
}
export const NodeListCE = ArrayCEClass.prototype;