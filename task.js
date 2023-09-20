
/*
Find the longest word in a string.
Given The quick brown fox jumped over the lazy dog is the input to your function, it should return jumped 
*/
let inputString = "The quick brown fox jumped over the lazy dog";
let words = inputString.split(' ');
maxlenth = 0;
maxvalues="";
for (let i = 0; i < words.length; i++) {
    if(maxlenth < words[i].length){
        maxlenth = words[i].length;
     maxvalues = words[i];
    }
}
console.log(maxvalues);




/*Repeat a string n times.
If abc and 3 are the arguments to your function, it shoudl return abcabcabc */
function repeatvalues(str, n) {
    return str.repeat(n);
  }
  let rewritestring = repeatvalues("abc", 3);
  console.log(rewritestring); 
/* end Task */


/* 
Remove duplicates in an array
If [1, 20, 3, 1, 3, 3] is the input to your function, it should return [1, 20, 3] 
*/
function deleteDuplicates(arr) {
    let uniArray = [];
    let valuejson = {};
    for (let i = 0; i < arr.length; i++) {
      if (!seen[arr[i]]) {
        uniArray.push(arr[i]);
        valuejson[arr[i]] = true;
      }
    }
    return uniqueArray;
  }
  let values = [1, 20, 3, 1, 3, 3];
  let results = deleteDuplicates(values);
  console.log(result);
/* end Task */

/*Remove falsy values
If [42, "everything", "", 2, false, "everything"] is the input to your function, it should return [42, "everything", 2, "everything" 
*/
  function removeValues(arr) {
    return arr.filter(Boolean);
  }
  let inputArray = [42, "everything", "", 2, false, "everything"];
  let resulte = removeValues(inputArray);
  console.log(result); 
  /* end Task */


  /*
  Truncate a string
  If 'Absolute victory' and 3 are the inputs to your function, it should return Abs...
  */
  function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str; 
    } else {
      return str.slice(0, maxLength) + '...'; 
    }
  }
  let givenString = 'Absolute victory';
  let maxLength = 3;
  let truncated = truncateString(inputString, maxLength);
  console.log(truncated); 
/* end Task */