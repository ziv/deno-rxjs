import { ObservableNotification } from "../types.ts";

export interface TestMessage {
  frame: number;
  notification: ObservableNotification<any>;
  isGhost?: boolean;
}
