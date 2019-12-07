"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = require("../Utils/General");
var Assert_1 = require("../Utils/Assert");
//type ArrayLike_Unwrap<T> = ThisFor<XOrWrapped<T>>;
//type ArrayLike_Unwrap<T> =
/*type Unwrapped<T> =
    T extends Array<infer ItemT> ? ItemT[] :
    T extends ArrayCEClass<infer ItemT> ? ItemT[] :
    never;*/
var ArrayCEClass = /** @class */ (function () {
    function ArrayCEClass() {
        this.oldJoin = [].join;
    }
    ArrayCEClass.prototype.ForEach = function (func) {
        var self = this;
        var _loop_1 = function (i) {
            var shouldBreak = false;
            var shouldContinue = false;
            var extras = { index: i, Break: function () { return shouldBreak = true; }, Continue: function () { return shouldContinue = true; } };
            func(this_1[i], extras);
            if (shouldBreak)
                return "break";
            if (shouldContinue)
                return "continue";
        };
        var this_1 = this;
        for (var i = 0; i < self.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
    };
    ArrayCEClass.prototype.ForEachAsync = function (func) {
        return __awaiter(this, void 0, void 0, function () {
            var self, _loop_2, this_2, i, state_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _loop_2 = function (i) {
                            var shouldBreak, shouldContinue, extras;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        shouldBreak = false;
                                        shouldContinue = false;
                                        extras = { index: i, Break: function () { return shouldBreak = true; }, Continue: function () { return shouldContinue = true; } };
                                        return [4 /*yield*/, func(this_2[i], extras)];
                                    case 1:
                                        _a.sent();
                                        if (shouldBreak)
                                            return [2 /*return*/, "break"];
                                        if (shouldContinue)
                                            return [2 /*return*/, "continue"];
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < self.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_2(i)];
                    case 2:
                        state_2 = _a.sent();
                        if (state_2 === "break")
                            return [3 /*break*/, 4];
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /*declare global { interface Array<T> { ForEachAsyncParallel(func: (value: T, index: number, array: T[])): Promise<void>; } }
    Array.prototype.ForEachAsync_Parallel = async function (this: Array<any>, fn) {
        await Promise.all(this.map(fn));
    }*/
    ArrayCEClass.prototype.Contains = function (item) {
        var self = this;
        return self.indexOf(item) != -1;
    };
    ;
    ArrayCEClass.prototype.ContainsAny = function () {
        var e_1, _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var self = this;
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                if (self.indexOf(item) != -1) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
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
    ArrayCEClass.prototype.Prepend = function () {
        var newItems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newItems[_i] = arguments[_i];
        }
        var self = this;
        self.splice.apply(self, __spread([0, 0], newItems));
    };
    ArrayCEClass.prototype.Add = function (item) {
        var self = this;
        return self.push(item);
    };
    ArrayCEClass.prototype.CAdd = function (item) {
        var self = this;
        self.push(item);
        return self;
    };
    ArrayCEClass.prototype.TAdd = function (item) {
        var self = this;
        self.push(item);
        return item;
    };
    ArrayCEClass.prototype.AddRange = function (array) {
        var e_2, _a;
        var self = this;
        try {
            //this.push(...array);
            // use loop, since sending them all as arguments fails when there are ~10000+ items
            for (var array_1 = __values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                var item = array_1_1.value;
                self.push(item);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this;
    };
    ArrayCEClass.prototype.Remove = function (item) {
        var self = this;
        var itemIndex = self.indexOf(item);
        if (itemIndex == -1)
            return false;
        self.splice(itemIndex, 1);
        return true;
    };
    ArrayCEClass.prototype.RemoveAll = function (items) {
        var e_3, _a;
        var self = this;
        try {
            for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                var item = items_2_1.value;
                exports.ArrayCE(self).Remove(item);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (items_2_1 && !items_2_1.done && (_a = items_2.return)) _a.call(items_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    ArrayCEClass.prototype.RemoveAt = function (index) {
        var self = this;
        return self.splice(index, 1)[0];
    };
    ArrayCEClass.prototype.Insert = function (index, obj) {
        var self = this;
        self.splice(index, 0, obj);
    };
    ArrayCEClass.prototype.SetItems = function (items) {
        var self = this;
        self.splice.apply(self, __spread([0, self.length], items));
        return self;
    };
    ArrayCEClass.prototype.Reversed = function () {
        var self = this;
        var clone = self.slice(0);
        clone.reverse();
        return clone;
    };
    //Object.prototype._AddFunction_Inline = function AsRef() { return new NodeReference_ByPath(this); }
    // Linq replacements
    // ----------
    ArrayCEClass.prototype.Any = function (matchFunc) {
        var e_4, _a;
        var self = this;
        try {
            for (var _b = __values(self.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                if (matchFunc == null || matchFunc.call(item, item, index)) {
                    return true;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return false;
    };
    ArrayCEClass.prototype.All = function (matchFunc) {
        var e_5, _a;
        var self = this;
        try {
            for (var _b = __values(self.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                if (!matchFunc.call(item, item, index)) {
                    return false;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return true;
    };
    ArrayCEClass.prototype.Where = function (matchFunc) {
        var e_6, _a;
        var self = this;
        var result = [];
        try {
            for (var _b = __values(self.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
                    result.push(item);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return result;
    };
    ArrayCEClass.prototype.Select = function (selectFunc) {
        var e_7, _a;
        var self = this;
        var result = [];
        try {
            for (var _b = __values(self.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                result.push(selectFunc.call(item, item, index));
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return result;
    };
    ArrayCEClass.prototype.SelectMany = function (selectFunc) {
        var e_8, _a;
        var self = this;
        //return [...this.entries()].reduce((acc, [index, item])=>acc.concat(selectFunc.call(item, item, index)), []);
        var result = [];
        try {
            for (var _b = __values(self.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                exports.ArrayCE(result).AddRange(selectFunc.call(item, item, index));
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return result;
    };
    //Count(matchFunc) { return this.Where(matchFunc).length; };
    //Count(matchFunc) { return this.Where(matchFunc).length; }; // needed for items to be added properly to custom classes that extend Array
    // needed for items to be added properly to custom classes that extend Array
    ArrayCEClass.prototype.Count = function () {
        var self = this;
        return self.length;
    };
    ;
    ArrayCEClass.prototype.VCount = function (matchFunc) {
        var self = this;
        return exports.ArrayCE(self).Where(matchFunc).length;
    };
    ArrayCEClass.prototype.Clear = function () {
        var self = this;
        /*while (this.length > 0)
            this.pop();*/
        self.splice(0, self.length);
    };
    /* interface Array<T> { /** Same as forEach, except breaks the loop when "true" is returned. *#/ forEach_break(callbackfn: (value: any, index: number, array: any[]) => boolean, thisArg?: any); }
    forEach_break(...args) { return this.some(...args); } */
    ArrayCEClass.prototype.First = function (matchFunc) {
        var self = this;
        var result = exports.ArrayCE(self).FirstOrX(matchFunc);
        if (result == null) {
            throw new Error("Matching item not found.");
        }
        return result;
    };
    ArrayCEClass.prototype.FirstOrX = function (matchFunc, x) {
        var e_9, _a;
        if (x === void 0) { x = null; }
        var self = this;
        if (matchFunc) {
            try {
                for (var _b = __values(self.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                    if (matchFunc.call(item, item, index)) {
                        return item;
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        else if (self.length > 0) {
            return self[0];
        }
        return x;
    };
    //FirstWithPropValue(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };
    ArrayCEClass.prototype.FirstWith = function (propName, propValue) {
        var self = this;
        return exports.ArrayCE(self).Where(function () { return this[propName] == propValue; })[0];
    };
    ArrayCEClass.prototype.Last = function (matchFunc) {
        var self = this;
        var result = exports.ArrayCE(self).LastOrX(matchFunc);
        if (result === undefined) {
            throw new Error("Matching item not found.");
        }
        return result;
    };
    ArrayCEClass.prototype.LastOrX = function (matchFunc, x) {
        if (x === void 0) { x = null; }
        var self = this;
        if (matchFunc) {
            for (var i = self.length - 1; i >= 0; i--) {
                if (matchFunc.call(this[i], this[i], i)) {
                    return this[i];
                }
            }
        }
        else if (self.length > 0) {
            return self[self.length - 1];
        }
        return x;
    };
    ArrayCEClass.prototype.XFromLast = function (x) {
        var self = this;
        return self[(self.length - 1) - x];
    };
    ArrayCEClass.prototype.Move = function (item, newIndex, newIndexAsPreRemovalIndexVSFinalIndex) {
        if (newIndexAsPreRemovalIndexVSFinalIndex === void 0) { newIndexAsPreRemovalIndexVSFinalIndex = false; }
        var self = this;
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
            exports.ArrayCE(self).Insert(newIndex, item);
            if (oldIndex != -1) {
                var oldEntry_currentIndex = newIndex <= oldIndex ? oldIndex + 1 : oldIndex; // if we just inserted the new version before the old entry, fix the old-entry's index by adding 1
                exports.ArrayCE(self).RemoveAt(oldEntry_currentIndex);
            }
        }
        else {
            if (oldIndex != -1) {
                exports.ArrayCE(self).RemoveAt(oldIndex);
            }
            exports.ArrayCE(self).Insert(newIndex, item);
        }
        return oldIndex;
    };
    //ToList<T>(this: ArrayLike<T>, itemType = null) { return [].concat(this); }
    /*ToDictionary(keyFunc, valFunc) {
        var result = new Dictionary();
        for (var i in this)
            result.Add(keyFunc(this[i]), valFunc(this[i]));
        return result;
    }*/
    ArrayCEClass.prototype.ToMap = function (keyFunc, valFunc) {
        var e_10, _a;
        var self = this;
        var result = {};
        try {
            for (var _b = __values(self.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                result[keyFunc(item, index)] = valFunc(item, index);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return result;
    };
    ArrayCEClass.prototype.Skip = function (count) {
        var self = this;
        var result = [];
        for (var i = count; i < self.length; i++) {
            result.push(self[i]);
        }
        return result;
    };
    ArrayCEClass.prototype.Take = function (count) {
        var self = this;
        var result = [];
        for (var i = 0; i < count && i < self.length; i++) {
            result.push(self[i]);
        }
        return result;
    };
    ArrayCEClass.prototype.TakeLast = function (count) {
        var self = this;
        var result = [];
        for (var i = 0; i < count && (self.length - 1) - i >= 0; i++) {
            result.push(self[(self.length - 1) - i]);
        }
        return result;
    };
    ArrayCEClass.prototype.FindIndex = function (matchFunc) {
        var e_11, _a;
        var self = this;
        try {
            for (var _b = __values(self.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
                    return index;
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return -1;
    };
    /*FindIndex(matchFunc: (item: T)=>boolean) {
        for (let [index, item] of this.entries())
            if (matchFunc.call(item, item))
                    return index;
        return -1;
    };*/
    ArrayCEClass.prototype.OrderBy = function (valFunc) {
        if (valFunc === void 0) { valFunc = function (item, index) { return item; }; }
        var self = this;
        /*var temp = this.ToList();
        temp.sort((a, b)=>V.Compare(valFunc(a), valFunc(b)));
        return temp;*/
        return General_1.StableSort(self, function (a, b, aIndex, bIndex) { return General_1.Compare(valFunc(a, aIndex), valFunc(b, bIndex)); });
    };
    ArrayCEClass.prototype.OrderByDescending = function (valFunc) {
        if (valFunc === void 0) { valFunc = function (item, index) { return item; }; }
        var self = this;
        return exports.ArrayCE(self).OrderBy(function (item, index) { return -valFunc(item, index); });
    };
    ArrayCEClass.prototype.Distinct = function () {
        var self = this;
        var result = [];
        for (var i in self) {
            if (!self.hasOwnProperty(i))
                continue;
            if (!exports.ArrayCE(result).Contains(self[i])) {
                result.push(self[i]);
            }
        }
        return result;
    };
    ArrayCEClass.prototype.Except = function () {
        var _a, e_12, _b;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var self = this;
        var excludeItems, excludeEachOnlyOnce = true;
        if (args[0] instanceof Array)
            _a = __read(args, 2), excludeItems = _a[0], excludeEachOnlyOnce = _a[1];
        else
            excludeItems = args;
        if (excludeEachOnlyOnce) {
            var result = self.slice();
            try {
                for (var excludeItems_1 = __values(excludeItems), excludeItems_1_1 = excludeItems_1.next(); !excludeItems_1_1.done; excludeItems_1_1 = excludeItems_1.next()) {
                    var excludeItem = excludeItems_1_1.value;
                    exports.ArrayCE(result).Remove(excludeItem);
                }
            }
            catch (e_12_1) { e_12 = { error: e_12_1 }; }
            finally {
                try {
                    if (excludeItems_1_1 && !excludeItems_1_1.done && (_b = excludeItems_1.return)) _b.call(excludeItems_1);
                }
                finally { if (e_12) throw e_12.error; }
            }
            return result;
        }
        return exports.ArrayCE(self).Where(function (a) { return !excludeItems.Contains(a); });
    };
    ArrayCEClass.prototype.IfEmptyThen = function (valIfSelfIsEmpty) {
        var self = this;
        return self.length == 0 ? valIfSelfIsEmpty : this;
    };
    //JoinUsing(separator) { return this.join(separator);};
    ArrayCEClass.prototype.Min = function (valFunc, asNumbers) {
        if (asNumbers === void 0) { asNumbers = false; }
        var self = this;
        if (asNumbers) {
            /*let values = valFunc ? this.map(valFunc) : this;
            return Math.min(...values);*/
            Assert_1.Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
            return Math.min.apply(Math, __spread(this));
        }
        return exports.ArrayCE(exports.ArrayCE(self).OrderBy(valFunc)).FirstOrX();
    };
    ArrayCEClass.prototype.Max = function (valFunc, asNumbers) {
        if (asNumbers === void 0) { asNumbers = false; }
        var self = this;
        if (asNumbers) {
            /*let values = valFunc ? this.map(valFunc) : this;
            return Math.max(...values);*/
            Assert_1.Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
            return Math.max.apply(Math, __spread(this));
        }
        return exports.ArrayCE(exports.ArrayCE(self).OrderBy(valFunc)).LastOrX();
    };
    ArrayCEClass.prototype.Sum = function () {
        var e_13, _a;
        var self = this;
        var total = 0;
        try {
            for (var self_1 = __values(self), self_1_1 = self_1.next(); !self_1_1.done; self_1_1 = self_1.next()) {
                var item = self_1_1.value;
                total += item;
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (self_1_1 && !self_1_1.done && (_a = self_1.return)) _a.call(self_1);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return total;
    };
    ArrayCEClass.prototype.Average = function () {
        var self = this;
        var total = exports.ArrayCE(self).Sum();
        return total / self.length;
    };
    ArrayCEClass.prototype.Median = function () {
        var self = this;
        var ordered = exports.ArrayCE(self).OrderBy(function (a) { return a; });
        if (self.length % 2 == 0) { // if even number of elements, average two middlest ones
            return ordered[(self.length / 2) - 1] + ordered[self.length / 2];
        }
        return ordered[self.length / 2]; // otherwise, return the exactly-middle one
    };
    ArrayCEClass.prototype.Random = function () {
        var self = this;
        var index = Math.floor(Math.random() * self.length);
        return this[index];
    };
    ArrayCEClass.prototype.join = function (separator) {
        if (separator === void 0) { separator = ","; }
        var self = this;
        if (self.length == 0)
            return "";
        //let result = "" + this[0];
        var result = this[0] != null ? "" + this[0] : ""; // to match behavior of native join
        for (var i = 1, len = self.length; i < len; i++) {
            result += separator;
            result += this[i] != null ? "" + this[i] : "";
        }
        /*let oldResult = oldJoin.apply(this, arguments);
        if (oldResult != result) debugger;*/
        return result;
    };
    return ArrayCEClass;
}());
exports.ArrayCEClass = ArrayCEClass;
//export const ArrayCE = CreateWrapperForClassExtensions(ArrayCEClass);
//export const ArrayCE = CreateWrapperForClassExtensions<ArrayCEClass<any>>(ArrayCEClass);
var ArrayCE_Base = General_1.CreateWrapperForClassExtensions(ArrayCEClass);
//export const ArrayCE = ArrayCE_Base as any as <T>(nextThis: T[])=>WithFuncThisArgsAsAny_Type<ArrayCEClass<T>>;
exports.ArrayCE = ArrayCE_Base;
//export const ArrayCE = ArrayCE_Base as any as <T>(nextThis: T[])=>WithFuncThisArgsAsXOrWrapped_Type<ArrayCEClass<T>>;
exports.ArrayCES = General_1.WithFuncsStandalone(ArrayCEClass.prototype);
/*var ArrayIterator = [].entries().constructor;
export class ArrayIteratorCEClass {
    ToArray(this: ArrayIterator) {
        return Array.from(this);
    }
}
export const ArrayIteratorCE = CreateWrapperForClassExtensions(ArrayIteratorCEClass);*/
/*export class NodeListCEClass {
    ToArray(this: NodeList) {
        return Array.from(this);
    }
}
export const NodeListCE = CreateWrapperForClassExtensions(NodeListCEClass);*/ 
//# sourceMappingURL=CE_Array.js.map