# Squares of Sorted Array

## Sentence
[Link to leetcode](https://leetcode.com/problems/squares-of-a-sorted-array/).   

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.    

Example 1:   
> Input: `nums = [-4,-1,0,3,10]`   
> Output: `[0,1,9,16,100]`   
> Explanation: After squaring, the array becomes `[16,1,0,9,100]`.   
> After sorting, it becomes `[0,1,9,16,100]`.   

Example 2:   
> Input: `nums = [-7,-3,2,3,11]`   
> Output: `[4,9,9,49,121]`   

## Algorithm

1. Initialization:   
  - `squaredNums`: An array to store the squares of the elements in nums.   
  - `l` (left pointer): Starts at the beginning of the nums array.   
  - `r` (right pointer): Starts at the end of the nums array.   

2. Core Algorithm:   
  - The while loop runs as long as `l` is less than or equal to `r`. This means it processes elements from both ends of the array towards the middle.   
  - Inside the loop, there are two cases based on the comparison of the squares of the numbers at the `l` and `r` pointers:   
  - If the square of the number at the `l` pointer is greater than the square of the number at the `r` pointer, the square of the `l`-th number is added to `squaredNums`, and `l` is incremented.   
  - Otherwise, the square of the `r`-th number is added to `squaredNums`, and `r` is decremented.   
  - This approach ensures that the largest squares are added to `squaredNums` first.   

3. Final Step - Reverse:   
  - After the loop, the `squaredNums` array contains the squares in descending order (because the largest squares are added first).   
  - The function returns the reverse of `squaredNums`, which is the sorted array of squares in non-decreasing order.   

4. Why This Works:
  - The key insight in this problem is that the largest squares in a sorted array come from the numbers with the largest absolute values, which are found at either end of the sorted array.   
  - By comparing the squares of the numbers at both ends of the array and moving the pointers inward, the function efficiently builds the array of squares in descending order.   
  - The final reverse step reorders this array into non-decreasing order.   

5. Efficiency:   
  - This solution is efficient because it only requires a single pass through the array (`O(n)` time complexity) and uses `O(n)` extra space for the `squaredNums` array.   