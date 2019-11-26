import {IsNaN, WithFuncsStandalone, CreateWrapperForClassExtensions, StringCE} from "..";

export class NumberCEClass extends Number {
	IfN1Then(this: Number, valIfSelfIsNeg1) {
		return this == -1 ? valIfSelfIsNeg1 : this;
	}
	
	NaNTo(this: Number, valIfSelfIsNaN) {
		return IsNaN(this) ? valIfSelfIsNaN : this;
	}
	
	//RoundToMultipleOf(step) { return Math.round(new Number(this) / step) * step; }; //return this.lastIndexOf(str, 0) === 0; };
	ToPercentStr(this: Number, precision?: number) {
		let number = this as number * 100;
		if (precision != null)
			return number.toFixed(precision) + "%";
		return number.toString() + "%";
	}
	
	IsMultipleOf(this: Number, multipleOf: number, maxDistToBeMultiple: number) {
		let valRoundedToMultiple = NumberCE(this).ToPercentStr(multipleOf);
		let distance = NumberCE(valRoundedToMultiple).Distance(this as number);
		return distance <= maxDistToBeMultiple;
	}
	
	RoundTo(this: Number, multiple) {
		//return Math.round(this / multiple) * multiple;
		// Don't ask me why this works, but it does, and is faster. From: http://phrogz.net/round-to-nearest-via-modulus-division
		/*var half = multiple / 2;
		return (this + half) - ((this + half) % multiple);*/
	
		// Realign/scale the possible values/multiples, so that each value is given an integer slot. Place the actual value (this) within the appropriate slot using Math.round() int-rounding, then reverse the scaling to get the true rounded value.
		// (This version handles fractions better. Ex: (.2 + .1).RoundTo(.1) == .3 [NOT 0.3000000000000004, as the simpler approach gives])
		let multiple_inverted = 1 / multiple;
		return Math.round(this as number * multiple_inverted) / multiple_inverted;
	}
	RoundTo_Str(this: Number, multipleOf, fractionDigits = null, removeEmptyFraction = true) {
		var resultValue = NumberCE(this).RoundTo(multipleOf);
		var result = resultValue.toFixed(fractionDigits != null ? fractionDigits : multipleOf.toString().TrimStart("0").length - 1); // - 0);
		if (removeEmptyFraction && StringCE(result).Contains(".")) {
			result = StringCE(StringCE(result).TrimEnd("0")).TrimEnd(".");
		}
		return result;
	}
	FloorTo(this: Number, multipleOf) { return Math.floor((new Number(this) as any) / multipleOf) * multipleOf; }
	FloorTo_Str(this: Number, multipleOf) {
		var resultValue = NumberCE(this).FloorTo(multipleOf);
		var result = resultValue.toFixed(multipleOf.toString().TrimStart("0").length); // - 1);
		if (StringCE(result).Contains("."))
			result = StringCE(StringCE(result).TrimEnd("0")).TrimEnd(".");
		return result;
	}
	CeilingTo(this: Number, multipleOf) { return Math.ceil((new Number(this) as any) / multipleOf) * multipleOf; }
	CeilingTo_Str(this: Number, multipleOf) {
		var resultValue = NumberCE(this).CeilingTo(multipleOf);
		var result = resultValue.toFixed(multipleOf.toString().TrimStart("0").length); // - 1);
		if (StringCE(result).Contains("."))
			result = StringCE(StringCE(result).TrimEnd("0")).TrimEnd(".");
			//result = TrimEnd(TrimEnd(result, "0"), ".");
			return result;
	}
	
	KeepAtLeast(this: Number, min: number) {
		return Math.max(min, this as number);
	}
	KeepAtMost(this: Number, max: number) {
		return Math.min(max, this as number);
	}
	KeepBetween(this: Number, min: number, max: number, allowFixMinMax = true) {
		if (min > max && allowFixMinMax) {
			[min, max] = [max, min];
		}
		if (this < min) return min;
		if (this > max) return max;
		return this;
	}
	WrapToRange(this: Number, min: number, max: number, maxOut = true) {
		let val = this as number;
		let size = max - min;
		while (val < min) val += size;
		while (maxOut ? val >= max : val > max) val -= size;
		return val;
	}
	Distance(this: Number, other: number) {
		return Math.abs(this as number - other);
	}
	ToPower(this: Number, power: number) {
		return Math.pow(this as number, power);
	}
}
export const NumberCE = CreateWrapperForClassExtensions(NumberCEClass);
