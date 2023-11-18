export const sortColors = (nums: number[]): number[] => {
  let rightPointer = nums.length - 1;
  let leftPointer = 0;
  let iterator = 0;

  const swap = (i: number, j: number) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  while (iterator <= rightPointer) {
    if (nums[iterator] === 0) {
      swap(leftPointer, iterator);
      leftPointer += 1;
    } else if (nums[iterator] === 2) {
      swap(iterator, rightPointer);
      rightPointer -= 1;
      iterator -= 1;
    }
    iterator += 1;
  }

  return nums;
};