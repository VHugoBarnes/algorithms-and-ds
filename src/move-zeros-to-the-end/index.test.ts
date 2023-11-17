import { test, expect } from "vitest";
import { moveZerosToTheEnd } from "./";

test("result is [1,3,12,0,0]", () => {
  expect(moveZerosToTheEnd([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0])
});

test("result is [1,1,3,12,0,0,0]", () => {
  expect(moveZerosToTheEnd([1, 0, 1, 0, 0, 3, 12])).toStrictEqual([1, 1, 3, 12, 0, 0, 0])
});

test("result is [1,2,3,4,0,0,0,0]", () => {
  expect(moveZerosToTheEnd([0, 1, 0, 2, 0, 3, 0, 4])).toStrictEqual([1, 2, 3, 4, 0, 0, 0, 0])
});