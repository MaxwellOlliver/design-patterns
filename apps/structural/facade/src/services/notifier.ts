export class Notifier {
  constructor() {
    console.log("Notifier created");
  }

  sendConfirmation(email: string) {
    console.log(`Sending confirmation email to ${email}`);
  }
}
