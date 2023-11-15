type Item = {
  value: number,
  weight: number,
  ratio?: number;
}

export const knapsackFractional = (items: Item[], capacity: number) => {
  //? Calculate the ratio based on value/weight for each item
  items.forEach(item => {
    item.ratio = item.value / item.weight;
  });

  //? Sort the items by ratio
  items.sort((a, b) => b.ratio! - a.ratio!);

  let totalValue = 0;
  let totalWeight = 0;

  //? Fill the knapsack
  for (let item of items) {
    //? It the item fits completely take everything
    if (totalWeight + item.weight <= capacity) {
      totalValue += item.value;
      totalWeight += item.weight;
    } else { //? If it doesn't fit take what it does
      let canTake = capacity - totalWeight;
      totalValue += item.ratio! * canTake;
      break; //? Stop because the knapsack is full
    }
  }

  return totalValue;
}
