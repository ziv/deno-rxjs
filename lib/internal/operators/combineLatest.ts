import { combineLatestInit } from "../observable/combineLatest.ts";
import { ObservableInput, ObservableInputTuple, OperatorFunction } from "../types.ts";
import { operate } from "../util/lift.ts";
import { argsOrArgArray } from "../util/argsOrArgArray.ts";
import { mapOneOrManyArgs } from "../util/mapOneOrManyArgs.ts";
import { pipe } from "../util/pipe.ts";
import { popResultSelector } from "../util/args.ts";

/** @deprecated Replaced with {@link combineLatestWith}. Will be removed in v8. */
export function combineLatest<T, A extends readonly unknown[], R>(
  sources: [...ObservableInputTuple<A>],
  project: (...values: [T, ...A]) => R,
): OperatorFunction<T, R>;
/** @deprecated Replaced with {@link combineLatestWith}. Will be removed in v8. */
export function combineLatest<T, A extends readonly unknown[], R>(
  sources: [...ObservableInputTuple<A>],
): OperatorFunction<T, [T, ...A]>;

/** @deprecated Replaced with {@link combineLatestWith}. Will be removed in v8. */
export function combineLatest<T, A extends readonly unknown[], R>(
  ...sourcesAndProject: [...ObservableInputTuple<A>, (...values: [T, ...A]) => R]
): OperatorFunction<T, R>;
/** @deprecated Replaced with {@link combineLatestWith}. Will be removed in v8. */
export function combineLatest<T, A extends readonly unknown[], R>(
  ...sources: [...ObservableInputTuple<A>]
): OperatorFunction<T, [T, ...A]>;

/**
 * @deprecated Replaced with {@link combineLatestWith}. Will be removed in v8.
 */
export function combineLatest<T, R>(
  ...args: (ObservableInput<any> | ((...values: any[]) => R))[]
): OperatorFunction<T, unknown> {
  const resultSelector = popResultSelector(args);
  return resultSelector
    ? pipe(combineLatest(...(args as Array<ObservableInput<any>>)), mapOneOrManyArgs(resultSelector))
    : operate((source, subscriber) => {
      combineLatestInit([source, ...argsOrArgArray(args)])(subscriber);
    });
}
