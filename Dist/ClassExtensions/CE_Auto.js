import { ArrayCE } from "./CE_Array.js";
import { NumberCE } from "./CE_Number.js";
import { ObjectCE } from "./CE_Object.js";
import { StringCE } from "./CE_String.js";
import { IsString, IsNumber, IsFunction, IsArray } from "../Utils/Types.js";
import { DateCE, FunctionCE } from "./CE_Others.js";
import { ElementCE } from "./CE_Element.js";
/*interface CE_Auto_I {
    (obj: Array<any>): typeof ArrayCE;
    (obj: Element): typeof ElementCE;
    (obj: number): typeof NumberCE;
    (obj: Object): typeof ObjectCE;
    (obj: string): typeof StringCE;
}

export const CE_Auto = ((obj)=> {
}) as CE_Auto_I;*/
const classExtensionMap = {
    Number: NumberCE,
    String: StringCE,
    Date: DateCE,
    Element: ElementCE,
    Function: FunctionCE,
    Array: ArrayCE,
    Object: ObjectCE,
};
export function CE(obj, checkForUncommonDerived = false) {
    // first, try to get class-extension func based on direct constructor name (most common case)
    const typeName = obj.constructor ? obj.constructor.name : null;
    if (typeName && classExtensionMap[typeName]) {
        return classExtensionMap[typeName](obj);
    }
    // else, check each option using "instanceof" and such (needed for derived classes)
    if (checkForUncommonDerived) {
        if (IsNumber(obj, true))
            return NumberCE(obj);
        if (IsString(obj, true))
            return StringCE(obj);
        if (obj instanceof Date)
            return DateCE(obj);
        if (IsFunction(obj))
            return FunctionCE(obj);
        if (IsArray(obj))
            return ArrayCE(obj);
    }
    if (typeof Element != "undefined" && obj instanceof Element)
        return ElementCE(obj);
    /*if (IsObject(obj)) return ObjectCE(obj);
    throw new Error(`Could not find class-extension helper for type "${obj.constructor ? obj.constructor.name : "n/a"}".`);*/
    return ObjectCE(obj);
}
//# sourceMappingURL=CE_Auto.js.map