
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
  let result = deleteDuplicates(values);
  console.log(result);

/* end Task */