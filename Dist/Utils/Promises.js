var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ObjectCE } from "../ClassExtensions/CE_Object.js";
export function WaitTillDataPathIsSet(rootObj, dataPath) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const dataPathParts = dataPath.split(".");
        let currentParent = rootObj;
        for (const part of dataPathParts) {
            while (currentParent[part] == null) {
                yield WaitTillPropertyIsSet(currentParent, part);
            }
            currentParent = currentParent[part];
        }
        resolve();
    }));
}
export function WaitTillPropertyIsSet(obj, prop) {
    return new Promise((resolve, reject) => {
        ObjectCE(obj)._AddGetterSetter(prop, () => { }, value => {
            delete obj[prop]; // remove this hook
            obj[prop] = value; // set to provided value
            resolve();
        });
    });
}
/**
Example:
(async()=> {
    let a = {hi: null as Promise<string>};
    let b = await AwaitTree(a);
    b.hi; // type is "string", both in typescript and runtime
})();
 */
export function AwaitTree(obj) {
    return __awaiter(this, void 0, void 0, function* () {
        const pairs = ObjectCE(obj).Pairs();
        const awaitedResults = yield Promise.all(pairs.map(pair => {
            const valueAsPromise = pair.value instanceof Promise ? pair.value : Promise.resolve(pair.value);
            return valueAsPromise;
        }));
        const result = {};
        for (const pair of pairs) {
            result[pair.key] = awaitedResults[pair.index];
        }
        return result;
    });
}
//# sourceMappingURL=Promises.js.map