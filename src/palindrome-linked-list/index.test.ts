import { test, expect } from "vitest";
import { isPalindrome, ListNode } from "./";

test("it works", () => {
  expect(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))))).toBe(true);
});