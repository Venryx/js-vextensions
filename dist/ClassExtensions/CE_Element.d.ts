declare const ElementCE_base: new () => Element;
export declare class ElementCE extends ElementCE_base {
    GetParents(topDown?: boolean): HTMLElement[];
    GetSelfAndParents(this: HTMLElement, topDown?: boolean): HTMLElement[];
    QuerySelector_BreadthFirst(selector: string): HTMLElement;
    $(queryStr: string): HTMLElement[];
}
export {};
