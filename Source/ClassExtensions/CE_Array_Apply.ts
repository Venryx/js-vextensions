import {ForEachExtras, ArrayCE, NodeListCE} from "./CE_Array";
import {TransferPrototypeProps} from "../Utils/General";

TransferPrototypeProps(Array.prototype, ArrayCE, {}, {configurable: true, enumerable: false});
if (typeof NodeList != "undefined") {
	TransferPrototypeProps(NodeList.prototype, NodeListCE, {}, {configurable: true, enumerable: false});
}

declare global {
	interface Array<T> {
		ForEach(func: (value: T, extras: ForEachExtras)=>any): void;
		ForEachAsync(func: (value: T, extras: ForEachExtras)=>any): Promise<void>;
		Contains(item: T): boolean;
		ContainsAny(...items: T[]): boolean;
		AddRange(items: T[]): this;
		Remove(item: T): boolean;
		RemoveAll(items: T[]): void;
		RemoveAt(index: number): T;
		Insert(index: number, obj: T): void;
		SetItems(items: T[]): this;
		Reversed(): T[];
		Any(matchFunc: (item: T, index?: number)=>boolean): boolean;
		All(matchFunc: (item: T, index?: number)=>boolean): boolean;
		Where(matchFunc: (item: T, index?: number)=>boolean): T[];
		Select<T2>(matchFunc: (item: T, index?: number)=>T2): T2[];
		SelectMany<T2>(matchFunc: (item: T, index?: number)=>T2[]): T2[];
		VCount(matchFunc: (item: T)=>boolean): number;
		Clear(): void;
		/** Throws an error if no items match. */ First(matchFunc?: (item: T, index: number)=>boolean): T;
		FirstOrX(matchFunc?: (item: T, index: number)=>boolean, x?): T;
		/** Throws an error if no items match. */ Last(matchFunc?: (item: T, index: number)=>boolean): T;
		LastOrX(matchFunc?: (item: T, index: number)=>boolean, x?): T;
		XFromLast(x: number): T;
		Move(item: any, newIndex: number, newIndexAsPreRemovalIndexVSFinalIndex?: boolean): number;
		ToMap(keyFunc: (item: T, index: number)=>string, valFunc: (item: T, index: number)=>any): any;
		Skip(count: number): T[];
		Take(count: number): T[];
		FindIndex(matchFunc?: (item: T, index: number)=>boolean): number;
		OrderBy(valFunc?: (item: T, index: number)=>any): T[];
		OrderByDescending(valFunc?: (item: T, index: number)=>any): T[];
		Distinct(): T[];
		Except(...excludeItems: T[]): T[];
		Except(excludeItems: T[], excludeEachOnlyOnce?: boolean): T[];
		IfEmptyThen<T>(valIfSelfIsEmpty: T): T;
		Min(valFunc?: (item: T)=>number, asNumbers?: boolean): T;
		Max(valFunc?: (item: T)=>number, asNumbers?: boolean): T;
		Sum(): number;
		Average(): number;
		Median(): number;
		Random(): T;
	}
	interface NodeList {
		ToArray(): any[];
	}
}