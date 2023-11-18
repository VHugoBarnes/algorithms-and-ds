export const reverseVowelsOfAString = (s: string): string => {
  let stringArray: string[] = s.split("");
  let leftPointer = 0;
  let rightPointer = stringArray.length - 1;

  const vowels: { [key: string]: string } = { "a": "a", "e": "e", "i": "i", "o": "o", "u": "u", "A": "A", "E": "E", "I": "I", "O": "O", "U": "U" };

  const isVowel = (letter: string): boolean => {
    return vowels[letter] === undefined ? false : true;
  };


  while (rightPointer > leftPointer) {
    // swap
    if (isVowel(stringArray[leftPointer]) && isVowel(stringArray[rightPointer])) {
      const temp = stringArray[leftPointer];
      stringArray[leftPointer] = stringArray[rightPointer];
      stringArray[rightPointer] = temp;

      leftPointer += 1;
      rightPointer -= 1;
    } else {
      if (isVowel(stringArray[leftPointer]) === false) { // move pointer
        leftPointer += 1;
      }

      if (isVowel(stringArray[rightPointer]) === false) { // move pointer
        rightPointer -= 1;
      }
    }

  }


  return stringArray.join("");
};