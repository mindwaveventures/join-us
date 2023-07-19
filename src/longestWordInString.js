function findLongestWordInString(str) {
  const words = str.split(" ");

  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i].replace(/[^a-zA-Z0-9]/g, "");

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}