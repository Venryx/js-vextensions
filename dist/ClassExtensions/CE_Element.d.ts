export declare class ElementCEClass {
    GetParents(this: Element, topDown?: boolean): HTMLElement[];
    GetSelfAndParents(this: HTMLElement, topDown?: boolean): HTMLElement[];
    QuerySelector_BreadthFirst(this: Element, selector: string): HTMLElement;
    $(this: Element, queryStr: string): HTMLElement[];
}
export declare const ElementCE: (thisArg: any) => import("../Utils/General").WithFuncThisArgsAsAny_Type<ElementCEClass>;
