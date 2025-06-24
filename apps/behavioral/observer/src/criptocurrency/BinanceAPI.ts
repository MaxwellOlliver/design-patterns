import { Bitcoin } from "./Bitcoin";

export class BinanceAPI {
  public getLastPrice(): number {
    return Math.min(Math.max(Math.random() * 1000, 0), 1000);
  }
}
