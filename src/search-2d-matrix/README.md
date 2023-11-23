# Search 2D Matrix

## Sentence
[Link to leetcode](https://leetcode.com/problems/search-a-2d-matrix/).   
You are given an m x n integer matrix matrix with the following two properties:   

Each row is sorted in non-decreasing order.    
The first integer of each row is greater than the last integer of the previous row.   
Given an integer target, return true if target is in matrix or false otherwise.   

You must write a solution in O(log(m * n)) time complexity.   

Example 1:
![Example #1](https://assets.leetcode.com/uploads/2020/10/05/mat.jpg)   
> Input: `matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]`, `target = 3`   
> Output: `true`   

Example 2:
![Example #2](https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg)  
> Input: `matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]`, `target = 13`   
> Output: `false`   


## Algorithm

### Phase 1: Finding the Correct Row   
1. Initialization:   
  - `l` (left pointer): Starts at the beginning row index `(0)`.   
  - `r` (right pointer): Starts at the end row index `(matrix.length - 1)`.   

2. Binary Search for Row:   
  - A binary search is used to identify the row that may contain the target.   
  - In each iteration, `m` (middle pointer) is calculated as the middle row index between `l` and `r`.   
  - The function checks if the target is equal to the first element of the rows at indices `l`, `m`, or `r`. If so, it returns `true`.   
  - If the target is less than the first element of the middle row (`firstElementM`), the search space is narrowed to rows before m by setting `r` to `m - 1`.   
  - If the target is greater, the search space is narrowed to rows after or including m by setting `l` to `m`.   

### Phase 2: Searching the Identified Row
1. Row Identification:   
  - After the first phase, `l` should point to the row that potentially contains the target. This row is assigned to `row`.   

2. Binary Search in Row:   
  - A second binary search is conducted within the identified row.   
  - `l` and `r` are reinitialized to point to the start and end indices of the row.   
  - The middle element of the row is compared to the target in each iteration.   
  - If the middle element is equal to the target, the function returns `true`.   
  - If the middle element is less than the target, `l` is updated to m` + 1`; if greater, `r` is updated to `m - 1`.   

3. Result:   
  - If the target is found during either phase of the search, the function returns `true`.   
  - If the target is not found by the end of the second phase, the function returns `false`.   

### Efficiency
This approach is efficient for searching in a 2D matrix as it uses binary search twice: first to find the correct row, and then to search within that row.   
The time complexity is O(log m + log n), where m is the number of rows and n is the number of columns in the matrix.    