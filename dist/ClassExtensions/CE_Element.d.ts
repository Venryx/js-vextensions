export declare const ElementCE_funcs: {
    GetParents(this: Element, topDown?: boolean): HTMLElement[];
    GetSelfAndParents(this: HTMLElement, topDown?: boolean): HTMLElement[];
    QuerySelector_BreadthFirst(this: Element, selector: string): HTMLElement;
    $(this: Element, queryStr: string): HTMLElement[];
};
export declare type ElementCEProxy = Element & typeof ElementCE_funcs;
export declare const ElementCE: (nextThis: Element) => ElementCEProxy;
export declare const ElementCES: import("../Utils/General").WithFuncsStandalone_Type<{
    GetParents(this: Element, topDown?: boolean): HTMLElement[];
    GetSelfAndParents(this: HTMLElement, topDown?: boolean): HTMLElement[];
    QuerySelector_BreadthFirst(this: Element, selector: string): HTMLElement;
    $(this: Element, queryStr: string): HTMLElement[];
}>;
