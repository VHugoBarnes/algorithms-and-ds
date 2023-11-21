import { test, expect } from "vitest";
import { findAnagrams } from "./";

test("cbaebabacd and abc is [0,6]", () => {
  expect(findAnagrams("cbaebabacd", "abc")).toStrictEqual([0, 6]);
});