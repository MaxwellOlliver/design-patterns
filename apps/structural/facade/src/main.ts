import express from "express";
import { OrderController } from "./controllers/order-controller";
import { OrderFacade } from "./facade/order-facade";
import { InventoryManager } from "./services/inventory-manager";
import { Notifier } from "./services/notifier";
import { PaymentProcessor } from "./services/payment-processor";
import { ShippingService } from "./services/shipping-service";

const app = express();
const orderController = new OrderController(
  new OrderFacade(
    new InventoryManager(),
    new Notifier(),
    new PaymentProcessor(),
    new ShippingService()
  )
);

app.use(express.json());

app.post("/order", orderController.processOrder);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
