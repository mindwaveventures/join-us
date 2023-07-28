function truncateStr(strValue, maxCount) {
    if (strValue.length > maxCount) {
      let outputStr = "";
      for (let i = 0; i < maxCount; i++) {
        outputStr = outputStr + strValue[i];
      }
      //return strValue.slice(0, maxCount) + "...";
      return outputStr + "...";
    } else {
      return strValue;
    }
  }
  
  const inputStr = "Absolute victory";
  const resultStr = truncateStr(inputStr, 3);
  console.log(resultStr); // Abs...
