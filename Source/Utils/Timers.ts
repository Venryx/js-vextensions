import {Assert, IsNumber, NumberCE, ArrayCE} from "../index.js";
import {g} from "./@Internal.js";

export class TimerContext {
	static default = new TimerContext();
	static default_autoAddAll = false;

	timers = [] as Timer[];
	Reset() {
		for (const timer of this.timers) {
			timer.Stop();
		}
		this.timers = [];
	}

	// Can be useful on platforms (eg. Android) where setInterval() and setTimeout() stop working when the screen is off.
	// Just have the Android code call the js every second or so, running this method; this will force the timer-functions to be manually triggered once they've passed the expected tick-time.
	ManuallyTriggerOverdueTimers() {
		for (const timer of this.timers) {
			if (timer.NextTickFuncOverdue) {
				timer.nextTickFunc!();
			}
		}
	}
}

// methods
// ==========

export function TryCall<T>(func: (..._)=>T, ...args): T {
	//if (!(func instanceof Function)) return;
	if (typeof func != "function") return undefined as any; // ts should catch, so check is here for invalid data
	try {
		return func.apply(this, args);
	} catch (ex) {}
	return undefined as any;
}
export function TryCall_OnX(obj, func, ...args) {
	if (typeof func != "function") return;
	try {
		return func.apply(obj, args);
	} catch (ex) {}
}

/*let oldTimeout = setTimeout;
g.setTimeout = function(func: Function, delayInMS = 0, ...args) {
	// setTimeout can take really long on Chrome mobile (eg. while scrolling), for some reason (like, 1.5 seconds)
	// on desktop, setImmediate is better as well, since it takes ~0ms instead of 1-15ms
	if (delayInMS == 0)
		return setImmediate(func, ...args);
	return oldTimeout(func, delayInMS, ...args);
}*/

/*export function Sleep(ms) {
	var startTime = new Date().getTime();
	while (new Date().getTime() - startTime < ms) {}
}*/

const maxTimeoutLength = 0x7FFFFFFF; // setTimeout limit is MAX_INT32=(2^31-1)
export function WaitXThenRun(delayInMS: number, func: (...args: any[])=>void, ...args: any[]): number {
	Assert(delayInMS <= maxTimeoutLength, `Cannot wait for longer than ${maxTimeoutLength} ms. (use WaitUntilXThenRun, if a long-delay is needed)`);
	// setTimeout can take really long on Chrome mobile (eg. while scrolling), for some reason (like, 1.5 seconds)
	// on desktop, setImmediate is better as well, since it takes ~0ms instead of 1-15ms
	if (delayInMS == 0 && g.setImmediate) {
		return g.setImmediate(func, ...args) as any; // same as below
	}
	return setTimeout(func, delayInMS, ...args) as any; // "as any": maybe temp; used to allow source-importing from NodeJS
}
export function WaitUntilXThenRun(targetDateTimeInMS: number, func: (...args: any[])=>void, ...args: any[]) {
	var now = Date.now();
	var diff = NumberCE(targetDateTimeInMS - now).KeepAtLeast(0);
	if (diff > maxTimeoutLength) {
		WaitXThenRun(maxTimeoutLength, ()=>WaitUntilXThenRun(targetDateTimeInMS, func));
	} else {
		WaitXThenRun(diff, func);
	}
}

export function SleepAsync(timeMS): Promise<void> {
	return new Promise((resolve, reject)=>{
		WaitXThenRun(timeMS, resolve);
	});
}
export function SleepAsyncUntil(targetDateTimeInMS: number): Promise<void> {
	return new Promise((resolve, reject)=>{
		WaitUntilXThenRun(targetDateTimeInMS, resolve);
	});
}

var DoNothingXTimesThenDoY_counters = {};
export function DoNothingXTimesThenDoY(doNothingCount: number, func: Function, key = "default") {
	if (DoNothingXTimesThenDoY_counters[key] == null) {
		DoNothingXTimesThenDoY_counters[key] = 0;
	}

	if (DoNothingXTimesThenDoY_counters[key] >= doNothingCount) {
		func();
	}
	DoNothingXTimesThenDoY_counters[key]++;
}

// interval is in seconds (can be decimal)
export class Timer {
	constructor(intervalInMS, func, maxCallCount = -1) {
		Assert(IsNumber(intervalInMS), "Interval must be a number.");
		this.intervalInMS = intervalInMS;
		this.func = func;
		this.maxCallCount = maxCallCount;
		if (TimerContext.default_autoAddAll) {
			TimerContext.default.timers.push(this);
		}
	}

	intervalInMS: number;
	func: Function;
	maxCallCount: number;

	timerContexts: TimerContext[];
	SetContext(timerContext: TimerContext) {
		Assert(timerContext, "TimerContext cannot be null.");
		this.timerContexts = (this.timerContexts || []).concat(timerContext);
		timerContext.timers.push(this);
		return this;
	}
	RemoveFromContext(timerContext: TimerContext) {
		ArrayCE(this.timerContexts).Remove(timerContext);
		ArrayCE(timerContext.timers).Remove(this);
	}
	ClearContexts() {
		for (const context of this.timerContexts) {
			this.RemoveFromContext(context);
		}
	}

	startTime: number;
	timerID = -1;
	get Enabled() { return this.timerID != -1; }
	set Enabled(val: boolean) {
		if (val && !this.Enabled) this.Start();
		else if (!val && this.Enabled) this.Stop();
	}

	nextTickTime: number|undefined;
	nextTickFunc: Function|undefined; // used by the TimerContext.ManuallyTriggerOverdueTimers() function
	get NextTickFuncOverdue() {
		return this.nextTickTime != null && Date.now() > this.nextTickTime && this.nextTickFunc != null;
	}

	callCount_thisRun = 0;
	callCount_total = 0;
	Start(initialDelayOverride?: number) {
		// if start is called when it's already running, stop the timer first (thus we restart the timer instead of causing overlapping setIntervals/delayed-func-calls)
		if (this.Enabled) this.Stop();
		this.startTime = Date.now();

		const StartRegularInterval = ()=>{
			this.nextTickTime = this.startTime + this.intervalInMS;
			this.timerID = setInterval(this.nextTickFunc = ()=>{
				this.callCount_thisRun++;
				this.callCount_total++;
				this.func();
				if (this.maxCallCount != -1 && this.callCount_thisRun >= this.maxCallCount) {
					this.Stop();
				} else {
					//this.nextTickTime += this.intervalInMS;
					this.nextTickTime = Date.now() + this.intervalInMS; // using Date.now() prevents the prop from getting out-of-sync (from sleep-mode)
				}
			}, this.intervalInMS) as any; // "as any": maybe temp; used to allow source-importing from NodeJS
		};

		if (initialDelayOverride != null) {
			this.nextTickTime = this.startTime + initialDelayOverride;
			this.timerID = setTimeout(this.nextTickFunc = ()=>{
				this.callCount_thisRun++;
				this.callCount_total++;
				this.func();
				if (this.maxCallCount != -1 && this.callCount_thisRun >= this.maxCallCount) {
					this.Stop();
				} else {
					StartRegularInterval();
				}
			}, initialDelayOverride) as any; // "as any": maybe temp; used to allow source-importing from NodeJS
		} else {
			StartRegularInterval();
		}

		return this; // enable chaining, for SetContext() call
	}
	/** Clears native-timer, nextTickTime, nextTickFunc, timerID, and callCount_thisRun. (but not: startTime, callCount_total) */
	Stop() {
		clearInterval(this.timerID);
		clearTimeout(this.timerID); // for setTimeout path [clearInterval seems to work for both, but added to be safe, since equivalence not noticed in spec]

		//this.startTime = null;
		this.nextTickTime = undefined;
		this.nextTickFunc = undefined;
		this.timerID = -1;
		this.callCount_thisRun = 0;
	}
}
export class TimerS extends Timer {
    constructor(interval_decimal, func, maxCallCount = -1) {
        super(interval_decimal * 1000, func, maxCallCount);
    }
}

var funcLastScheduledRunTimes = {};
/** If time-since-last-run is above minInterval, run func right away.
 * Else, schedule next-run to occur as soon as the minInterval is passed. */
export function BufferAction(minInterval: number, func: Function);
/** If time-since-last-run is above minInterval, run func right away.
 * Else, schedule next-run to occur as soon as the minInterval is passed. */
export function BufferAction(key: string, minInterval: number, func: Function);
export function BufferAction(...args) {
	var key: string = "[default]", minInterval: number, func: Function;
	if (args.length == 2) [minInterval, func] = args;
	else /*if (args.length == 3)*/ [key, minInterval, func] = args;

	var lastScheduledRunTime = funcLastScheduledRunTimes[key] ?? 0;
	var now = new Date().getTime();
	var timeSinceLast = now - lastScheduledRunTime;
	if (timeSinceLast >= minInterval) { // if we've waited enough since last run, run right now
		func();
		funcLastScheduledRunTimes[key] = now;
	} else {
		const waitingForNextRunAlready = lastScheduledRunTime > now;
		if (!waitingForNextRunAlready) { // else, if we're not already waiting for next-run, schedule next-run
			var nextRunTime = lastScheduledRunTime + minInterval;
			var timeTillNextRun = nextRunTime - now;
			WaitXThenRun(timeTillNextRun, func as any);
			funcLastScheduledRunTimes[key] = nextRunTime;
		}
	}
}