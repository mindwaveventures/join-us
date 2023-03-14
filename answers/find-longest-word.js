const  findLongString = (str) => {
    const longestWord = str.split(' ').split(' ').reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
      }, "");
      return longestWord;
}
const result = findLongString('The quick brown fox jumped over the lazy dog');
console.log(result);