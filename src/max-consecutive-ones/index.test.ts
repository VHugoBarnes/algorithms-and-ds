import { test, expect } from "vitest";
import { maxConsecutiveOnes } from "./";

test("result is 10", () => {
  expect(maxConsecutiveOnes([0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0], 2)).toBe(10);
});