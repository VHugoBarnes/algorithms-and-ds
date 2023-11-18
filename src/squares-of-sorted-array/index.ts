export const squaresOfSortedArray = (nums: number[]) => {
  let squaredNums: number[] = [];

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    if ((nums[l] * nums[l]) > (nums[r] * nums[r])) {
      squaredNums.push(nums[l] * nums[l]);
      l += 1;
    } else {
      squaredNums.push(nums[r] * nums[r]);
      r -= 1;
    }
  }

  return squaredNums.reverse();
};