import { test, expect } from "vitest";
import { squaresOfSortedArray } from "./";

test("it works", () => {
  expect(squaresOfSortedArray([-4, -1, 0, 3, 10, 10])).toStrictEqual([0, 1, 9, 16, 100, 100]);
});