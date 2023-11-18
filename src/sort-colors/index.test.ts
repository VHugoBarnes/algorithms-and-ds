import { test, expect } from "vitest";
import { sortColors } from "./";

test("should sort #1", () => {
  expect(sortColors([2, 0, 2, 1, 1, 0])).toStrictEqual([0, 0, 1, 1, 2, 2]);
});

test("should sort #1", () => {
  expect(sortColors([2, 0, 1])).toStrictEqual([0, 1, 2]);
});