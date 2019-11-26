declare global {
    interface Element {
        GetParents(topDown?: boolean): HTMLElement[];
        GetSelfAndParents(topDown?: boolean): HTMLElement[];
        QuerySelector_BreadthFirst(selector: string): HTMLElement;
        $(queryStr: string): HTMLElement[];
    }
}
export {};
