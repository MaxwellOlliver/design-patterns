export interface TaxType {
  calculate(input: { amount: number }): number;
}
