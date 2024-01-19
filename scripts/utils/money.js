export function formatCurrency (price) {
  return ((price) / 100).toFixed(2)
}

export default formatCurrency;