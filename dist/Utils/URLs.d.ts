export declare function ToAbsoluteUrl(url: string): string;
export declare function JumpToHash(hashStr: string): void;
/** Returns [domainStr, pathStr, varsStr, hashStr], without the separator-chars. */
export declare function GetCurrentURLString(): string;
export declare function GetUrlParts(url?: string): [string, string, string, string];
export declare class VURL {
    static Parse(urlStr: string, useCurrentDomainIfMissing?: boolean, allowQuestionMarkAsVarSep?: boolean): VURL;
    static FromLocationObject(location: {
        pathname?: string;
        search?: string;
        hash?: string;
    }): VURL;
    ToState(): {
        pathname: string;
        search: string;
        hash: string;
        key: string;
    };
    constructor(domain?: string, pathNodes?: string[], queryVars?: QueryVar[], hash?: string);
    domain: string;
    DomainStr(withProtocol?: boolean): string;
    readonly Protocol: string;
    readonly DomainWithoutProtocol: string;
    pathNodes: string[];
    PathStr(pathStartSlash?: boolean): string;
    queryVars: QueryVar[];
    readonly QueryStr: string;
    GetQueryVar(name: string): string;
    SetQueryVar(name: string, value: any): void;
    hash: string;
    readonly HashStr: string;
    Clone(): VURL;
    toString(options?: {
        domain?: boolean;
        domain_protocol?: boolean;
        pathStartSlash?: boolean | "auto";
        path?: boolean;
        queryVars?: boolean;
        hash?: boolean;
    }): string;
    toString_OptIn(options?: {
        domain?: boolean;
        domain_protocol?: boolean;
        pathStartSlash?: boolean | "auto";
        path?: boolean;
        queryVars?: boolean;
        hash?: boolean;
    }): string;
}
export declare class QueryVar {
    constructor(name: string, value: string);
    name: string;
    value: string;
    Clone(): QueryVar;
}
