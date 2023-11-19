import { test, expect } from "vitest";
import { longestSubstringWithoutRepeatingChars } from "./";

test("abcabcbb is 3", () => {
  expect(longestSubstringWithoutRepeatingChars("abcabcbb")).toBe(3);
});

test("dvdf is 3", () => {
  expect(longestSubstringWithoutRepeatingChars("dvdf")).toBe(3);
});

test("pwwkew is 3", () => {
  expect(longestSubstringWithoutRepeatingChars("pwwkew")).toBe(3);
});