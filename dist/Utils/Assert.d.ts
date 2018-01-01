declare global  {
    function Assert(condition: any, messageOrMessageFunc?: string | Function): any;
}
export declare function Assert(condition: any, messageOrMessageFunc?: string | Function): void;
declare global  {
    function AssertWarn(condition: any, messageOrMessageFunc?: string | Function): any;
}
export declare function AssertWarn(condition: any, messageOrMessageFunc?: string | Function): void;
export declare class A {
    static NonNull: any;
    static NotEqualTo(val1: any): A_NotEqualTo_Wrapper;
}
export declare class A_NotEqualTo_Wrapper {
    constructor(val1: any);
    val1: any;
    a: any;
}
export declare class A_OfType_Wrapper {
    constructor(type: any);
    type: any;
    a: any;
}
export {};
