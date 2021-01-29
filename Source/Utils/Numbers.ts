import {NumberCE} from "../ClassExtensions/CE_Number.js";

/*export function Range(min, max, step = 1, includeMax = true) {
	var result: number[] = [];
	for (let i = min; includeMax ? i <= max : i < max; i += step)
		result.push(i);
	return result;
}*/
/**
 * Gets an array of the numbers between min and max.
 * @param min 
 * @param max
 * @param step (default: 1)
 * @param includeMax (default: true)
 * @param roundToStep (default: true)
 */
export function Range(min: number, max: number, step = 1, includeMax = true, roundToStep = true) {
	var result: number[] = [];
	for (
		let i = min;
		includeMax ? i <= max : i < max;
		i = roundToStep ? NumberCE(i + step).RoundTo(step) : i + step
	) {
		result.push(i);
	}
	return result;
}

export function GetXToY(minX, maxY, interval = 1) {
	var result: number[] = [];
	for (var val = minX; val <= maxY; val += interval) {
		result.push(val);
	}
	return result;
}
export function GetXToYOut(minX, maxOutY, interval = 1) {
	var result: number[] = [];
	for (var val = minX; val < maxOutY; val += interval) {
		result.push(val);
	}
	return result;
}

// just use the word 'percent', even though value is represented as fraction (e.g. 0.5, rather than 50[%])
export function Lerp(from: number, to: number, percentFromXToY: number, keepResultInRange = true) {
	let result = from + ((to - from) * percentFromXToY);
	if (keepResultInRange) result = NumberCE(result).KeepBetween(from, to) as number;
	return result;
}
export function GetPercentFromXToY(start: number, end: number, val: number, keepResultInRange = true) {
	// distance-from-x / distance-from-x-required-for-result-'1'
	var result = (val - start) / (end - start);
	if (keepResultInRange) result = NumberCE(result).KeepBetween(0, 1) as number;
	return result;
}

// from: https://stackoverflow.com/a/47593316/2441655
export function CreateRandFunc_Mulberry32(seed: number) {
	return function() {
		var t = seed += 0x6D2B79F5;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
export function GetRandomNumber(options: {min: number, max: number, mustBeInteger?: boolean, randFunc?: ()=>number}) {
	const {min, max, mustBeInteger} = options;
	const randFunc = options.randFunc ?? Math.random;

	/*Assert(IsNumber(min), `Min must be a number. (not: ${min})`);
	Assert(IsNumber(max), `Max must be a number. (not: ${max})`);*/
	const range = max - min;
	if (mustBeInteger) {
		return min + Math.floor(randFunc() * (range + 1));
	}
	return min + (randFunc() * range);
}