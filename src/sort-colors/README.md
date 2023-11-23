# Sort Colors

## Sentence
[Link to leetcode](https://leetcode.com/problems/sort-colors/).   

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.   

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.   

You must solve this problem without using the library's sort function.   

Example 1:   
> Input: nums = [2,0,2,1,1,0]   
> Output: [0,0,1,1,2,2]   

Example 2:   
> Input: nums = [2,0,1]   
> Output: [0,1,2]   


## Algorithm
1. Initialization:   
  - `rightPointer`: An index pointer starting at the end of the array.   
  - `leftPointer`: An index pointer starting at the beginning of the array.   
  - `iterator`: An index pointer used to iterate over the array.   
  - `swap`: A helper function to swap two elements in the array.   

2. Core Algorithm:   
  - The algorithm uses a variant of the Dutch national flag problem solution by Edsger W. Dijkstra.   
  - The while loop runs as long as the `iterator` is less than or equal to rightPointer. This ensures that the entire array is processed.   
  - Inside the loop, there are three cases based on the value at `nums[iterator]`:   
    - If `nums[iterator] === 0 (red)`:   
      - Swap the elements at `leftPointer` and `iterator`.   
      - Increment `leftPointer`. This effectively moves all reds (0s) to the start of the array.   
    - If `nums[iterator] === 2 (blue)`:   
      - Swap the elements at iterator and `rightPointer`.   
      - Decrement `rightPointer`. This moves blues (2s) to the end of the array.   
      - Decrement `iterator` to recheck the swapped element in the next iteration.   
    - If `nums[iterator] === 1 (white)`, the `iterator` just moves forward.   
  - Increment `iterator` at the end of the loop.   

3. How It Works:   
  - The algorithm segregates the array into three parts: reds (0s) at the beginning, whites (1s) in the middle, and blues (2s) at the end.   
  - The `leftPointer` marks the boundary of the reds and whites, and rightPointer marks the boundary of the whites and blues.   
  - The `iterator` moves through the array, swapping elements to ensure each color is in its correct place.   

4. Efficiency:   
  - This approach is efficient because it only requires a single pass through the array (O(n) time complexity) and does not use additional space (apart from the constant space for pointers and a temporary variable in the swap function).   

5. Return Value:   
  - After the loop completes, the array `nums` is sorted in-place, and the function returns this sorted array.