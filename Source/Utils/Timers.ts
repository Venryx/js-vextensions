export class TimerContext {
	timers = [] as Timer[];
	Reset() {
		for (let timer of this.timers) {
			timer.Stop();
		}
		this.timers = [];
	}
}

// methods
// ==========

export function TryCall<T>(func: (..._)=>T, ...args): T {
	//if (!(func instanceof Function)) return;
	if (typeof func != "function") return;
	try {
		return func.apply(this, args);
	} catch (ex) {}
}
export function TryCall_OnX(obj, func, ...args) {
	if (typeof func != "function") return;
	try {
		return func.apply(obj, args);
	} catch (ex) {}
}
G({TryCall, TryCall_OnX});

/*let oldTimeout = setTimeout;
g.setTimeout = function(func: Function, delayInMS = 0, ...args) {
	// setTimeout can take really long on Chrome mobile (eg. while scrolling), for some reason (like, 1.5 seconds)
	// on desktop, setImmediate is better as well, since it takes ~0ms instead of 1-15ms
	if (delayInMS == 0)
		return setImmediate(func, ...args);
	return oldTimeout(func, delayInMS, ...args);
}*/

declare global { function WaitXThenRun(delayInMS, func, ...args): number; }
G({WaitXThenRun});
export function WaitXThenRun(delayInMS, func, ...args): number {
	// setTimeout can take really long on Chrome mobile (eg. while scrolling), for some reason (like, 1.5 seconds)
	// on desktop, setImmediate is better as well, since it takes ~0ms instead of 1-15ms
	if (delayInMS == 0) {
		return window["setImmediate"](func, ...args);
	}
	return setTimeout(func, delayInMS, ...args) as any; // "as any": maybe temp; used to allow source-importing from NodeJS
}
export function Sleep(ms) {
	var startTime = new Date().getTime();
	while (new Date().getTime() - startTime < ms) {}
}
export function SleepAsync(timeMS) {
	return new Promise((resolve, reject)=> {
		WaitXThenRun(timeMS, resolve);
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
	    this.intervalInMS = intervalInMS;
	    this.func = func;
	    this.maxCallCount = maxCallCount;
	}

	intervalInMS: number;
	func: Function;
	maxCallCount: number;

	SetContext(timerContext: TimerContext) {
		Assert(timerContext, "TimerContext cannot be null.");
		timerContext.timers.push(this);
		return this;
	}

	startTime: number;
	nextTickTime: number;
	timerID = -1;
	get IsRunning() { return this.timerID != -1; }
	
	callCount = 0;
	Start() {
		// if start is called when it's already running, stop the timer first (thus we restart the timer instead of causing a second triggering)
		if (this.IsRunning) {
			this.Stop();
		}
		
		this.startTime = Date.now();
		this.nextTickTime = this.startTime + this.intervalInMS;
		this.timerID = setInterval(()=> {
			this.func();
			this.nextTickTime += this.intervalInMS;

			this.callCount++;
			if (this.maxCallCount != -1 && this.callCount >= this.maxCallCount) {
				this.Stop();
			}
		}, this.intervalInMS) as any; // "as any": maybe temp; used to allow source-importing from NodeJS

		return this;
	}
	Stop() {
		clearInterval(this.timerID);
		//this.startTime = null;
		this.nextTickTime = null;
		this.timerID = -1;
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
	if (args.length == 2) var [minInterval, func] = args, key = null;
	else if (args.length == 3) var [key, minInterval, func] = args;

    var lastScheduledRunTime = funcLastScheduledRunTimes[key] || 0;
    var now = new Date().getTime();
    var timeSinceLast = now - lastScheduledRunTime;
    if (timeSinceLast >= minInterval) { // if we've waited enough since last run, run right now
        func();
        funcLastScheduledRunTimes[key] = now;
    } else {
		let waitingForNextRunAlready = lastScheduledRunTime > now;
		if (!waitingForNextRunAlready) { // else, if we're not already waiting for next-run, schedule next-run
			var nextRunTime = lastScheduledRunTime + minInterval;
			var timeTillNextRun = nextRunTime - now;
			WaitXThenRun(timeTillNextRun, func);
			funcLastScheduledRunTimes[key] = nextRunTime;
		}
	}
}