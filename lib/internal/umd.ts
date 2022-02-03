/*
  NOTE: This is the global export file for rxjs v6 and higher.
 */

/* rxjs */
export * from "../index.ts";

/* rxjs.operators */
import * as _operators from "../operators/index.ts";
export const operators = _operators;

/* rxjs.testing */
import * as _testing from "../testing/index.ts";
export const testing = _testing;

/* rxjs.ajax */
import * as _ajax from "../ajax/index.ts";
export const ajax = _ajax;

/* rxjs.webSocket */
import * as _webSocket from "../webSocket/index.ts";
export const webSocket = _webSocket;

/* rxjs.fetch */
import * as _fetch from "../fetch/index.ts";
export const fetch = _fetch;
