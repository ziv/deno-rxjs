import { iterator as Symbol_iterator } from "../symbol/iterator.ts";
import { isFunction } from "./isFunction.ts";

/** Identifies an input as being an Iterable */
export function isIterable(input: any): input is Iterable<any> {
  return isFunction(input?.[Symbol_iterator]);
}
