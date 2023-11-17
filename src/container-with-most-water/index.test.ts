import { test, expect } from "vitest";
import { containerWithMostWater } from "./";

test("container with most water is 49", () => {
  expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test("container with most water is 16", () => {
  expect(containerWithMostWater([4, 3, 2, 1, 4])).toBe(16);
});

test("container with most water is 16", () => {
  expect(containerWithMostWater([1, 1, 1, 4, 3, 2, 1, 4])).toBe(16);
});

test("container with most water is 25", () => {
  expect(containerWithMostWater([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(25);
});

test("container with most water is 0", () => {
  expect(containerWithMostWater([])).toBe(0);
});

test("container with most water is 5", () => {
  expect(containerWithMostWater([1, 1, 1, 1, 1, 1])).toBe(5);
});

test("container with most water is 56", () => {
  expect(containerWithMostWater([8, 1, 6, 2, 5, 4, 1, 3, 7])).toBe(56);
});

/**
 * Two pointers (p1, p2), one at the start, one at the end.
 * - Calculate the water with distance (p2-p1) minus minum height. Save result in `water`
 * - if the two values are the same, move pointers (p1++) (p2--)
 * - if not, move the pointer of the minimum height
 * - if two pointers are the same value (points to the same value), finish the execution.
 */