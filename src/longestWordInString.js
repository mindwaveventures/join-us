//Function for finding the longest word in string
function findLongestWordInString(str) {
  // Splitting the string into array of words
  const words = str.split(" ");

  // Variable Initialization
  let longestWord = "";

  // Iterating each word in the array
  for (let i = 0; i < words.length; i++) {
    // Removing any non-alphanumeric characters from the word
    const word = words[i].replace(/[^a-zA-Z0-9]/g, "");

    // If the current word is longer than the previous longest word, update the longest word
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}