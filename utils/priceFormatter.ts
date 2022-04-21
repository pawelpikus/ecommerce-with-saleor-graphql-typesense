export const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR",

  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
