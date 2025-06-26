import express from "express";
import { OrderController } from "./controllers/order-controller";

const app = express();
const orderController = new OrderController();

app.use(express.json());

app.post("/order", orderController.processOrder);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
