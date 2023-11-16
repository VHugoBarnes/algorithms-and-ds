import { test, expect } from "vitest";
import { mergedTwoSortedLists } from "./";

test("Merged two sorted lists correctly #1", () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const nums2 = [2, 5, 6];
  const m = 3;
  const n = 3;

  expect(mergedTwoSortedLists(nums1, nums2, m, n)).toStrictEqual([1, 2, 2, 3, 5, 6]);
});

test("Merged two sorted lists correctly #2", () => {
  const nums1 = [1, 20, 40, 0, 0, 0];
  const nums2 = [2, 5, 6];
  const m = 3;
  const n = 3;

  expect(mergedTwoSortedLists(nums1, nums2, m, n)).toStrictEqual([1, 2, 5, 6, 20, 40]);
});

test("Merged two sorted lists correctly #2", () => {
  const nums1 = [0, 0, 0];
  const nums2 = [2, 5, 6];
  const m = 0;
  const n = 3;

  expect(mergedTwoSortedLists(nums1, nums2, m, n)).toStrictEqual([2, 5, 6]);
});

test("Merged two sorted lists correctly #2", () => {
  const nums1 = [0, 0, 0];
  const nums2: number[] = [];
  const m = 3;
  const n = 0;

  expect(mergedTwoSortedLists(nums1, nums2, m, n)).toStrictEqual([]);
});

/**
 * nums1 = [1, 2, 3, 0, 0, 0]
 * m = 3
 * 
 * nums2 = [2, 5, 6]
 * n = 3
 * 
 * Result ---> [1, 2, 2, 3, 5, 6]
 * 
 * -------------------------------------------------
 * 
 * [1, 2, 3, 0, 0, 0]
 * [2, 5, 6]
 * 
 * o   t
 * 1 > 2 = false ---> Insert `o` number to array
 * 2 > 2 = false ---> Insert `o` number to array
 * 3 > 2 = true  ---> Insert `t` number to array
 * 3 > 5 = false ---> Insert `o` number to array
 * 0 > 5 ---> If `o` is 0 we insert the rest of the `t` array
 */