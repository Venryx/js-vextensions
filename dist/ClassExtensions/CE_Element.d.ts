declare const ElementCEClass_base: new () => Element;
export declare class ElementCEClass extends ElementCEClass_base {
    GetParents(topDown?: boolean): HTMLElement[];
    GetSelfAndParents(this: HTMLElement, topDown?: boolean): HTMLElement[];
    QuerySelector_BreadthFirst(selector: string): HTMLElement;
    $(queryStr: string): HTMLElement[];
}
export declare const ElementCE: ElementCEClass;
export {};
