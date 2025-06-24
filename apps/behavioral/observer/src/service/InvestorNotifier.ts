import { BitcoinPriceObserver } from "../interfaces/BitcoinPriceObserver";

export class InvestorNotifier implements BitcoinPriceObserver {
  public update(newPrice: number): void {
    console.log(`Investor notified: Bitcoin price is ${newPrice}`);
  }
}
