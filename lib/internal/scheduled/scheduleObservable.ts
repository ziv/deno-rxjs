import { innerFrom } from "../observable/innerFrom.ts";
import { observeOn } from "../operators/observeOn.ts";
import { subscribeOn } from "../operators/subscribeOn.ts";
import { InteropObservable, SchedulerLike } from "../types.ts";

export function scheduleObservable<T>(input: InteropObservable<T>, scheduler: SchedulerLike) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
