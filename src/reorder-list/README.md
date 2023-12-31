# Reorder list

## Sentence
[Link to leetcode](https://leetcode.com/problems/reorder-list/).   

You are given the head of a singly linked-list. The list can be represented as:   

> L0 → L1 → … → Ln - 1 → Ln   

Reorder the list to be on the following form:   

> L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …   

You may not modify the values in the list's nodes. Only nodes themselves may be changed.   

Example 1:   
![Example #1](https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg)   
> Input: head = [1,2,3,4]   
> Output: [1,4,2,3]   

# Algorithm   
Use the slow and fast pointer approach, reverse the linked list from the middle to finish.