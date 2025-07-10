import { NotificationFactory } from "./services/Notification/NotificationFactory";

interface Input {
  notificationType: "email" | "sms" | "slack";
  message: string;
}

const input: Input = {
  notificationType: "email",
  message: "Hello, world!",
};

const notification = NotificationFactory.create(input.notificationType);

notification.send(input.message);
