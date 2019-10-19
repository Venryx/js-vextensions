export declare type Vector2iShape = {
    x: number;
    y: number;
};
export declare function IsVector2iShape(obj: any): obj is {
    x: number;
    y: number;
};
export declare class Vector2i {
    static readonly zero: Vector2i;
    static readonly one: Vector2i;
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
    static readonly zero: Vector3i;
    static readonly one: Vector3i;
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
    Left: number;
    Right: number;
    Bottom: number;
    Top: number;
    Position: Vector2i;
    Size: Vector2i;
    Center: Vector2i;
    toString(): string;
    Equals(other: any): boolean;
    NewX(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewLeft(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewRight(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewY(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewBottom(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewTop(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewWidth(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewHeight(valOrFunc: number | ((oldVal: number) => number)): VRect;
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
