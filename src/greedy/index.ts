import { knapsackFractional } from "./knapsack";

let items = [{ value: 60, weight: 10 }, { value: 100, weight: 20 }, { value: 120, weight: 30 }];
let capacity = 50;

console.log(knapsackFractional(items, capacity)); // Output: 240