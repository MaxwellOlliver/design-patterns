import { EmailNotification } from "./EmailNotification";
import { SlackNotification } from "./SlackNotification";
import { SmsNotification } from "./SmsNotification";
import { NotificationTypeInterface } from "./NOtificationTypeInterface";

export class NotificationFactory {
  static create(type: "email" | "sms" | "slack"): NotificationTypeInterface {
    if (type === "email") {
      return new EmailNotification();
    }
    if (type === "sms") {
      return new SmsNotification();
    }
    if (type === "slack") {
      return new SlackNotification();
    }

    throw new Error("Invalid notification type");
  }
}
