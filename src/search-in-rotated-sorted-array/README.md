# Search in Rotated Sorted Array

## Sentence
[Link to leetcode](https://leetcode.com/problems/search-in-rotated-sorted-array/).   

There is an integer array nums sorted in ascending order (with distinct values).   

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index `k (1 <= k < nums.length)` such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.   

Given the array `nums` after the possible rotation and an integer target, return the index of target if it is in `nums`, or `-1` if it is not in `nums`.   

You must write an algorithm with `O(log n)` runtime complexity.   


Example 1:   
> Input: `nums = [4,5,6,7,0,1,2]`, `target = 0`   
> Output: `4`   

Example 2:   
> Input: `nums = [4,5,6,7,0,1,2]`, `target = 3`   
> Output: `-1`   

Example 3:   
> Input: `nums = [1]`, `target = 0`   
> Output: `-1`   

## Algorithm
This algorithm uses Binary search.   

1. Initialization:   
  - `l` (left pointer): Starts at the beginning of the array.   
  - `r` (right pointer): Starts at the end of the array.   
  - `m` (middle pointer): Will be used to hold the middle index of the current search space.   

2. Binary Search Algorithm:   
  - The `while` loop continues as long as `l` is less than or equal to `r`, indicating that the search space is not empty.   
  - Inside the loop, `m` is calculated as the floor of the average of `l` and `r`, identifying the middle element of the current search space.   
  - The function then checks if the middle element (`numM`), the left element (`numL`), or the right element (`numR`) is the target. If any of these is the target, its index is returned.   

3. Modified Binary Search Logic:   
  - The array is divided into two portions at the middle element. One of these portions must be sorted. The function determines which portion is sorted and whether the target lies within that sorted portion.   
  - If `numM` is greater than or equal to numL, the left portion is sorted. The function then checks if the target is between `numL` and `numM`. If so, the search space is adjusted to focus on the left portion by setting `r` to `m - 1`. Otherwise, the search space is shifted to the right portion by setting `l` to `m + 1`.   
  - If the left portion is not sorted, then the right portion must be sorted. The function then checks if the target is between `numM` and `numR`. If so, the search space is adjusted to focus on the right portion by setting `l` to `m + 1`. Otherwise, the search space is shifted to the left portion by setting `r` to `m - 1`.   

4. Termination:   
  - If the loop ends without finding the target, the function returns `-1`, indicating that the target is not in the array.   

5. Efficiency:   
  - This approach is efficient for a rotated sorted array, as it maintains the `O(log n)` complexity typical of binary search, despite the rotation. The key is in determining which part of the array is sorted and adjusting the search space accordingly.