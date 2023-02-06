const findLongestWord = (str) => {
    const longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }
  
  const result = findLongestWord("The quick brown fox jumped over the lazy dog");
  
  console.log("result", result)