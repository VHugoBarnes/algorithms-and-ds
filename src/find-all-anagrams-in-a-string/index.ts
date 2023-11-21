export const findAnagrams = (s: string, p: string): number[] => {
  if (p.length > s.length) return [];
  const pCount: Record<string, number> = {};
  const sCount: Record<string, number> = {};
  const res: number[] = [];

  // Initialize character counts for p and the first window in s
  for (let i = 0; i < p.length; i++) {
    pCount[p[i]] = (pCount[p[i]] || 0) + 1;
    sCount[s[i]] = (sCount[s[i]] || 0) + 1;
  }

  if (areCountsEqual(pCount, sCount)) {
    res.push(0);
  }

  // Slide the window over string s by one character at a time
  for (let i = 1; i <= s.length - p.length; i++) {
    const startChar = s[i - 1];
    const endChar = s[i + p.length - 1];
    sCount[endChar] = (sCount[endChar] || 0) + 1;
    sCount[startChar]--;

    if (sCount[startChar] === 0) {
      delete sCount[startChar];
    }

    if (areCountsEqual(pCount, sCount)) {
      res.push(i);
    }
  }

  return res;
}

function areCountsEqual(count1: Record<string, number>, count2: Record<string, number>): boolean {
  if (Object.keys(count1).length !== Object.keys(count2).length) {
    return false;
  }
  for (const key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }
  return true;
}
