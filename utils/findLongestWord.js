function findLongestWord(inputString) {
  const words = inputString.trim().split(" ");

  return words.reduce((prev, current) => {
    if (prev == null) {
      return current;
    }

    if (current.length > prev.length) {
      return current;
    }
    return prev;
  }, null);
}

module.exports = findLongestWord;
