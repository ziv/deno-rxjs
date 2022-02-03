import { Observable } from "../Observable.ts";
import { ObservableInput, OperatorFunction } from "../types.ts";
import { identity } from "../util/identity.ts";
import { mapOneOrManyArgs } from "../util/mapOneOrManyArgs.ts";
import { pipe } from "../util/pipe.ts";
import { mergeMap } from "./mergeMap.ts";
import { toArray } from "./toArray.ts";

/**
 * Collects all of the inner sources from source observable. Then, once the
 * source completes, joins the values using the given static.
 *
 * This is used for {@link combineLatestAll} and {@link zipAll} which both have the
 * same behavior of collecting all inner observables, then operating on them.
 *
 * @param joinFn The type of static join to apply to the sources collected
 * @param project The projection function to apply to the values, if any
 */
export function joinAllInternals<T, R>(
  joinFn: (sources: ObservableInput<T>[]) => Observable<T>,
  project?: (...args: any[]) => R,
) {
  return pipe(
    // Collect all inner sources into an array, and emit them when the
    // source completes.
    toArray() as OperatorFunction<ObservableInput<T>, ObservableInput<T>[]>,
    // Run the join function on the collected array of inner sources.
    mergeMap((sources) => joinFn(sources)),
    // If a projection function was supplied, apply it to each result.
    project ? mapOneOrManyArgs(project) : (identity as any),
  );
}
