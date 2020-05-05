export declare type Vector2Shape = {
    x: number;
    y: number;
};
export declare function IsVector2iShape(obj: any): obj is {
    x: number;
    y: number;
};
export declare class Vector2 {
    static get zero(): Vector2;
    static get one(): Vector2;
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
    NewX(xOrFunc: number | ((oldX: number) => number)): Vector2;
    NewY(yOrFunc: number | ((oldY: number) => number)): Vector2;
    Plus(other: Vector2Shape): Vector2;
    Plus(otherX: number, otherY: number): Vector2;
    Minus(other: Vector2Shape): Vector2;
    Minus(otherX: number, otherY: number): Vector2;
    Times(other: Vector2Shape): Vector2;
    Times(other: number): Vector2;
    Times(otherX: number, otherY: number): Vector2;
    DividedBy(other: Vector2): Vector2;
    DividedBy(other: number): Vector2;
    DividedBy(otherX: number, otherY: number): Vector2;
    DistanceTo(other: Vector2): number;
}
export declare type Vector3Shape = {
    x: number;
    y: number;
    z: number;
};
export declare function IsVector3Shape(obj: any): obj is {
    x: number;
    y: number;
    z: number;
};
export declare class Vector3 {
    static get zero(): Vector3;
    static get one(): Vector3;
    constructor(x?: any, y?: any, z?: any);
    x: number;
    y: number;
    z: number;
    toString(): string;
    NewX(xOrFunc: number | ((oldX: number) => number)): Vector3;
    NewY(yOrFunc: number | ((oldY: number) => number)): Vector3;
    NewZ(zOrFunc: number | ((oldZ: number) => number)): Vector3;
    Minus(other: Vector3Shape): Vector3;
    Minus(otherX: number, otherY: number, otherZ: number): Vector3;
    Plus(other: Vector3Shape): Vector3;
    Plus(otherX: number, otherY: number): Vector3;
    Times(other: Vector3Shape): Vector3;
    Times(other: number): Vector3;
    Times(otherX: number, otherY: number): Vector3;
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
    constructor(pos: Vector2, size: Vector2, y0IsBottom?: boolean);
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
    get Position(): Vector2;
    set Position(val: Vector2);
    get Size(): Vector2;
    set Size(val: Vector2);
    get Center(): Vector2;
    set Center(val: Vector2);
    toString(): string;
    Equals(other: any): boolean;
    NewX(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewLeft(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewRight(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewY(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewBottom(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewTop(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewPosition(valOrFunc: Vector2 | ((oldVal: Vector2) => Vector2)): VRect;
    NewWidth(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewHeight(valOrFunc: number | ((oldVal: number) => number)): VRect;
    NewSize(valOrFunc: Vector2 | ((oldVal: Vector2) => Vector2)): VRect;
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
    constructor(position: Vector3, size: Vector3);
    position: Vector3;
    size: Vector3;
    toString(): string;
}
