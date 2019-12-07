export declare type Vector2iShape = {
    x: number;
    y: number;
};
export declare function IsVector2iShape(obj: any): obj is {
    x: number;
    y: number;
};
export declare class Vector2i {
    static get zero(): Vector2i;
    static get one(): Vector2i;
    constructor(x?: number, y?: number);
    constructor(pos: {
        x: number;
        y: number;
    });
    constructor(pos: {
        left: number;
        top: number;
    });
    x: number;
    y: number;
    toString(): string;
    Equals(other: any): boolean;
    NewX(xOrFunc: number | ((oldX: number) => number)): Vector2i;
    NewY(yOrFunc: number | ((oldY: number) => number)): Vector2i;
    Plus(other: Vector2iShape): Vector2i;
    Plus(otherX: number, otherY: number): Vector2i;
    Minus(other: Vector2iShape): Vector2i;
    Minus(otherX: number, otherY: number): Vector2i;
    Times(other: Vector2iShape): Vector2i;
    Times(other: number): Vector2i;
    Times(otherX: number, otherY: number): Vector2i;
    DividedBy(other: Vector2i): Vector2i;
    DividedBy(other: number): Vector2i;
    DividedBy(otherX: number, otherY: number): Vector2i;
    DistanceTo(other: Vector2i): number;
}
export declare type Vector3iShape = {
    x: number;
    y: number;
    z: number;
};
export declare function IsVector3iShape(obj: any): obj is {
    x: number;
    y: number;
    z: number;
};
export declare class Vector3i {
    static get zero(): Vector3i;
    static get one(): Vector3i;
    constructor(x?: any, y?: any, z?: any);
    x: number;
    y: number;
    z: number;
    toString(): string;
    NewX(xOrFunc: number | ((oldX: number) => number)): Vector3i;
    NewY(yOrFunc: number | ((oldY: number) => number)): Vector3i;
    NewZ(zOrFunc: number | ((oldZ: number) => number)): Vector3i;
    Minus(other: Vector3iShape): Vector3i;
    Minus(otherX: number, otherY: number, otherZ: number): Vector3i;
    Plus(other: Vector3iShape): Vector3i;
    Plus(otherX: number, otherY: number): Vector3i;
    Times(other: Vector3iShape): Vector3i;
    Times(other: number): Vector3i;
    Times(otherX: number, otherY: number): Vector3i;
}
export declare type VRectShape = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare function IsVRectShape(obj: any): obj is {
    x: number;
    y: number;
    z: number;
};
export declare class VRect {
    static FromLTWH(rect: {
        left: number;
        top: number;
        width: number;
        height: number;
    }, y0IsBottom?: boolean): VRect;
    constructor(pos: Vector2i, size: Vector2i, y0IsBottom?: boolean);
    constructor(x: number, y: number, width: number, height: number, y0IsBottom?: boolean);
    x: number;
    y: number;
    width: number;
    height: number;
    y0IsBottom: boolean;
    get Left(): number;
    set Left(val: number);
    get Right(): number;
    set Right(val: number);
    get Bottom(): number;
    set Bottom(val: number);
    get Top(): number;
    set Top(val: number);
    get Position(): Vector2i;
    set Position(val: Vector2i);
    get Size(): Vector2i;
    set Size(val: Vector2i);
    get Center(): Vector2i;
    set Center(val: Vector2i);
    toString(): string;
    Equals(other: any): boolean;
    NewX(valOrFunc: number | ((oldVal: number) => number)): any;
    NewLeft(valOrFunc: number | ((oldVal: number) => number)): any;
    NewRight(valOrFunc: number | ((oldVal: number) => number)): any;
    NewY(valOrFunc: number | ((oldVal: number) => number)): any;
    NewBottom(valOrFunc: number | ((oldVal: number) => number)): any;
    NewTop(valOrFunc: number | ((oldVal: number) => number)): any;
    NewPosition(valOrFunc: Vector2i | ((oldVal: Vector2i) => Vector2i)): any;
    NewWidth(valOrFunc: number | ((oldVal: number) => number)): any;
    NewHeight(valOrFunc: number | ((oldVal: number) => number)): any;
    NewSize(valOrFunc: Vector2i | ((oldVal: Vector2i) => Vector2i)): any;
    Grow(amountOnEachSide: number): VRect;
    Encapsulating(rect: VRectShape): VRect;
    Encapsulate(rect: VRectShape): void;
    Intersects(other: VRect): boolean;
    /** Returns true if rect would intersect the other, when wrapped to the 2/8 potential "other-sides" of given frame/backdrop. (-x, +x, -y, +y, -x -y, -x +y, +x -y, +x +y)
     * (note that it does the checks "stupidly", ie. just checking all possible switch-side variants, without checking if "switched side" version is actually on or even near the actual frame/backdrop) */
    Intersects_Advanced(other: VRect, options: {
        xWrappedBy?: number;
        yWrappedBy?: number;
    }): boolean;
    Clone(): VRect;
}
export declare class VBounds {
    constructor(position: Vector3i, size: Vector3i);
    position: Vector3i;
    size: Vector3i;
    toString(): string;
}
