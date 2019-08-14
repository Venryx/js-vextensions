declare global {
    function G(...globalHolders: any[]): any;
}
export declare function DoNothing(...args: any[]): void;
export declare function DN(...args: any[]): void;
export declare function QuickIncrement(name?: string): any;
export declare const emptyObj: {};
export declare const eo: any;
export declare const emptyArray: any[];
export declare const emptyArray_forLoading: any[];
export declare function E<E1, E2, E3, E4, E5, E6, E7, E8>(e1?: E1, e2?: E2, e3?: E3, e4?: E4, e5?: E5, e6?: E6, e7?: E7, e8?: E8): E1 & E2 & E3 & E4 & E5 & E6 & E7 & E8;
export declare function CopyText(text: any): void;
export declare function FromJSON(json: string): any;
export declare function ToJSON(obj: any, replacerFunc?: any, spacing?: number): string;
export declare class ToJSON_WithSpaces_Options {
    insideObjectBraces: boolean;
    insideArrayBrackets: boolean;
    betweenPropsOrItems: boolean;
    betweenPropNameAndValue: boolean;
}
export declare function ToJSON_WithSpaces(obj: any, options?: Partial<ToJSON_WithSpaces_Options>): string;
export declare function ToJSON_Safe(obj: any, ...excludePropNames: any[]): string;
export declare function ToJSON_Try(...args: any[]): any;
export declare function Clone(obj: any, keepPrototype?: boolean): any;
export declare function CloneWithPrototypes(originalObject: any, keepCircularLinks?: boolean): any;
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
export declare const nl = "\n";
export declare function AsObj(obj: any): any;
export declare function AsArray(args: any): any;
export declare function Slice(args: any, start: any, end?: any): any;
export declare function Multiline(functionWithInCommentMultiline: any, useExtraPreprocessing: any): any;
export declare function Multiline_NotCommented(functionWithCode: any): any;
export declare function StableSort(array: any, compare: (aItem: any, bItem: any, aIndex: number, bIndex: number) => number): any;
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
/** @param sepChar Default: "/" */
export declare function DeepGet<T>(obj: any, pathOrPathSegments: string | (string | number)[], resultIfNull?: T, sepChar?: string): T;
/** @param sepChar Default: "/" */
export declare function DeepSet(obj: any, pathOrPathSegments: string | (string | number)[], newValue: any, sepChar?: string, createPathSegmentsIfMissing?: boolean): void;
/** @param sepChar Default: "/" */
export declare function WithDeepSet(baseObj: any, pathOrPathSegments: string | (string | number)[], newValue: any, sepChar?: string): any;
export declare function GetStackTraceStr(sourceStackTrace?: boolean): any;
export declare function GetErrorMessagesUnderElement(element: any): any[];
export declare const DEL = "JS_VEXTENSIONS_SPECIAL_DELETE_KEY";
export declare function FindDOM(selector: string): Element;
export declare function FindDOMAll(selector: string): Element[];
export declare function WaitTillDataPathIsSet(dataPath: string): Promise<{}>;
export declare function WaitTillPropertyIsSet(obj: Object, prop: string): Promise<{}>;
export declare enum CapScheme {
    /** examplePropNameWithDuoWord */ PropName = 0,
    /** Example Title With Duo-Word */ Title = 1,
    /** Example sentence with duo-word */ Sentence = 2
}
export declare function ChangeCapitalization(text: string, fromScheme: CapScheme, toScheme: CapScheme): string;
export declare function StartDownload(content: string, filename: string, dataTypeStr?: string, encodeContentAsURIComp?: boolean): void;
export declare function StartUpload(): Promise<string>;
