export declare class ElementCEClass {
    GetParents(this: Element, topDown?: boolean): HTMLElement[];
    GetSelfAndParents(this: HTMLElement, topDown?: boolean): HTMLElement[];
    QuerySelector_BreadthFirst(this: Element, selector: string): HTMLElement;
    $(this: Element, queryStr: string): HTMLElement[];
}
export declare const ElementCE: (nextThis: any) => import("../Utils/General").WithFuncThisArgsAsAny_Type<ElementCEClass>;
export declare const ElementCES: {
    GetParents: (thisArg: Object, topDown?: boolean) => HTMLElement[];
    GetSelfAndParents: (thisArg: Object, topDown?: boolean) => HTMLElement[];
    QuerySelector_BreadthFirst: (thisArg: Object, selector: string) => HTMLElement;
    $: (thisArg: Object, queryStr: string) => HTMLElement[];
};
