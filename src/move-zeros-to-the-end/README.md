# Move Zeros to the End

## Sentence
[Link to leetcode](https://leetcode.com/problems/move-zeroes/).   

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.    

Note that you must do this in-place without making a copy of the array.   

Example 1:   
> Input: `nums = [0,1,0,3,12]`   
> Output: `[1,3,12,0,0]`   

Example 2:   
> Input: `nums = [0]`   
> Output: `[0]`   

## Algorithm
Sliding Window approach.   

1. Initialization:   
  - `lastIndexWithZero`: Initialized to -1, this variable keeps track of the last index where a zero was found.   

2. Loop Through the Array:   
  - The function uses a for loop to iterate through each element of the `nums` array.   
  - `currentValue`: The value of the current element.   
  - `previousValue`: The value of the previous element, or `Number.NEGATIVE_INFINITY` if there is no previous element.   
  - `lastIndexWithZeroValue`: The value at the `lastIndexWithZero` index, or `Number.NEGATIVE_INFINITY` if lastIndexWithZero is `-1`.   

3. Identifying Zeroes:   
  - If the current value is `0` and the `lastIndexWithZeroValue` is not `0`, `lastIndexWithZero` is updated to the current index (`i`). This step marks the position of a zero that potentially needs to be swapped.   

4. Swapping Non-Zero with Zero:   
  - If the `previousValue` is `0` and the `currentValue` is not `0`, it indicates that a non-zero value has been found after a zero.   
  - The function then swaps the `currentValue` with the value at `lastIndexWithZero`. This effectively moves the zero to the current position and the non-zero value to the position of the last zero found.   
  - If after swapping, the `currentValue` (now at position `i`) is `0`, `lastIndexWithZero` is incremented by `1`.   

5. Result:   
  - The function continues this process for each element in the array, thereby pushing all zeros to the end.   
  - The original order of non-zero elements is preserved.   
  - The function returns the modified `nums` array.   

6. Example Analysis:   
For example, given `nums = [0,1,0,3,12]`, the function first finds the zero at index 0 and then swaps it with 1, then finds the next zero and swaps it with 3, and finally with 12. The result is `[1,3,12,0,0]`.   