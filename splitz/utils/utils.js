export function userTotalsMapToArray(userTotals) {
  const userTotalsArray = Array.from(userTotals, ([key, value]) => ({
    id: key,
    name: value.name,
    username: value.username,
    total_cost: value.total_cost,
  }));

  return userTotalsArray;
}

export function getTotalAmount(currentBill) {
  let totalAmount = 0;
  for (const item of currentBill) {
    totalAmount += item.total_cost;
  }
  return totalAmount;
}
