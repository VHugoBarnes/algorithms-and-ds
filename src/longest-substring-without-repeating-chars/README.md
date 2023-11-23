# Longest Substring Without Repeating Chars

## Sentence
[Link to leetcode](https://leetcode.com/problems/longest-substring-without-repeating-characters/).   

Given a string s, find the length of the longest substring without repeating characters.   

Example 1:   
> Input: `s = "abcabcbb"`   
> Output: `3`   
> Explanation: The answer is "abc", with the length of 3.

## Algorithm
Sliding Window approach.   

1. Initialization:   
  - `substring`: A hash map (object in JavaScript) to store the last index at which each character appears.   
  - `prevMaxValue`: Tracks the length of the longest substring found so far without repeating characters.   
  - `p1` and `p2`: Pointers representing the start and end of the current substring window, respectively.   
  
2. Sliding Window Algorithm:   
  - The algorithm uses a while loop to iterate through the string with `p2` (the end pointer of the current substring).   
  - For each character at index `p2`, it checks whether the character is already in the substring map (i.e., if it has appeared before in the current window).   

3. Handling Repeating Characters:   
  - If the character at `p2` is already in the map and its index is greater than or equal to `p1`, it indicates a repeating character in the current window.   
  - In this case, the algorithm updates prevMaxValue to the maximum of its current value and the length of the current window (`p2 - p1`).   
  - Then, it moves the start pointer p1 to one position after the last occurrence of the current character (`substring[char] + 1`).   
  - The character's last occurrence index is updated to `p2`, and `p2` is incremented.   

4. Handling Non-Repeating Characters:   
  - If the character at `p2` is not in the map or its last occurrence is before `p1`, it simply updates/records its last occurrence index in the map and increments `p2`.   

5. Final Calculation:   
  - After the loop completes, the function calculates the length of the substring from the last window (`p2 - p1`) and returns the maximum of this length and `prevMaxValue`.   

6. Efficiency:   
  - The solution is efficient with a time complexity of `O(n)`, where n is the length of the string. This is because each character is processed once.   
  - The space complexity is `O(min(m, n))`, where m is the size of the character set (since the map will store each unique character at most once). For most practical scenarios involving ASCII or Unicode, this will be `O(1)` or constant space.   