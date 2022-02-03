import { ReadableStreamLike, SchedulerLike } from "../types.ts";
import { Observable } from "../Observable.ts";
import { scheduleAsyncIterable } from "./scheduleAsyncIterable.ts";
import { readableStreamLikeToAsyncGenerator } from "../util/isReadableStreamLike.ts";

export function scheduleReadableStreamLike<T>(input: ReadableStreamLike<T>, scheduler: SchedulerLike): Observable<T> {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
