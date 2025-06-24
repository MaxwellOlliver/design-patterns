export interface BitcoinPriceObserver {
  update(newPrice: number): void;
}
