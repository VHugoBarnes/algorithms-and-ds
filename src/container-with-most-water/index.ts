export const containerWithMostWater = (heights: number[]): number => {
  let water: number = 0;

  let p1: number = 0;
  let p2: number = heights.length - 1;

  while (p2 > p1) {
    let currentWater: number = (p2 - p1) * (heights[p1] < heights[p2] ? heights[p1] : heights[p2]);

    if (currentWater > water) water = currentWater;

    // If values are the same, move the two pointer
    if (heights[p1] === heights[p2]) {
      p1 = p1 + 1; // move pointer #1 to the right
      p2 = p2 - 1; // move pointer #2 to the left;
    } else if (heights[p1] > heights[p2]) {
      p2 = p2 - 1; // move pointer #2 because is the least tall
    } else if (heights[p1] < heights[p2]) {
      p1 = p1 + 1; // move pointer #1 because is the least tall
    }
  }

  return water;
};