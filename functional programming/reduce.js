var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 150 },
  { amount: 176 },
];

var totalSum = orders.reduce((sum, order) => {
  return sum + order.amount;
}, 0);

console.log(totalSum);
