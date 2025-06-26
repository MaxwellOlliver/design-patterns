export class ShippingService {
  constructor() {
    console.log("ShippingService created");
  }

  initiateShipping(orderDetails: any) {
    console.log(`Initiating shipping for order ${orderDetails.orderId}`);
  }
}
