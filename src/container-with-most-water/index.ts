export const containerWithMostWater = (heights: number[]): number => {
  let water: number = -1;

  let h1: number = heights[0];
  let h1Index: number = 0;

  let h2: number = heights[1];
  let h2Index: number = 1;

  for (let i = 2; i < heights.length; i++) {
    const currentHeight = heights[i];

    const height1ToTake: number = h1 > h2 ? h1 : h1 === h2 ? h1 : h2;
    const height1IndexToTake: number = h1 > h2 ? h1Index : h1 === h2 ? h1Index : h2Index;

    const lowestHeight = height1ToTake > currentHeight ? currentHeight : height1ToTake;
    const currentWater = (i - height1IndexToTake) * lowestHeight;

    if (currentWater > water) {
      water = currentWater;

      if (height1IndexToTake === h2Index) {
        h1 = h2;
        h1Index = h2Index;
        h2 = currentHeight;
        h2Index = i;
      } else {
        h2 = currentHeight;
        h2Index = i;
      }
    }
  }

  return water;
};