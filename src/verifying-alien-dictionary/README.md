# Verifying Alien Dictionary

## Sentence
[Link to leetcode](https://leetcode.com/problems/verifying-an-alien-dictionary/).   
In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.   

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.   

Example 1:
> Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"   
> Output: true   
> Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.   

Example 2:
> Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"   
> Output: false   
> Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.   

Example 3:
> Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"   
> Output: false   
> Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).  

## Algorithm
1. Put in an object the alphabet order and assign a number to each letter.
   > something like `{a: 0, b:1, c:2}`.
2. Iterate over the array of words.
  - If there's only one item in the array that means is ordered.
  - Compare the current word with the next word.
    - First take the word with less characters and iterate over that amount of letters.
    - Inside the loop check if the `word1[i]` and `word2[i]` are different.
    - If they are different take the weight/value of the dictionary
    - If any of the letters doesn't exist return false
    - Finally, check if `word1[i]` weight is less than `word2[i]`, that means the letter #1 comes before letter #2
  - If the loop finished correctly return `true`