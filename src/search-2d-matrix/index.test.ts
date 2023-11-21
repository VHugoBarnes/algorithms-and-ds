import { test, expect } from "vitest";
import { searchMatrix } from "./";

test("[[1,3,5,7],[10,11,16,20],[23,30,34,60]] target = 3 is true", () => {
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)).toBe(true);
});