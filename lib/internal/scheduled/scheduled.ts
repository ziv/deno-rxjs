import { scheduleObservable } from "./scheduleObservable.ts";
import { schedulePromise } from "./schedulePromise.ts";
import { scheduleArray } from "./scheduleArray.ts";
import { scheduleIterable } from "./scheduleIterable.ts";
import { scheduleAsyncIterable } from "./scheduleAsyncIterable.ts";
import { isInteropObservable } from "../util/isInteropObservable.ts";
import { isPromise } from "../util/isPromise.ts";
import { isArrayLike } from "../util/isArrayLike.ts";
import { isIterable } from "../util/isIterable.ts";
import { ObservableInput, SchedulerLike } from "../types.ts";
import { Observable } from "../Observable.ts";
import { isAsyncIterable } from "../util/isAsyncIterable.ts";
import { createInvalidObservableTypeError } from "../util/throwUnobservableError.ts";
import { isReadableStreamLike } from "../util/isReadableStreamLike.ts";
import { scheduleReadableStreamLike } from "./scheduleReadableStreamLike.ts";

/**
 * Converts from a common {@link ObservableInput} type to an observable where subscription and emissions
 * are scheduled on the provided scheduler.
 *
 * @see {@link from}
 * @see {@link of}
 *
 * @param input The observable, array, promise, iterable, etc you would like to schedule
 * @param scheduler The scheduler to use to schedule the subscription and emissions from
 * the returned observable.
 */
export function scheduled<T>(input: ObservableInput<T>, scheduler: SchedulerLike): Observable<T> {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}
