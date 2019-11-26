import { IsNaN, Assert, DEL, ConvertPathGetterFuncToPropChain, ArrayCE } from "..";
import { DeepGet, Clone, CreateWrapperForClassExtensions } from "../Utils/General";
export const specialKeys = ["_", "_key", "_id"];
export class ObjectCEClass {
    // base
    // ==========
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    _AddItem(name, value, forceAdd = false) {
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
    }
    _AddFunction(name, func) {
        //this._AddItem(func.name || func.toString().match(/^function\s*([^\s(]+)/)[1], func);
        this._AddItem(name, func);
    }
    // the below helps you do stuff like this:
    //		Array.prototype._AddGetterSetter("AddX", null, function(value) { this.push(value); }); [].AddX = "newItem";
    _AddGetterSetter(name, getter, setter) {
        //var name = (getter || setter).name || (getter || setter).toString().match(/^function\s*([^\s(]+)/)[1];
        if (name in this)
            delete this[name];
        if (name in this)
            return; // workaround for some properties not being deleted
        let info = { configurable: true, enumerable: false };
        if (getter)
            info.get = getter;
        if (setter)
            info.set = setter;
        Object.defineProperty(this, name, info);
    }
    // the below helps you do stuff like this:
    //		Array.prototype._AddFunction_Inline = function AddX(value) { this.push(value); }; [].AddX = "newItem";
    set _AddFunction_Inline(func) {
        this._AddFunction(func.GetName(), func);
    }
    set _AddGetter_Inline(func) {
        this._AddGetterSetter(func.GetName(), func, null);
    }
    set _AddSetter_Inline(func) {
        this._AddGetterSetter(func.GetName(), null, func);
    }
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
    Extend(x) {
        for (var name in x) {
            var value = x[name];
            //if (value !== undefined)
            this[name] = value;
        }
        return this;
    }
    VSet(...args) {
        let props, options, propName, propValue;
        if (typeof args[0] == "object")
            [props, options] = args;
        else
            [propName, propValue, options] = args;
        options = options || {};
        const SetProp = (name, value) => {
            if (value === DEL || (value === undefined && options.deleteUndefined) || (value === null && options.deleteNull) || (value === "" && options.deleteEmpty)) {
                delete this[name];
                return;
            }
            if (options.prop) {
                Object.defineProperty(this, name, Object.assign({ configurable: true }, options.prop, { value }));
            }
            else {
                this[name] = value;
            }
        };
        if (props) {
            for (let name in props) {
                SetProp(name, props[name]);
            }
        }
        else {
            SetProp(propName, propValue);
        }
        return this;
    }
    Extended(x) {
        let result = this instanceof Array ? [] : {};
        for (let name in this) {
            result[name] = this[name];
        }
        if (x) {
            for (let name in x) {
                result[name] = x[name];
            }
        }
        return result;
    }
    ;
    SafeGet(pathOrPathGetterFunc, resultIfNull) {
        let pathSegments = typeof pathOrPathGetterFunc == "string" ? pathOrPathGetterFunc : ConvertPathGetterFuncToPropChain(pathOrPathGetterFunc);
        return DeepGet(this, pathSegments, resultIfNull);
    }
    VAct(func) {
        func.call(this, this);
        return this;
    }
    As(type) {
        Object.setPrototypeOf(this, type.prototype);
        return this;
    }
    ;
    Strip() {
        Object.setPrototypeOf(this, Object.getPrototypeOf({}));
        return this;
    }
    Including(...propNames) {
        var result = {};
        for (let propName of propNames) {
            if (propName in this) {
                result[propName] = this[propName];
            }
        }
        return result;
    }
    Excluding(...propNames) {
        var result = Clone(this);
        for (let propName of propNames) {
            delete result[propName];
        }
        return result;
    }
    IsOneOf(...values) {
        if (ArrayCE(values).Contains(this)) {
            return true;
        }
        // if the value-list contains the primitive-version of self, consider it a match -- otherwise calling "test1".IsOneOf("test1", "test2") would fail
        let isObjectFormOfPrimitive = this instanceof Boolean || this instanceof Number || this instanceof String;
        if (isObjectFormOfPrimitive && ArrayCE(values).Contains(this.valueOf())) {
            return true;
        }
        return false;
    }
    Pairs(excludeSpecialKeys = false) {
        var result = [];
        var i = 0;
        let keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        for (let key of keys) {
            if (excludeSpecialKeys && (key == "_" || key == "_key" || key == "_id"))
                continue;
            let entry = { index: i++, key, keyNum: Number(key), value: this instanceof Map ? this.get(key) : this[key] };
            if (IsNaN(entry.keyNum))
                delete entry.keyNum;
            result.push(entry);
        }
        return result;
    }
    VKeys(excludeSpecialKeys = false) {
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.name);
        let keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        if (excludeSpecialKeys)
            keys = ArrayCE(keys).Except(specialKeys);
        return keys;
    }
    //interface Object { VValues(excludeSpecialKeys?: boolean): any[]; }
    VValues(excludeSpecialKeys = false) {
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.value);
        return this.VKeys(excludeSpecialKeys).map(key => this instanceof Map ? this.get(key) : this[key]);
    }
    // for symbols
    /*Pairs_Sym() {
    };*/
    Sym(symbolName) {
        let symbols = Object.getOwnPropertySymbols(this);
        let symbol = symbols.find(a => a.toString() == `Symbol(${symbolName})`);
        return this[symbol];
    }
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
    FA_Select(selectFunc) {
        Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
        /*var result = this instanceof List ? new List(this.itemType) : [];
        for (let [index, item] of this.entries())
            result.Add(selectFunc.call(item, item, index));
        return result;*/
        return ObjectCE(this).VValues(true).map(selectFunc);
    }
    ;
    FA_RemoveAt(index) {
        Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
        if (!(index in this))
            return;
        // remove target entry
        delete this[index];
        // move all the later entries down one index
        for (var i = index + 1; i in this; i++)
            this[i - 1] = this[i];
        delete this[i - 1]; // remove the extra copy of the last-item 
    }
    ;
    FA_Add(item) {
        Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
        for (var openIndex = 0; openIndex in this; openIndex++)
            ;
        this[openIndex] = item;
    }
    ;
}
//export const ObjectCE = WithFuncsStandalone(ObjectCEClass.prototype);
//export const ObjectCE = CreateWrapperForClassExtensions(ObjectCEClass);
const ObjectCE_Base = CreateWrapperForClassExtensions(ObjectCEClass);
export const ObjectCE = ObjectCE_Base;
/*class Test1{
    Test2() {}
}
ObjectCE(new Test1()).VSet({}).Test2*/ 
//# sourceMappingURL=CE_Object.js.map