export const searchInRotatedSortedArray = (nums: number[], target: number): number => {
  let l = 0;
  let r = nums.length - 1;
  let m;

  while (l <= r) {
    m = Math.floor(l + (r - l) / 2);
    const numM = nums[m];
    const numL = nums[l];
    const numR = nums[r];

    if (numM === target) {
      return m;
    }
    if (numL === target) {
      return l;
    }
    if (numR === target) {
      return r;
    }

    if (numM >= numL) {
      if (target >= numL && target < numM) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target <= numR && target > numM) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
}