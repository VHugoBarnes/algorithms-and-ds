export const intervalLiostIntersections = (firstList: number[][], secondList: number[][]): number[][] => {
  const intersections: number[][] = []

  if (firstList.length === 0) return intersections;
  if (secondList.length === 0) return intersections;

  let i: number = 0; // first list pointer
  let j: number = 0; // second list pointer
  let x: "i" | "j"; // used to use list not selected as base
  let base: number; // number to select as the base of the intersection

  while (i < firstList.length && j < secondList.length) {
    let itemI = firstList[i];
    let itemJ = secondList[j];

    if (itemI[0] > itemJ[0]) {
      base = itemI[0];
      x = "j";
    } else {
      base = itemJ[0];
      x = "i";
    }

    const maxX = x === "i" ? itemI[1] : itemJ[1];
    if (base < maxX) {
      if (itemJ[1] < itemI[1]) {
        intersections.push([base, itemJ[1]]);
        j++;
      } else {
        intersections.push([base, itemI[1]]);
        i++;
      }
    } else {
      if (base === maxX) {
        intersections.push([base, maxX]);
      }
      x === "i" ? i++ : j++;
    }


  }

  return intersections;
};