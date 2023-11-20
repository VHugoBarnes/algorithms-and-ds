export const maxConsecutiveOnes = (nums: number[], k: number): number => {
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (nums[i] === 0) {
      k--;
    }
    if (k < 0 && nums[j++] === 0) {
      k++;
    }
    i++;
  }

  return i - j;
};