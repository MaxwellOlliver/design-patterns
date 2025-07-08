import { TaxCalculator } from "./services/TaxCalculator";
import { TaxType } from "./interfaces/TaxType";
import { ICMS } from "./strategies/taxes/ICMS";
import { IPI } from "./strategies/taxes/IPI";
import { ISS } from "./strategies/taxes/ISS";
import { IVA } from "./strategies/taxes/IVA";
import { formatCurrency, match } from "@design-patterns/utils";

const input = {
  taxType: "IVA",
  amount: 10000, // 100.00
};

let Strategy: TaxType = match(input.taxType, {
  ICMS: () => new ICMS(),
  IPI: () => new IPI(),
  IVA: () => new IVA(),
  ISS: () => new ISS(),
  default: () => {
    throw new Error("Tax type not found");
  },
});

const taxCalculator = new TaxCalculator(Strategy);
const tax = taxCalculator.calculate(input);
console.log(
  `[strategy] Calculated tax is ${formatCurrency(tax)} with strategy: ${
    Strategy.constructor.name
  }`
);
