
// Find the longest word in a string.
// Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.
  
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = strSplit.sort(function (a, b) {
        return b.length - a.length;
    });
    return longestWord[0];
}
const string = "The quick brown fox jumped over the lazy dog"
findLongestWord(string);


// Repeat a string `n` times.
function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string; 
      times--;
    }
  
    return repeatedString;
  }
  const stringOne = "abc";
  console.log(repeatStringNumTimes(stringOne, 3));



//   Remove duplicates in an array

let chars = [1, 20, 3, 1, 3, 3];
let uniqueChars = chars.filter((element, index) => {
    return chars.indexOf(element) === index;
});
console.log(uniqueChars);


// Remove falsy values

const arr = [42, "everything", "", 2, false, "everything"]
console.log(arr.filter((value)=> !!value))


// Truncate a string
const limit = (string, length, end = "...") => {
    return string.length < length ? string : string.substring(0, length) + end
}

console.log(limit('Absolute victory', 3) )