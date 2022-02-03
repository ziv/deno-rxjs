//////////////////////////////////////////////////////////
// Here we need to reference our other deep imports
// so VS code will figure out where they are
// see conversation here:
// https://github.com/microsoft/TypeScript/issues/43034
//////////////////////////////////////////////////////////

// tslint:disable: no-reference
// It's tempting to add references to all of the deep-import locations, but
// adding references to those that require DOM types breaks Node projects.
/// <reference path="./operators/index.ts" />
/// <reference path="./testing/index.ts" />
// tslint:enable: no-reference

/* Observable */
export { Observable } from "./internal/Observable.ts";
export { ConnectableObservable } from "./internal/observable/ConnectableObservable.ts";
export type { GroupedObservable } from "./internal/operators/groupBy.ts";
export type { Operator } from "./internal/Operator.ts";
export { observable } from "./internal/symbol/observable.ts";
export { animationFrames } from "./internal/observable/dom/animationFrames.ts";

/* Subjects */
export { Subject } from "./internal/Subject.ts";
export { BehaviorSubject } from "./internal/BehaviorSubject.ts";
export { ReplaySubject } from "./internal/ReplaySubject.ts";
export { AsyncSubject } from "./internal/AsyncSubject.ts";

/* Schedulers */
export { asap, asapScheduler } from "./internal/scheduler/asap.ts";
export { async, asyncScheduler } from "./internal/scheduler/async.ts";
export { queue, queueScheduler } from "./internal/scheduler/queue.ts";
export { animationFrame, animationFrameScheduler } from "./internal/scheduler/animationFrame.ts";
export { VirtualAction, VirtualTimeScheduler } from "./internal/scheduler/VirtualTimeScheduler.ts";
export { Scheduler } from "./internal/Scheduler.ts";

/* Subscription */
export { Subscription } from "./internal/Subscription.ts";
export { Subscriber } from "./internal/Subscriber.ts";

/* Notification */
export { Notification, NotificationKind } from "./internal/Notification.ts";

/* Utils */
export { pipe } from "./internal/util/pipe.ts";
export { noop } from "./internal/util/noop.ts";
export { identity } from "./internal/util/identity.ts";
export { isObservable } from "./internal/util/isObservable.ts";

/* Promise Conversion */
export { lastValueFrom } from "./internal/lastValueFrom.ts";
export { firstValueFrom } from "./internal/firstValueFrom.ts";

/* Error types */
export { ArgumentOutOfRangeError } from "./internal/util/ArgumentOutOfRangeError.ts";
export { EmptyError } from "./internal/util/EmptyError.ts";
export { NotFoundError } from "./internal/util/NotFoundError.ts";
export { ObjectUnsubscribedError } from "./internal/util/ObjectUnsubscribedError.ts";
export { SequenceError } from "./internal/util/SequenceError.ts";
export { TimeoutError } from "./internal/operators/timeout.ts";
export { UnsubscriptionError } from "./internal/util/UnsubscriptionError.ts";

/* Static observable creation exports */
export { bindCallback } from "./internal/observable/bindCallback.ts";
export { bindNodeCallback } from "./internal/observable/bindNodeCallback.ts";
export { combineLatest } from "./internal/observable/combineLatest.ts";
export { concat } from "./internal/observable/concat.ts";
export { connectable } from "./internal/observable/connectable.ts";
export { defer } from "./internal/observable/defer.ts";
export { empty } from "./internal/observable/empty.ts";
export { forkJoin } from "./internal/observable/forkJoin.ts";
export { from } from "./internal/observable/from.ts";
export { fromEvent } from "./internal/observable/fromEvent.ts";
export { fromEventPattern } from "./internal/observable/fromEventPattern.ts";
export { generate } from "./internal/observable/generate.ts";
export { iif } from "./internal/observable/iif.ts";
export { interval } from "./internal/observable/interval.ts";
export { merge } from "./internal/observable/merge.ts";
export { never } from "./internal/observable/never.ts";
export { of } from "./internal/observable/of.ts";
export { onErrorResumeNext } from "./internal/observable/onErrorResumeNext.ts";
export { pairs } from "./internal/observable/pairs.ts";
export { partition } from "./internal/observable/partition.ts";
export { race } from "./internal/observable/race.ts";
export { range } from "./internal/observable/range.ts";
export { throwError } from "./internal/observable/throwError.ts";
export { timer } from "./internal/observable/timer.ts";
export { using } from "./internal/observable/using.ts";
export { zip } from "./internal/observable/zip.ts";
export { scheduled } from "./internal/scheduled/scheduled.ts";

/* Constants */
export { EMPTY } from "./internal/observable/empty.ts";
export { NEVER } from "./internal/observable/never.ts";

/* Types */
export * from "./internal/types.ts";

/* Config */
export { config } from "./internal/config.ts";
export type { GlobalConfig } from "./internal/config.ts";

/* Operators */
export { audit } from "./internal/operators/audit.ts";
export { auditTime } from "./internal/operators/auditTime.ts";
export { buffer } from "./internal/operators/buffer.ts";
export { bufferCount } from "./internal/operators/bufferCount.ts";
export { bufferTime } from "./internal/operators/bufferTime.ts";
export { bufferToggle } from "./internal/operators/bufferToggle.ts";
export { bufferWhen } from "./internal/operators/bufferWhen.ts";
export { catchError } from "./internal/operators/catchError.ts";
export { combineAll } from "./internal/operators/combineAll.ts";
export { combineLatestAll } from "./internal/operators/combineLatestAll.ts";
export { combineLatestWith } from "./internal/operators/combineLatestWith.ts";
export { concatAll } from "./internal/operators/concatAll.ts";
export { concatMap } from "./internal/operators/concatMap.ts";
export { concatMapTo } from "./internal/operators/concatMapTo.ts";
export { concatWith } from "./internal/operators/concatWith.ts";
export { connect } from "./internal/operators/connect.ts";
export type { ConnectConfig } from "./internal/operators/connect.ts";
export { count } from "./internal/operators/count.ts";
export { debounce } from "./internal/operators/debounce.ts";
export { debounceTime } from "./internal/operators/debounceTime.ts";
export { defaultIfEmpty } from "./internal/operators/defaultIfEmpty.ts";
export { delay } from "./internal/operators/delay.ts";
export { delayWhen } from "./internal/operators/delayWhen.ts";
export { dematerialize } from "./internal/operators/dematerialize.ts";
export { distinct } from "./internal/operators/distinct.ts";
export { distinctUntilChanged } from "./internal/operators/distinctUntilChanged.ts";
export { distinctUntilKeyChanged } from "./internal/operators/distinctUntilKeyChanged.ts";
export { elementAt } from "./internal/operators/elementAt.ts";
export { endWith } from "./internal/operators/endWith.ts";
export { every } from "./internal/operators/every.ts";
export { exhaust } from "./internal/operators/exhaust.ts";
export { exhaustAll } from "./internal/operators/exhaustAll.ts";
export { exhaustMap } from "./internal/operators/exhaustMap.ts";
export { expand } from "./internal/operators/expand.ts";
export { filter } from "./internal/operators/filter.ts";
export { finalize } from "./internal/operators/finalize.ts";
export { find } from "./internal/operators/find.ts";
export { findIndex } from "./internal/operators/findIndex.ts";
export { first } from "./internal/operators/first.ts";
export { groupBy } from "./internal/operators/groupBy.ts";
export type { BasicGroupByOptions, GroupByOptionsWithElement } from "./internal/operators/groupBy.ts";
export { ignoreElements } from "./internal/operators/ignoreElements.ts";
export { isEmpty } from "./internal/operators/isEmpty.ts";
export { last } from "./internal/operators/last.ts";
export { map } from "./internal/operators/map.ts";
export { mapTo } from "./internal/operators/mapTo.ts";
export { materialize } from "./internal/operators/materialize.ts";
export { max } from "./internal/operators/max.ts";
export { mergeAll } from "./internal/operators/mergeAll.ts";
export { flatMap } from "./internal/operators/flatMap.ts";
export { mergeMap } from "./internal/operators/mergeMap.ts";
export { mergeMapTo } from "./internal/operators/mergeMapTo.ts";
export { mergeScan } from "./internal/operators/mergeScan.ts";
export { mergeWith } from "./internal/operators/mergeWith.ts";
export { min } from "./internal/operators/min.ts";
export { multicast } from "./internal/operators/multicast.ts";
export { observeOn } from "./internal/operators/observeOn.ts";
export { pairwise } from "./internal/operators/pairwise.ts";
export { pluck } from "./internal/operators/pluck.ts";
export { publish } from "./internal/operators/publish.ts";
export { publishBehavior } from "./internal/operators/publishBehavior.ts";
export { publishLast } from "./internal/operators/publishLast.ts";
export { publishReplay } from "./internal/operators/publishReplay.ts";
export { raceWith } from "./internal/operators/raceWith.ts";
export { reduce } from "./internal/operators/reduce.ts";
export { repeat } from "./internal/operators/repeat.ts";
export { repeatWhen } from "./internal/operators/repeatWhen.ts";
export { retry } from "./internal/operators/retry.ts";
export type { RetryConfig } from "./internal/operators/retry.ts";
export { retryWhen } from "./internal/operators/retryWhen.ts";
export { refCount } from "./internal/operators/refCount.ts";
export { sample } from "./internal/operators/sample.ts";
export { sampleTime } from "./internal/operators/sampleTime.ts";
export { scan } from "./internal/operators/scan.ts";
export { sequenceEqual } from "./internal/operators/sequenceEqual.ts";
export { share } from "./internal/operators/share.ts";
export type { ShareConfig } from "./internal/operators/share.ts";
export { shareReplay } from "./internal/operators/shareReplay.ts";
export type { ShareReplayConfig } from "./internal/operators/shareReplay.ts";
export { single } from "./internal/operators/single.ts";
export { skip } from "./internal/operators/skip.ts";
export { skipLast } from "./internal/operators/skipLast.ts";
export { skipUntil } from "./internal/operators/skipUntil.ts";
export { skipWhile } from "./internal/operators/skipWhile.ts";
export { startWith } from "./internal/operators/startWith.ts";
export { subscribeOn } from "./internal/operators/subscribeOn.ts";
export { switchAll } from "./internal/operators/switchAll.ts";
export { switchMap } from "./internal/operators/switchMap.ts";
export { switchMapTo } from "./internal/operators/switchMapTo.ts";
export { switchScan } from "./internal/operators/switchScan.ts";
export { take } from "./internal/operators/take.ts";
export { takeLast } from "./internal/operators/takeLast.ts";
export { takeUntil } from "./internal/operators/takeUntil.ts";
export { takeWhile } from "./internal/operators/takeWhile.ts";
export { tap } from "./internal/operators/tap.ts";
export { throttle } from "./internal/operators/throttle.ts";
export type { ThrottleConfig } from "./internal/operators/throttle.ts";
export { throttleTime } from "./internal/operators/throttleTime.ts";
export { throwIfEmpty } from "./internal/operators/throwIfEmpty.ts";
export { timeInterval } from "./internal/operators/timeInterval.ts";
export { timeout } from "./internal/operators/timeout.ts";
export type { TimeoutConfig, TimeoutInfo } from "./internal/operators/timeout.ts";
export { timeoutWith } from "./internal/operators/timeoutWith.ts";
export { timestamp } from "./internal/operators/timestamp.ts";
export { toArray } from "./internal/operators/toArray.ts";
export { window } from "./internal/operators/window.ts";
export { windowCount } from "./internal/operators/windowCount.ts";
export { windowTime } from "./internal/operators/windowTime.ts";
export { windowToggle } from "./internal/operators/windowToggle.ts";
export { windowWhen } from "./internal/operators/windowWhen.ts";
export { withLatestFrom } from "./internal/operators/withLatestFrom.ts";
export { zipAll } from "./internal/operators/zipAll.ts";
export { zipWith } from "./internal/operators/zipWith.ts";
