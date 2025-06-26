export class PaymentProcessor {
  constructor() {
    console.log("PaymentProcessor created");
  }

  processPayment(amount: number) {
    console.log(`Processing payment of ${amount}`);
  }
}
