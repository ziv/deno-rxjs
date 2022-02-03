import { ObservableInputTuple, OperatorFunction, SchedulerLike } from "../types.ts";
import { operate } from "../util/lift.ts";
import { concatAll } from "./concatAll.ts";
import { popScheduler } from "../util/args.ts";
import { from } from "../observable/from.ts";

/** @deprecated Replaced with {@link concatWith}. Will be removed in v8. */
export function concat<T, A extends readonly unknown[]>(
  ...sources: [...ObservableInputTuple<A>]
): OperatorFunction<T, T | A[number]>;
/** @deprecated Replaced with {@link concatWith}. Will be removed in v8. */
export function concat<T, A extends readonly unknown[]>(
  ...sourcesAndScheduler: [...ObservableInputTuple<A>, SchedulerLike]
): OperatorFunction<T, T | A[number]>;

/**
 * @deprecated Replaced with {@link concatWith}. Will be removed in v8.
 */
export function concat<T, R>(...args: any[]): OperatorFunction<T, R> {
  const scheduler = popScheduler(args);
  return operate((source, subscriber) => {
    concatAll()(from([source, ...args], scheduler)).subscribe(subscriber);
  });
}
