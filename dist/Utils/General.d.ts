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
export declare function E<E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16, E17, E18, E19, E20>(e1?: E1, e2?: E2, e3?: E3, e4?: E4, e5?: E5, e6?: E6, e7?: E7, e8?: E8, e9?: E9, e10?: E10, e11?: E11, e12?: E12, e13?: E13, e14?: E14, e15?: E15, e16?: E16, e17?: E17, e18?: E18, e19?: E19, e20?: E20): E1 & E2 & E3 & E4 & E5 & E6 & E7 & E8 & E9 & E10 & E11 & E12 & E13 & E14 & E15 & E16 & E17 & E18 & E19 & E20;
export declare type GetFirstParamType<T> = T extends (val: infer Arg1Type) => any ? Arg1Type : never;
export declare function WrapWithGo<Func extends (val: any) => any>(func: Func): Func & {
    Go: GetFirstParamType<Func>;
};
export declare function ShallowEquals(objA: any, objB: any): boolean;
export declare function ShallowChanged(objA: any, objB: any): boolean;
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
export declare function StableSort<T>(array: T[], compare: (aItem: any, bItem: any, aIndex: number, bIndex: number) => number): T[];
export declare function Compare(a: any, b: any, caseSensitive?: boolean): 0 | 1 | -1;
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
    get PathNodes(): string[];
    get PathStr(): string;
    get PathStr_Updeep(): string;
    obj: any;
    prop: string;
    get Value(): any;
    set Value(newVal: any);
}
export declare function GetTreeNodesInObjTree(obj: Object, includeRootNode?: boolean, _ancestorNodes?: any[]): TreeNode[];
export declare function GetTreeNodesInPath(treeRoot: any, pathNodesOrStr: string[] | string, includeRootNode?: boolean, _ancestorNodes?: any[]): any[];
export declare function VisitTreeNodesInPath(treeRoot: any, pathNodesOrStr: string[] | string, visitFunc: (node: TreeNode) => any, visitRootNode?: boolean, _ancestorNodes?: any[]): any;
export declare function ConvertPathGetterFuncToPropChain(pathGetterFunc: Function): string[];
/** @param sepChar Default: "/" */
export declare function DeepGet<T>(obj: any, pathOrPathSegments: string | (string | number)[], resultIfNull?: T, sepChar?: string): T;
/** @param sepChar Default: "/" */
export declare function DeepSet(obj: any, pathOrPathSegments: string | (string | number)[], newValue: any, sepChar?: string, createPathSegmentsIfMissing?: boolean, deleteUndefined?: boolean): void;
/** @param sepChar Default: "/" */
export declare function WithDeepSet(baseObj: any, pathOrPathSegments: string | (string | number)[], newValue: any, sepChar?: string): any;
export declare function GetStackTraceStr(sourceStackTrace?: boolean): any;
export declare function GetErrorMessagesUnderElement(element: any): any[];
export declare const DEL = "JS_VEXTENSIONS_SPECIAL_DELETE_KEY";
export declare function FindDOM(selector: string): Element;
export declare function FindDOMAll(selector: string): Element[];
export declare function WaitTillDataPathIsSet(dataPath: string): Promise<unknown>;
export declare function WaitTillPropertyIsSet(obj: Object, prop: string): Promise<unknown>;
export declare enum CapScheme {
    /** examplePropNameWithDuoWord */ PropName = 0,
    /** Example Title With Duo-Word */ Title = 1,
    /** Example sentence with duo-word */ Sentence = 2
}
export declare function ChangeCapitalization(text: string, fromScheme: CapScheme, toScheme: CapScheme): string;
export declare function StartDownload(content: string, filename: string, dataTypeStr?: string, encodeContentAsURIComp?: boolean): void;
export declare function StartUpload(): Promise<string | ArrayBuffer>;
export declare function TransferPrototypeProps(target: Object, source: Object, descriptorBase: PropertyDescriptor, descriptorOverride: PropertyDescriptor): void;
declare type WithFuncsStandalone_Type<T> = {
    [P in keyof T]: T[P] extends (...args: any[]) => any ? (thisArg: Object, ...args: Parameters<T[P]>) => ReturnType<T[P]> : T[P];
};
export declare function WithFuncsStandalone<T>(source: T): WithFuncsStandalone_Type<T>;
export declare type WithFuncThisArgsAsAny_Type<T> = {
    [P in keyof T]: T[P] extends (this: any, ...args: any[]) => any ? (this: any, ...args: Parameters<T[P]>) => ReturnType<T[P]> : T[P];
};
export declare function WithFuncThisArgsAsAny<T>(source: T): WithFuncThisArgsAsAny_Type<T>;
export declare function CreateWrapperForClassExtensions<T>(sourceClass: new (...args: any[]) => T): (nextThis: any) => WithFuncThisArgsAsAny_Type<T>;
export {};
