import { test, expect } from "vitest";
import { intervalLiostIntersections } from "./";

test("First test", () => {
  expect(
    intervalLiostIntersections([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]])
  ).toStrictEqual([[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]);
})

test("Second test", () => {
  expect(
    intervalLiostIntersections([[1, 3], [5, 9]], [])
  ).toStrictEqual([]);
})