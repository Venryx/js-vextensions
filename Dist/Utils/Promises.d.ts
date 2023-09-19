export declare function WaitTillDataPathIsSet(rootObj: Object, dataPath: string): Promise<void>;
export declare function WaitTillPropertyIsSet(obj: Object, prop: string): Promise<void>;
export type WithPromisesUnwrapped<T> = {
    [P in keyof T]: T[P] extends Promise<infer T> ? T : T[P];
};
/**
Example:
(async()=> {
    let a = {hi: null as Promise<string>};
    let b = await AwaitTree(a);
    b.hi; // type is "string", both in typescript and runtime
})();
 */
export declare function AwaitTree<T>(obj: T): Promise<WithPromisesUnwrapped<T>>;
