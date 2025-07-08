import { TaxType } from "../../interfaces/TaxType";

export class ICMS implements TaxType {
  calculate(input: { amount: number }): number {
    return input.amount * 0.2;
  }
}
