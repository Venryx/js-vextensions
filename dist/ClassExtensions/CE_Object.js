"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = require("../Utils/General");
var CE_Array_1 = require("./CE_Array");
var Types_1 = require("../Utils/Types");
var Assert_1 = require("../Utils/Assert");
var CE_Others_1 = require("./CE_Others");
exports.specialKeys = ["_", "_key", "_id"];
var ObjectCEClass = /** @class */ (function () {
    function ObjectCEClass() {
    }
    // base
    // ==========
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    ObjectCEClass.prototype._AddItem = function (name, value, forceAdd) {
        if (forceAdd === void 0) { forceAdd = false; }
        if (name == null || name.length == 0)
            throw new Error("No prop-name was specified for _AddItem() call.");
        if (name in this)
            delete this[name];
        if (name in this && !forceAdd)
            return; // workaround for some properties not being deleted
        Object.defineProperty(this, name, {
            configurable: true,
            enumerable: false,
            value: value
        });
        /*if (this[name] == null)
            throw new Error(`Failed to add property "${name}" to type "${this}".`);*/
    };
    ObjectCEClass.prototype._AddFunction = function (name, func) {
        //this._AddItem(func.name || func.toString().match(/^function\s*([^\s(]+)/)[1], func);
        exports.ObjectCE(this)._AddItem(name, func);
    };
    // the below helps you do stuff like this:
    //		Array.prototype._AddGetterSetter("AddX", null, function(value) { this.push(value); }); [].AddX = "newItem";
    ObjectCEClass.prototype._AddGetterSetter = function (name, getter, setter) {
        //var name = (getter || setter).name || (getter || setter).toString().match(/^function\s*([^\s(]+)/)[1];
        if (name in this)
            delete this[name];
        if (name in this)
            return; // workaround for some properties not being deleted
        var info = { configurable: true, enumerable: false };
        if (getter)
            info.get = getter;
        if (setter)
            info.set = setter;
        Object.defineProperty(this, name, info);
    };
    Object.defineProperty(ObjectCEClass.prototype, "_AddFunction_Inline", {
        // the below helps you do stuff like this:
        //		Array.prototype._AddFunction_Inline = function AddX(value) { this.push(value); }; [].AddX = "newItem";
        set: function (func) {
            exports.ObjectCE(this)._AddFunction(CE_Others_1.FunctionCE(func).GetName(), func);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectCEClass.prototype, "_AddGetter_Inline", {
        set: function (func) {
            exports.ObjectCE(this)._AddGetterSetter(CE_Others_1.FunctionCE(func).GetName(), func, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectCEClass.prototype, "_AddSetter_Inline", {
        set: function (func) {
            exports.ObjectCE(this)._AddGetterSetter(CE_Others_1.FunctionCE(func).GetName(), null, func);
        },
        enumerable: true,
        configurable: true
    });
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
    ObjectCEClass.prototype.Extend = function (x) {
        for (var key in x) {
            if (!x.hasOwnProperty(key))
                continue;
            var value = x[key];
            //if (value !== undefined)
            this[key] = value;
        }
        return this;
    };
    ObjectCEClass.prototype.VSet = function () {
        var _a, _b;
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var props, options, propName, propValue;
        if (typeof args[0] == "object")
            _a = __read(args, 2), props = _a[0], options = _a[1];
        else
            _b = __read(args, 3), propName = _b[0], propValue = _b[1], options = _b[2];
        options = options || {};
        var SetProp = function (name, value) {
            if (value === General_1.DEL || (value === undefined && options.deleteUndefined) || (value === null && options.deleteNull) || (value === "" && options.deleteEmpty)) {
                delete _this[name];
                return;
            }
            if (options.prop) {
                Object.defineProperty(_this, name, Object.assign({ configurable: true }, options.prop, { value: value }));
            }
            else {
                _this[name] = value;
            }
        };
        if (props) {
            for (var key in props) {
                if (!props.hasOwnProperty(key))
                    continue;
                SetProp(key, props[key]);
            }
        }
        else {
            SetProp(propName, propValue);
        }
        return this;
    };
    ObjectCEClass.prototype.Extended = function (x) {
        var result = this instanceof Array ? [] : {};
        for (var key in this) {
            if (!this.hasOwnProperty(key))
                continue;
            result[key] = this[key];
        }
        if (x) {
            for (var key in x) {
                if (!x.hasOwnProperty(key))
                    continue;
                result[key] = x[key];
            }
        }
        return result;
    };
    ;
    ObjectCEClass.prototype.SafeGet = function (pathOrPathGetterFunc, resultIfNull) {
        var pathSegments = typeof pathOrPathGetterFunc == "string" ? pathOrPathGetterFunc : General_1.ConvertPathGetterFuncToPropChain(pathOrPathGetterFunc);
        return General_1.DeepGet(this, pathSegments, resultIfNull);
    };
    ObjectCEClass.prototype.VAct = function (func) {
        func.call(this, this);
        return this;
    };
    ObjectCEClass.prototype.As = function (type) {
        Object.setPrototypeOf(this, type.prototype);
        return this;
    };
    ;
    ObjectCEClass.prototype.Strip = function () {
        Object.setPrototypeOf(this, Object.getPrototypeOf({}));
        return this;
    };
    ObjectCEClass.prototype.Including = function () {
        var e_1, _a;
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    ObjectCEClass.prototype.Excluding = function () {
        var e_2, _a;
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
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_a = keys_2.return)) _a.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    };
    ObjectCEClass.prototype.IsOneOf = function () {
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
    };
    ObjectCEClass.prototype.Pairs = function (excludeSpecialKeys) {
        var e_3, _a;
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
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (keys_3_1 && !keys_3_1.done && (_a = keys_3.return)) _a.call(keys_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    };
    ObjectCEClass.prototype.VKeys = function (excludeSpecialKeys) {
        if (excludeSpecialKeys === void 0) { excludeSpecialKeys = false; }
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.name);
        var keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        if (excludeSpecialKeys)
            keys = CE_Array_1.ArrayCE(keys).Except(exports.specialKeys);
        return keys;
    };
    //interface Object { VValues(excludeSpecialKeys?: boolean): any[]; }
    ObjectCEClass.prototype.VValues = function (excludeSpecialKeys) {
        var _this = this;
        if (excludeSpecialKeys === void 0) { excludeSpecialKeys = false; }
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.value);
        return exports.ObjectCE(this).VKeys(excludeSpecialKeys).map(function (key) { return _this instanceof Map ? _this.get(key) : _this[key]; });
    };
    // for symbols
    /*Pairs_Sym() {
    };*/
    ObjectCEClass.prototype.Sym = function (symbolName) {
        var symbols = Object.getOwnPropertySymbols(this);
        var symbol = symbols.find(function (a) { return a.toString() == "Symbol(" + symbolName + ")"; });
        return this[symbol];
    };
    ;
    // this is a total hack : P -- fixes typescript-es2017 "TypeError: [module].default is not a constructor" issue
    /*Object.prototype._AddGetterSetter("default", function() {
        return this;
    }, function(value) {
        /*delete this.default;
        this.default = value;*#/
        Object.defineProperty(this, "default", {configurable: true, enumerable: false, value});
    });*/
    // Object[FakeArray]
    // ==========
    ObjectCEClass.prototype.FA_Select = function (selectFunc) {
        Assert_1.Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
        /*var result = this instanceof List ? new List(this.itemType) : [];
        for (let [index, item] of this.entries())
            result.Add(selectFunc.call(item, item, index));
        return result;*/
        return exports.ObjectCE(this).VValues(true).map(selectFunc);
    };
    ;
    ObjectCEClass.prototype.FA_RemoveAt = function (index) {
        Assert_1.Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
        if (!(index in this))
            return;
        // remove target entry
        delete this[index];
        // move all the later entries down one index
        for (var i = index + 1; i in this; i++) {
            this[i - 1] = this[i];
        }
        delete this[i - 1]; // remove the extra copy of the last-item 
    };
    ;
    ObjectCEClass.prototype.FA_Add = function (item) {
        Assert_1.Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
        for (var openIndex = 0; openIndex in this; openIndex++)
            ;
        this[openIndex] = item;
    };
    ;
    return ObjectCEClass;
}());
exports.ObjectCEClass = ObjectCEClass;
//export const ObjectCE = WithFuncsStandalone(ObjectCEClass.prototype);
//export const ObjectCE = CreateWrapperForClassExtensions(ObjectCEClass);
var ObjectCE_Base = General_1.CreateWrapperForClassExtensions(ObjectCEClass);
exports.ObjectCE = ObjectCE_Base;
exports.ObjectCES = General_1.WithFuncsStandalone(ObjectCEClass.prototype);
/*class Test1{
    Test2() {}
}
ObjectCE(new Test1()).VSet({}).Test2
ObjectCE(new Object()).Pairs()[0].key;*/ 
//# sourceMappingURL=CE_Object.js.map