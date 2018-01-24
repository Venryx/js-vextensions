export declare class TimerContext {
    timers: Timer[];
    Reset(): void;
}
export declare function TryCall<T>(func: (..._) => T, ...args: any[]): T;
export declare function TryCall_OnX(obj: any, func: any, ...args: any[]): any;
declare global  {
    function WaitXThenRun(delayInMS: any, func: any, ...args: any[]): number;
}
export declare function WaitXThenRun(delayInMS: any, func: any, ...args: any[]): number;
export declare function Sleep(ms: any): void;
export declare function SleepAsync(timeMS: any): Promise<{}>;
export declare function DoNothingXTimesThenDoY(doNothingCount: number, func: Function, key?: string): void;
export declare class Timer {
    constructor(intervalInMS: any, func: any, maxCallCount?: number);
    intervalInMS: any;
    func: any;
    maxCallCount: any;
    SetContext(timerContext: TimerContext): this;
    timerID: number;
    readonly IsRunning: boolean;
    callCount: number;
    Start(): this;
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
export {};
