/**
 * Gets an array of the numbers between min and max.
 * @param min
 * @param max
 * @param step (default: 1)
 * @param includeMax (default: true)
 * @param roundToStep (default: true)
 */
export declare function Range(min: number, max: number, step?: number, includeMax?: boolean, roundToStep?: boolean): number[];
export declare function GetXToY(minX: any, maxY: any, interval?: number): number[];
export declare function GetXToYOut(minX: any, maxOutY: any, interval?: number): number[];
export declare function Lerp(from: number, to: number, percentFromXToY: number, keepResultInRange?: boolean): number;
export declare function GetPercentFromXToY(start: number, end: number, val: number, keepResultInRange?: boolean): number;
export declare function CreateRandFunc_Mulberry32(seed: number): () => number;
export declare function GetRandomNumber(options: {
    min: number;
    max: number;
    mustBeInteger?: boolean;
    randFunc?: () => number;
}): number;
