import { Request, Response } from "express";
import { InventoryManager } from "../services/inventory-manager";
import { Notifier } from "../services/notifier";
import { PaymentProcessor } from "../services/payment-processor";
import { ShippingService } from "../services/shipping-service";

export class OrderController {
  private inventoryManager: InventoryManager;
  private notifier: Notifier;
  private paymentProcessor: PaymentProcessor;
  private shippingService: ShippingService;

  constructor() {
    this.inventoryManager = new InventoryManager();
    this.notifier = new Notifier();
    this.paymentProcessor = new PaymentProcessor();
    this.shippingService = new ShippingService();
  }

  processOrder(request: Request, response: Response) {
    const orderDetails = request.body;

    this.inventoryManager.updateStock(
      orderDetails.productId,
      orderDetails.quantity
    );
    this.notifier.sendConfirmation(orderDetails.email);
    this.paymentProcessor.processPayment(orderDetails.amount);
    this.shippingService.initiateShipping(orderDetails);

    response.status(200).json({ message: "Order processed successfully" });
  }
}
