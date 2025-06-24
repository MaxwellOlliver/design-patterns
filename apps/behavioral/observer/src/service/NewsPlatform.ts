import { BitcoinPriceObserver } from "../interfaces/BitcoinPriceObserver";

export class NewsPlatform implements BitcoinPriceObserver {
  public update(newPrice: number): void {
    console.log(`News platform notified: Bitcoin price is ${newPrice}`);
  }
}
