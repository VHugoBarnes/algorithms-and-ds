export const verifyingAlienDictionary = (words: string[], alphabet: string) => {
  let mappedAlphabet: { [key: string]: number } = {};

  //! O(n)
  // Convert alphabet to mapped object
  for (let i: number = 0; i < alphabet.length; i++) {
    mappedAlphabet[alphabet[i]] = i;
  }

  //! O(w)
  const compareTwoWords = (word1: string, word2: string) => {
    const minLenghtOfWord = Math.min(word1.length, word2.length)

    // Here we iteare just the min. because we don't care about the rest
    for (let i = 0; i < minLenghtOfWord; i++) {
      // We don't want to look in the alphabet if they are the
      // same because we cannot compare that
      if (word1[i] !== word2[i]) {
        // We look in the alphabet to compare it.
        // If word1 char is less than word2 char that means is ordered
        const word1Weight = mappedAlphabet[word1[i]];
        const word2Weight = mappedAlphabet[word2[i]];

        // words doesn't exist in alphabet
        if (word1Weight === undefined || word2Weight === undefined) {
          return false;
        }

        return word1Weight < word2Weight;
      }
    }

    // Here the loop finished and it found that the minimum characters are
    // the same, therefore, if word1 is greater than word2, that
    // means that is not the correct order
    return word1.length <= word2.length;
  }


  //! O(z)
  for (let i = 0; i < words.length - 1; i++) {
    // If we don't find a second word to compare
    // that means the array finished.
    if (words[i + 1] === undefined) return true;

    if (compareTwoWords(words[i], words[i + 1]) === false) {
      return false;
    }
  }

  return true;
};