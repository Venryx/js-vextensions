import {StableSort, Compare, CreateProxyForClassExtensions, WithFuncsStandalone} from "../Utils/General";
import {Assert} from "../Utils/Assert";

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

export type ItemTFor<T> =
	T extends Array<infer ItemT> ? ItemT :
	T extends ArrayCEProxyInterface<infer ItemT> ? ItemT : // maybe needs same fix that TargetTFor got
	T;
//type XOrWrapped<T> = T | ArrayCEProxy<T>;
export type ArrayLike<T> = Array<T> | ArrayCEProxyInterface<T>;

//type ArrayLike_Unwrap<T> = ThisFor<XOrWrapped<T>>;
//type ArrayLike_Unwrap<T> =
/*type Unwrapped<T> =
	T extends Array<infer ItemT> ? ItemT[] :
	T extends ArrayCEProxy<infer ItemT> ? ItemT[] :
	never;*/

export function AlsoExtendsArray<T>(funcs: T): T {
	return funcs;
}

export const ArrayCE_funcs = AlsoExtendsArray({
	ForEach<T>(this: Array<T>, func: (value: T, extras: ForEachExtras)=>any) {
		const self = this as T[];
		for (let i = 0; i < self.length; i++) {
			let shouldBreak = false;
			let shouldContinue = false;
			let extras = {index: i, Break: ()=>shouldBreak = true, Continue: ()=>shouldContinue = true};
			func(this[i], extras);
			if (shouldBreak) break;
			if (shouldContinue) continue;
		}
	},

	async ForEachAsync<T>(this: T[], func: (value: T, extras: ForEachExtras)=>any) {
		const self = this as T[];
		for (let i = 0; i < self.length; i++) {
			let shouldBreak = false;
			let shouldContinue = false;
			let extras = {index: i, Break: ()=>shouldBreak = true, Continue: ()=>shouldContinue = true};
			await func(this[i], extras);
			if (shouldBreak) break;
			if (shouldContinue) continue;
		}
	},
	/*declare global { interface Array<T> { ForEachAsyncParallel(func: (value: T, index: number, array: T[])): Promise<void>; } }
	Array.prototype.ForEachAsync_Parallel = async function (this: Array<any>, fn) {
		await Promise.all(this.map(fn));
	},*/

	Contains<T>(this: T[], item: T) {
		const self = this as T[];
		return self.indexOf(item) != -1;
	},
	ContainsAny<T>(this: T[], ...items: T[]) {
		const self = this as T[];
		for (const item of items) {
			if (self.indexOf(item) != -1) {
				return true;
			}
		}
		return false;
	},

	// for some reason, this platform doesn't have entries() defined
	/*entries() {
		var result = [];
		for (var i = 0; i < this.length; i++)
			result.push([i, this[i]]);
		return result;
	};*/

	Prepend<T>(this: T[], ...newItems: T[]) {
		const self = this as T[];
		self.splice(0, 0, ...newItems);
	},
	Add<T>(this: T[], item: T) {
		const self = this as T[];
		return self.push(item);
	},
	CAdd<T>(this: T[], item: T) { // CAdd = ChainAdd
		const self = this as T[];
		self.push(item);
		return self;
	},
	TAdd<T>(this: T[], item: T) { // TAdd = TransparentAdd
		const self = this as T[];
		self.push(item); return item;
	},
	AddRange<T>(this: T[], array: T[]) {
		const self = this as T[];
		//this.push(...array);
		// use loop, since sending them all as arguments fails when there are ~10000+ items
		for (const item of array) {
			self.push(item);
		}
		return this;
	},
	Remove<T>(this: T[], item: T) {
		const self = this as T[];
		var itemIndex = self.indexOf(item);
		if (itemIndex == -1) return false;

		self.splice(itemIndex, 1);
		return true;
	},
	RemoveAll<T>(this: T[], items: T[]) {
		const self = this as T[];
		for (let item of items) {
			ArrayCE_Base(self).Remove(item);
		}
	},
	RemoveAt<T>(this: T[], index: number) {
		const self = this as T[];
		return self.splice(index, 1)[0];
	},
	Insert<T>(this: T[], index: number, obj: T) {
		const self = this as T[];
		self.splice(index, 0, obj);
	},
	SetItems<T>(this: T[], items: T[]) {
		const self = this as T[];
		self.splice(0, self.length, ...items);
		return self;
	},

	Reversed<T>(this: T[]) { 
		const self = this as T[];
		var clone = self.slice(0);
		clone.reverse();
		return clone;
	},

	//Object.prototype._AddFunction_Inline = function AsRef() { return new NodeReference_ByPath(this); }

	// Linq replacements
	// ----------

	Any<T>(this: T[], matchFunc: (item: T, index?: number)=>boolean): boolean {
		const self = this as T[];
		for (let [index, item] of self.entries()) {
			if (matchFunc == null || matchFunc.call(item, item, index)) {
				return true;
			}
		}
		return false;
	},
	All<T>(this: T[], matchFunc: (item: T, index?: number)=>boolean): boolean {
		const self = this as T[];
		for (let [index, item] of self.entries()) {
			if (!matchFunc.call(item, item, index)) {
					return false;
			}
		}
		return true;
	},
	Where<T>(this: T[], matchFunc: (item: T, index?: number)=>boolean): T[] {
		const self = this as T[];
		var result = [];
		for (let [index, item] of self.entries()) {
			if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
				result.push(item);
			}
		}
		return result;
	},
	Select<T, T2>(this: T[], selectFunc: (item: T, index?: number)=>T2): T2[] {
		const self = this as T[];
		var result = [];
		for (let [index, item] of self.entries()) {
			result.push(selectFunc.call(item, item, index));
		}
		return result;
	},
	SelectMany<T, T2>(this: T[], selectFunc: (item: T, index?: number)=>T2[]): T2[] {
		const self = this as T[];
		//return [...this.entries()].reduce((acc, [index, item])=>acc.concat(selectFunc.call(item, item, index)), []);
		var result = [];
		for (let [index, item] of self.entries()) {
			ArrayCE_Base(result).AddRange(selectFunc.call(item, item, index));
		}
		return result;
	},
	//Count(matchFunc) { return this.Where(matchFunc).length; };
	//Count(matchFunc) { return this.Where(matchFunc).length; }; // needed for items to be added properly to custom classes that extend Array
	// needed for items to be added properly to custom classes that extend Array
	Count<T>(this: T[]) {
		const self = this as T[];
		return self.length;
	},
	VCount<T>(this: T[], matchFunc: (item: T)=>boolean) {
		const self = this as T[];
		return ArrayCE_Base(self).Where(matchFunc).length;
	},
	Clear<T>(this: T[]) {
		const self = this as T[];
		/*while (this.length > 0)
			this.pop();*/
		self.splice(0, self.length);
	},

	/* interface Array<T> { /** Same as forEach, except breaks the loop when "true" is returned. *#/ forEach_break(callbackfn: (value: any, index: number, array: any[]) => boolean, thisArg?: any); }
	forEach_break(...args) { return this.some(...args); } */

	First<T>(this: T[], matchFunc?: (item: T)=>boolean) {
		const self = this as T[];
		var result = ArrayCE_Base(self).FirstOrX(matchFunc);
		if (result == null) {
			throw new Error("Matching item not found.");
		}
		return result;
	},
	FirstOrX<T>(this: T[], matchFunc?: (item: T)=>boolean, x = null) {
		const self = this as T[];
		if (matchFunc) {
			for (let [index, item] of self.entries()) {
				if (matchFunc.call(item, item, index)) {
					return item;
				}
			}
		} else if (self.length > 0) {
			return self[0];
		}
		return x;
	},
	//FirstWithPropValue(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };
	FirstWith<T>(this: T[], propName: string, propValue: any) {
		const self = this as T[];
		return ArrayCE_Base(self).Where(function() { return this[propName] == propValue; })[0];
	},
	Last<T>(this: T[], matchFunc?) {
		const self = this as T[];
		var result = ArrayCE_Base(self).LastOrX(matchFunc);
		if (result === undefined) {
			throw new Error("Matching item not found.");
		}
		return result;
	},
	LastOrX<T>(this: T[], matchFunc?: (item: T)=>boolean, x = null) {
		const self = this as T[];
		if (matchFunc) {
			for (var i = self.length - 1; i >= 0; i--) {
				if (matchFunc.call(this[i], this[i], i)) {
					return this[i];
				}
			}
		} else if (self.length > 0) {
			return self[self.length - 1];
		}
		return x;
	},
	XFromLast<T>(this: T[], x: number) {
		const self = this as T[];
		return self[(self.length - 1) - x];
	},

	Move<T>(this: T[], item: T, newIndex: number, newIndexAsPreRemovalIndexVSFinalIndex = false) {
		const self = this as T[];
		var oldIndex = self.indexOf(item);

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
			ArrayCE_Base(self).Insert(newIndex, item);
			if (oldIndex != -1) {
				let oldEntry_currentIndex = newIndex <= oldIndex ? oldIndex + 1 : oldIndex; // if we just inserted the new version before the old entry, fix the old-entry's index by adding 1
				ArrayCE_Base(self).RemoveAt(oldEntry_currentIndex);
			}
		} else {
			if (oldIndex != -1) {
				ArrayCE_Base(self).RemoveAt(oldIndex);
			}
			ArrayCE_Base(self).Insert(newIndex, item);
		}

		return oldIndex;
	},

	//ToList<T>(this: T[], itemType = null) { return [].concat(this); }
	/*ToDictionary(keyFunc, valFunc) {
		var result = new Dictionary();
		for (var i in this)
			result.Add(keyFunc(this[i]), valFunc(this[i]));
		return result;
	}*/
	ToMap<T, Value>(this: T[], keyFunc: (item: T, index: number)=>string, valFunc: (item: T, index: number)=>Value): {[key: string]: Value} {
		const self = this as T[];
		var result = {};
		for (let [index, item] of self.entries()) {
			result[keyFunc(item, index)] = valFunc(item, index);
		}
		return result;
	},
	Skip<T>(this: T[], count: number) {
		const self = this as T[];
		var result = [];
		for (let i = count; i < self.length; i++) {
			result.push(self[i]);
		}
		return result;
	},
	Take<T>(this: T[], count: number) {
		const self = this as T[];
		var result = [];
		for (let i = 0; i < count && i < self.length; i++) {
			result.push(self[i]);
		}
		return result;
	},
	TakeLast<T>(this: T[], count: number) {
		const self = this as T[];
		var result = [];
		for (var i = 0; i < count && (self.length - 1) - i >= 0; i++) {
			result.push(self[(self.length - 1) - i]);
		}
		return result;
	},
	FindIndex<T>(this: T[], matchFunc: (item: T)=>boolean) {
		const self = this as T[];
		for (let [index, item] of self.entries()) {
			if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
				return index;
			}
		}
		return -1;
	},
	/*FindIndex(matchFunc: (item: T)=>boolean) {
		for (let [index, item] of this.entries())
			if (matchFunc.call(item, item))
					return index;
		return -1;
	};*/
	OrderBy<T>(this: T[], valFunc = (item, index: number)=>item) {
		const self = this as T[];
		/*var temp = this.ToList();
		temp.sort((a, b)=>V.Compare(valFunc(a), valFunc(b)));
		return temp;*/
		return StableSort(self, (a, b, aIndex, bIndex)=>Compare(valFunc(a, aIndex), valFunc(b, bIndex)));
	},
	OrderByDescending<T>(this: T[], valFunc = (item, index: number)=>item) {
		const self = this as T[];
		return ArrayCE_Base(self).OrderBy((item, index)=>-valFunc(item, index));
	},

	Distinct<T>(this: T[]) {
		const self = this as T[];
		const result = [];
		for (const i in self) {
			if (!self.hasOwnProperty(i)) continue;
			if (!ArrayCE_Base(result).Contains(self[i])) {
				result.push(self[i]);
			}
		}
		return result;
	},
	Except: <{
		<T>(this: T[], ...args: any[]): T[];
		<T>(this: T[], options: {excludeEachOnlyOnce: boolean}, ...args: any[]): T[];
	}>(function(...args: any[]) {
		let excludeItems, excludeEachOnlyOnce = true;
		if (args[0] instanceof Array) [excludeItems, excludeEachOnlyOnce] = args;
		else excludeItems = args;

		if (excludeEachOnlyOnce) {
			const result = this.slice();
			for (const excludeItem of excludeItems) {
				ArrayCE_Base(result).Remove(excludeItem);
			}
			return result;
		}
		return ArrayCE_Base(this).filter(a=>!excludeItems.Contains(a));
	}),

	IfEmptyThen<T>(this: T[], valIfSelfIsEmpty: any) {
		const self = this as T[];
		return self.length == 0 ? valIfSelfIsEmpty : this;
	},

	//JoinUsing(separator) { return this.join(separator);};
	Min<T>(this: T[], valFunc?: (item: T)=>number, asNumbers = false) {
		const self = this as T[];
		if (asNumbers) {
			/*let values = valFunc ? this.map(valFunc) : this;
			return Math.min(...values);*/
			Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
			return Math.min(...this as any as number[]);
		}
		return ArrayCE_Base(ArrayCE_Base(self).OrderBy(valFunc)).FirstOrX();
	},
	Max<T>(this: T[], valFunc?: (item: T)=>number, asNumbers = false) {
		const self = this as T[];
		if (asNumbers) {
			/*let values = valFunc ? this.map(valFunc) : this;
			return Math.max(...values);*/
			Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
			return Math.max(...this as any as number[]);
		}
		return ArrayCE_Base(ArrayCE_Base(self).OrderBy(valFunc)).LastOrX();
	},
	Sum<T extends number>(this: T[]) {
		const self = this as T[];
		var total = 0;
		for (let item of self) {
			total += item as any as number;
		}
		return total;
	},
	Average<T extends number>(this: T[]) {
		const self = this as T[];
		var total = ArrayCE_Base(self).Sum();
		return total / self.length;
	},
	Median<T extends number>(this: T[]) {
		const self = this as T[];
		var ordered = ArrayCE_Base(self).OrderBy(a=>a);
		if (self.length % 2 == 0) { // if even number of elements, average two middlest ones
			return ordered[(self.length / 2) - 1] + ordered[self.length / 2];
		}
		return ordered[self.length / 2]; // otherwise, return the exactly-middle one
	},

	Random<T>(this: T[]) {
		const self = this as T[];
		let index = Math.floor(Math.random() * self.length);
		return this[index];
	},

	//oldJoin: [].join,
	join<T>(this: T[], separator = ",") {
		const self = this as T[];
		if (self.length == 0) return "";
		
		//let result = "" + this[0];
		let result = this[0] != null ? ""+this[0] : ""; // to match behavior of native join
		for (var i = 1, len = self.length; i < len; i++) {
			result += separator;
			result += this[i] != null ? ""+this[i] : "";
		}

		/*let oldResult = oldJoin.apply(this, arguments);
		if (oldResult != result) debugger;*/

		return result;
	},
});
export interface ArrayCEProxyInterface<T> {
	_magicTypeMarker: T; // this makes type-script "carry" the type-data of an ArrayCEProxy, within this proxy type (which therefore doesn't cause recursion issues from ItemTFor and such) 
}
export type ArrayCEProxy<T> = Array<T> & typeof ArrayCE_funcs & ArrayCEProxyInterface<T>;

//export const ArrayCE = CreateProxyForClassExtensions(ArrayCEProxy);
//export const ArrayCE = CreateProxyForClassExtensions<ArrayCEProxy<any>>(ArrayCEProxy);
const ArrayCE_Base = CreateProxyForClassExtensions(ArrayCE_funcs);
//export const ArrayCE = ArrayCE_Base as any as <T>(nextThis: T[])=>WithFuncThisArgsAsAny_Type<ArrayCEProxy<T>>;
export const ArrayCE = ArrayCE_Base as any as <T>(nextThis: T[])=>ArrayCEProxy<T>;
//export const ArrayCE = ArrayCE_Base as any as <T>(nextThis: T[])=>WithFuncThisArgsAsXOrWrapped_Type<ArrayCEProxy<T>>;
export const ArrayCES = WithFuncsStandalone(ArrayCE_funcs);

/*var ArrayIterator = [].entries().constructor;
export class ArrayIteratorCEProxy {
	ToArray(this: ArrayIterator) {
		return Array.from(this);
	}
}
export const ArrayIteratorCE = CreateProxyForClassExtensions(ArrayIteratorCEProxy);*/

/*export class NodeListCEProxy {
	ToArray(this: NodeList) {
		return Array.from(this);
	}
}
export const NodeListCE = CreateProxyForClassExtensions(NodeListCEProxy);*/