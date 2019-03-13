import ".";
declare global {
    interface Element {
        GetParents(topDown?: boolean): HTMLElement[];
    }
}
declare global {
    interface Element {
        GetSelfAndParents(topDown?: boolean): HTMLElement[];
    }
}
declare global {
    interface Element {
        QuerySelector_BreadthFirst(selector: string): HTMLElement;
    }
}
declare global {
    interface Element {
        $(queryStr: string): HTMLElement[];
    }
}
