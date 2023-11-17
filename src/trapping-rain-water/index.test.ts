import { test, expect } from "vitest";
import { trappingRainWater } from "./";

test("result is 38", () => {
  expect(trappingRainWater([4, 2, 5, 1, 0, 6, 1, 2, 0, 0, 0, 0, 5])).toBe(38);
});

test("result is 6", () => {
  expect(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
});

test("result is 5", () => {
  expect(trappingRainWater([3, 0, 0, 2, 0, 4])).toBe(10);
});

test("result is 0", () => {
  expect(trappingRainWater([1, 2, 3, 4, 5])).toBe(0);
});

test("result is 9", () => {
  expect(trappingRainWater([4, 2, 0, 3, 2, 5])).toBe(9);
});

test("result is 13, with consecutive", () => {
  expect(trappingRainWater([4, 1, 2, 0, 3, 2, 5, 1, 2])).toBe(13);
});

test("result is 1, with consecutive", () => {
  expect(trappingRainWater([3, 2, 1, 2, 1])).toBe(1);
});

test("result is 1", () => {
  expect(trappingRainWater([5, 4, 1, 2])).toBe(1);
});

/**
 * - pointer #1 starts at the start of the array
 * - pointer #2 starts at the end of the array
 * 
 * perform these actions while the pointer #2 is greater than pointer #1
 *   - which pointer has the smallest value?
 *   - select pointer with smallest value
 *      - move pointer
 *      - perform: (Max(p1, px[i])) - px[i]
 *      - add result to accumulator variable
 *   - if both pointer has the same value, select pointer 1
 */