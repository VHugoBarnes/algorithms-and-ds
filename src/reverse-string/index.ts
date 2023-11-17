export const reverseString = (s: string[]): string[] => {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p2 > p1) {
    const p1Value = s[p1];
    const p2Value = s[p2];

    // swap
    s[p1] = p2Value;
    s[p2] = p1Value;

    p2--;
    p1++;
  }

  return s;
};