export const characterReplacement = (s: string, k: number): number => {
  const count: { [key: string]: number } = {};
  let response: number = 0;
  let p1 = 0;

  for (let p2 = 0; p2 < s.length; p2++) {
    count[s[p2]] = 1 + (count[s[p2]] ?? 0);

    while (((p2 - p1 + 1) - Math.max(...Object.values(count))) > k) {
      count[s[p1]] -= 1;
      p1 += 1;
    }

    response = Math.max(response, p2 - p1 + 1)
  }

  return response;
};