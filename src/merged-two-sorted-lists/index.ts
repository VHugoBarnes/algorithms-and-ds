export const mergedTwoSortedLists = (nums1: number[], nums2: number[], m: number, n: number): number[] | false => {
  const joinArray: number[] = [];
  let i = 0; // index for nums1
  let j = 0; // index for nums2

  // Validations
  if (nums1.length !== (m + n)) return false;
  if (nums2.length !== n) return false;
  if (nums1.slice(n).every(num => num === 0) === false) return false;

  while (true) {
    // This means we don't have more numbers to check, so push all
    // the rest of numbers of nums2 to joinArray.
    if (nums1[i] === 0) {
      joinArray.push(...nums2.slice(j));
      break;
    }

    // nums1[i] is less than nums2 of current index,
    // push nums1[i] to join array.
    if (nums1[i] > nums2[j] === false) {
      joinArray.push(nums1[i]);
      i = i + 1;
    } else { // nums2 of current index is less than 
      joinArray.push(nums2[j]);
      j = j + 1;
    }
  }

  return joinArray;
};