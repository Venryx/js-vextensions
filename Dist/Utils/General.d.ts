declare global {
    function G(...globalHolders: any[]): any;
}
export declare function DoNothing(...args: any[]): void;
export declare function DN(...args: any[]): void;
export declare function QuickIncrement(name?: string): any;
export declare const emptyObj: {};
export declare const emptyArray: never[];
export declare const emptyArray_forLoading: never[];
export declare function IsSpecialEmptyObjOrArray(val: any): boolean;
export declare function IsSpecialEmptyObj<T>(obj: Array<T>): boolean;
export declare function IsSpecialEmptyArray<T>(array: Array<T>): boolean;
/** To be used with mobx-firelink (in "if null" block): undefined means still-loading, so return emptyArray_forLoading; null means data doesn't exist, so return emptyArray. */
export declare function EmptyArrayFor(base: any): never[] | undefined;
export declare function E<E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16, E17, E18, E19, E20>(e1?: E1, e2?: E2, e3?: E3, e4?: E4, e5?: E5, e6?: E6, e7?: E7, e8?: E8, e9?: E9, e10?: E10, e11?: E11, e12?: E12, e13?: E13, e14?: E14, e15?: E15, e16?: E16, e17?: E17, e18?: E18, e19?: E19, e20?: E20): E1 & E2 & E3 & E4 & E5 & E6 & E7 & E8 & E9 & E10 & E11 & E12 & E13 & E14 & E15 & E16 & E17 & E18 & E19 & E20;
export declare type GetFirstParamType<T> = T extends (val: infer Arg1Type) => any ? Arg1Type : never;
export declare function WrapWithGo<Func extends (val: any) => any>(func: Func): Func & {
    Go: GetFirstParamType<Func>;
};
export declare function ShallowEquals(objA: any, objB: any): boolean;
export declare function ShallowChanged(objA: any, objB: any): boolean;
export declare function CopyText(text: any): void;
export declare function FromJSON(json: string): any;
export declare function ToJSON(obj: any, replacerFunc?: (this: any, key: string, value: any) => any, spacing?: number): string;
export declare class ToJSON_Advanced_Options {
    keysToIgnore: string[];
    stringifyUndefinedAs: null;
    trimDuplicates: boolean;
    trimDuplicates_replaceStr: string;
    catchErrors: boolean;
    catchErrors_replaceStr: string;
    addSpacesAt: AddSpacesAt_Options;
}
export declare class AddSpacesAt_Options {
    insideObjectBraces: boolean;
    insideArrayBrackets: boolean;
    betweenPropsOrItems: boolean;
    betweenPropNameAndValue: boolean;
}
export declare function ToJSON_Advanced(obj: any, options?: Partial<ToJSON_Advanced_Options>): string;
export declare function Clone(obj: any, keepPrototype?: boolean): any;
/** Variant of Clone which preserves prototypes, non-enumerable properties, and circular links (if enabled). */
export declare function CloneWithPrototypes(originalObject: any, keepCircularLinks?: boolean): any;
export declare function Global(target: Function): void;
export declare class IDProvider {
    lastID: number;
    GetID(): number;
}
export declare const nl = "\n";
export declare function AsArray(args: any): any;
export declare function Slice(args: any, start: any, end?: any): any;
export declare function Multiline(functionWithInCommentMultiline: any, useExtraPreprocessing: any): any;
export declare function Multiline_NotCommented(functionWithCode: any): any;
export declare function StableSort<T>(array: T[], compare: (aItem: any, bItem: any, aIndex: number, bIndex: number) => number): T[];
export declare function Compare(a: any, b: any, caseSensitive?: boolean): 0 | 1 | -1;
export declare function CloneObject(obj: any, propMatchFunc?: Function, depth?: number): any;
export declare function CloneArray(array: any): any;
export declare function Bind<T extends Function>(func: T, newThis: any): T;
export declare function GetContentSize(content: string | Element, includeMargin?: boolean, createClone?: boolean, allowCache?: boolean): any;
export declare function GetContentWidth(content: string | Element, includeMargin?: boolean, createClone?: boolean, allowCache?: boolean): any;
export declare function GetContentHeight(content: string | Element, includeMargin?: boolean, createClone?: boolean, allowCache?: boolean): any;
export declare const autoElements: {
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
export declare function GetTreeNodesInObjTree(obj: Object, includeRootNode?: boolean, _ancestorNodes?: TreeNode[]): TreeNode[];
export declare function GetTreeNodesInPath(treeRoot: any, pathNodesOrStr: string[] | string, includeRootNode?: boolean, _ancestorNodes?: TreeNode[]): TreeNode[];
export declare function VisitTreeNodesInPath(treeRoot: any, pathNodesOrStr: string[] | string, visitFunc: (node: TreeNode) => any, visitRootNode?: boolean, _ancestorNodes?: TreeNode[]): any;
export declare function ConvertPathGetterFuncToPropChain(pathGetterFunc: Function): string[];
/** @param sepChar Default: "/" */
export declare function DeepGet<T>(obj: any, pathOrPathSegments: string | (string | number)[], resultIfNull?: T | null, sepChar?: string): T | null;
/** @param sepChar Default: "/" */
export declare function DeepSet(obj: any, pathOrPathSegments: string | (string | number)[], newValue: any, sepChar?: string, createPathSegmentsIfMissing?: boolean, deleteUndefined?: boolean): void;
/** @param sepChar Default: "/" */
export declare function WithDeepSet(baseObj: any, pathOrPathSegments: string | (string | number)[], newValue: any, sepChar?: string): any;
export declare function GetStackTraceStr(sourceStackTrace?: boolean): any;
export declare function GetErrorMessagesUnderElement(element: any): any[];
export declare function CreateSymbol(name: string): string | symbol;
export declare const OMIT: string | symbol;
export declare const DEL: string | symbol;
export declare function OmitIfFalsy<T>(value: T): T;
export declare function OmitIfNull<T>(value: T): T;
export declare function DelIfFalsy<T>(value: T): T;
export declare function DelIfNull<T>(value: T): T;
export declare function FindDOM(selector: string): Element | null;
export declare function FindDOMAll(selector: string): Element[];
export declare const stringModifiers: {
    /** some prop name -> Some prop name */
    startLower_to_upper: (str: any) => any;
    /** Some prop name -> some prop name */
    startUpper_to_lower: (str: any) => any;
    /** some prop name -> some Prop Name */
    spaceLower_to_spaceUpper: (str: any) => any;
    /** some-prop-name -> some-Prop-Name */
    hyphenLower_to_hyphenUpper: (str: any) => any;
    /** somePropName -> some prop name */
    lowerUpper_to_lowerSpaceLower: (str: any) => any;
    /** some prop Name -> somepropName */
    removeSpaces: (str: any) => any;
    /** some-prop-Name -> somepropName */
    removeHyphens: (str: any) => any;
};
export declare function ModifyString(text: string, modifiersGetter: (modifierNames: typeof stringModifiers) => ((str: string) => string)[]): string;
/**
Downloads the given content to disk. Call must be triggered by an input event, or run from the console.
Very large strings may fail to download directly, but can be resolved by placing in a Blob:
StartDownload(new Blob(["someVeryLongString"]), "Backup.txt");
*/
export declare function StartDownload(content: string | Blob, filename: string, dataTypeStr?: string, encodeContentAsURIComp?: boolean): void;
export declare function StartUpload(): Promise<string | ArrayBuffer>;
export declare function TransferPrototypeProps(target: Object, source: Object, descriptorBase: PropertyDescriptor, descriptorOverride: PropertyDescriptor): void;
export declare type WithFuncsStandalone_Type<T> = {
    [P in keyof T]: T[P] extends (...args: any[]) => any ? (thisArg: Object, ...args: Parameters<T[P]>) => ReturnType<T[P]> : T[P];
};
export declare function WithFuncsStandalone<T>(source: T): WithFuncsStandalone_Type<T>;
export declare function CreateProxyForClassExtensions<TargetType, ProxyType>(sourceClass_prototype: any): (nextThis: TargetType) => ProxyType;
export declare const RemoveCircularLinks_specialTypeHandlers: ({
    type: SetConstructor;
    keys: (a: any) => any;
    get: (a: any, key: any) => any;
    delete: (a: any, key: any) => any;
} | {
    type: MapConstructor;
    keys: (a: any) => any;
    get: (a: any, key: any) => any;
    delete: (a: any, key: any) => any;
})[];
export declare function RemoveCircularLinks(node: any, specialTypeHandlers?: ({
    type: SetConstructor;
    keys: (a: any) => any;
    get: (a: any, key: any) => any;
    delete: (a: any, key: any) => any;
} | {
    type: MapConstructor;
    keys: (a: any) => any;
    get: (a: any, key: any) => any;
    delete: (a: any, key: any) => any;
})[], nodeStack_set?: Set<any>): void;