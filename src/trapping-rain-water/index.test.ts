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
/**
 * This solution uses these aux variables
 * p1, p2, pacc, acc, toSubstractAcc, tempAcc
 * 
 * - starts the loop
 * - takes item and compares it to left and right side.
 * - if its greater than right side, it becomes pointer,
 *   - if pointer #1 is available, takes it and [continue with loop]
 *   - if pointer #1 is not available, pointer #2 will be
 *     - if pointer #2 is available, perform calculation
 *       - check which pointer is smallest, and multiply that by ((p2 - p1) - 1), 
 *         then substract what is inside `toSubstractAcc` and `tempAcc`, next, sum that value to `acc` and set `toSubstractAcc` to 0.
 *       - If p2 >= p1 set p1 to p2 and clear p2 value (null).
 *       - If p2 < p1 save what was added in acc to `tempAcc`.
 */