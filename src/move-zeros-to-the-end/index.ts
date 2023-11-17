export const moveZerosToTheEnd = (nums: number[]): number[] => {
  let lastIndexWithZero = -1;

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const previousValue = (nums[i - 1] ?? Number.NEGATIVE_INFINITY);
    const lastIndexWithZeroValue = nums[lastIndexWithZero] ?? Number.NEGATIVE_INFINITY;

    if (nums[i] === 0 && lastIndexWithZeroValue !== 0) {
      lastIndexWithZero = i;
    }

    if (previousValue === 0 && currentValue !== 0) {
      nums[i] = nums[lastIndexWithZero];
      nums[lastIndexWithZero] = currentValue;

      if (nums[i] === 0) {
        lastIndexWithZero = lastIndexWithZero + 1;
      }
    }
  }

  return nums;
}