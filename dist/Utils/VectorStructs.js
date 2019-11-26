var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Vector2i_1, Vector3i_1, VRect_1;
import { Global } from "./General";
import { IsNaN, Assert, NumberCE, ObjectCE, ArrayCE } from "..";
function IsNullOrNaN(value) {
    return value === null || IsNaN(value);
}
export function IsVector2iShape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y");
}
let Vector2i = Vector2i_1 = class Vector2i {
    constructor(...args) {
        var x = 0, y = 0;
        if (typeof args[0] == "number")
            [x, y] = args;
        else if (args[0] && args[0].x != null)
            [x, y] = [args[0].x, args[0].y];
        else if (args[0] && args[0].left != null)
            [x, y] = [args[0].left, args[0].top];
        Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y), "Cannot initialize Vector2i's x/y to null/NaN. (if needed, initialize to undefined)");
        this.x = x;
        this.y = y;
    }
    static get zero() { return new Vector2i_1(0, 0); }
    static get one() { return new Vector2i_1(1, 1); }
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
    }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    toString() { return this.x + " " + this.y; }
    Equals(other) { return other && this.toString() == other.toString(); }
    NewX(xOrFunc) { return new Vector2i_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y); }
    NewY(yOrFunc) { return new Vector2i_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc); }
    Plus(...args) {
        let [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args;
        return new Vector2i_1(this.x + x, this.y + y);
    }
    Minus(...args) {
        let [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args;
        return new Vector2i_1(this.x - x, this.y - y);
    }
    Times(...args) {
        var [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] :
            args.length == 1 ? [args[0], args[0]] :
                args;
        return new Vector2i_1(this.x * x, this.y * y);
    }
    DividedBy(...args) {
        var [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] :
            args.length == 1 ? [args[0], args[0]] :
                args;
        return new Vector2i_1(this.x / x, this.y / y);
    }
    DistanceTo(other) {
        return Math.sqrt(NumberCE(other.x - this.x).ToPower(2) + NumberCE(other.y - this.y).ToPower(2));
    }
};
Vector2i = Vector2i_1 = __decorate([
    Global
], Vector2i);
export { Vector2i };
export function IsVector3iShape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("z");
}
let Vector3i = Vector3i_1 = class Vector3i {
    constructor(x = null, y = null, z = null) {
        Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(z), "Cannot initialize Vector3i's x/y/z to null/NaN. (if needed, initialize to undefined)");
        this.x = x != null ? x : 0;
        this.y = y != null ? y : 0;
        this.z = z != null ? z : 0;
    }
    static get zero() { return new Vector3i_1(0, 0, 0); }
    static get one() { return new Vector3i_1(1, 1, 1); }
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
        this.z = parseInt(strParts[2]);
    }
    //VDFSerialize() { return this.toString(); } //Swapped().toString(); }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    toString() { return this.x + " " + this.y + " " + this.z; }
    NewX(xOrFunc) { return new Vector3i_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y, this.z); }
    NewY(yOrFunc) { return new Vector3i_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc, this.z); }
    NewZ(zOrFunc) { return new Vector3i_1(this.x, this.y, zOrFunc instanceof Function ? zOrFunc(this.z) : zOrFunc); }
    Minus(...args) {
        let [x, y, z] = IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args;
        return new Vector3i_1(this.x - x, this.y - y, this.z - z);
    }
    Plus(...args) {
        let [x, y, z] = IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args;
        return new Vector3i_1(this.x + x, this.y + y, this.z + z);
    }
    Times(...args) {
        var [x, y, z] = IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] :
            args.length == 1 ? [args[0], args[0], args[0]] :
                args;
        return new Vector3i_1(this.x * x, this.y * y, this.z * z);
    }
};
Vector3i = Vector3i_1 = __decorate([
    Global
], Vector3i);
export { Vector3i };
export function IsVRectShape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("width") && obj.hasOwnProperty("height");
}
let VRect = VRect_1 = class VRect {
    constructor(...args) {
        let x, y, width, height, y0IsBottom;
        if (args.length == 2 || args.length == 3)
            [x, y, width, height, y0IsBottom] = [args[0].x, args[0].y, args[1].x, args[1].y, args[2]];
        else
            [x, y, width, height, y0IsBottom] = args;
        Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(width) && !IsNullOrNaN(height), "Cannot initialize VRect's x/y/width/height to null/NaN. (if needed, initialize to undefined)");
        this.x = x;
        this.y = y;
        this.width = width != null ? width : 0;
        this.height = height != null ? height : 0;
        //this.y0IsBottom = y0IsBottom != null ? y0IsBottom : false;
        if (y0IsBottom)
            this.y0IsBottom = y0IsBottom;
    }
    static FromLTWH(rect, y0IsBottom = false) {
        return new VRect_1(rect.left, rect.top, rect.width, rect.height, y0IsBottom);
    }
    get Left() { return this.x; }
    set Left(val) {
        var oldRight = this.Right;
        this.x = val;
        this.Right = oldRight;
    }
    get Right() { return this.x + this.width; }
    set Right(val) { this.width = val - this.x; }
    get Bottom() { return this.y0IsBottom ? this.y : this.y + this.height; }
    set Bottom(val) {
        if (this.y0IsBottom) {
            var oldTop = this.Top;
            this.y = val;
            this.Top = oldTop;
        }
        else {
            this.height = val - this.y;
        }
    }
    get Top() { return this.y0IsBottom ? this.y + this.height : this.y; }
    set Top(val) {
        if (this.y0IsBottom) {
            this.height = val - this.y;
        }
        else {
            let oldBottom = this.Bottom;
            this.y = val;
            this.Bottom = oldBottom;
        }
    }
    get Position() { return new Vector2i(this.x, this.y); }
    set Position(val) {
        this.x = val.x;
        this.y = val.y;
    }
    get Size() { return new Vector2i(this.width, this.height); }
    set Size(val) {
        this.width = val.x;
        this.height = val.y;
    }
    get Center() { return new Vector2i(this.x + (this.width / 2), this.y + (this.height / 2)); }
    set Center(val) {
        let offset = val.Minus(this.Center);
        this.Position = this.Position.Plus(offset);
    }
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
        this.width = parseInt(strParts[2]);
        this.height = parseInt(strParts[3]);
    }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    toString() { return this.x + " " + this.y + " " + this.width + " " + this.height; }
    Equals(other) {
        if (!(other instanceof VRect_1))
            return false;
        return this.toString() == other.toString();
    }
    NewX(valOrFunc) {
        return ObjectCE(this.Clone()).VSet({ x: valOrFunc instanceof Function ? valOrFunc(this.x) : valOrFunc });
    }
    NewLeft(valOrFunc) {
        return ObjectCE(this.Clone()).VSet({ Left: valOrFunc instanceof Function ? valOrFunc(this.Left) : valOrFunc });
    }
    NewRight(valOrFunc) {
        return ObjectCE(this.Clone()).VSet({ Right: valOrFunc instanceof Function ? valOrFunc(this.Right) : valOrFunc });
    }
    NewY(valOrFunc) {
        return ObjectCE(this.Clone()).VSet({ y: valOrFunc instanceof Function ? valOrFunc(this.y) : valOrFunc });
    }
    NewBottom(valOrFunc) {
        return ObjectCE(this.Clone()).VSet({ Bottom: valOrFunc instanceof Function ? valOrFunc(this.Bottom) : valOrFunc });
    }
    NewTop(valOrFunc) {
        return ObjectCE(this.Clone()).VSet({ Top: valOrFunc instanceof Function ? valOrFunc(this.Top) : valOrFunc });
    }
    NewPosition(valOrFunc) {
        return ObjectCE(this.Clone()).VSet({ Position: valOrFunc instanceof Function ? valOrFunc(this.Position) : valOrFunc });
    }
    NewWidth(valOrFunc) {
        return ObjectCE(this.Clone()).VSet({ width: valOrFunc instanceof Function ? valOrFunc(this.width) : valOrFunc });
    }
    NewHeight(valOrFunc) {
        return ObjectCE(this.Clone()).VSet({ height: valOrFunc instanceof Function ? valOrFunc(this.height) : valOrFunc });
    }
    NewSize(valOrFunc) {
        return ObjectCE(this.Clone()).VSet({ Size: valOrFunc instanceof Function ? valOrFunc(this.Size) : valOrFunc });
    }
    Grow(amountOnEachSide) {
        return new VRect_1(this.x - amountOnEachSide, this.y - amountOnEachSide, this.width + (amountOnEachSide * 2), this.height + (amountOnEachSide * 2));
    }
    Encapsulating(rect) {
        var posX = Math.min(this.x, rect.x);
        var posY = Math.min(this.y, rect.y);
        return new VRect_1(posX, posY, Math.max(this.x + this.width, rect.x + rect.width) - posX, Math.max(this.y + this.height, rect.y + rect.height) - posY);
    }
    Encapsulate(rect) {
        var oldRight = this.x + this.width;
        var oldBottom = this.y + this.height;
        this.x = Math.min(this.x, rect.x);
        this.y = Math.min(this.y, rect.y);
        this.width = Math.max(oldRight, rect.x + rect.width) - this.x;
        this.height = Math.max(oldBottom, rect.y + rect.height) - this.y;
    }
    Intersects(other) {
        return this.Right > other.Left && this.Left < other.Right && this.Bottom > other.Top && this.Top < other.Bottom;
    }
    /** Returns true if rect would intersect the other, when wrapped to the 2/8 potential "other-sides" of given frame/backdrop. (-x, +x, -y, +y, -x -y, -x +y, +x -y, +x +y)
     * (note that it does the checks "stupidly", ie. just checking all possible switch-side variants, without checking if "switched side" version is actually on or even near the actual frame/backdrop) */
    Intersects_Advanced(other, options) {
        let variantsToCompare = [this];
        if (options.xWrappedBy) {
            variantsToCompare.push(...ArrayCE(variantsToCompare).SelectMany(base => {
                return [base, base.NewX(x => x - options.xWrappedBy), base.NewX(x => x + options.xWrappedBy)];
            }));
        }
        if (options.yWrappedBy) {
            variantsToCompare.push(...ArrayCE(variantsToCompare).SelectMany(base => {
                return [base, base.NewY(y => y - options.yWrappedBy), base.NewY(y => y + options.yWrappedBy)];
            }));
        }
        return ArrayCE(variantsToCompare).Any(a => a.Intersects(other));
    }
    Clone() {
        return new VRect_1(this.x, this.y, this.width, this.height);
    }
};
VRect = VRect_1 = __decorate([
    Global
], VRect);
export { VRect };
let VBounds = class VBounds {
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }
    /*@_VDFDeserialize() Deserialize(node) {
        var parts = node.primitiveValue.split("|");
        var posParts = parts[0].split(" ");
        this.position = new VVector3(parseFloat(posParts[0]), parseFloat(posParts[1]), parseFloat(posParts[2]));
        var sizeParts = parts[1].split(" ");
        this.size = new VVector3(parseFloat(sizeParts[0]), parseFloat(sizeParts[1]), parseFloat(sizeParts[2]));
    }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    toString() { return this.position.x + " " + this.position.y + " " + this.position.z + "|" + this.size.x + " " + this.size.y + " " + this.size.z; }
};
VBounds = __decorate([
    Global
], VBounds);
export { VBounds };
//# sourceMappingURL=VectorStructs.js.map