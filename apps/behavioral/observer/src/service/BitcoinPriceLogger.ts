import { BitcoinPriceObserver } from "../interfaces/BitcoinPriceObserver";

export class BitcoinPriceLogger implements BitcoinPriceObserver {
  public update(newPrice: number): void {
    console.log(`Bitcoin price: ${newPrice}`);
  }
}
