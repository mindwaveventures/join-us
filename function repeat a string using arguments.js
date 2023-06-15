function repeatString(str, n){
    var repeatedString = '';


    for(var i = 0; i < n; i++){
      repeatedString += str;

    }


    return repeatedString;


  }


  
  var inputString = 'abc';

  var repeatCount= 3;

  var repeatedString = repeatString(inputString, repeatCount);
  
  console.log(repeatedString);
  