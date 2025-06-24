import { BitcoinPriceObserver } from "../interfaces/BitcoinPriceObserver";
import { sleep } from "@design-patterns/utils";

export class Bitcoin {
  private observers: BitcoinPriceObserver[] = [];

  constructor(private price: number = 0) {}

  public getPrice(): number {
    return this.price;
  }

  public async setPrice(newPrice: number): Promise<void> {
    if (newPrice !== this.price) {
      console.log(`Setting price to: ${newPrice}`);
      this.price = newPrice;
      await sleep(3000);
      this.notifyObservers();
    }
  }

  public addObserver(observer: BitcoinPriceObserver): void {
    console.log(`Adding observer: ${observer.constructor.name}`);
    this.observers.push(observer);
  }

  private notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this.price));
  }
}
