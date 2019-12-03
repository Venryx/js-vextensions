import {Global} from "./General";
import {IsNaN, Assert, NumberCE, ObjectCE, ArrayCE} from "..";

function IsNullOrNaN(value: number) {
	return value === null || IsNaN(value);
}

export type Vector2iShape = {x: number, y: number};
export function IsVector2iShape(obj: any): obj is {x: number, y: number} {
	return obj.hasOwnProperty("x") && obj.hasOwnProperty("y");
}

@Global
export class Vector2i {
	static get zero() { return new Vector2i(0, 0); }
	static get one() { return new Vector2i(1, 1); }
	
	constructor(x?: number, y?: number);
	constructor(pos: {x: number, y: number});
	constructor(pos: {left: number, top: number});
	constructor(...args) {
		var x = 0, y = 0;
		if (typeof args[0] == "number") [x, y] = args;
		else if (args[0] && args[0].x != null) [x, y] = [args[0].x, args[0].y];
		else if (args[0] && args[0].left != null) [x, y] = [args[0].left, args[0].top];

		Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y), "Cannot initialize Vector2i's x/y to null/NaN. (if needed, initialize to undefined)");

		this.x = x;
		this.y = y;
	}

	x: number;
	y: number;
    
	/*@_VDFDeserialize() Deserialize(node) {
		var strParts = node.primitiveValue.split(" ");
		this.x = parseInt(strParts[0]);
		this.y = parseInt(strParts[1]);
	}
	@_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
	toString() { return this.x + " " + this.y; }
	Equals(other) { return other && this.toString() == other.toString(); }

	NewX(xOrFunc: number | ((oldX: number)=>number)) { return new Vector2i(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y); }
	NewY(yOrFunc: number | ((oldY: number)=>number)) { return new Vector2i(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc); }

	Plus(other: Vector2iShape): Vector2i;
	Plus(otherX: number, otherY: number): Vector2i;
	Plus(...args) {
		let [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args;
		return new Vector2i(this.x + x, this.y + y);
	}
	Minus(other: Vector2iShape): Vector2i;
	Minus(otherX: number, otherY: number): Vector2i;
	Minus(...args) {
		let [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args;
		return new Vector2i(this.x - x, this.y - y);
	}

	Times(other: Vector2iShape): Vector2i;
	Times(other: number): Vector2i;
	Times(otherX: number, otherY: number): Vector2i;
	Times(...args) {
		var [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] :
			args.length == 1 ? [args[0], args[0]] :
			args;
		return new Vector2i(this.x * x, this.y * y);
	}
	DividedBy(other: Vector2i): Vector2i;
	DividedBy(other: number): Vector2i;
	DividedBy(otherX: number, otherY: number): Vector2i;
	DividedBy(...args) {
		var [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] :
			args.length == 1 ? [args[0], args[0]] :
			args;
		return new Vector2i(this.x / x, this.y / y);
	}

	DistanceTo(other: Vector2i) {
		return Math.sqrt(NumberCE.ToPower(other.x - this.x, 2) + NumberCE.ToPower(other.y - this.y, 2));
	}
}

export type Vector3iShape = {x: number, y: number, z: number};
export function IsVector3iShape(obj: any): obj is {x: number, y: number, z: number} {
	return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("z");
}

@Global
export class Vector3i {
	static get zero() { return new Vector3i(0, 0, 0); }
	static get one() { return new Vector3i(1, 1, 1); }

	constructor(x = null, y = null, z = null) {
		Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(z), "Cannot initialize Vector3i's x/y/z to null/NaN. (if needed, initialize to undefined)");
		
		this.x = x != null ? x : 0;
		this.y = y != null ? y : 0;
		this.z = z != null ? z : 0;
    }

	x: number;
	y: number;
	z: number;

	/*@_VDFDeserialize() Deserialize(node) {
		var strParts = node.primitiveValue.split(" ");
		this.x = parseInt(strParts[0]);
		this.y = parseInt(strParts[1]);
		this.z = parseInt(strParts[2]);
	}
	//VDFSerialize() { return this.toString(); } //Swapped().toString(); }
	@_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
	toString() { return this.x + " " + this.y + " " + this.z; }

	NewX(xOrFunc: number | ((oldX: number)=>number)) { return new Vector3i(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y, this.z); }
	NewY(yOrFunc: number | ((oldY: number)=>number)) { return new Vector3i(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc, this.z); }
	NewZ(zOrFunc: number | ((oldZ: number)=>number)) { return new Vector3i(this.x, this.y, zOrFunc instanceof Function ? zOrFunc(this.z) : zOrFunc); }

	Minus(other: Vector3iShape): Vector3i;
	Minus(otherX: number, otherY: number, otherZ: number): Vector3i;
	Minus(...args) {
		let [x, y, z] = IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args;
		return new Vector3i(this.x - x, this.y - y, this.z - z);
	}
	Plus(other: Vector3iShape): Vector3i;
	Plus(otherX: number, otherY: number): Vector3i;
	Plus(...args) {
		let [x, y, z] = IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args;
		return new Vector3i(this.x + x, this.y + y, this.z + z);
	}
	Times(other: Vector3iShape): Vector3i;
	Times(other: number): Vector3i;
	Times(otherX: number, otherY: number): Vector3i;
	Times(...args) {
		var [x, y, z] = IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] :
			args.length == 1 ? [args[0], args[0], args[0]] :
			args;
		return new Vector3i(this.x * x, this.y * y, this.z * z);
	}
}

export type VRectShape = {x: number, y: number, width: number, height: number};
export function IsVRectShape(obj: any): obj is {x: number, y: number, z: number} {
	return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("width") && obj.hasOwnProperty("height");
}

@Global
export class VRect {
	static FromLTWH(rect: {left: number, top: number, width: number, height: number}, y0IsBottom = false) {
		return new VRect(rect.left, rect.top, rect.width, rect.height, y0IsBottom);
	}

	constructor(pos: Vector2i, size: Vector2i, y0IsBottom?: boolean);
	constructor(x: number, y: number, width: number, height: number, y0IsBottom?: boolean);
	constructor(...args) {
		let x: number, y: number, width: number, height: number, y0IsBottom: boolean;
		if (args.length == 2 || args.length == 3) [x, y, width, height, y0IsBottom] = [args[0].x, args[0].y, args[1].x, args[1].y, args[2]];
		else [x, y, width, height, y0IsBottom] = args;

		Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(width) && !IsNullOrNaN(height),
			"Cannot initialize VRect's x/y/width/height to null/NaN. (if needed, initialize to undefined)");

		this.x = x;
		this.y = y;
		this.width = width != null ? width : 0;
		this.height = height != null ? height : 0;
		//this.y0IsBottom = y0IsBottom != null ? y0IsBottom : false;
		if (y0IsBottom) this.y0IsBottom = y0IsBottom;
	}

	x: number;
	y: number;
	width: number;
	height: number;
	y0IsBottom: boolean;

	get Left() { return this.x; }
	set Left(val: number) {
		var oldRight = this.Right;
		this.x = val;
		this.Right = oldRight;
	}
	get Right() { return this.x + this.width; }
	set Right(val: number) { this.width = val - this.x; }
	get Bottom() { return this.y0IsBottom ? this.y : this.y + this.height; }
	set Bottom(val: number) {
		if (this.y0IsBottom) {
			var oldTop = this.Top;
			this.y = val;
			this.Top = oldTop;
		} else {
			this.height = val - this.y;
		}
	}
	get Top() { return this.y0IsBottom ? this.y + this.height : this.y; }
	set Top(val: number) {
		if (this.y0IsBottom) {
			this.height = val - this.y;
		} else {
			let oldBottom = this.Bottom;
			this.y = val;
			this.Bottom = oldBottom;
		}
	}
	get Position() { return new Vector2i(this.x, this.y); }
	set Position(val: Vector2i) {
		this.x = val.x;
		this.y = val.y;
	}
	get Size() { return new Vector2i(this.width, this.height); }
	set Size(val: Vector2i) {
		this.width = val.x;
		this.height = val.y;
	}

	get Center() { return new Vector2i(this.x + (this.width / 2), this.y + (this.height / 2)); }
	set Center(val: Vector2i) {
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
		if (!(other instanceof VRect)) return false;
		return this.toString() == other.toString();
	}

	NewX(valOrFunc: number | ((oldVal: number)=>number)) {
		return ObjectCE.VSet(this.Clone(), {x: valOrFunc instanceof Function ? valOrFunc(this.x) : valOrFunc});
	}
	NewLeft(valOrFunc: number | ((oldVal: number)=>number)) {
		return ObjectCE.VSet(this.Clone(), {Left: valOrFunc instanceof Function ? valOrFunc(this.Left) : valOrFunc});
	}
	NewRight(valOrFunc: number | ((oldVal: number)=>number)) {
		return ObjectCE.VSet(this.Clone(), {Right: valOrFunc instanceof Function ? valOrFunc(this.Right) : valOrFunc});
	}
	NewY(valOrFunc: number | ((oldVal: number)=>number)) {
		return ObjectCE.VSet(this.Clone(), {y: valOrFunc instanceof Function ? valOrFunc(this.y) : valOrFunc});
	}
	NewBottom(valOrFunc: number | ((oldVal: number)=>number)) {
		return ObjectCE.VSet(this.Clone(), {Bottom: valOrFunc instanceof Function ? valOrFunc(this.Bottom) : valOrFunc});
	}
	NewTop(valOrFunc: number | ((oldVal: number)=>number)) {
		return ObjectCE.VSet(this.Clone(), {Top: valOrFunc instanceof Function ? valOrFunc(this.Top) : valOrFunc});
	}
	NewPosition(valOrFunc: Vector2i | ((oldVal: Vector2i)=>Vector2i)) {
		return ObjectCE.VSet(this.Clone(), {Position: valOrFunc instanceof Function ? valOrFunc(this.Position) : valOrFunc});
	}
	NewWidth(valOrFunc: number | ((oldVal: number)=>number)) {
		return ObjectCE.VSet(this.Clone(), {width: valOrFunc instanceof Function ? valOrFunc(this.width) : valOrFunc});
	}
	NewHeight(valOrFunc: number | ((oldVal: number)=>number)) {
		return ObjectCE.VSet(this.Clone(), {height: valOrFunc instanceof Function ? valOrFunc(this.height) : valOrFunc});
	}
	NewSize(valOrFunc: Vector2i | ((oldVal: Vector2i)=>Vector2i)) {
		return ObjectCE.VSet(this.Clone(), {Size: valOrFunc instanceof Function ? valOrFunc(this.Size) : valOrFunc});
	}

	Grow(amountOnEachSide: number) {
		return new VRect(this.x - amountOnEachSide, this.y - amountOnEachSide, this.width + (amountOnEachSide * 2), this.height + (amountOnEachSide * 2));
	}
	Encapsulating(rect: VRectShape) {
		var posX = Math.min(this.x, rect.x);
		var posY = Math.min(this.y, rect.y);
		return new VRect(posX, posY, Math.max(this.x + this.width, rect.x + rect.width) - posX, Math.max(this.y + this.height, rect.y + rect.height) - posY);
	}
	Encapsulate(rect: VRectShape) {
		var oldRight = this.x + this.width;
		var oldBottom = this.y + this.height;
		this.x = Math.min(this.x, rect.x);
		this.y = Math.min(this.y, rect.y);
		this.width = Math.max(oldRight, rect.x + rect.width) - this.x;
		this.height = Math.max(oldBottom, rect.y + rect.height) - this.y;
	}

	Intersects(other: VRect) {
		return this.Right > other.Left && this.Left < other.Right && this.Bottom > other.Top && this.Top < other.Bottom;
	}
	/** Returns true if rect would intersect the other, when wrapped to the 2/8 potential "other-sides" of given frame/backdrop. (-x, +x, -y, +y, -x -y, -x +y, +x -y, +x +y)
	 * (note that it does the checks "stupidly", ie. just checking all possible switch-side variants, without checking if "switched side" version is actually on or even near the actual frame/backdrop) */
	Intersects_Advanced(other: VRect, options: {xWrappedBy?: number, yWrappedBy?: number}) {
		let variantsToCompare: VRect[] = [this];
		if (options.xWrappedBy) {
			variantsToCompare.push(...ArrayCE.SelectMany(variantsToCompare, base=>{
				return [base, base.NewX(x=>x - options.xWrappedBy), base.NewX(x=>x + options.xWrappedBy)];
			}))
		}
		if (options.yWrappedBy) {
			variantsToCompare.push(...ArrayCE.SelectMany(variantsToCompare, base=>{
				return [base, base.NewY(y=>y - options.yWrappedBy), base.NewY(y=>y + options.yWrappedBy)];
			}))
		}
		return ArrayCE.Any(variantsToCompare, a=>a.Intersects(other));
	}

	Clone() {
		return new VRect(this.x, this.y, this.width, this.height);
	}
}

@Global
export class VBounds {
	constructor(position: Vector3i, size: Vector3i) {
		this.position = position;
		this.size = size;
	}
	position: Vector3i;
	size: Vector3i;

	/*@_VDFDeserialize() Deserialize(node) {
		var parts = node.primitiveValue.split("|");
		var posParts = parts[0].split(" ");
		this.position = new VVector3(parseFloat(posParts[0]), parseFloat(posParts[1]), parseFloat(posParts[2]));
		var sizeParts = parts[1].split(" ");
		this.size = new VVector3(parseFloat(sizeParts[0]), parseFloat(sizeParts[1]), parseFloat(sizeParts[2]));
	}
	@_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
	toString() { return this.position.x + " " + this.position.y + " " + this.position.z + "|" + this.size.x + " " + this.size.y + " " + this.size.z; }
}