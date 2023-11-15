type Item = {
  value: number,
  weight: number,
  ratio?: number;
}

/**
 * Represents the knapsack problem where we take a sorted set
 * of items where we want to take in our knapsack as much value as
 * possible. There are many items with different weights and values.
 * 
 * How to solve this problem:
 * 
 * 1. Calculate the ratio of value/weight.
 * 2. Sort the items from greatest to lowest in terms of ratio.
 * 3. Fill the knapsack with the item with the most value and we can take.
 * 4. Repeat the process.
 * 5. If the next item is greater than the space left, take a fraction.
 * 
 * @param items Item[]
 * @param capacity number
 * @returns how much value we took from the items
 */
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
