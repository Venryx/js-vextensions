import { ObjectCE } from "../ClassExtensions/CE_Object.js";
export function WaitTillDataPathIsSet(rootObj, dataPath) {
    return new Promise(async (resolve, reject) => {
        const dataPathParts = dataPath.split(".");
        let currentParent = rootObj;
        for (const part of dataPathParts) {
            while (currentParent[part] == null) {
                await WaitTillPropertyIsSet(currentParent, part);
            }
            currentParent = currentParent[part];
        }
        resolve();
    });
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
export async function AwaitTree(obj) {
    const pairs = ObjectCE(obj).Pairs();
    const awaitedResults = await Promise.all(pairs.map(pair => {
        const valueAsPromise = pair.value instanceof Promise ? pair.value : Promise.resolve(pair.value);
        return valueAsPromise;
    }));
    const result = {};
    for (const pair of pairs) {
        result[pair.key] = awaitedResults[pair.index];
    }
    return result;
}
//# sourceMappingURL=Promises.js.map