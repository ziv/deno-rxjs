import { SchedulerLike } from "../types.ts";
import { isFunction } from "./isFunction.ts";

export function isScheduler(value: any): value is SchedulerLike {
  return value && isFunction(value.schedule);
}
