import { TaxType } from "../interfaces/TaxType";

export class TaxCalculator {
  constructor(private strategy: TaxType) {}

  calculate(input: { taxType: string; amount: number }): number {
    return this.strategy.calculate(input);
  }
}
