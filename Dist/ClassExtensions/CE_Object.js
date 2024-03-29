import { ConvertPathGetterFuncToPropChain, CreateProxyForClassExtensions, DeepGet, DEL, OMIT, WithFuncsStandalone } from "../Utils/General.js";
import { IsNaN, IsString, IsSymbol } from "../Utils/Types.js";
import { ArrayCE } from "./CE_Array.js";
import { FunctionCE } from "./CE_Others.js";
/*export type WithFuncThisArgsAsXOrWrapped_Type<Source> = {
    [P in keyof Source]:
        Source[P] extends (this: infer ThisArgType, ...args)=>any ? (this: XOrWrapped<ThisArgType>, ...args: Parameters<Source[P]>)=>ReturnType<Source[P]> :
        Source[P];
};
export function WithFuncThisArgsAsXOrWrapped<Source>(source: Source): WithFuncThisArgsAsXOrWrapped_Type<Source> {
    return source as any;
}*/
//export const specialKeys = ["_", "_key", "_id"];
export const ObjectCE_funcs = {
    // base
    // ==========
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    _AddItem(name, value, forceAdd = false) {
        if (name == null || name.length == 0) {
            throw new Error("No prop-name was specified for _AddItem() call.");
        }
        if (name in this)
            delete this[name];
        if (name in this && !forceAdd)
            return; // workaround for some properties not being deleted
        Object.defineProperty(this, name, {
            configurable: true,
            value,
        });
        /*if (this[name] == null)
            throw new Error(`Failed to add property "${name}" to type "${this}".`);*/
    },
    _AddFunction(name, func) {
        //this._AddItem(func.name || func.toString().match(/^function\s*([^\s(]+)/)[1], func);
        ObjectCES._AddItem(this, name, func);
    },
    // the below helps you do stuff like this:
    //		Array.prototype._AddGetterSetter("AddX", null, function(value) { this.push(value); }); [].AddX = "newItem";
    _AddGetterSetter(name, getter, setter) {
        //var name = (getter || setter).name || (getter || setter).toString().match(/^function\s*([^\s(]+)/)[1];
        if (name in this)
            delete this[name];
        if (name in this)
            return; // workaround for some properties not being deleted
        const info = { configurable: true };
        if (getter)
            info.get = getter;
        if (setter)
            info.set = setter;
        Object.defineProperty(this, name, info);
    },
    // the below helps you do stuff like this:
    //		Array.prototype._AddFunction_Inline = function AddX(value) { this.push(value); }; [].AddX = "newItem";
    set _AddFunction_Inline(func) {
        ObjectCES._AddFunction(this, FunctionCE(func).GetName(), func);
    },
    set _AddGetter_Inline(func) {
        ObjectCES._AddGetterSetter(this, FunctionCE(func).GetName(), func, null);
    },
    set _AddSetter_Inline(func) {
        ObjectCES._AddGetterSetter(this, FunctionCE(func).GetName(), null, func);
    },
    // normal
    // ==========
    As(type) {
        if (this instanceof type) {
            return this;
        }
        return null;
    },
    Cast(type) {
        Object.setPrototypeOf(this, type.prototype);
        return this;
    },
    Strip() {
        Object.setPrototypeOf(this, Object.getPrototypeOf({}));
        return this;
    },
    /** Executes the given function (passing "this" as the func's "this", and only argument), then returns "this". */
    VAct(func) {
        func.call(this, this);
        return this;
    },
    /** Executes the given function (passing "this" as the func's "this", and only argument). If the func's result is truthy, returns "this"; else, returns null. */
    Check(func) {
        const result = func.call(this, this);
        if (result)
            return this;
        return null;
    },
    /* Executes the given function (passing "this" as the func's "this", and only argument), then returns the func's result. */
    VGet(func) {
        return func.call(this, this);
    },
    SafeGet: (function (pathOrPathGetterFunc, resultIfNull) {
        const pathSegments = typeof pathOrPathGetterFunc == "string" ? pathOrPathGetterFunc : ConvertPathGetterFuncToPropChain(pathOrPathGetterFunc);
        return DeepGet(this, pathSegments, resultIfNull);
    }),
    // todo: maybe remove/merge these
    Extend(x, copyNonEnumerable = false) {
        if (x != null) {
            for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](x)) {
                const value = x[key];
                this[key] = value;
            }
        }
        return this;
    },
    Extended(x, copyNonEnumerable = false) {
        const result = this instanceof Array ? [] : {};
        for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](this)) {
            result[key] = this[key];
        }
        if (x != null) {
            for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](x)) {
                result[key] = x[key];
            }
        }
        return result;
    },
    // more advanced version of ObjectCE.Extend
    VSet: (function (...args) {
        let props, propName, propValue, opt;
        if (IsString(args[0]) || IsSymbol(args[0]))
            [propName, propValue, opt] = args;
        else
            [props, opt] = args;
        opt = { ...{ copyNonEnumerable: true, copySymbolKeys: true, copyGetterSettersAs: "value", callSetters: "auto" }, ...opt };
        const SetProp = (name, descriptor, value) => {
            // only process operators if: 1) js-engine supports Symbols (for security), or 2) caller allows string-operators
            if (IsSymbol(OMIT) || opt.allowStringOperators) {
                if (value === OMIT || (opt.allowStringOperators && value == OMIT.toString()))
                    return;
                if (value === DEL || (opt.allowStringOperators && value == DEL.toString())) {
                    delete this[name];
                    return;
                }
            }
            const isGetterSetter = descriptor && (descriptor.get != null || descriptor.set != null);
            const asGetterSetter = isGetterSetter && opt.copyGetterSettersAs == "getterSetter";
            // descriptorCustomized: whether the descriptor has customizations that would be lost by using a simple set-op
            const descriptorCustomized = descriptor && (descriptor.enumerable == false || descriptor.writable == false || descriptor.configurable == false || asGetterSetter);
            const useSimpleSet_final = opt.callSetters == "always" || (opt.callSetters == "auto" && !descriptorCustomized);
            if (useSimpleSet_final) {
                this[name] = value;
            }
            else {
                // we default configurable to true, since it's the better default imo; it's more compatible -- conf:false can break "correct code", whereas conf:true at worst allows mistakes
                const finalDescriptor = { configurable: true, ...descriptor };
                // if placing a value (rather than copying a getter-setter), clear get/set fields, and set value field 
                if (!asGetterSetter) {
                    delete finalDescriptor.get;
                    delete finalDescriptor.set;
                    finalDescriptor.value = value;
                }
                Object.defineProperty(this, name, finalDescriptor);
            }
        };
        if (propName) {
            SetProp(propName, opt.prop, propValue);
        }
        else if (props != null) {
            /*for (let key in props) {
                if (!props.hasOwnProperty(key)) continue;*/
            let keys = Object.getOwnPropertyNames(props);
            if (opt.copySymbolKeys)
                keys = keys.concat(Object.getOwnPropertySymbols(props));
            for (const key of keys) {
                const descriptor = Object.getOwnPropertyDescriptor(props, key);
                if (!descriptor.enumerable && !opt.copyNonEnumerable)
                    continue;
                const isGetterSetter = descriptor.get != null || descriptor.set != null;
                if (isGetterSetter && opt.copyGetterSettersAs == "ignore")
                    continue; // for "ignore" case: short-circuit, so we don't even call getter
                const value = !isGetterSetter || opt.copyGetterSettersAs == "value" ? props[key] : undefined;
                SetProp(key, descriptor, value);
            }
        }
        return this;
    }),
    //IncludeKeys(...keys: string[]) {
    IncludeKeys(...keys) {
        let result = this instanceof Array ? [] : {};
        for (const key of keys) {
            //if (!this.hasOwnProperty(key)) continue;
            if (!(key in this))
                continue; // we include the value, even if from prototype (user wouldn't list in keys array if didn't want it)
            result[key] = this[key];
        }
        return result;
    },
    //ExcludeKeys(...keys: string[]) {
    ExcludeKeys(...keys) {
        //var result = Clone(this); // doesn't work with funcs
        /*var result = Object.assign(this instanceof Array ? [] : {}, this as any);
        for (let key of keys) {
            delete result[key];
        }*/
        let result = this instanceof Array ? [] : {};
        for (const key of Object.keys(this)) {
            if (ArrayCE(keys).Contains(key))
                continue;
            result[key] = this[key];
        }
        return result;
    },
    OmitUndefined(alsoOmitNulls = false, keepPrototype = true) {
        let result = this instanceof Array ? [] : {};
        for (const key of Object.keys(this)) {
            if (this[key] === undefined)
                continue;
            if (alsoOmitNulls && this[key] === null)
                continue;
            result[key] = this[key];
        }
        if (keepPrototype)
            Object.setPrototypeOf(result, Object.getPrototypeOf(this));
        return result;
    },
    OmitNull(alsoOmitUndefined = true, keepPrototype = true) {
        let result = this instanceof Array ? [] : {};
        for (const key of Object.keys(this)) {
            if (this[key] === null)
                continue;
            if (alsoOmitUndefined && this[key] === undefined)
                continue;
            result[key] = this[key];
        }
        if (keepPrototype)
            Object.setPrototypeOf(result, Object.getPrototypeOf(this));
        return result;
    },
    IsOneOf(...values) {
        if (ArrayCE(values).Contains(this)) {
            return true;
        }
        // if the value-list contains the primitive-version of self, consider it a match -- otherwise calling "test1".IsOneOf("test1", "test2") would fail
        const isObjectFormOfPrimitive = this instanceof Boolean || this instanceof Number || this instanceof String;
        if (isObjectFormOfPrimitive && ArrayCE(values).Contains(this.valueOf())) {
            return true;
        }
        return false;
    },
    Pairs: (function () {
        var result = [];
        const keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            //if (excludeSpecialKeys && (key == "_" || key == "_key" || key == "_id")) continue;
            const entry = { index: i, key, keyNum: Number(key), value: this instanceof Map ? this.get(key) : this[key] };
            if (IsNaN(entry.keyNum))
                delete entry["keyNum"];
            result.push(entry);
        }
        return result;
    }),
    VKeys: (function () {
        //if (excludeSpecialKeys) return this.Pairs(true).map(a=>a.key);
        const keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        //if (excludeSpecialKeys) keys = ArrayCE(keys).Exclude(specialKeys);
        return keys;
    }),
    VValues: (function () {
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.value);
        return ObjectCES.VKeys(this).map(key => (this instanceof Map ? this.get(key) : this[key]));
    }),
    // for symbols
    /*Pairs_Sym() {
    };*/
    Sym(symbolName) {
        const symbols = Object.getOwnPropertySymbols(this);
        const symbol = symbols.find(a => a.toString() == `Symbol(${symbolName})`);
        return this[symbol];
    },
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
    /*FA_Select<T, T2>(this: {[key: number]: T} | {[key: string]: T}, selectFunc?: (item: T, index: number)=>T2): T2[] {
        Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
        /*var result = this instanceof List ? new List(this.itemType) : [];
        for (let [index, item] of this.entries())
            result.Add(selectFunc.call(item, item, index));
        return result;*#/
        return ObjectCE(this).VValues(true).map(selectFunc);
    };
    FA_RemoveAt(index: number) {
        Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
        if (!(index in this)) return;
        // remove target entry
        delete this[index];
        // move all the later entries down one index
        for (var i = index + 1; i in this; i++) {
            this[i - 1] = this[i];
        }
        delete this[i - 1]; // remove the extra copy of the last-item
    };
    FA_Add<T>(this: {[key: number]: T} | {[key: string]: T}, item: T) {
        Assert(!(this instanceof Array), "Cannot call FakeArray methods on a real array!");
        for (var openIndex = 0; openIndex in this; openIndex++);
        this[openIndex] = item;
    };*/
};
//export const ObjectCE = WithFuncsStandalone(ObjectCEProxy.prototype);
//export const ObjectCE = CreateProxyForClassExtensions(ObjectCEProxy);
export const ObjectCE = CreateProxyForClassExtensions(ObjectCE_funcs);
export const ObjectCES = WithFuncsStandalone(ObjectCE_funcs);
//# sourceMappingURL=CE_Object.js.map