import {TransferPrototypeProps} from "../Utils/General";
import {StringCE, StringCEClass} from "./CE_String";

TransferPrototypeProps(String.prototype, StringCE, {}, {configurable: true, enumerable: false});

declare global {
	interface String extends StringCEClass {}
	/*interface String {
		TrimStart(...chars: string[]): string;
		TrimEnd(...chars: string[]): string;
		Contains(str: string, startIndex?: number): boolean;
		Matches(str: string): {index: number}[];
		Matches(regex: RegExp): RegExpMatchArray[];
		IndexOf_X(str: string, indexX: number): number;
		IndexOf_XFromLast(str: string, indexFromLastX: number): number;
		IndexOfAny(...strings: string[]): number;
		LastIndexOfAny(...strings: string[]): number;
		StartsWithAny(...strings: string[]): boolean;
		EndsWithAny(...strings: string[]): boolean;
		ContainsAny(...strings: string[]): boolean;
		SplitByAny(...separators: string[]): string[];
		SplitAt(index: number, includeCharAtIndex?): [string, string];
		KeepAtMost(maxLength: number, moreMarkerStr?: string): string;
		Func(func: Function): Function;
		AsMultiline(desiredIndent: number, removeLineStr?: string): string;
		ToInt(): number;
		ToFloat(): number;
	}*/
}