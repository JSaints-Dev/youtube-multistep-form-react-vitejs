export const parseCurrencyToNumber = (currency: string) => {
  const numberFormatted = currency.replace(/[^0-9,-]+/g, '').replace(',', '.')

  return parseFloat(numberFormatted)
}
