export const trappingRainWater = (arr: number[]): number => {
  let acc = 0;
  let p1: null | number = null;
  let p2: null | number = null;
  let toSubstractAcc = 0;
  let prevAdd = 0;

  for (let i = 0; i < arr.length; i++) {
    const prevValue = arr[i - 1]
    const currValue = arr[i];
    const nextValue = arr[i + 1];

    // becomes pointer if is greater than next value
    if (currValue > (nextValue || 0) && (currValue > (prevValue || 0))) {
      // p1 is available
      if (p1 === null) {
        p1 = i;
      } else { // p2 is available, then perform calculations
        p2 = i;
        const pointer1Value = arr[p1];
        const pointer2Value = arr[p2];

        const smallestPointerValue = pointer1Value < pointer2Value ? pointer1Value : pointer2Value;
        const distanceBetweenPointer = (p2 - p1) - 1;

        const waterResult = smallestPointerValue * distanceBetweenPointer;
        const waterResultWithSubstractions = waterResult - toSubstractAcc - prevAdd;
        acc += waterResultWithSubstractions;

        if (pointer2Value < pointer1Value) {
          prevAdd = waterResult + pointer2Value;
        } else if (pointer2Value >= pointer1Value) {
          p1 = p2;
          prevAdd = 0;
        }

        p2 = null;
        toSubstractAcc = 0;
      }
    } else { // cant be a pointer so we add to `toSubstractAcc`
      toSubstractAcc = toSubstractAcc + currValue;
    }
  }

  return acc;
};