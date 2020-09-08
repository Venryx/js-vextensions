export declare type PropChange = {
    key: string;
    oldVal: any;
    newVal: any;
};
export declare function GetPropChanges(oldObj: any, newObj: any, returnNullIfSame?: boolean, useJSONCompare?: boolean): PropChange[] | null;
