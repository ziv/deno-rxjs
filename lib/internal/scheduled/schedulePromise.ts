import { innerFrom } from "../observable/innerFrom.ts";
import { observeOn } from "../operators/observeOn.ts";
import { subscribeOn } from "../operators/subscribeOn.ts";
import { SchedulerLike } from "../types.ts";

export function schedulePromise<T>(input: PromiseLike<T>, scheduler: SchedulerLike) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
