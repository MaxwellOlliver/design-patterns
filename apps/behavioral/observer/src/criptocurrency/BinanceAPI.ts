export class BinanceAPI {
  public getLastPrice(): number {
    console.log("Getting last price from Binance API");
    return Math.min(Math.max(Math.random() * 1000, 0), 1000);
  }
}
