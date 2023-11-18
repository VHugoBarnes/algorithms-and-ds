import { test, expect } from "vitest";
import { validPalindromeII } from "./";

test("aba is palindrome", () => {
  expect(validPalindromeII("aba")).toBe(true);
});

test("cbbcc is palindrome", () => {
  expect(validPalindromeII("cbbcc")).toBe(true);
});

test("cbbccc is not palindrome", () => {
  expect(validPalindromeII("cbbccc")).toBe(false);
});