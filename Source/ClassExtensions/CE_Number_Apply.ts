import {TransferPrototypeProps} from "../Utils/General";
import {NumberCE} from "./CE_Number";

TransferPrototypeProps(Number.prototype, NumberCE.prototype, {}, {configurable: true, enumerable: false});

declare global {
	interface Number {
		IfN1Then<T>(valIfSelfIsNeg1: T): T;
		NaNTo<T>(valIfSelfIsNaN: T): T;
		ToPercentStr(precision?: number): string;
		IsMultipleOf(multipleOf: number, maxDistToBeMultiple: number): boolean;
		RoundTo(multiple: number): number;
		RoundTo_Str(multipleOf: number, fractionDigits?: number, removeEmptyFraction?: boolean): string;
		FloorTo(multipleOf: number): number;
		FloorTo_Str(multipleOf: number): string;
		CeilingTo(multipleOf: number): number;
		CeilingTo_Str(multipleOf: number): string;
		KeepAtLeast(this: number, min: number): number;
		KeepAtMost(this: number, max: number): number;
		KeepBetween(this: number, min: number, max: number, allowFixMinMax?: boolean): number;
		WrapToRange(this: number, min: number, max: number, maxOut?: boolean): number;
		Distance(this: number, other: number): number;
		ToPower(this: number, power: number): number;
	}
}