import { InventoryManager } from "../services/inventory-manager";
import { Notifier } from "../services/notifier";
import { PaymentProcessor } from "../services/payment-processor";
import { ShippingService } from "../services/shipping-service";

export class OrderFacade {
  constructor(
    private inventoryManager: InventoryManager,
    private notifier: Notifier,
    private paymentProcessor: PaymentProcessor,
    private shippingService: ShippingService
  ) {}

  processOrder(orderDetails: Record<string, any>) {
    this.inventoryManager.updateStock(
      orderDetails.productId,
      orderDetails.quantity
    );
    this.notifier.sendConfirmation(orderDetails.email);
    this.paymentProcessor.processPayment(orderDetails.amount);
    this.shippingService.initiateShipping(orderDetails);
  }
}
