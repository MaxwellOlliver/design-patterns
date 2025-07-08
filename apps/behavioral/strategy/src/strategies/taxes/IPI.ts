import { TaxType } from "../../interfaces/TaxType";

export class IPI implements TaxType {
  calculate(input: { amount: number }): number {
    return input.amount * 0.15;
  }
}
