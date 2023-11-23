# Reverse String

## Sentence
[Link to leetcode](https://leetcode.com/problems/reverse-string/).   

Write a function that reverses a string. The input string is given as an array of characters s.   

You must do this by modifying the input array in-place with O(1) extra memory.   

Example 1:   
> Input: `s = ["h","e","l","l","o"]`   
> Output: `["o","l","l","e","h"]`   

Example 2:   
> Input: `s = ["H","a","n","n","a","h"]`   
> Output: `["h","a","n","n","a","H"]`   

## Algorithm
It uses the Two pointer approach.   

1. Initialization:   
  - `p1` (pointer 1): Starts at the beginning of the array (index 0).   
  - `p2` (pointer 2): Starts at the end of the array (`s.length - 1`).   

2. Core Algorithm:   
  - The `while` loop continues as long as `p2` is greater than `p1`.   
  - Inside the loop, the characters at `p1` and `p2` are swapped.   
  - The `p1` pointer is then incremented (moved right), and the `p2` pointer is decremented (moved left).   
  - This swapping continues, moving the pointers toward the center of the array.   

3. Swapping Mechanism:   
  - `p1Value` and `p2Value` temporarily store the characters at the p1 and p2 indices, respectively.   
  - The values at these indices are then swapped: `s[p1]` is set to `p2Value`, and `s[p2]` is set to `p1Value`.   

4. Termination and Output:   
  - The loop ends when `p2` and `p1` meet or cross each other, which means the entire string has been reversed.   
  - The function returns the modified array `s`, which now contains the characters in reverse order.   

5. Efficiency:   
  - This solution is efficient with a time complexity of O(n/2), which simplifies to O(n), where n is the number of elements in the array. This is because each element is visited only once during the swapping process.   
  - The space complexity is O(1), as the reversal is done in-place without using extra space proportional to the input size.   