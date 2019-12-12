"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = require("../Utils/General");
var CE_Array_1 = require("./CE_Array");
var Types_1 = require("../Utils/Types");
var CE_Others_1 = require("./CE_Others");
/*export type WithFuncThisArgsAsXOrWrapped_Type<Source> = {
    [P in keyof Source]:
        Source[P] extends (this: infer ThisArgType, ...args)=>any ? (this: XOrWrapped<ThisArgType>, ...args: Parameters<Source[P]>)=>ReturnType<Source[P]> :
        Source[P];
};
export function WithFuncThisArgsAsXOrWrapped<Source>(source: Source): WithFuncThisArgsAsXOrWrapped_Type<Source> {
    return source as any;
}*/
exports.specialKeys = ["_", "_key", "_id"];
exports.ObjectCE_funcs = {
    // base
    // ==========
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    _AddItem: function (name, value, forceAdd) {
        if (forceAdd === void 0) { forceAdd = false; }
        if (name == null || name.length == 0)
            throw new Error("No prop-name was specified for _AddItem() call.");
        if (name in this)
            delete this[name];
        if (name in this && !forceAdd)
            return; // workaround for some properties not being deleted
        Object.defineProperty(this, name, {
            configurable: true,
            value: value
        });
        /*if (this[name] == null)
            throw new Error(`Failed to add property "${name}" to type "${this}".`);*/
    },
    _AddFunction: function (name, func) {
        //this._AddItem(func.name || func.toString().match(/^function\s*([^\s(]+)/)[1], func);
        exports.ObjectCES._AddItem(this, name, func);
    },
    // the below helps you do stuff like this:
    //		Array.prototype._AddGetterSetter("AddX", null, function(value) { this.push(value); }); [].AddX = "newItem";
    _AddGetterSetter: function (name, getter, setter) {
        //var name = (getter || setter).name || (getter || setter).toString().match(/^function\s*([^\s(]+)/)[1];
        if (name in this)
            delete this[name];
        if (name in this)
            return; // workaround for some properties not being deleted
        var info = { configurable: true };
        if (getter)
            info.get = getter;
        if (setter)
            info.set = setter;
        Object.defineProperty(this, name, info);
    },
    // the below helps you do stuff like this:
    //		Array.prototype._AddFunction_Inline = function AddX(value) { this.push(value); }; [].AddX = "newItem";
    set _AddFunction_Inline(func) {
        exports.ObjectCES._AddFunction(this, CE_Others_1.FunctionCE(func).GetName(), func);
    },
    set _AddGetter_Inline(func) {
        exports.ObjectCES._AddGetterSetter(this, CE_Others_1.FunctionCE(func).GetName(), func, null);
    },
    set _AddSetter_Inline(func) {
        exports.ObjectCES._AddGetterSetter(this, CE_Others_1.FunctionCE(func).GetName(), null, func);
    },
    // normal
    // ==========
    //Object.prototype._AddSetter_Inline = function ExtendWith_Inline(value) { this.ExtendWith(value); };
    //ExtendWith(value) { $.extend(this, value); };
    /*GetItem_SetToXIfNull(itemName, /*;optional:*#/ defaultValue) {
        if (!this[itemName])
            this[itemName] = defaultValue;
        return this[itemName];
    };*/
    // must also do it on window/global, for some reason
    /*g.Extend = function(x) {
        for (var name in x) {
            var value = x[name];
            //if (value !== undefined)
            this[name] = value;
        }
        return this;
    };*/
    Extend: function (x, copyNonEnumerable) {
        var e_1, _a;
        if (copyNonEnumerable === void 0) { copyNonEnumerable = true; }
        if (x != null) {
            try {
                for (var _b = __values(Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](x)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    //if (!x.hasOwnProperty(key)) continue;
                    var value = x[key];
                    //if (value !== undefined)
                    this[key] = value;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return this;
    },
    // as replacement for C#'s "new MyClass() {prop = true}"
    /*VSet<T>(this: T, propName: string, propValue, options?: VSet_Options): TargetTFor<T>;
    //VSet<T extends RealThis>(this: T, props: any, options?: VSet_Options): T; // variant for ObjectCE(obj).X calls (those types only uses the last declaration, and they need "extend RealThis" since we any-ify the this-param)
    VSet<T>(this: T, props: any, options?: VSet_Options): TargetTFor<T>; // this one needs to be last (best override for the CE(...) wrapper, and it can only extract the last one)*/
    VSet: (function () {
        var _a, _b, e_2, _c;
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var props, opt, propName, propValue;
        if (typeof args[0] == "object")
            _a = __read(args, 2), props = _a[0], opt = _a[1];
        else
            _b = __read(args, 3), propName = _b[0], propValue = _b[1], opt = _b[2];
        opt = opt || {};
        var copyNonEnumerable = opt.copyNonEnumerable != null ? opt.copyNonEnumerable : true;
        var SetProp = function (name, value) {
            if (value === General_1.DEL || (value === undefined && opt.deleteUndefined) || (value === null && opt.deleteNull) || (value === "" && opt.deleteEmpty)) {
                delete _this[name];
                return;
            }
            if (opt.prop) {
                Object.defineProperty(_this, name, Object.assign({ configurable: true }, opt.prop, { value: value }));
            }
            else {
                _this[name] = value;
            }
        };
        if (props) {
            try {
                /*for (let key in props) {
                    if (!props.hasOwnProperty(key)) continue;*/
                for (var _d = __values(Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](props)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var key = _e.value;
                    SetProp(key, props[key]);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else {
            SetProp(propName, propValue);
        }
        return this;
    }),
    Extended: function (x, copyNonEnumerable) {
        var e_3, _a, e_4, _b;
        if (copyNonEnumerable === void 0) { copyNonEnumerable = true; }
        var result = this instanceof Array ? [] : {};
        try {
            for (var _c = __values(Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](this)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                result[key] = this[key];
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (x) {
            try {
                for (var _e = __values(Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](x)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var key = _f.value;
                    result[key] = x[key];
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return result;
    },
    /*interface Object { Extended2<T>(this, x: T): T; }
    Extended2(x) {
        return this.Extended(x);
    };*/
    //E(x) { return this.Extended(x); };
    SafeGet: (function (pathOrPathGetterFunc, resultIfNull) {
        var pathSegments = typeof pathOrPathGetterFunc == "string" ? pathOrPathGetterFunc : General_1.ConvertPathGetterFuncToPropChain(pathOrPathGetterFunc);
        return General_1.DeepGet(this, pathSegments, resultIfNull);
    }),
    VAct: function (func) {
        func.call(this, this);
        return this;
    },
    As: function (type) {
        Object.setPrototypeOf(this, type.prototype);
        return this;
    },
    Strip: function () {
        Object.setPrototypeOf(this, Object.getPrototypeOf({}));
        return this;
    },
    Including: function () {
        var e_5, _a;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var result = this instanceof Array ? [] : {};
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                //if (!this.hasOwnProperty(key)) continue;
                if (!(key in this))
                    continue; // we include the value, even if from prototype (user wouldn't list in keys array if didn't want it)
                result[key] = this[key];
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return result;
    },
    Excluding: function () {
        var e_6, _a;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        //var result = Clone(this); // doesn't work with funcs
        var result = Object.assign(this instanceof Array ? [] : {}, this);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                delete result[key];
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_a = keys_2.return)) _a.call(keys_2);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return result;
    },
    IsOneOf: function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        if (CE_Array_1.ArrayCE(values).Contains(this)) {
            return true;
        }
        // if the value-list contains the primitive-version of self, consider it a match -- otherwise calling "test1".IsOneOf("test1", "test2") would fail
        var isObjectFormOfPrimitive = this instanceof Boolean || this instanceof Number || this instanceof String;
        if (isObjectFormOfPrimitive && CE_Array_1.ArrayCE(values).Contains(this.valueOf())) {
            return true;
        }
        return false;
    },
    // todo: probably remove Props(), and instead just use Pairs(), since Props() sounds odd when used on arrays
    /*declare global {
        interface Object {
            Props<T>(this: {[key: number]: T} | {[key: string]: T}, excludeSpecialProps?: boolean): {index: number, name: string, value: T}[];
            Props<T>(excludeSpecialProps?: boolean): {index: number, name: string, value: T}[];
        }
    }
    //interface Object { Props<ValueType>(excludeSpecialProps?: boolean): {index: number, name: string, value: ValueType}[]; }
    Props(excludeSpecialProps = false) {
        var result = [];
        var i = 0;
        for (var propName in this) {
            if (excludeSpecialProps && (propName == "_" || propName == "_key" || propName == "_id")) continue;
            //result.push({index: i++, key: propName, name: propName, value: this[propName]});
            result.push({index: i++, name: propName, value: this[propName]});
        }
        return result;
    },*/
    Pairs: (function (excludeSpecialKeys) {
        var e_7, _a;
        if (excludeSpecialKeys === void 0) { excludeSpecialKeys = false; }
        var result = [];
        var i = 0;
        var keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        try {
            for (var keys_3 = __values(keys), keys_3_1 = keys_3.next(); !keys_3_1.done; keys_3_1 = keys_3.next()) {
                var key = keys_3_1.value;
                if (excludeSpecialKeys && (key == "_" || key == "_key" || key == "_id"))
                    continue;
                var entry = { index: i++, key: key, keyNum: Number(key), value: this instanceof Map ? this.get(key) : this[key] };
                if (Types_1.IsNaN(entry.keyNum))
                    delete entry.keyNum;
                result.push(entry);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (keys_3_1 && !keys_3_1.done && (_a = keys_3.return)) _a.call(keys_3);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return result;
    }),
    VKeys: (function (excludeSpecialKeys) {
        if (excludeSpecialKeys === void 0) { excludeSpecialKeys = false; }
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.name);
        var keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        if (excludeSpecialKeys)
            keys = CE_Array_1.ArrayCE(keys).Except(exports.specialKeys);
        return keys;
    }),
    VValues: (function (excludeSpecialKeys) {
        var _this = this;
        if (excludeSpecialKeys === void 0) { excludeSpecialKeys = false; }
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.value);
        return exports.ObjectCES.VKeys(this, excludeSpecialKeys).map(function (key) { return _this instanceof Map ? _this.get(key) : _this[key]; });
    }),
    // for symbols
    /*Pairs_Sym() {
    };*/
    Sym: function (symbolName) {
        var symbols = Object.getOwnPropertySymbols(this);
        var symbol = symbols.find(function (a) { return a.toString() == "Symbol(" + symbolName + ")"; });
        return this[symbol];
    },
};
//export const ObjectCE = WithFuncsStandalone(ObjectCEProxy.prototype);
//export const ObjectCE = CreateProxyForClassExtensions(ObjectCEProxy);
exports.ObjectCE = General_1.CreateProxyForClassExtensions(exports.ObjectCE_funcs);
exports.ObjectCES = General_1.WithFuncsStandalone(exports.ObjectCE_funcs);
//# sourceMappingURL=CE_Object.js.map