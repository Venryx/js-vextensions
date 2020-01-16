var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { StableSort, Compare, CreateProxyForClassExtensions, WithFuncsStandalone } from "../Utils/General";
import { Assert } from "../Utils/Assert";
import { IsObject } from "../Utils/Types";
export const ArrayCE_funcs = {
    ForEach(func) {
        for (let i = 0; i < this.length; i++) {
            const controlOp = func(this[i], i, this);
            if (controlOp == "break")
                break;
            if (controlOp == "continue")
                continue;
            if (controlOp instanceof Array)
                return controlOp[1];
        }
    },
    ForEachAsync(func) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.length; i++) {
                const controlOp = yield func(this[i], i, this);
                if (controlOp == "break")
                    break;
                if (controlOp == "continue")
                    continue;
                if (controlOp instanceof Array)
                    return controlOp[1];
            }
        });
    },
    /*declare global { interface Array<T> { ForEachAsyncParallel(func: (value: T, index: number, array: T[])): Promise<void>; } }
    Array.prototype.ForEachAsync_Parallel = async function (this: Array<any>, fn) {
        await Promise.all(this.map(fn));
    },*/
    Contains(item) {
        return this.indexOf(item) != -1;
    },
    ContainsAny(...items) {
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
    Prepend(...newItems) {
        this.splice(0, 0, ...newItems);
    },
    Add(item) {
        return this.push(item);
    },
    CAdd(item) {
        this.push(item);
        return this;
    },
    TAdd(item) {
        this.push(item);
        return item;
    },
    AddRange(array) {
        //this.push(...array);
        // use loop, since sending them all as arguments fails when there are ~10000+ items
        for (const item of array) {
            this.push(item);
        }
        return this;
    },
    Remove(item) {
        var itemIndex = this.indexOf(item);
        if (itemIndex == -1)
            return false;
        this.splice(itemIndex, 1);
        return true;
    },
    RemoveAll(items) {
        for (let item of items) {
            ArrayCES.Remove(this, item);
        }
    },
    RemoveAt(index) {
        return this.splice(index, 1)[0];
    },
    Insert(index, obj) {
        this.splice(index, 0, obj);
    },
    SetItems(items) {
        this.splice(0, this.length, ...items);
        return this;
    },
    Reversed() {
        var clone = this.slice();
        clone.reverse();
        return clone;
    },
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
    },
    All(matchFunc) {
        for (let [index, item] of this.entries()) {
            if (!matchFunc.call(item, item, index)) {
                return false;
            }
        }
        return true;
    },
    Where(matchFunc) {
        var result = [];
        for (let [index, item] of this.entries()) {
            if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
                result.push(item);
            }
        }
        return result;
    },
    Select(selectFunc) {
        var result = [];
        for (let [index, item] of this.entries()) {
            result.push(selectFunc.call(item, item, index));
        }
        return result;
    },
    SelectMany(selectFunc) {
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
    Count() {
        return this.length;
    },
    VCount(matchFunc) {
        return ArrayCES.Where(this, matchFunc).length;
    },
    Clear() {
        /*while (this.length > 0)
            this.pop();*/
        this.splice(0, this.length);
    },
    First(matchFunc) {
        var result = ArrayCES.FirstOrX(this, matchFunc);
        if (result == null) {
            throw new Error("Matching item not found.");
        }
        return result;
    },
    FirstOrX(matchFunc, x = null) {
        if (matchFunc) {
            for (let [index, item] of this.entries()) {
                if (matchFunc.call(item, item, index)) {
                    return item;
                }
            }
        }
        else if (this.length > 0) {
            return this[0];
        }
        return x;
    },
    //FirstWithPropValue(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };
    FirstWith(propName, propValue) {
        return ArrayCES.Where(this, function () { return this[propName] == propValue; })[0];
    },
    Last(matchFunc) {
        var result = ArrayCES.LastOrX(this, matchFunc);
        if (result === undefined) {
            throw new Error("Matching item not found.");
        }
        return result;
    },
    LastOrX(matchFunc, x = null) {
        if (matchFunc) {
            for (var i = this.length - 1; i >= 0; i--) {
                if (matchFunc.call(this[i], this[i], i)) {
                    return this[i];
                }
            }
        }
        else if (this.length > 0) {
            return this[this.length - 1];
        }
        return x;
    },
    XFromLast(x) {
        return this[(this.length - 1) - x];
    },
    Move(item, newIndex, newIndexAsPreRemovalIndexVSFinalIndex = false) {
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
        }
        else {
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
    ToMap(keyFunc, valFunc) {
        var result = {};
        for (let [index, item] of this.entries()) {
            result[keyFunc(item, index)] = valFunc(item, index);
        }
        return result;
    },
    Skip(count) {
        var result = [];
        for (let i = count; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    },
    Take(count) {
        var result = [];
        for (let i = 0; i < count && i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    },
    TakeLast(count) {
        var result = [];
        for (var i = 0; i < count && (this.length - 1) - i >= 0; i++) {
            result.push(this[(this.length - 1) - i]);
        }
        return result;
    },
    FindIndex(matchFunc) {
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
    OrderBy(valFunc = (item, index) => item) {
        /*var temp = this.ToList();
        temp.sort((a, b)=>V.Compare(valFunc(a), valFunc(b)));
        return temp;*/
        return StableSort(this, (a, b, aIndex, bIndex) => Compare(valFunc(a, aIndex), valFunc(b, bIndex)));
    },
    OrderByDescending(valFunc = (item, index) => item) {
        return ArrayCES.OrderBy(this, (item, index) => -valFunc(item, index));
    },
    Distinct() {
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
    Except: (function (...args) {
        let opt, excludeItems;
        if (IsObject(args[0]) && "excludeEachOnlyOnce" in args[0])
            [opt, ...excludeItems] = args;
        else
            excludeItems = args;
        if (opt && opt.excludeEachOnlyOnce) {
            const result = this.slice();
            for (const excludeItem of excludeItems) {
                ArrayCES.Remove(result, excludeItem);
            }
            return result;
        }
        return this.filter(a => !ArrayCES.Contains(excludeItems, a));
    }),
    IfEmptyThen(valIfSelfIsEmpty) {
        return this.length == 0 ? valIfSelfIsEmpty : this;
    },
    //JoinUsing(separator) { return this.join(separator);};
    Min(valFunc, asNumbers = false) {
        // only set asNumbers to true if providing a number[] array
        if (asNumbers) {
            /*const values = valFunc ? this.map(valFunc) : this;
            return Math.min(...values);*/
            Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
            return Math.min(...this);
        }
        return ArrayCES.OrderBy(this, valFunc)[0];
    },
    Max(valFunc, asNumbers = false) {
        // only set asNumbers to true if providing a number[] array
        if (asNumbers) {
            /*const values = valFunc ? this.map(valFunc) : this;
            return Math.max(...values);*/
            Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
            return Math.max(...this);
        }
        return ArrayCES.LastOrX(ArrayCES.OrderBy(this, valFunc));
    },
    Sum() {
        let total = 0;
        for (const item of this) {
            total += item;
        }
        return total;
    },
    Average() {
        const total = ArrayCES.Sum(this);
        return total / this.length;
    },
    Median() {
        const ordered = ArrayCES.OrderBy(this, a => a);
        if (this.length % 2 == 0) { // if even number of elements, average two middlest ones
            return ordered[(this.length / 2) - 1] + ordered[this.length / 2];
        }
        return ordered[this.length / 2]; // otherwise, return the exactly-middle one
    },
    Random() {
        let index = Math.floor(Math.random() * this.length);
        return this[index];
    },
    //oldJoin: [].join,
    Join(separator = ",") {
        if (this.length == 0)
            return "";
        //let result = "" + this[0];
        let result = this[0] != null ? "" + this[0] : ""; // to match behavior of native join
        for (var i = 1, len = this.length; i < len; i++) {
            result += separator;
            result += this[i] != null ? "" + this[i] : "";
        }
        /*let oldResult = oldJoin.apply(this, arguments);
        if (oldResult != result) debugger;*/
        return result;
    },
};
export const ArrayCE = CreateProxyForClassExtensions(ArrayCE_funcs);
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
//# sourceMappingURL=CE_Array.js.map