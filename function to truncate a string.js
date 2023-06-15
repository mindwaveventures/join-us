function truncateString(str, maxLength){


    if(str.length <= maxLength){


    return str;
    
     }
    
      return str.slice(0, maxLength) + '...';
  }
  
  var inputString= 'Absolute victory';

  var maxLength = 3;

  var truncatedString = truncateString(inputString, maxLength);
  
  console.log(truncatedString);