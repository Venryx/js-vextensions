export class FunctionCEClass {
	GetName(this: Function) {
		//return this.name_fake || this.name || this.toString().match(/^function\s*([^\s(]+)/)[1];
		return this["name_fake"] || this.name || (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
	}
	SetName(this: Function, val) {
		this["name_fake"] = name;
		return this;
	}

	AddTag(this: Function, tag) {
		if (this["tags"] == null) this["tags"] = [];
		this["tags"].push(tag);
		return this;
	}

	/*Function.prototype._AddFunction_Inline = function AddTags(/*o:*#/ tags___) { // (already implemented in VDF.js file)
		if (this.tags == null)
			this.tags = [];
		for (var i in arguments)
			this.tags.push(arguments[i]);
		return this;
	};*/
	/*function AddTags() {
		var tags = V.Slice(arguments, 0, arguments.length - 1);
		var func = V.Slice(arguments).Last();
		func.AddTags.apply(func, tags);
	};*/
	GetTags(this: Function, type?) {
		return (this["tags"] || []).Where(a=>type == null || a instanceof type);
	};

	//AsStr(...args) { return require("../../V/V").Multiline(this, ...args); };
	//AsStr(useExtraPreprocessing) { return require("../../V/V").Multiline(this, useExtraPreprocessing); };

	RunThenReturn(this: Function, ...args) {
		this.apply(null, args);
		return this;
	};
}
export const FunctionCE = FunctionCEClass.prototype;

function isLeapYear(year) {
	return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); 
}
function getDaysInMonth(year, month) {
	return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}
export class DateCEClass {
	get MonthDate(this: Date) {
		return new Date(this.getFullYear(), this.getMonth(), 1);
	}
	IsLeapYear(this: Date) { 
		return isLeapYear(this.getFullYear()); 
	}
  	GetDaysInMonth(this: Date) { 
		return getDaysInMonth(this.getFullYear(), this.getMonth());
	}

	AddMonths(this: Date, value: number) {
		var n = this.getDate();
		this.setDate(1);
		this.setMonth(this.getMonth() + value);
		this.setDate(Math.min(n, this.GetDaysInMonth()));
		return this;
  	}
	Clone(this: Date) {
		return new Date(this.getTime());
	}
}
export const DateCE = DateCEClass.prototype;

/*export class ErrorCEClass extends Error {
	get Stack() {
		// this causes the full stack-trace to be attached to the Error object (in Chrome)
		if ((Error as any).captureStackTrace) {
			//(Error as any).captureStackTrace(instance, GetStackTraceStr);
			(Error as any).captureStackTrace(this);
		}
		return this.stack;
	}
}
export const ErrorCE = ErrorCEClass.prototype;*/