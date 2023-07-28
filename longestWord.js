function findLongestWord(inputStr) {
    if (inputStr.length > 0) {
      let strArr = inputStr.split(' ');
      let longestStr = '';
      for (let i = 0; i < strArr.length; i++) {
        let curStr = strArr[i];
        if (curStr.length > longestStr.length) {
          longestStr = curStr;
        }
      }
      return longestStr;
    }
  }
  
  const inputTxt = "The quick brown fox jumped over the lazy dog";
  const findLongestStr = findLongestWord(inputTxt);
  console.log(findLongestStr); // Output: "jumped"