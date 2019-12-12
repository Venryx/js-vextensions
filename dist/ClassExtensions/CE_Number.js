import { StringCE } from "./CE_String";
import { WithFuncsStandalone, CreateProxyForClassExtensions } from "../Utils/General";
import { IsNaN } from "../Utils/Types";
// Note: Since JS coerces number primitives to the Number class when a property-access is attempted (https://javascriptrefined.io/the-wrapper-object-400311b29151)...
// ...calling the functions below using, eg. "(3).WrapToRange" *should* make the "this" variable be a Number class within the WrapToRange function.
// However, this is not the case! -- at least when I try it in the Chrome console, with the actual Webpack-added function. (if I add a function with the exact same source using the console, it is coerced to Number as expected)
// I think it might be a Chrome optimization or something.
// Anyway, the code below is based on how it *should* work, with the "this" var always being a Number wrapper. (we use "as number" in some places below, since valueOf gets auto-called to enable the primitive math ops anyway)
export const NumberCE_funcs = {
    IfN1Then(valIfSelfIsNeg1) {
        return this == -1 ? valIfSelfIsNeg1 : this;
    },
    NaNTo(valIfSelfIsNaN) {
        return IsNaN(this) ? valIfSelfIsNaN : this;
    },
    //RoundToMultipleOf(step) { return Math.round(new Number(this) / step) * step; }; //return this.lastIndexOf(str, 0) === 0; };
    ToPercentStr(precision) {
        let number = this * 100;
        if (precision != null)
            return number.toFixed(precision) + "%";
        return number.toString() + "%";
    },
    IsMultipleOf(multipleOf, maxDistToBeMultiple) {
        let valRoundedToMultiple = NumberCE(this).RoundTo(multipleOf);
        let distance = NumberCE(valRoundedToMultiple).Distance(this);
        return distance <= maxDistToBeMultiple;
    },
    RoundTo(multiple) {
        //return Math.round(this / multiple) * multiple;
        // Don't ask me why this works, but it does, and is faster. From: http://phrogz.net/round-to-nearest-via-modulus-division
        /*var half = multiple / 2;
        return (this + half) - ((this + half) % multiple);*/
        // Realign/scale the possible values/multiples, so that each value is given an integer slot. Place the actual value (this) within the appropriate slot using Math.round() int-rounding, then reverse the scaling to get the true rounded value.
        // (This version handles fractions better. Ex: (.2 + .1).RoundTo(.1) == .3 [NOT 0.3000000000000004, as the simpler approach gives])
        let multiple_inverted = 1 / multiple;
        return Math.round(this * multiple_inverted) / multiple_inverted;
    },
    RoundTo_Str(multipleOf, fractionDigits = null, removeEmptyFraction = true) {
        var resultValue = NumberCE(this).RoundTo(multipleOf);
        var result = resultValue.toFixed(fractionDigits != null ? fractionDigits : multipleOf.toString().TrimStart("0").length - 1); // - 0);
        if (removeEmptyFraction && StringCE(result).Contains(".")) {
            result = StringCE(StringCE(result).TrimEnd("0")).TrimEnd(".");
        }
        return result;
    },
    FloorTo(multipleOf) { return Math.floor(new Number(this) / multipleOf) * multipleOf; },
    FloorTo_Str(multipleOf) {
        var resultValue = NumberCE(this).FloorTo(multipleOf);
        var result = resultValue.toFixed(multipleOf.toString().TrimStart("0").length); // - 1);
        if (StringCE(result).Contains("."))
            result = StringCE(StringCE(result).TrimEnd("0")).TrimEnd(".");
        return result;
    },
    CeilingTo(multipleOf) { return Math.ceil(new Number(this) / multipleOf) * multipleOf; },
    CeilingTo_Str(multipleOf) {
        var resultValue = NumberCE(this).CeilingTo(multipleOf);
        var result = resultValue.toFixed(multipleOf.toString().TrimStart("0").length); // - 1);
        if (StringCE(result).Contains("."))
            result = StringCE(StringCE(result).TrimEnd("0")).TrimEnd(".");
        //result = TrimEnd(TrimEnd(result, "0"), ".");
        return result;
    },
    KeepAtLeast(min) {
        return Math.max(min, this);
    },
    KeepAtMost(max) {
        return Math.min(max, this);
    },
    KeepBetween(min, max, allowFixMinMax = true) {
        if (min > max && allowFixMinMax) {
            [min, max] = [max, min];
        }
        if (this < min)
            return min;
        if (this > max)
            return max;
        return this;
    },
    WrapToRange(min, max, maxOut = true) {
        let val = this;
        let size = max - min;
        while (val < min)
            val += size;
        while (maxOut ? val >= max : val > max)
            val -= size;
        return val;
    },
    Distance(other) {
        return Math.abs(this - other);
    },
    ToPower(power) {
        return Math.pow(this, power);
    },
};
export const NumberCE = CreateProxyForClassExtensions(NumberCE_funcs);
export const NumberCES = WithFuncsStandalone(NumberCE_funcs);
//# sourceMappingURL=CE_Number.js.map