import { DeepGet, WithFuncsStandalone, CreateProxyForClassExtensions, ConvertPathGetterFuncToPropChain, DEL } from "../Utils/General";
import { ArrayCE } from "./CE_Array";
import { IsNaN } from "../Utils/Types";
import { FunctionCE } from "./CE_Others";
/*export type WithFuncThisArgsAsXOrWrapped_Type<Source> = {
    [P in keyof Source]:
        Source[P] extends (this: infer ThisArgType, ...args)=>any ? (this: XOrWrapped<ThisArgType>, ...args: Parameters<Source[P]>)=>ReturnType<Source[P]> :
        Source[P];
};
export function WithFuncThisArgsAsXOrWrapped<Source>(source: Source): WithFuncThisArgsAsXOrWrapped_Type<Source> {
    return source as any;
}*/
export const specialKeys = ["_", "_key", "_id"];
export const ObjectCE_funcs = {
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
            value: value
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
        let info = { configurable: true };
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
    Extend(x, copyNonEnumerable = true) {
        if (x != null) {
            for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](x)) {
                //if (!x.hasOwnProperty(key)) continue;
                var value = x[key];
                //if (value !== undefined)
                this[key] = value;
            }
        }
        return this;
    },
    // as replacement for C#'s "new MyClass() {prop = true}"
    /*VSet<T>(this: T, propName: string, propValue, options?: VSet_Options): TargetTFor<T>;
    //VSet<T extends RealThis>(this: T, props: any, options?: VSet_Options): T; // variant for ObjectCE(obj).X calls (those types only uses the last declaration, and they need "extend RealThis" since we any-ify the this-param)
    VSet<T>(this: T, props: any, options?: VSet_Options): TargetTFor<T>; // this one needs to be last (best override for the CE(...) wrapper, and it can only extract the last one)*/
    VSet: (function (...args) {
        let props, opt, propName, propValue;
        if (typeof args[0] == "object")
            [props, opt] = args;
        else
            [propName, propValue, opt] = args;
        opt = opt || {};
        let copyNonEnumerable = opt.copyNonEnumerable != null ? opt.copyNonEnumerable : true;
        const SetProp = (name, value) => {
            if (value === DEL || (value === undefined && opt.deleteUndefined) || (value === null && opt.deleteNull) || (value === "" && opt.deleteEmpty)) {
                delete this[name];
                return;
            }
            if (opt.prop) {
                Object.defineProperty(this, name, Object.assign({ configurable: true }, opt.prop, { value }));
            }
            else {
                this[name] = value;
            }
        };
        if (props) {
            /*for (let key in props) {
                if (!props.hasOwnProperty(key)) continue;*/
            for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](props)) {
                SetProp(key, props[key]);
            }
        }
        else {
            SetProp(propName, propValue);
        }
        return this;
    }),
    Extended(x, copyNonEnumerable = true) {
        let result = this instanceof Array ? [] : {};
        for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](this)) {
            result[key] = this[key];
        }
        if (x) {
            for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](x)) {
                result[key] = x[key];
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
        let pathSegments = typeof pathOrPathGetterFunc == "string" ? pathOrPathGetterFunc : ConvertPathGetterFuncToPropChain(pathOrPathGetterFunc);
        return DeepGet(this, pathSegments, resultIfNull);
    }),
    VAct(func) {
        func.call(this, this);
        return this;
    },
    As(type) {
        Object.setPrototypeOf(this, type.prototype);
        return this;
    },
    Strip() {
        Object.setPrototypeOf(this, Object.getPrototypeOf({}));
        return this;
    },
    Including(...keys) {
        var result = this instanceof Array ? [] : {};
        for (let key of keys) {
            //if (!this.hasOwnProperty(key)) continue;
            if (!(key in this))
                continue; // we include the value, even if from prototype (user wouldn't list in keys array if didn't want it)
            result[key] = this[key];
        }
        return result;
    },
    Excluding(...keys) {
        //var result = Clone(this); // doesn't work with funcs
        var result = Object.assign(this instanceof Array ? [] : {}, this);
        for (let key of keys) {
            delete result[key];
        }
        return result;
    },
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
    Pairs: (function (excludeSpecialKeys = false) {
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
    }),
    VKeys: (function (excludeSpecialKeys = false) {
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.name);
        let keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        if (excludeSpecialKeys)
            keys = ArrayCE(keys).Except(specialKeys);
        return keys;
    }),
    VValues: (function (excludeSpecialKeys = false) {
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.value);
        return ObjectCES.VKeys(this, excludeSpecialKeys).map(key => this instanceof Map ? this.get(key) : this[key]);
    }),
    // for symbols
    /*Pairs_Sym() {
    };*/
    Sym(symbolName) {
        let symbols = Object.getOwnPropertySymbols(this);
        let symbol = symbols.find(a => a.toString() == `Symbol(${symbolName})`);
        return this[symbol];
    },
};
//export const ObjectCE = WithFuncsStandalone(ObjectCEProxy.prototype);
//export const ObjectCE = CreateProxyForClassExtensions(ObjectCEProxy);
export const ObjectCE = CreateProxyForClassExtensions(ObjectCE_funcs);
export const ObjectCES = WithFuncsStandalone(ObjectCE_funcs);
//# sourceMappingURL=CE_Object.js.map