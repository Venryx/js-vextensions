import { DeepGet, WithFuncsStandalone, CreateProxyForClassExtensions, ConvertPathGetterFuncToPropChain, DEL, OMIT } from "../Utils/General";
import { ArrayCE } from "./CE_Array";
import { IsNaN, IsString, IsSymbol } from "../Utils/Types";
import { FunctionCE } from "./CE_Others";
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
    Extend(x, copyNonEnumerable = false) {
        if (x != null) {
            for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](x)) {
                var value = x[key];
                this[key] = value;
            }
        }
        return this;
    },
    Extended(x, copyNonEnumerable = false) {
        let result = this instanceof Array ? [] : {};
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
        opt = Object.assign({}, { copyNonEnumerable: true, copySymbolKeys: true, copyGetterSettersAs: "value", callSetters: "auto" }, opt);
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
            let isGetterSetter = descriptor && (descriptor.get != null || descriptor.set != null);
            let asGetterSetter = isGetterSetter && opt.copyGetterSettersAs == "getterSetter";
            // descriptorCustomized: whether the descriptor has customizations that would be lost by using a simple set-op
            let descriptorCustomized = descriptor && (descriptor.enumerable == false || descriptor.writable == false || descriptor.configurable == false || asGetterSetter);
            let useSimpleSet_final = opt.callSetters == "always" || (opt.callSetters == "auto" && !descriptorCustomized);
            if (useSimpleSet_final) {
                this[name] = value;
            }
            else {
                // we default configurable to true, since it's the better default imo; it's more compatible -- conf:false can break "correct code", whereas conf:true at worst allows mistakes
                const finalDescriptor = Object.assign({ configurable: true }, descriptor);
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
                let descriptor = Object.getOwnPropertyDescriptor(props, key);
                if (!descriptor.enumerable && !opt.copyNonEnumerable)
                    continue;
                let isGetterSetter = descriptor.get != null || descriptor.set != null;
                if (isGetterSetter && opt.copyGetterSettersAs == "ignore")
                    continue; // for "ignore" case: short-circuit, so we don't even call getter
                const value = !isGetterSetter || opt.copyGetterSettersAs == "value" ? props[key] : undefined;
                SetProp(key, descriptor, value);
            }
        }
        return this;
    }),
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
    //Including(...keys: string[]) {
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
    //Excluding(...keys: string[]) {
    Excluding(...keys) {
        //var result = Clone(this); // doesn't work with funcs
        /*var result = Object.assign(this instanceof Array ? [] : {}, this as any);
        for (let key of keys) {
            delete result[key];
        }*/
        var result = this instanceof Array ? [] : {};
        for (let key of Object.keys(this)) {
            if (ArrayCE(keys).Contains(key))
                continue;
            result[key] = this[key];
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
    Pairs: (function () {
        var result = [];
        let keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            //if (excludeSpecialKeys && (key == "_" || key == "_key" || key == "_id")) continue;
            let entry = { index: i, key, keyNum: Number(key), value: this instanceof Map ? this.get(key) : this[key] };
            if (IsNaN(entry.keyNum))
                delete entry.keyNum;
            result.push(entry);
        }
        return result;
    }),
    VKeys: (function () {
        //if (excludeSpecialKeys) return this.Pairs(true).map(a=>a.key);
        let keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        //if (excludeSpecialKeys) keys = ArrayCE(keys).Except(specialKeys);
        return keys;
    }),
    VValues: (function () {
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.value);
        return ObjectCES.VKeys(this).map(key => this instanceof Map ? this.get(key) : this[key]);
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