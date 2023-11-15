import { expect, test } from "vitest";
import { knapsackFractional, Item } from "./knapsack";

test("[knapsack] basic scenario", () => {
  const items: Item[] = [{ value: 60, weight: 10 }, { value: 100, weight: 20 }, { value: 120, weight: 30 }];
  const capacity = 50;

  expect(knapsackFractional(items, capacity)).toBe(240);
});

test("[knapsack] doesn't take anything because of no capacity", () => {
  const items: Item[] = [{ value: 60, weight: 10 }, { value: 100, weight: 20 }, { value: 120, weight: 30 }];
  const capacity = 0;

  expect(knapsackFractional(items, capacity)).toBe(0);
});

test("[knapsack] takes a single fraction of a heavy item", () => {
  const bigItem: Item = { value: 1000, weight: 10000 };
  const capacity = 20;

  expect(knapsackFractional([bigItem], capacity))
    .toBe((bigItem.value / bigItem.weight) * capacity);
});

test("[knapsack] singleItems fits perfectly", () => {
  const items: Item[] = [{ value: 60, weight: 10 }];
  const capacity = 10;

  expect(knapsackFractional(items, capacity)).toBe(items[0].value);
});

test("[knapsack] items with 0 value and weight", () => {
  const items: Item[] = [{ value: 0, weight: 0 }, { value: 0, weight: 0 }, { value: 0, weight: 0 }, { value: 0, weight: 0 }];
  const capacity = 10;

  expect(knapsackFractional(items, capacity)).toBe(0);
});

test("[knapsack] floating point values and weight", () => {
  const items: Item[] = [{ value: 2.5, weight: 2.5 }, { value: 2.5, weight: 2.5 }, { value: 2.5, weight: 2.5 }, { value: 2.5, weight: 2.5 },];
  const capacity = 10;

  expect(knapsackFractional(items, capacity)).toBe(10);
});