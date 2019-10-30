declare global {
    interface Object {
        _AddItem: (name: string, value: any) => void;
    }
}
declare global {
    interface Object {
        _AddFunction: (name: string, func: Function) => void;
    }
}
declare global {
    interface Object {
        _AddGetterSetter: (name: string, getter: Function, setter: Function) => void;
    }
}
declare global {
    interface Object {
        _AddFunction_Inline: Function;
    }
}
declare global {
    interface Object {
        _AddGetter_Inline: Function;
    }
}
declare global {
    interface Object {
        _AddSetter_Inline: Function;
    }
}
declare global {
    interface Object {
        GetName(): string;
        SetName(name: string): Function;
    }
}
declare global {
    interface Object {
        Extend: (obj: any) => void;
    }
}
interface VSet_Options {
    prop?: PropertyDescriptor;
    deleteUndefined?: boolean;
    deleteNull?: boolean;
    deleteEmpty?: boolean;
}
declare global {
    interface Object {
        VSet<T>(this: T, props: any, options?: VSet_Options): T;
        VSet<T>(this: T, propName: string, propValue: any, options?: VSet_Options): T;
    }
}
declare global {
    interface Object {
        Extended<T, T2>(this: T, x: T2): T & T2;
    }
}
declare global {
    interface Object {
        SafeGet(this: any, path: string, resultIfNull?: any): any;
        SafeGet<T, Result>(this: T, pathGetterFunc: (self: T) => Result, resultIfNull?: any): Result;
    }
}
declare global {
    interface Object {
        VAct<T>(this: T, func: (self: T) => any): T;
    }
}
declare global {
    interface Object {
        As<T>(type: new (..._: any[]) => T): T;
    }
}
declare global {
    interface Object {
        Strip<T>(this: T): T;
    }
}
declare global {
    interface Object {
        Including(...propNames: string[]): Object;
    }
}
declare global {
    interface Object {
        Excluding(...propNames: string[]): Object;
    }
}
declare global {
    interface Object {
        IsOneOf(...values: any[]): boolean;
    }
}
declare global {
    interface Object {
        Props<T>(this: {
            [key: number]: T;
        } | {
            [key: string]: T;
        }, excludeSpecialProps?: boolean): {
            index: number;
            name: string;
            value: T;
        }[];
        Props<T>(excludeSpecialProps?: boolean): {
            index: number;
            name: string;
            value: T;
        }[];
    }
}
declare global {
    interface Object {
        Pairs<T>(this: {
            [key: number]: T;
        } | {
            [key: string]: T;
        }, excludeSpecialProps?: boolean | 1): {
            index: number;
            key: string;
            keyNum?: number;
            value: T;
        }[];
        Pairs<T>(excludeSpecialProps?: boolean | 1): {
            index: number;
            key: string;
            keyNum?: number;
            value: T;
        }[];
    }
}
declare global {
    interface Object {
        VKeys(excludeSpecialProps?: boolean | 1): string[];
    }
}
declare global {
    interface Object {
        VValues<T>(this: {
            [key: number]: T;
        } | {
            [key: string]: T;
        }, excludeSpecialProps?: boolean | 1): T[];
        VValues<T>(excludeSpecialProps?: boolean | 1): T[];
    }
}
declare global {
    interface Object {
        FA_Select<T, T2>(this: {
            [key: number]: T;
        } | {
            [key: string]: T;
        }, selectFunc?: (item: T, index?: number) => T2): T2[];
    }
}
declare global {
    interface Object {
        FA_RemoveAt(index: number): any;
    }
}
declare global {
    interface Object {
        FA_Add<T>(this: {
            [key: number]: T;
        } | {
            [key: string]: T;
        }, item: T): any;
    }
}
export {};
