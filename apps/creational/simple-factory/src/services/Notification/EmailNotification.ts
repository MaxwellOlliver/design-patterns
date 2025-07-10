import { NotificationTypeInterface } from "./NOtificationTypeInterface";

export class EmailNotification implements NotificationTypeInterface {
  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}
