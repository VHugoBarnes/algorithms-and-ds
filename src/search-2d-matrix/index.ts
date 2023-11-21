export const searchMatrix = (matrix: number[][], target: number): boolean => {
  let l = 0;
  let r = matrix.length - 1;

  while (l < r) {
    const m = Math.floor(l + (r - l));

    const firstElementL = matrix[l][0];
    const firstElementM = matrix[m][0];
    const firstElementR = matrix[r][0];

    if (target === firstElementL) return true;
    if (target === firstElementM) return true;
    if (target === firstElementR) return true;

    if (target < firstElementM) {
      r = m - 1;
    } else {
      l = m;
    }
  }
  const row = matrix[l];
  l = 0;
  r = row.length - 1;

  while (l <= r) {
    const m = Math.floor(l + (r - l));

    if (row[m] === target) {
      return true;
    }

    if (row[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return false;
};