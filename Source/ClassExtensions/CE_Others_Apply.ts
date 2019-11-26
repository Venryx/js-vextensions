import {TransferPrototypeProps} from "../Utils/General";
import {FunctionCE, DateCE} from "./CE_Others";

TransferPrototypeProps(Function.prototype, FunctionCE.prototype, {}, {configurable: true, enumerable: false});
TransferPrototypeProps(Date.prototype, DateCE.prototype, {}, {configurable: true, enumerable: false});
//TransferPrototypeProps(Error.prototype, ErrorCE.prototype, {}, {configurable: true, enumerable: false});

declare global {
	// for Function, but added to Object, due to TS bug (it thinks "Function" refers to this interface)
	interface Object {
		GetName(): string;
		SetName(name: string): Function;
	}

	interface Date {
		readonly MonthDate: Date;
		IsLeapYear(): boolean;
		GetDaysInMonth(): number;
		AddMonths(value: number): void;
		Clone(): Date;
	}

	/*interface Error {
		readonly Stack: string;
	}*/
}