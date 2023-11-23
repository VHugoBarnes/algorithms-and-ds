# Reverse Vowels of a String

## Sentence
[Link to leetcode](https://leetcode.com/problems/reverse-vowels-of-a-string/).   

Given a string s, reverse only all the vowels in the string and return it.   

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.   

Example 1:   
> Input: `s = "hello"`   
> Output: `"holle"`   

Example 2:   
> Input: `s = "leetcode"`   
> Output: `"leotcede"`   

## Algorithm
Two pointer approach.   

1. Initialization:   
  - `stringArray`: The string `s` is converted into an array of characters to facilitate swapping.   
  - `leftPointer`: A pointer starting at the beginning of the array.   
  - `rightPointer`: A pointer starting at the end of the array.   
  - `vowels`: An object that acts as a set for easy lookup to check if a character is a vowel.   

2. Vowel Check Helper Function:   
  - `isVowel`: A helper function that takes a letter as input and returns `true` if it's a vowel (present in the vowels object), otherwise `false`.   

3. Core Algorithm:   
  - The `while` loop runs as long as `rightPointer` is greater than `leftPointer`.   
  - Inside the loop, the algorithm checks if the characters at both pointers are vowels:   
    - If both are vowels, it swaps them and then moves both pointers inward (incrementing `leftPointer` and decrementing `rightPointer`).   
    - If the character at `leftPointer` is not a vowel, it moves the `leftPointer` inward.    
    - Similarly, if the character at `rightPointer` is not a vowel, it moves the `rightPointer` inward.   
  - This process continues until the two pointers meet or cross each other.   

4. Reconstruction:   
  - After the loop, the modified `stringArray` (with vowels reversed) is joined back into a string using `join("")` and returned.   

5. Efficiency:   
   - This approach is efficient because it only requires a single pass through the string with a time complexity of O(n), where n is the length of the string. The space complexity is also O(n) due to the conversion of the string to an array.   