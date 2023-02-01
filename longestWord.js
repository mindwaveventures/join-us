/*
Find the longest word in a string.
  Given "The quick brown fox jumped over the lazy dog" is the input to your function, it should return jumped.
*/

function longestWord(str){
  let strLen = str.length;
  let preWordLen = 0;
  let currWordLen = 0;
  let wordIndex = 0;

  for (let i = 0; i < strLen; i++){
    if (str.charCodeAt(i) === 32 ) {
      if (currWordLen - 1 > preWordLen) {
        preWordLen = currWordLen - 1;
        wordIndex = i - preWordLen;
      }
      currWordLen = 0;
    }
    currWordLen++;
  }
  console.log(wordIndex, preWordLen);
  return str.substr(wordIndex, preWordLen);
}
// let inputStr = "The quick brown fox jumped over the lazy dog";
let inputStr = "The quick brown fox jumped over the lazy dog, Thequick brown fox jumped over the lazy dog";
console.log(longestWord(inputStr));

