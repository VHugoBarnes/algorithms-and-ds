# Valid Palindrome II

## Sentence
[Link to leetcode](https://leetcode.com/problems/valid-palindrome-ii/).

Given a string `s`, return true if the `s` can be palindrome after deleting at most one character from it.

Example 1:
> Input: `s = "aba"`   
> Output: `true`   

Example 2:
> Input: `s = "abca"`   
> Output: `true`   
> Explanation: You could delete the character `'c'`.   

Example 3:
> Input: `s = "abc"`   
> Output: `false`   

## Algorithm
Here we use the "two pointer" approach.

1. Create an aux variable to save the answer.   
2. Create two aux variables that are going to be having the two pointer positions.   
3. Create a loop that is going to finish when the right pointer is greater than the left pointer `r > l`.   
  - Inside the loop check if if the value of `s[l] === s[r]`.   
    - If it's true, add 1 to `l` and decrement `r`.   
    - If not, create a variable that removes the `s[l]` letter, same thing for `s[r]` letter.   
    - If the reverse of the string without `s[l]` is the same as the original string, then is a palindrome. Do the same thing for the string of `s[r]` letter.   
    - If they are not the same, then is not a palindrome.   