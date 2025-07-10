import { NotificationTypeInterface } from "./NOtificationTypeInterface";

export class SlackNotification implements NotificationTypeInterface {
  send(message: string): void {
    console.log(`Sending slack: ${message}`);
  }
}
