export const longestSubstringWithoutRepeatingChars = (s: string): number => {
  let substring: { [key: string]: number } = {};
  let prevMaxValue = 0;
  let p1 = 0;
  let p2 = 0;

  while (p2 < s.length) {
    const char = s[p2];

    if (substring[char] !== undefined) {
      if (substring[char] >= p1) {
        prevMaxValue = Math.max(prevMaxValue, (p2 - p1));

        p1 = substring[char] + 1;
        substring[char] = p2;
        p2++;
      } else {
        substring[char] = p2;
        p2++;
      }
    } else {
      substring[char] = p2;
      p2++;
    }
  }

  return Math.max(prevMaxValue, (p2 - p1));
};