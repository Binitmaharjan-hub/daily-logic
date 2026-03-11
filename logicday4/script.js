const orders = [
  { id: 1, category: "food", amount: 200 },
  { id: 2, category: "tech", amount: 1500 },
  { id: 3, category: "food", amount: 350 },
  { id: 4, category: "clothing", amount: 800 },
  { id: 5, category: "tech", amount: 2200 },
  { id: 6, category: "clothing", amount: 400 },
];
function getCategoryTotals(orders) {
  return orders.reduce((acc, order) => {
    if (!acc[order.category]) {
      acc[order.category] = 0;
    }
    acc[order.category] += order.amount;

    return acc;
  }, {});
}

const result = getCategoryTotals(orders);
console.log(result);