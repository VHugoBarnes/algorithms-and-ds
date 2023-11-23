# Max Consecutive Ones

## Sentence
[Link to leetcode](https://leetcode.com/problems/max-consecutive-ones-iii/).   

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.   

Example 1:   
> Input: `nums = [1,1,1,0,0,0,1,1,1,1,0]`, `k = 2`   
> Output: `6`   
> Explanation: `[1,1,1,0,0,**1**,1,1,1,1,**1**]`   
> Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.   

Example 2:   
> Input: `nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]`, `k = 3`   
> Output: `10`   
> Explanation: `[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]`   
> Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.   

## Algorithm
Sliding Window approach.   

1. Initialization:   
  - `i` (right pointer): Starts at the beginning of the array and moves rightwards.   
  - `j` (left pointer): Also starts at the beginning but moves rightwards only when a zero is flipped back.   
  - `k`: Represents the number of zeroes that can still be flipped to 1.   

2. Sliding Window Algorithm:   
  - The function uses a while loop to iterate through the array with the right pointer `i`.   
  - If the current element `nums[i]` is `0`, it decrements `k` as it represents flipping a zero to one.   
  - If `k` becomes negative, it indicates that more than `k` zeroes have been flipped. To correct this, the function moves the left pointer `j` rightwards until a flipped zero is encountered (indicated by `nums[j++] === 0`) and flips it back (incrementing `k`).   

3. Calculating the Maximum Length:   
  - The length of the current window (which is the difference between `i` and `j`) represents the maximum number of consecutive 1s that can be obtained by flipping at most `k` zeroes.   
  - As `i` increments with each iteration and `j` only moves when `k` becomes negative, the window size expands or shrinks to accommodate the condition of flipping at most `k` zeroes.   

4. Result:   
  - After the loop completes (when `i` reaches the end of the array), the function returns the size of the window (`i - j`), which is the maximum number of consecutive 1s achievable.   

5. Efficiency:   
  - The solution is efficient with a time complexity of O(n), where n is the length of the array. This is because it only requires a single pass through the array.   
  - The space complexity is O(1), as it uses fixed extra space for pointers and the counter `k`.   