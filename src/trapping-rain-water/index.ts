export const trappingRainWater = (height: number[]): number => {
  let water = 0;

  let ml = height[0];
  let mr = height[height.length - 1];

  let pl = 0;
  let pr = height.length - 1;

  while (pr > pl) {
    if (ml < mr) {
      pl++;
      ml = Math.max(ml, height[pl]);
      water += ml - height[pl];
    } else {
      pr--;
      mr = Math.max(mr, height[pr]);
      water += mr - height[pr];
    }
  }

  return water;
};