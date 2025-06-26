import { Request, Response } from "express";

import { OrderFacade } from "../facade/order-facade";

export class OrderController {
  constructor(private orderFacade: OrderFacade) {}

  processOrder(request: Request, response: Response) {
    const orderDetails = request.body;

    this.orderFacade.processOrder(orderDetails);

    response.status(200).json({ message: "Order processed successfully" });
  }
}
