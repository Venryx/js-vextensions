"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var CE_String_1 = require("./CE_String");
var General_1 = require("../Utils/General");
var Types_1 = require("../Utils/Types");
exports.NumberCE_funcs = {
    IfN1Then: function (valIfSelfIsNeg1) {
        return this == -1 ? valIfSelfIsNeg1 : this;
    },
    NaNTo: function (valIfSelfIsNaN) {
        return Types_1.IsNaN(this) ? valIfSelfIsNaN : this;
    },
    //RoundToMultipleOf(step) { return Math.round(new Number(this) / step) * step; }; //return this.lastIndexOf(str, 0) === 0; };
    ToPercentStr: function (precision) {
        var number = this * 100;
        if (precision != null)
            return number.toFixed(precision) + "%";
        return number.toString() + "%";
    },
    IsMultipleOf: function (multipleOf, maxDistToBeMultiple) {
        var valRoundedToMultiple = exports.NumberCE(this).ToPercentStr(multipleOf);
        var distance = exports.NumberCE(valRoundedToMultiple).Distance(this);
        return distance <= maxDistToBeMultiple;
    },
    RoundTo: function (multiple) {
        //return Math.round(this / multiple) * multiple;
        // Don't ask me why this works, but it does, and is faster. From: http://phrogz.net/round-to-nearest-via-modulus-division
        /*var half = multiple / 2;
        return (this + half) - ((this + half) % multiple);*/
        // Realign/scale the possible values/multiples, so that each value is given an integer slot. Place the actual value (this) within the appropriate slot using Math.round() int-rounding, then reverse the scaling to get the true rounded value.
        // (This version handles fractions better. Ex: (.2 + .1).RoundTo(.1) == .3 [NOT 0.3000000000000004, as the simpler approach gives])
        var multiple_inverted = 1 / multiple;
        return Math.round(this * multiple_inverted) / multiple_inverted;
    },
    RoundTo_Str: function (multipleOf, fractionDigits, removeEmptyFraction) {
        if (fractionDigits === void 0) { fractionDigits = null; }
        if (removeEmptyFraction === void 0) { removeEmptyFraction = true; }
        var resultValue = exports.NumberCE(this).RoundTo(multipleOf);
        var result = resultValue.toFixed(fractionDigits != null ? fractionDigits : multipleOf.toString().TrimStart("0").length - 1); // - 0);
        if (removeEmptyFraction && CE_String_1.StringCE(result).Contains(".")) {
            result = CE_String_1.StringCE(CE_String_1.StringCE(result).TrimEnd("0")).TrimEnd(".");
        }
        return result;
    },
    FloorTo: function (multipleOf) { return Math.floor(new Number(this) / multipleOf) * multipleOf; },
    FloorTo_Str: function (multipleOf) {
        var resultValue = exports.NumberCE(this).FloorTo(multipleOf);
        var result = resultValue.toFixed(multipleOf.toString().TrimStart("0").length); // - 1);
        if (CE_String_1.StringCE(result).Contains("."))
            result = CE_String_1.StringCE(CE_String_1.StringCE(result).TrimEnd("0")).TrimEnd(".");
        return result;
    },
    CeilingTo: function (multipleOf) { return Math.ceil(new Number(this) / multipleOf) * multipleOf; },
    CeilingTo_Str: function (multipleOf) {
        var resultValue = exports.NumberCE(this).CeilingTo(multipleOf);
        var result = resultValue.toFixed(multipleOf.toString().TrimStart("0").length); // - 1);
        if (CE_String_1.StringCE(result).Contains("."))
            result = CE_String_1.StringCE(CE_String_1.StringCE(result).TrimEnd("0")).TrimEnd(".");
        //result = TrimEnd(TrimEnd(result, "0"), ".");
        return result;
    },
    KeepAtLeast: function (min) {
        return Math.max(min, this);
    },
    KeepAtMost: function (max) {
        return Math.min(max, this);
    },
    KeepBetween: function (min, max, allowFixMinMax) {
        var _a;
        if (allowFixMinMax === void 0) { allowFixMinMax = true; }
        if (min > max && allowFixMinMax) {
            _a = __read([max, min], 2), min = _a[0], max = _a[1];
        }
        if (this < min)
            return min;
        if (this > max)
            return max;
        return this;
    },
    WrapToRange: function (min, max, maxOut) {
        if (maxOut === void 0) { maxOut = true; }
        var val = this;
        var size = max - min;
        while (val < min)
            val += size;
        while (maxOut ? val >= max : val > max)
            val -= size;
        return val;
    },
    Distance: function (other) {
        return Math.abs(this - other);
    },
    ToPower: function (power) {
        return Math.pow(this, power);
    },
};
exports.NumberCE = General_1.CreateProxyForClassExtensions(exports.NumberCE_funcs);
exports.NumberCES = General_1.WithFuncsStandalone(exports.NumberCE_funcs);
//# sourceMappingURL=CE_Number.js.map