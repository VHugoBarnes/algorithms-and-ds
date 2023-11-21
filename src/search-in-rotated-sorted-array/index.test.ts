import { test, expect } from "vitest";
import { searchInRotatedSortedArray } from "./";

test("[4,5,6,7,0,1,2] target = 0 is 4", () => {
  expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});

test("[1,3] target = 1 is 0", () => {
  expect(searchInRotatedSortedArray([1, 3], 1)).toBe(0);
});

test("[5,1,3] target = 3 is 2", () => {
  expect(searchInRotatedSortedArray([5, 1, 3], 3)).toBe(2);
});

test("[8,1,2,3,4,5,6,7] target = 6 is 2", () => {
  expect(searchInRotatedSortedArray([8, 1, 2, 3, 4, 5, 6, 7], 6)).toBe(6);
});