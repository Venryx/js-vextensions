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
    NewX(xOrFunc: any): Vector2i;
    NewY(yOrFunc: any): Vector2i;
    Minus(other: Vector2i): Vector2i;
    Minus(otherX: number, otherY: number): Vector2i;
    Plus(other: Vector2i): Vector2i;
    Plus(otherX: number, otherY: number): Vector2i;
    Times(other: Vector2i): Vector2i;
    Times(other: number): Vector2i;
    Times(otherX: number, otherY: number): Vector2i;
    DistanceTo(other: Vector2i): number;
}
export declare class VVector2 {
    static readonly zero: VVector2;
    static readonly one: VVector2;
    constructor(x?: any, y?: any);
    x: number;
    y: number;
    toString(): string;
    NewX(xOrFunc: any): VVector2;
    NewY(yOrFunc: any): VVector2;
    Minus(arg1: any, arg2: any): VVector2;
    Plus(arg1: any, arg2: any): VVector2;
}
export declare class Vector3i {
    static readonly zero: Vector3i;
    static readonly one: Vector3i;
    constructor(x?: any, y?: any, z?: any);
    x: number;
    y: number;
    z: number;
    toString(): string;
    NewX(xOrFunc: any): Vector3i;
    NewY(yOrFunc: any): Vector3i;
    NewZ(zOrFunc: any): Vector3i;
}
export declare class VVector3 {
    static readonly zero: VVector3;
    static readonly one: VVector3;
    constructor(x?: any, y?: any, z?: any);
    x: number;
    y: number;
    z: number;
    toString: () => string;
    NewX(xOrFunc: any): VVector3;
    NewY(yOrFunc: any): VVector3;
    NewZ(zOrFunc: any): VVector3;
    Minus(arg1: any, arg2: any, arg3: any): VVector3;
    Plus(arg1: any, arg2: any, arg3: any): VVector3;
}
export declare class VRect {
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
    readonly Center: Vector2i;
    toString(): string;
    Equals(other: any): boolean;
    NewX(valOrFunc: any): VRect;
    NewLeft(valOrFunc: any): VRect;
    NewRight(valOrFunc: any): VRect;
    NewY(valOrFunc: any): VRect;
    NewBottom(valOrFunc: any): VRect;
    NewTop(valOrFunc: any): VRect;
    NewWidth(valOrFunc: any): VRect;
    NewHeight(valOrFunc: any): VRect;
    Grow(amountOnEachSide: any): VRect;
    Encapsulating(rect: VRect): VRect;
    Encapsulate(rect: VRect): void;
    Intersects(other: VRect): boolean;
    Clone(): VRect;
}
export declare class VBounds {
    constructor(position: any, size: any);
    position: any;
    size: any;
    toString(): string;
}
