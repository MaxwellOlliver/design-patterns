import { TaxType } from "../../interfaces/TaxType";

export class IVA implements TaxType {
  calculate(input: { amount: number }): number {
    return input.amount * 0.28;
  }
}
