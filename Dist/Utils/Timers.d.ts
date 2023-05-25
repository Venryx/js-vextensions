export declare class TimerContext {
    static default: TimerContext;
    static default_autoAddAll: boolean;
    timers: Timer[];
    Reset(): void;
    ManuallyTriggerOverdueTimers(): void;
}
export declare function TryCall<T>(func: (..._: any[]) => T, ...args: any[]): T;
export declare function TryCall_OnX(obj: any, func: any, ...args: any[]): any;
export declare function WaitXThenRun(delayInMS: number, func: (...args: any[]) => void, ...args: any[]): number;
export declare function WaitUntilXThenRun(targetDateTimeInMS: number, func: (...args: any[]) => void, ...args: any[]): void;
export declare function SleepAsync(timeMS: any): Promise<void>;
export declare function SleepAsyncUntil(targetDateTimeInMS: number): Promise<void>;
export declare function DoNothingXTimesThenDoY(doNothingCount: number, func: Function, key?: string): void;
export declare class Timer {
    constructor(intervalInMS: any, func: any, maxCallCount?: number);
    intervalInMS: number;
    func: Function;
    maxCallCount: number;
    timerContexts: TimerContext[];
    SetContext(timerContext: TimerContext): this;
    RemoveFromContext(timerContext: TimerContext): void;
    ClearContexts(): void;
    startTime: number;
    intervalID: number;
    timeoutID: number;
    get Enabled(): boolean;
    set Enabled(val: boolean);
    nextTickTime: number | undefined;
    nextTickFunc: Function | undefined;
    get NextTickFuncOverdue(): boolean;
    callCount_thisRun: number;
    callCount_total: number;
    Start(initialDelayOverride?: number): this;
    /** Clears native-timer, nextTickTime, nextTickFunc, timerID, and callCount_thisRun. (but not: startTime, callCount_total) */
    Stop(): void;
}
export declare class TimerS extends Timer {
    constructor(interval_decimal: any, func: any, maxCallCount?: number);
}
/** If time-since-last-run is above minInterval, run func right away.
 * Else, schedule next-run to occur as soon as the minInterval is passed. */
export declare function BufferAction(minInterval: number, func: Function): any;
/** If time-since-last-run is above minInterval, run func right away.
 * Else, schedule next-run to occur as soon as the minInterval is passed. */
export declare function BufferAction(key: string, minInterval: number, func: Function): any;
