// Function
// ==========

Function.prototype._AddFunction_Inline = function AddTag(tag) {
	if (this.tags == null)
		this.tags = [];
	this.tags.push(tag);
	return this;
};
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
Function.prototype._AddFunction_Inline = function GetTags(/*o:*/ type) {
	return (this.tags || []).Where(a=>type == null || a instanceof type);
};

//Function.prototype._AddFunction_Inline = function AsStr(...args) { return require("../../V/V").Multiline(this, ...args); };
//Function.prototype._AddFunction_Inline = function AsStr(useExtraPreprocessing) { return require("../../V/V").Multiline(this, useExtraPreprocessing); };

Function.prototype._AddFunction_Inline = function RunThenReturn(args___) { this.apply(null, arguments); return this; };

// Date
// ==========

interface Date { readonly MonthDate: Date; }
Date.prototype._AddGetter_Inline = function MonthDate() {
	return new Date(this.getFullYear(), this.getMonth(), 1);
};

function isLeapYear(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); 
};
interface Date { isLeapYear: ()=>boolean; }
Date.prototype.isLeapYear = function() { 
    return isLeapYear(this.getFullYear()); 
};
function getDaysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};
interface Date { getDaysInMonth: ()=>number; }
Date.prototype.getDaysInMonth = function() { 
    return getDaysInMonth(this.getFullYear(), this.getMonth());
};

interface Date { AddMonths: (value: number)=>void; }
Date.prototype.AddMonths = function(value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};

interface Date { Clone: ()=>Date; }
Date.prototype.Clone = function() {
	return new Date(this.getTime());
}

// Error
// ==========

interface Error { readonly Stack: string; }