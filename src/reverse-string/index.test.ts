import { test, expect } from "vitest";
import { reverseString } from "./index";

test("reverses ['h','e','l','l','o']", () => {
  expect(reverseString(["h", "e", "l", "l", "o"])).toStrictEqual(["o", "l", "l", "e", "h"]);
});

test("reverses ['H','a','n','n','a','h']", () => {
  expect(reverseString(["H", "a", "n", "n", "a", "h"])).toStrictEqual(["h", "a", "n", "n", "a", "H"]);
});

test("reverses ['A','s','u','k','a']", () => {
  expect(reverseString(["A", "s", "u", "k", "a"])).toStrictEqual(["a", "k", "u", "s", "A"]);
})