import {StableSort, Compare, CreateProxyForClassExtensions, WithFuncsStandalone} from "../Utils/General";
import {Assert} from "../Utils/Assert";
import {IsObject} from "../Utils/Types";

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

export type LoopControlOp<Result> = "break" | "continue" | ["return", Result];
export type LoopFunc<T, Result> = (value: T, index: number, array: T[])=>LoopControlOp<Result>;

export const ArrayCE_funcs = {
	ForEach<T, Result = any>(this: T[], func: LoopFunc<T, Result>): Result {
		for (let i = 0; i < this.length; i++) {
			const controlOp = func(this[i], i, this);
			if (controlOp == "break") break;
			if (controlOp == "continue") continue;
			if (controlOp instanceof Array) return controlOp[1];
		}
	},
	async ForEachAsync<T, Result = any>(this: T[], func: LoopFunc<T, Result>): Promise<Result> {
		for (let i = 0; i < this.length; i++) {
			const controlOp = await func(this[i], i, this);
			if (controlOp == "break") break;
			if (controlOp == "continue") continue;
			if (controlOp instanceof Array) return controlOp[1];
		}
	},
	/*declare global { interface Array<T> { ForEachAsyncParallel(func: (value: T, index: number, array: T[])): Promise<void>; } }
	Array.prototype.ForEachAsync_Parallel = async function (this: Array<any>, fn) {
		await Promise.all(this.map(fn));
	},*/

	Contains<T>(this: T[], item: T) {
		return this.indexOf(item) != -1;
	},
	ContainsAny<T>(this: T[], ...items: T[]) {
		for (const item of items) {
			if (this.indexOf(item) != -1) {
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
		this.splice(0, 0, ...newItems);
	},
	Add<T>(this: T[], item: T) {
		return this.push(item);
	},
	CAdd<T>(this: T[], item: T): T[] { // CAdd = ChainAdd
		this.push(item);
		return this;
	},
	TAdd<T>(this: T[], item: T): T { // TAdd = TransparentAdd
		this.push(item);
		return item;
	},
	AddRange<T>(this: T[], array: T[]): T[] {
		//this.push(...array);
		// use loop, since sending them all as arguments fails when there are ~10000+ items
		for (const item of array) {
			this.push(item);
		}
		return this;
	},
	Remove<T>(this: T[], item: T): boolean {
		var itemIndex = this.indexOf(item);
		if (itemIndex == -1) return false;

		this.splice(itemIndex, 1);
		return true;
	},
	RemoveAll<T>(this: T[], items: T[]) {
		for (let item of items) {
			ArrayCES.Remove(this, item);
		}
	},
	RemoveAt<T>(this: T[], index: number): T {
		return this.splice(index, 1)[0];
	},
	Insert<T>(this: T[], index: number, obj: T) {
		this.splice(index, 0, obj);
	},
	SetItems<T>(this: T[], items: T[]): T[] {
		this.splice(0, this.length, ...items);
		return this;
	},

	Reversed<T>(this: T[]): T[] { 
		var clone = this.slice();
		clone.reverse();
		return clone;
	},

	//Object.prototype._AddFunction_Inline = function AsRef() { return new NodeReference_ByPath(this); }

	// Linq replacements
	// ----------

	Any<T>(this: T[], matchFunc: (item: T, index?: number)=>boolean): boolean {
		for (let [index, item] of this.entries()) {
			if (matchFunc == null || matchFunc.call(item, item, index)) {
				return true;
			}
		}
		return false;
	},
	All<T>(this: T[], matchFunc: (item: T, index?: number)=>boolean): boolean {
		for (let [index, item] of this.entries()) {
			if (!matchFunc.call(item, item, index)) {
				return false;
			}
		}
		return true;
	},
	Where<T>(this: T[], matchFunc: (item: T, index?: number)=>boolean): T[] {
		var result = [];
		for (let [index, item] of this.entries()) {
			if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
				result.push(item);
			}
		}
		return result;
	},
	Select<T, T2>(this: T[], selectFunc: (item: T, index?: number)=>T2): T2[] {
		var result = [];
		for (let [index, item] of this.entries()) {
			result.push(selectFunc.call(item, item, index));
		}
		return result;
	},
	SelectMany<T, T2>(this: T[], selectFunc: (item: T, index?: number)=>T2[]): T2[] {
		//return [...this.entries()].reduce((acc, [index, item])=>acc.concat(selectFunc.call(item, item, index)), []);
		var result = [];
		for (let [index, item] of this.entries()) {
			ArrayCES.AddRange(result, selectFunc.call(item, item, index));
		}
		return result;
	},
	//Count(matchFunc) { return this.Where(matchFunc).length; };
	//Count(matchFunc) { return this.Where(matchFunc).length; }; // needed for items to be added properly to custom classes that extend Array
	// needed for items to be added properly to custom classes that extend Array
	Count<T>(this: T[]) {
		return this.length;
	},
	VCount<T>(this: T[], matchFunc: (item: T)=>boolean) {
		return ArrayCES.Where(this, matchFunc).length;
	},
	Clear<T>(this: T[]) {
		/*while (this.length > 0)
			this.pop();*/
		this.splice(0, this.length);
	},

	First<T>(this: T[], matchFunc?: (item: T)=>boolean): T {
		var result = ArrayCES.FirstOrX(this, matchFunc) as T;
		if (result == null) {
			throw new Error("Matching item not found.");
		}
		return result;
	},
	FirstOrX<T>(this: T[], matchFunc?: (item: T)=>boolean, x = null): T {
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
	},
	//FirstWithPropValue(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };
	FirstWith<T>(this: T[], propName: string, propValue: any): T {
		return ArrayCES.Where(this, function() { return this[propName] == propValue; })[0] as T;
	},
	Last<T>(this: T[], matchFunc?: (item: T)=>boolean): T {
		var result = ArrayCES.LastOrX(this, matchFunc) as T;
		if (result === undefined) {
			throw new Error("Matching item not found.");
		}
		return result;
	},
	LastOrX<T>(this: T[], matchFunc?: (item: T)=>boolean, x = null): T {
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
	},
	XFromLast<T>(this: T[], x: number): T {
		return this[(this.length - 1) - x];
	},

	Move<T>(this: T[], item: T, newIndex: number, newIndexAsPreRemovalIndexVSFinalIndex = false): number {
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
			ArrayCES.Insert(this, newIndex, item);
			if (oldIndex != -1) {
				let oldEntry_currentIndex = newIndex <= oldIndex ? oldIndex + 1 : oldIndex; // if we just inserted the new version before the old entry, fix the old-entry's index by adding 1
				ArrayCES.RemoveAt(this, oldEntry_currentIndex);
			}
		} else {
			if (oldIndex != -1) {
				ArrayCES.RemoveAt(this, oldIndex);
			}
			ArrayCES.Insert(this, newIndex, item);
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
		var result = {};
		for (let [index, item] of this.entries()) {
			result[keyFunc(item, index)] = valFunc(item, index);
		}
		return result;
	},
	Skip<T>(this: T[], count: number): T[] {
		var result = [];
		for (let i = count; i < this.length; i++) {
			result.push(this[i]);
		}
		return result;
	},
	Take<T>(this: T[], count: number): T[] {
		var result = [];
		for (let i = 0; i < count && i < this.length; i++) {
			result.push(this[i]);
		}
		return result;
	},
	TakeLast<T>(this: T[], count: number): T[] {
		var result = [];
		for (var i = 0; i < count && (this.length - 1) - i >= 0; i++) {
			result.push(this[(this.length - 1) - i]);
		}
		return result;
	},
	FindIndex<T>(this: T[], matchFunc: (item: T)=>boolean): number {
		for (let [index, item] of this.entries()) {
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
	OrderBy<T>(this: T[], valFunc = (item, index: number)=>item): T[] {
		/*var temp = this.ToList();
		temp.sort((a, b)=>V.Compare(valFunc(a), valFunc(b)));
		return temp;*/
		return StableSort(this, (a, b, aIndex, bIndex)=>Compare(valFunc(a, aIndex), valFunc(b, bIndex)));
	},
	OrderByDescending<T>(this: T[], valFunc = (item, index: number)=>item): T[] {
		return ArrayCES.OrderBy(this, (item, index)=>-valFunc(item, index)) as T[];
	},

	Distinct<T>(this: T[]): T[] {
		const result = [];
		/*for (const i in this) {
			if (!this.hasOwnProperty(i)) continue;*/
		for (let i = 0; i < this.length; i++) {
			if (!ArrayCES.Contains(result, this[i])) {
				result.push(this[i]);
			}
		}
		return result;
	},
	Except: <{
		<T>(this: T[], ...args: T[]): T[];
		<T>(this: T[], options: {excludeEachOnlyOnce: boolean}, ...args: T[]): T[];
	}>(function(...args: any[]) {
		let opt: {excludeEachOnlyOnce: boolean}, excludeItems: any[];
		if (IsObject(args[0]) && "excludeEachOnlyOnce" in args[0]) [opt, excludeItems] = args;
		else excludeItems = args;

		if (opt && opt.excludeEachOnlyOnce) {
			const result = this.slice();
			for (const excludeItem of excludeItems) {
				ArrayCES.Remove(result, excludeItem);
			}
			return result;
		}
		return this.filter(a=>!ArrayCES.Contains(excludeItems, a));
	}),

	IfEmptyThen<T, T2>(this: T[], valIfSelfIsEmpty: T2): T[] | T2 {
		return this.length == 0 ? valIfSelfIsEmpty : this;
	},

	//JoinUsing(separator) { return this.join(separator);};
	Min<T>(this: T[], valFunc?: (item: T)=>number, asNumbers = false): T {
		// only set asNumbers to true if providing a number[] array
		if (asNumbers) {
			/*const values = valFunc ? this.map(valFunc) : this;
			return Math.min(...values);*/
			Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
			return Math.min(...this as any as number[]) as any;
		}
		return ArrayCES.OrderBy(this, valFunc)[0] as T;
	},
	Max<T>(this: T[], valFunc?: (item: T)=>number, asNumbers = false): T {
		// only set asNumbers to true if providing a number[] array
		if (asNumbers) {
			/*const values = valFunc ? this.map(valFunc) : this;
			return Math.max(...values);*/
			Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
			return Math.max(...this as any as number[]) as any;
		}
		return ArrayCES.LastOrX(ArrayCES.OrderBy(this, valFunc)) as T;
	},
	Sum<T extends number>(this: T[]) {
		let total = 0;
		for (const item of this) {
			total += item;
		}
		return total;
	},
	Average<T extends number>(this: T[]): number {
		const total = ArrayCES.Sum(this);
		return total / this.length;
	},
	Median<T extends number>(this: T[]): number {
		const ordered = ArrayCES.OrderBy(this, a=>a) as number[];
		if (this.length % 2 == 0) { // if even number of elements, average two middlest ones
			return ordered[(this.length / 2) - 1] + ordered[this.length / 2];
		}
		return ordered[this.length / 2]; // otherwise, return the exactly-middle one
	},

	Random<T>(this: T[]): T {
		let index = Math.floor(Math.random() * this.length);
		return this[index];
	},

	//oldJoin: [].join,
	Join<T>(this: T[], separator = ",") {
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
	},
};
export interface ArrayCEProxyInterface<T> {
	_magicTypeMarker: T; // this makes type-script "carry" the type-data of an ArrayCEProxy, within this proxy type (which therefore doesn't cause recursion issues from ItemTFor and such) 
}
export type ArrayCEProxy<T> = Array<T> & typeof ArrayCE_funcs & ArrayCEProxyInterface<T>;

export const ArrayCE = CreateProxyForClassExtensions(ArrayCE_funcs) as <T>(nextThis: T[])=>ArrayCEProxy<T>;
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