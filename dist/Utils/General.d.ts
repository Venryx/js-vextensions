declare global  {
    function G(...globalHolders: any[]): any;
}
declare global  {
    function DoNothing(...args: any[]): any;
}
export declare function DoNothing(...args: any[]): void;
declare global  {
    function DN(...args: any[]): any;
}
export declare function DN(...args: any[]): void;
export declare function QuickIncrement(name?: string): any;
export declare var emptyEntities: {
    emptyObj: {};
    emptyArray: any[];
    emptyArray_forLoading: any[];
};
declare global  {
    function E<E1, E2, E3, E4, E5, E6, E7, E8>(e1?: E1, e2?: E2, e3?: E3, e4?: E4, e5?: E5, e6?: E6, e7?: E7, e8?: E8): E1 & E2 & E3 & E4 & E5 & E6 & E7 & E8;
}
export declare function E<E1, E2, E3, E4, E5, E6, E7, E8>(e1?: E1, e2?: E2, e3?: E3, e4?: E4, e5?: E5, e6?: E6, e7?: E7, e8?: E8): E1 & E2 & E3 & E4 & E5 & E6 & E7 & E8;
export declare function CopyText(text: any): void;
declare global  {
    function FromJSON(json: string): any;
}
export declare function FromJSON(json: string): any;
declare global  {
    function ToJSON(obj: any, replacerFunc?: any, spacing?: number): string;
}
export declare function ToJSON(obj: any, replacerFunc?: any, spacing?: number): string;
declare global  {
    function ToJSON_Safe(obj: any, ...excludePropNames: any[]): string;
}
export declare function ToJSON_Safe(obj: any, ...excludePropNames: any[]): string;
declare global  {
    function ToJSON_Try(obj: any, ...excludePropNames: any[]): string;
}
export declare function ToJSON_Try(...args: any[]): any;
declare global  {
    function Clone(obj: any): any;
}
/**
 * Gets an array of the numbers between min and max.
 * @param min
 * @param max
 * @param step (default: 1)
 * @param includeMax (default: true)
 * @param roundToStep (default: true)
 */
export declare function Range(min: number, max: number, step?: number, includeMax?: boolean, roundToStep?: boolean): number[];
export declare function Global(target: Function): void;
export declare class IDProvider {
    lastID: number;
    GetID(): number;
}
declare global  {
    var nl: string;
}
export declare function AsArray(args: any): any;
export declare function Slice(args: any, start: any, end?: any): any;
export declare function Multiline(functionWithInCommentMultiline: any, useExtraPreprocessing: any): any;
export declare function Multiline_NotCommented(functionWithCode: any): any;
export declare function StableSort(array: any, compare: (aItem, bItem, aIndex: number, bIndex: number) => number): any;
export declare function Compare(a: any, b: any, caseSensitive?: boolean): 1 | -1 | 0;
export declare function Lerp(from: number, to: number, percentFromXToY: number, keepResultInRange?: boolean): number;
export declare function GetPercentFromXToY(start: number, end: number, val: number, keepResultInRange?: boolean): number;
export declare function GetXToY(minX: any, maxY: any, interval?: number): any[];
export declare function GetXToYOut(minX: any, maxOutY: any, interval?: number): any[];
export declare function CloneObject(obj: any, propMatchFunc?: Function, depth?: number): any;
export declare function CloneArray(array: any): any;
export declare function Bind<T extends Function>(func: T, newThis: any): T;
export declare function GetContentSize(content: string | Element, includeMargin?: boolean, createClone?: boolean, allowCache?: boolean): any;
export declare function GetContentWidth(content: string | Element, includeMargin?: boolean, createClone?: boolean, allowCache?: boolean): any;
export declare function GetContentHeight(content: string | Element, includeMargin?: boolean, createClone?: boolean, allowCache?: boolean): any;
export declare let autoElements: {
    [key: string]: Element;
};
export declare function GetAutoElement(startHTML: string): Element;
export declare class TreeNode {
    constructor(ancestorNodes: TreeNode[], obj: any, prop: any);
    ancestorNodes: TreeNode[];
    readonly PathNodes: string[];
    readonly PathStr: string;
    readonly PathStr_Updeep: string;
    obj: any;
    prop: string;
    Value: any;
}
export declare function GetTreeNodesInObjTree(obj: any, includeRootNode?: boolean, _ancestorNodes?: any[]): TreeNode[];
export declare function GetTreeNodesInPath(treeRoot: any, pathNodesOrStr: string[] | string, includeRootNode?: boolean, _ancestorNodes?: any[]): any[];
export declare function VisitTreeNodesInPath(treeRoot: any, pathNodesOrStr: string[] | string, visitFunc: (node: TreeNode) => any, visitRootNode?: boolean, _ancestorNodes?: any[]): any;
export declare function DeepGet<T>(obj: any, pathOrPathNodes: string | (string | number)[], resultIfNull?: T, sepChar?: string): T;
export declare function DeepSet(obj: any, pathOrPathNodes: string | (string | number)[], newValue: any, sepChar?: string): void;
export declare function GetStackTraceStr(sourceStackTrace?: boolean): any;
export declare function GetErrorMessagesUnderElement(element: any): any[];
export declare const DEL = "JS_VEXTENSIONS_SPECIAL_DELETE_KEY";
declare global  {
    function FindDOM(selector: string): Element;
}
declare global  {
    function FindDOMAll(selector: string): Element[];
}
