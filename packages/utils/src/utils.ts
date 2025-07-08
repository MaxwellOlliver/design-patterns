export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function match(
  input: string,
  cases: Record<string, () => any> & { default: () => any }
) {
  const value = cases[input];

  if (!value) return cases.default();

  return value();
}

export function formatCurrency(
  amount: number,
  internalPrecision: number = 2,
  displayDecimals: number = 2,
  locale: string = "pt-BR",
  currency: string = "BRL"
) {
  const displayValue = amount / Math.pow(10, internalPrecision);
  return displayValue.toLocaleString(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: displayDecimals,
    maximumFractionDigits: displayDecimals,
  });
}
