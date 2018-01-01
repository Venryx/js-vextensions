interface Element {
    GetParents(topDown?: boolean): HTMLElement[];
}
interface Element {
    GetSelfAndParents(topDown?: boolean): HTMLElement[];
}
interface Element {
    $(queryStr: string): HTMLElement[];
}
