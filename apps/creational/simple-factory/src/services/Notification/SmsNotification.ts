import { NotificationTypeInterface } from "./NOtificationTypeInterface";

export class SmsNotification implements NotificationTypeInterface {
  send(message: string): void {
    console.log(`Sending sms: ${message}`);
  }
}
