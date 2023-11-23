# Trapping Rain Water

## Sentence
[Link to leetcode](https://leetcode.com/problems/trapping-rain-water/).   

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.   

Example 1:   
![Example chart](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)   

> Input: `height = [0,1,0,2,1,0,1,3,2,1,2,1]`   
> Output: `6`   
> Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.   

Example 2:   
> Input: `height = [4,2,0,3,2,5]`   
> Output: `9`   


## Algorithm
This is a "two pointer" approach.   

1. Initialization:   
  - `water`: This variable will store the total amount of trapped rainwater.   
  - `ml` (Max Left): This variable keeps track of the maximum height from the left side of the array up to the current position.   
  - `mr` (Max Right): Similar to `ml`, but it keeps track of the maximum height from the right side.   
  - `pl` (Pointer Left): This is an index pointer starting from the left of the array.   
  - `pr` (Pointer Right): This is an index pointer starting from the right of the array.   
2. Core Algorithm:   
  - The `while` loop continues as long as pr is greater than pl. This means the loop runs until the two pointers meet or cross each other.   
  - Inside the loop, there are two conditions:   
  - If `ml` is less than `mr`:   
    - Increment `pl` to move the left pointer to the right.   
    - Update `ml` to be the maximum of its current value and the height at the new `pl` position.   
    - Calculate water trapped at `pl` by subtracting the height at `pl` from `ml` and add it to water.   
  - If `mr` is greater than or equal to `ml`:   
    - Decrement `pr` to move the right pointer to the left.   
    - Update `mr` to be the maximum of its current value and the height at the new `pr` position.   
    - Calculate water trapped at `pr` by subtracting the height at `pr` from `mr` and add it to water.   
3. How it Works:   
  - The idea is to move from both ends of the array towards the center.   
  - At each step, the algorithm calculates the water trapped at the current position based on the minimum of the two max heights (`ml` and `mr`) since water can only be trapped up to the lower of the two sides.   
  - The algorithm efficiently computes the trapped water without needing to process each element more than once.   
4. Return Value:   
  - After the loop completes, the function returns the total amount of trapped water calculated in the `water` variable.   

This approach is efficient and effective, especially for large arrays, as it has a time complexity of `O(n)`, where n is the number of elements in the input array. It only requires a single pass through the array with constant space usage, apart from the input array.   