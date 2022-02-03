import { Subject } from "../Subject.ts";
import { Subscriber } from "../Subscriber.ts";
import { Subscription } from "../Subscription.ts";
import { Scheduler } from "../Scheduler.ts";
import { TestMessage } from "./TestMessage.ts";
import { SubscriptionLog } from "./SubscriptionLog.ts";
import { SubscriptionLoggable } from "./SubscriptionLoggable.ts";
import { applyMixins } from "../util/applyMixins.ts";
import { observeNotification } from "../Notification.ts";

export class HotObservable<T> extends Subject<T> implements SubscriptionLoggable {
  public subscriptions: SubscriptionLog[] = [];
  scheduler: Scheduler;
  // @ts-ignore: Property has no initializer and is not definitely assigned
  logSubscribedFrame: () => number;
  // @ts-ignore: Property has no initializer and is not definitely assigned
  logUnsubscribedFrame: (index: number) => void;

  constructor(public messages: TestMessage[], scheduler: Scheduler) {
    super();
    this.scheduler = scheduler;
  }

  /** @internal */
  protected _subscribe(subscriber: Subscriber<any>): Subscription {
    const subject: HotObservable<T> = this;
    const index = subject.logSubscribedFrame();
    const subscription = new Subscription();
    subscription.add(
      new Subscription(() => {
        subject.logUnsubscribedFrame(index);
      }),
    );
    subscription.add(super._subscribe(subscriber));
    return subscription;
  }

  setup() {
    const subject = this;
    const messagesLength = subject.messages.length;
    /* tslint:disable:no-var-keyword */
    for (let i = 0; i < messagesLength; i++) {
      (() => {
        const { notification, frame } = subject.messages[i];
        /* tslint:enable */
        subject.scheduler.schedule(() => {
          observeNotification(notification, subject);
        }, frame);
      })();
    }
  }
}
applyMixins(HotObservable, [SubscriptionLoggable]);
