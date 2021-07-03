export declare function Assert(condition: any, messageOrMessageFunc?: string | Function | null, triggerDebugger?: boolean): asserts condition;
export declare function AssertWarn(condition: any, messageOrMessageFunc?: string | Function): void;
/** Helper class for making in-line assertions. */
export declare class A {
    static get NonNull_(): <T>(value: T) => T;
    static set NonNull(value: any);
    static NotEqualTo(val1: any): A_NotEqualTo_Wrapper;
}
export declare class A_NotEqualTo_Wrapper {
    constructor(val1: any);
    val1: any;
    set a(val2: any);
}
export declare class A_OfType_Wrapper {
    constructor(type: any);
    type: any;
    set a(val: any);
}
export declare function NN<T>(val: T): NonNullable<T>;
