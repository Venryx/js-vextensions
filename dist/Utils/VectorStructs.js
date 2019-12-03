"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = require("./General");
var __1 = require("..");
function IsNullOrNaN(value) {
    return value === null || __1.IsNaN(value);
}
function IsVector2iShape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y");
}
exports.IsVector2iShape = IsVector2iShape;
var Vector2i = /** @class */ (function () {
    function Vector2i() {
        var _a, _b, _c;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var x = 0, y = 0;
        if (typeof args[0] == "number")
            _a = __read(args, 2), x = _a[0], y = _a[1];
        else if (args[0] && args[0].x != null)
            _b = __read([args[0].x, args[0].y], 2), x = _b[0], y = _b[1];
        else if (args[0] && args[0].left != null)
            _c = __read([args[0].left, args[0].top], 2), x = _c[0], y = _c[1];
        __1.Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y), "Cannot initialize Vector2i's x/y to null/NaN. (if needed, initialize to undefined)");
        this.x = x;
        this.y = y;
    }
    Vector2i_1 = Vector2i;
    Object.defineProperty(Vector2i, "zero", {
        get: function () { return new Vector2i_1(0, 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2i, "one", {
        get: function () { return new Vector2i_1(1, 1); },
        enumerable: true,
        configurable: true
    });
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
    }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    Vector2i.prototype.toString = function () { return this.x + " " + this.y; };
    Vector2i.prototype.Equals = function (other) { return other && this.toString() == other.toString(); };
    Vector2i.prototype.NewX = function (xOrFunc) { return new Vector2i_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y); };
    Vector2i.prototype.NewY = function (yOrFunc) { return new Vector2i_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc); };
    Vector2i.prototype.Plus = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args, 2), x = _a[0], y = _a[1];
        return new Vector2i_1(this.x + x, this.y + y);
    };
    Vector2i.prototype.Minus = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args, 2), x = _a[0], y = _a[1];
        return new Vector2i_1(this.x - x, this.y - y);
    };
    Vector2i.prototype.Times = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector2iShape(args[0]) ? [args[0].x, args[0].y] :
            args.length == 1 ? [args[0], args[0]] :
                args, 2), x = _a[0], y = _a[1];
        return new Vector2i_1(this.x * x, this.y * y);
    };
    Vector2i.prototype.DividedBy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector2iShape(args[0]) ? [args[0].x, args[0].y] :
            args.length == 1 ? [args[0], args[0]] :
                args, 2), x = _a[0], y = _a[1];
        return new Vector2i_1(this.x / x, this.y / y);
    };
    Vector2i.prototype.DistanceTo = function (other) {
        return Math.sqrt(__1.NumberCE.ToPower(other.x - this.x, 2) + __1.NumberCE.ToPower(other.y - this.y, 2));
    };
    var Vector2i_1;
    Vector2i = Vector2i_1 = __decorate([
        General_1.Global
    ], Vector2i);
    return Vector2i;
}());
exports.Vector2i = Vector2i;
function IsVector3iShape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("z");
}
exports.IsVector3iShape = IsVector3iShape;
var Vector3i = /** @class */ (function () {
    function Vector3i(x, y, z) {
        if (x === void 0) { x = null; }
        if (y === void 0) { y = null; }
        if (z === void 0) { z = null; }
        __1.Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(z), "Cannot initialize Vector3i's x/y/z to null/NaN. (if needed, initialize to undefined)");
        this.x = x != null ? x : 0;
        this.y = y != null ? y : 0;
        this.z = z != null ? z : 0;
    }
    Vector3i_1 = Vector3i;
    Object.defineProperty(Vector3i, "zero", {
        get: function () { return new Vector3i_1(0, 0, 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector3i, "one", {
        get: function () { return new Vector3i_1(1, 1, 1); },
        enumerable: true,
        configurable: true
    });
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
        this.z = parseInt(strParts[2]);
    }
    //VDFSerialize() { return this.toString(); } //Swapped().toString(); }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    Vector3i.prototype.toString = function () { return this.x + " " + this.y + " " + this.z; };
    Vector3i.prototype.NewX = function (xOrFunc) { return new Vector3i_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y, this.z); };
    Vector3i.prototype.NewY = function (yOrFunc) { return new Vector3i_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc, this.z); };
    Vector3i.prototype.NewZ = function (zOrFunc) { return new Vector3i_1(this.x, this.y, zOrFunc instanceof Function ? zOrFunc(this.z) : zOrFunc); };
    Vector3i.prototype.Minus = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args, 3), x = _a[0], y = _a[1], z = _a[2];
        return new Vector3i_1(this.x - x, this.y - y, this.z - z);
    };
    Vector3i.prototype.Plus = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args, 3), x = _a[0], y = _a[1], z = _a[2];
        return new Vector3i_1(this.x + x, this.y + y, this.z + z);
    };
    Vector3i.prototype.Times = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] :
            args.length == 1 ? [args[0], args[0], args[0]] :
                args, 3), x = _a[0], y = _a[1], z = _a[2];
        return new Vector3i_1(this.x * x, this.y * y, this.z * z);
    };
    var Vector3i_1;
    Vector3i = Vector3i_1 = __decorate([
        General_1.Global
    ], Vector3i);
    return Vector3i;
}());
exports.Vector3i = Vector3i;
function IsVRectShape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("width") && obj.hasOwnProperty("height");
}
exports.IsVRectShape = IsVRectShape;
var VRect = /** @class */ (function () {
    function VRect() {
        var _a, _b;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var x, y, width, height, y0IsBottom;
        if (args.length == 2 || args.length == 3)
            _a = __read([args[0].x, args[0].y, args[1].x, args[1].y, args[2]], 5), x = _a[0], y = _a[1], width = _a[2], height = _a[3], y0IsBottom = _a[4];
        else
            _b = __read(args, 5), x = _b[0], y = _b[1], width = _b[2], height = _b[3], y0IsBottom = _b[4];
        __1.Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(width) && !IsNullOrNaN(height), "Cannot initialize VRect's x/y/width/height to null/NaN. (if needed, initialize to undefined)");
        this.x = x;
        this.y = y;
        this.width = width != null ? width : 0;
        this.height = height != null ? height : 0;
        //this.y0IsBottom = y0IsBottom != null ? y0IsBottom : false;
        if (y0IsBottom)
            this.y0IsBottom = y0IsBottom;
    }
    VRect_1 = VRect;
    VRect.FromLTWH = function (rect, y0IsBottom) {
        if (y0IsBottom === void 0) { y0IsBottom = false; }
        return new VRect_1(rect.left, rect.top, rect.width, rect.height, y0IsBottom);
    };
    Object.defineProperty(VRect.prototype, "Left", {
        get: function () { return this.x; },
        set: function (val) {
            var oldRight = this.Right;
            this.x = val;
            this.Right = oldRight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Right", {
        get: function () { return this.x + this.width; },
        set: function (val) { this.width = val - this.x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Bottom", {
        get: function () { return this.y0IsBottom ? this.y : this.y + this.height; },
        set: function (val) {
            if (this.y0IsBottom) {
                var oldTop = this.Top;
                this.y = val;
                this.Top = oldTop;
            }
            else {
                this.height = val - this.y;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Top", {
        get: function () { return this.y0IsBottom ? this.y + this.height : this.y; },
        set: function (val) {
            if (this.y0IsBottom) {
                this.height = val - this.y;
            }
            else {
                var oldBottom = this.Bottom;
                this.y = val;
                this.Bottom = oldBottom;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Position", {
        get: function () { return new Vector2i(this.x, this.y); },
        set: function (val) {
            this.x = val.x;
            this.y = val.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Size", {
        get: function () { return new Vector2i(this.width, this.height); },
        set: function (val) {
            this.width = val.x;
            this.height = val.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Center", {
        get: function () { return new Vector2i(this.x + (this.width / 2), this.y + (this.height / 2)); },
        set: function (val) {
            var offset = val.Minus(this.Center);
            this.Position = this.Position.Plus(offset);
        },
        enumerable: true,
        configurable: true
    });
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
        this.width = parseInt(strParts[2]);
        this.height = parseInt(strParts[3]);
    }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    VRect.prototype.toString = function () { return this.x + " " + this.y + " " + this.width + " " + this.height; };
    VRect.prototype.Equals = function (other) {
        if (!(other instanceof VRect_1))
            return false;
        return this.toString() == other.toString();
    };
    VRect.prototype.NewX = function (valOrFunc) {
        return __1.ObjectCE.VSet(this.Clone(), { x: valOrFunc instanceof Function ? valOrFunc(this.x) : valOrFunc });
    };
    VRect.prototype.NewLeft = function (valOrFunc) {
        return __1.ObjectCE.VSet(this.Clone(), { Left: valOrFunc instanceof Function ? valOrFunc(this.Left) : valOrFunc });
    };
    VRect.prototype.NewRight = function (valOrFunc) {
        return __1.ObjectCE.VSet(this.Clone(), { Right: valOrFunc instanceof Function ? valOrFunc(this.Right) : valOrFunc });
    };
    VRect.prototype.NewY = function (valOrFunc) {
        return __1.ObjectCE.VSet(this.Clone(), { y: valOrFunc instanceof Function ? valOrFunc(this.y) : valOrFunc });
    };
    VRect.prototype.NewBottom = function (valOrFunc) {
        return __1.ObjectCE.VSet(this.Clone(), { Bottom: valOrFunc instanceof Function ? valOrFunc(this.Bottom) : valOrFunc });
    };
    VRect.prototype.NewTop = function (valOrFunc) {
        return __1.ObjectCE.VSet(this.Clone(), { Top: valOrFunc instanceof Function ? valOrFunc(this.Top) : valOrFunc });
    };
    VRect.prototype.NewPosition = function (valOrFunc) {
        return __1.ObjectCE.VSet(this.Clone(), { Position: valOrFunc instanceof Function ? valOrFunc(this.Position) : valOrFunc });
    };
    VRect.prototype.NewWidth = function (valOrFunc) {
        return __1.ObjectCE.VSet(this.Clone(), { width: valOrFunc instanceof Function ? valOrFunc(this.width) : valOrFunc });
    };
    VRect.prototype.NewHeight = function (valOrFunc) {
        return __1.ObjectCE.VSet(this.Clone(), { height: valOrFunc instanceof Function ? valOrFunc(this.height) : valOrFunc });
    };
    VRect.prototype.NewSize = function (valOrFunc) {
        return __1.ObjectCE.VSet(this.Clone(), { Size: valOrFunc instanceof Function ? valOrFunc(this.Size) : valOrFunc });
    };
    VRect.prototype.Grow = function (amountOnEachSide) {
        return new VRect_1(this.x - amountOnEachSide, this.y - amountOnEachSide, this.width + (amountOnEachSide * 2), this.height + (amountOnEachSide * 2));
    };
    VRect.prototype.Encapsulating = function (rect) {
        var posX = Math.min(this.x, rect.x);
        var posY = Math.min(this.y, rect.y);
        return new VRect_1(posX, posY, Math.max(this.x + this.width, rect.x + rect.width) - posX, Math.max(this.y + this.height, rect.y + rect.height) - posY);
    };
    VRect.prototype.Encapsulate = function (rect) {
        var oldRight = this.x + this.width;
        var oldBottom = this.y + this.height;
        this.x = Math.min(this.x, rect.x);
        this.y = Math.min(this.y, rect.y);
        this.width = Math.max(oldRight, rect.x + rect.width) - this.x;
        this.height = Math.max(oldBottom, rect.y + rect.height) - this.y;
    };
    VRect.prototype.Intersects = function (other) {
        return this.Right > other.Left && this.Left < other.Right && this.Bottom > other.Top && this.Top < other.Bottom;
    };
    /** Returns true if rect would intersect the other, when wrapped to the 2/8 potential "other-sides" of given frame/backdrop. (-x, +x, -y, +y, -x -y, -x +y, +x -y, +x +y)
     * (note that it does the checks "stupidly", ie. just checking all possible switch-side variants, without checking if "switched side" version is actually on or even near the actual frame/backdrop) */
    VRect.prototype.Intersects_Advanced = function (other, options) {
        var variantsToCompare = [this];
        if (options.xWrappedBy) {
            variantsToCompare.push.apply(variantsToCompare, __spread(__1.ArrayCE.SelectMany(variantsToCompare, function (base) {
                return [base, base.NewX(function (x) { return x - options.xWrappedBy; }), base.NewX(function (x) { return x + options.xWrappedBy; })];
            })));
        }
        if (options.yWrappedBy) {
            variantsToCompare.push.apply(variantsToCompare, __spread(__1.ArrayCE.SelectMany(variantsToCompare, function (base) {
                return [base, base.NewY(function (y) { return y - options.yWrappedBy; }), base.NewY(function (y) { return y + options.yWrappedBy; })];
            })));
        }
        return __1.ArrayCE.Any(variantsToCompare, function (a) { return a.Intersects(other); });
    };
    VRect.prototype.Clone = function () {
        return new VRect_1(this.x, this.y, this.width, this.height);
    };
    var VRect_1;
    VRect = VRect_1 = __decorate([
        General_1.Global
    ], VRect);
    return VRect;
}());
exports.VRect = VRect;
var VBounds = /** @class */ (function () {
    function VBounds(position, size) {
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
    VBounds.prototype.toString = function () { return this.position.x + " " + this.position.y + " " + this.position.z + "|" + this.size.x + " " + this.size.y + " " + this.size.z; };
    VBounds = __decorate([
        General_1.Global
    ], VBounds);
    return VBounds;
}());
exports.VBounds = VBounds;
//# sourceMappingURL=VectorStructs.js.map