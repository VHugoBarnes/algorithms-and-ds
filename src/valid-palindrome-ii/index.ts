export const validPalindromeII = (s: string): boolean => {
  let isPalindrome = true;

  let l = 0;
  let r = s.length - 1;

  while (r > l) {
    if (s[l] === s[r]) {
      l += 1;
      r -= 1;
    } else {
      const removingLLetter = s.slice(l, l) + s.slice(l + 1);
      const removingRLetter = s.slice(0, r) + s.slice(r + 1);

      if ((removingLLetter.split("").reverse().join("") === removingLLetter) ||
        removingRLetter.split("").reverse().join("") === removingRLetter) {
        break;
      } else {
        isPalindrome = false;
        break;
      }
    }
  }

  return isPalindrome;
}