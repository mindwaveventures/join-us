function calculateString(strValue, repeatCount) {
    let result = " ";
    if (repeatCount > 0) {
      for (let i = 0; i < repeatCount; i++)
        result = result + strValue;
    } else {
      // return strValue.repeat(repeatCount);  
      result = strValue;
    }
    return result;
  }
  
  const inputString = "abc";
  const count = 3;
  const resultString = calculateString(inputString, count);
  console.log(resultString); // abcabcabc