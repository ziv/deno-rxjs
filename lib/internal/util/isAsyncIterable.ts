import { isFunction } from "./isFunction.ts";

export function isAsyncIterable<T>(obj: any): obj is AsyncIterable<T> {
  return Symbol.asyncIterator && isFunction(obj?.[Symbol.asyncIterator]);
}
