export declare const ElementCE_funcs: {
    GetParents(this: Element, topDown?: boolean): HTMLElement[];
    GetSelfAndParents(this: HTMLElement, topDown?: boolean): HTMLElement[];
    QuerySelector_BreadthFirst(this: Element, selector: string): HTMLElement | null;
    $(this: Element, queryStr: string): HTMLElement[];
};
export type ElementCEProxy = Element & typeof ElementCE_funcs;
export declare const ElementCE: (nextThis: Element) => ElementCEProxy;
export declare const ElementCES: import("../Utils/General.js").WithFuncsStandalone_Type<{
    GetParents(this: Element, topDown?: boolean): HTMLElement[];
    GetSelfAndParents(this: HTMLElement, topDown?: boolean): HTMLElement[];
    QuerySelector_BreadthFirst(this: Element, selector: string): HTMLElement | null;
    $(this: Element, queryStr: string): HTMLElement[];
}>;
