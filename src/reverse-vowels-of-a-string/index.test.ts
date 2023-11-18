import { test, expect } from "vitest";
import { reverseVowelsOfAString } from "./";

test("transforms leetcode -> leotcede", () => {
  expect(reverseVowelsOfAString("leetcode")).toBe("leotcede");
});

test("transforms hello -> holle", () => {
  expect(reverseVowelsOfAString("hello")).toBe("holle");
});