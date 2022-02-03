import { Observable } from "../Observable.ts";
import { Subscription } from "../Subscription.ts";
import { Scheduler } from "../Scheduler.ts";
import { TestMessage } from "./TestMessage.ts";
import { SubscriptionLog } from "./SubscriptionLog.ts";
import { SubscriptionLoggable } from "./SubscriptionLoggable.ts";
import { applyMixins } from "../util/applyMixins.ts";
import { Subscriber } from "../Subscriber.ts";
import { observeNotification } from "../Notification.ts";

export class ColdObservable<T> extends Observable<T> implements SubscriptionLoggable {
  public subscriptions: SubscriptionLog[] = [];
  scheduler: Scheduler;
  // @ts-ignore: Property has no initializer and is not definitely assigned
  logSubscribedFrame: () => number;
  // @ts-ignore: Property has no initializer and is not definitely assigned
  logUnsubscribedFrame: (index: number) => void;

  constructor(public messages: TestMessage[], scheduler: Scheduler) {
    super(function (this: Observable<T>, subscriber: Subscriber<any>) {
      const observable: ColdObservable<T> = this as any;
      const index = observable.logSubscribedFrame();
      const subscription = new Subscription();
      subscription.add(
        new Subscription(() => {
          observable.logUnsubscribedFrame(index);
        }),
      );
      observable.scheduleMessages(subscriber);
      return subscription;
    });
    this.scheduler = scheduler;
  }

  scheduleMessages(subscriber: Subscriber<any>) {
    const messagesLength = this.messages.length;
    for (let i = 0; i < messagesLength; i++) {
      const message = this.messages[i];
      subscriber.add(
        this.scheduler.schedule(
          (state) => {
            const { message: { notification }, subscriber: destination } = state!;
            observeNotification(notification, destination);
          },
          message.frame,
          { message, subscriber },
        ),
      );
    }
  }
}
applyMixins(ColdObservable, [SubscriptionLoggable]);
