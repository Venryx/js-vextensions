export declare type PropChange = {
    key: string;
    oldVal: any;
    newVal: any;
};
export declare function GetPropChanges(oldObj: any, newObj: any): PropChange[];
export declare function GetPropChanges(oldObj: any, newObj: any, returnNullIfSame: false, useJSONCompare?: boolean): PropChange[];
export declare function GetPropChanges(oldObj: any, newObj: any, returnNullIfSame?: boolean, useJSONCompare?: boolean): PropChange[] | null;
