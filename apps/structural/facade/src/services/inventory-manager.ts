export class InventoryManager {
  constructor() {
    console.log("InventoryManager created");
  }

  updateStock(productId: string, quantity: number) {
    console.log(
      `Updating stock for product ${productId} with quantity ${quantity}`
    );
  }
}
