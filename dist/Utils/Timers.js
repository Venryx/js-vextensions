"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var TimerContext = /** @class */ (function () {
    function TimerContext() {
        this.timers = [];
    }
    TimerContext.prototype.Reset = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.timers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var timer = _c.value;
                timer.Stop();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.timers = [];
    };
    // Can be useful on platforms (eg. Android) where setInterval() and setTimeout() stop working when the screen is off.
    // Just have the Android code call the js every second or so, running this method; this will force the timer-functions to be manually triggered once they've passed the expected tick-time.
    TimerContext.prototype.ManuallyTriggerOverdueTimers = function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.timers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var timer = _c.value;
                if (timer.NextTickFuncOverdue) {
                    timer.nextTickFunc();
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    TimerContext.default = new TimerContext();
    TimerContext.default_autoAddAll = false;
    return TimerContext;
}());
exports.TimerContext = TimerContext;
// methods
// ==========
function TryCall(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    //if (!(func instanceof Function)) return;
    if (typeof func != "function")
        return;
    try {
        return func.apply(this, args);
    }
    catch (ex) { }
}
exports.TryCall = TryCall;
function TryCall_OnX(obj, func) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (typeof func != "function")
        return;
    try {
        return func.apply(obj, args);
    }
    catch (ex) { }
}
exports.TryCall_OnX = TryCall_OnX;
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
var maxTimeoutLength = 0x7FFFFFFF; // setTimeout limit is MAX_INT32=(2^31-1)
function WaitXThenRun(delayInMS, func) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    __1.Assert(delayInMS <= maxTimeoutLength, "Cannot wait for longer than " + maxTimeoutLength + " ms. (use WaitUntilXThenRun, if a long-delay is needed)");
    // setTimeout can take really long on Chrome mobile (eg. while scrolling), for some reason (like, 1.5 seconds)
    // on desktop, setImmediate is better as well, since it takes ~0ms instead of 1-15ms
    if (delayInMS == 0) {
        return window["setImmediate"].apply(window, __spread([func], args)); // same as below
    }
    return setTimeout.apply(void 0, __spread([func, delayInMS], args)); // "as any": maybe temp; used to allow source-importing from NodeJS
}
exports.WaitXThenRun = WaitXThenRun;
function WaitUntilXThenRun(targetDateTimeInMS, func) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var now = Date.now();
    var diff = __1.NumberCE.KeepAtLeast(targetDateTimeInMS - now, 0);
    if (diff > maxTimeoutLength) {
        WaitXThenRun(maxTimeoutLength, function () { return WaitUntilXThenRun(targetDateTimeInMS, func); });
    }
    else {
        WaitXThenRun(diff, func);
    }
}
exports.WaitUntilXThenRun = WaitUntilXThenRun;
function SleepAsync(timeMS) {
    return new Promise(function (resolve, reject) {
        WaitXThenRun(timeMS, resolve);
    });
}
exports.SleepAsync = SleepAsync;
function SleepAsyncUntil(targetDateTimeInMS) {
    return new Promise(function (resolve, reject) {
        WaitUntilXThenRun(targetDateTimeInMS, resolve);
    });
}
exports.SleepAsyncUntil = SleepAsyncUntil;
var DoNothingXTimesThenDoY_counters = {};
function DoNothingXTimesThenDoY(doNothingCount, func, key) {
    if (key === void 0) { key = "default"; }
    if (DoNothingXTimesThenDoY_counters[key] == null) {
        DoNothingXTimesThenDoY_counters[key] = 0;
    }
    if (DoNothingXTimesThenDoY_counters[key] >= doNothingCount) {
        func();
    }
    DoNothingXTimesThenDoY_counters[key]++;
}
exports.DoNothingXTimesThenDoY = DoNothingXTimesThenDoY;
// interval is in seconds (can be decimal)
var Timer = /** @class */ (function () {
    function Timer(intervalInMS, func, maxCallCount) {
        if (maxCallCount === void 0) { maxCallCount = -1; }
        this.timerID = -1;
        this.callCount_thisRun = 0;
        this.callCount_total = 0;
        __1.Assert(__1.IsNumber(intervalInMS), "Interval must be a number.");
        this.intervalInMS = intervalInMS;
        this.func = func;
        this.maxCallCount = maxCallCount;
        if (TimerContext.default_autoAddAll) {
            TimerContext.default.timers.push(this);
        }
    }
    Timer.prototype.SetContext = function (timerContext) {
        __1.Assert(timerContext, "TimerContext cannot be null.");
        this.timerContexts = (this.timerContexts || []).concat(timerContext);
        timerContext.timers.push(this);
        return this;
    };
    Timer.prototype.RemoveFromContext = function (timerContext) {
        __1.ArrayCE.Remove(this.timerContexts, timerContext);
        __1.ArrayCE.Remove(timerContext.timers, this);
    };
    Timer.prototype.ClearContexts = function () {
        var e_3, _a;
        try {
            for (var _b = __values(this.timerContexts), _c = _b.next(); !_c.done; _c = _b.next()) {
                var context = _c.value;
                this.RemoveFromContext(context);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    Object.defineProperty(Timer.prototype, "IsRunning", {
        get: function () { return this.timerID != -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "NextTickFuncOverdue", {
        get: function () {
            return this.nextTickTime != null && Date.now() > this.nextTickTime && this.nextTickFunc != null;
        },
        enumerable: true,
        configurable: true
    });
    Timer.prototype.Start = function (initialDelayOverride) {
        var _this = this;
        if (initialDelayOverride === void 0) { initialDelayOverride = null; }
        // if start is called when it's already running, stop the timer first (thus we restart the timer instead of causing overlapping setIntervals/delayed-func-calls)
        if (this.IsRunning)
            this.Stop();
        this.startTime = Date.now();
        var StartRegularInterval = function () {
            _this.nextTickTime = _this.startTime + _this.intervalInMS;
            _this.timerID = setInterval(_this.nextTickFunc = function () {
                _this.callCount_thisRun++;
                _this.callCount_total++;
                _this.func();
                if (_this.maxCallCount != -1 && _this.callCount_thisRun >= _this.maxCallCount) {
                    _this.Stop();
                }
                else {
                    //this.nextTickTime += this.intervalInMS;
                    _this.nextTickTime = Date.now() + _this.intervalInMS; // using Date.now() prevents the prop from getting out-of-sync (from sleep-mode)
                }
            }, _this.intervalInMS); // "as any": maybe temp; used to allow source-importing from NodeJS
        };
        if (initialDelayOverride != null) {
            this.nextTickTime = this.startTime + initialDelayOverride;
            this.timerID = setTimeout(this.nextTickFunc = function () {
                _this.callCount_thisRun++;
                _this.callCount_total++;
                _this.func();
                if (_this.maxCallCount != -1 && _this.callCount_thisRun >= _this.maxCallCount) {
                    _this.Stop();
                }
                else {
                    StartRegularInterval();
                }
            }, initialDelayOverride); // "as any": maybe temp; used to allow source-importing from NodeJS
        }
        else {
            StartRegularInterval();
        }
        return this; // enable chaining, for SetContext() call
    };
    Timer.prototype.Stop = function () {
        clearInterval(this.timerID);
        //this.startTime = null;
        this.nextTickTime = null;
        this.nextTickFunc = null;
        this.timerID = -1;
        this.callCount_thisRun = 0;
    };
    return Timer;
}());
exports.Timer = Timer;
var TimerS = /** @class */ (function (_super) {
    __extends(TimerS, _super);
    function TimerS(interval_decimal, func, maxCallCount) {
        if (maxCallCount === void 0) { maxCallCount = -1; }
        return _super.call(this, interval_decimal * 1000, func, maxCallCount) || this;
    }
    return TimerS;
}(Timer));
exports.TimerS = TimerS;
var funcLastScheduledRunTimes = {};
function BufferAction() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length == 2)
        var _a = __read(args, 2), minInterval = _a[0], func = _a[1], key = null;
    else if (args.length == 3)
        var _b = __read(args, 3), key = _b[0], minInterval = _b[1], func = _b[2];
    var lastScheduledRunTime = funcLastScheduledRunTimes[key] || 0;
    var now = new Date().getTime();
    var timeSinceLast = now - lastScheduledRunTime;
    if (timeSinceLast >= minInterval) { // if we've waited enough since last run, run right now
        func();
        funcLastScheduledRunTimes[key] = now;
    }
    else {
        var waitingForNextRunAlready = lastScheduledRunTime > now;
        if (!waitingForNextRunAlready) { // else, if we're not already waiting for next-run, schedule next-run
            var nextRunTime = lastScheduledRunTime + minInterval;
            var timeTillNextRun = nextRunTime - now;
            WaitXThenRun(timeTillNextRun, func);
            funcLastScheduledRunTimes[key] = nextRunTime;
        }
    }
}
exports.BufferAction = BufferAction;
//# sourceMappingURL=Timers.js.map