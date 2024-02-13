export function calculateTotal(items, tax) {
  let total = 0;
  for (let i in items) {
    total += items[i].price;
    if (items[i].taxable) {
      total += items[i].price * Math.abs(tax);
    }
  }
  return total;
}
