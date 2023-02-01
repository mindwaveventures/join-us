/* 
Repeat a string n times.
    If abc and 3 are the arguments to your function, it shoudl return abcabcabc
*/

function repeatStr(str, count){
  if (count <= 0) return '';
  let resultStr = str;
  for(let i = 0; i < count - 1; i++){
    resultStr += str
  }
  return resultStr;
}

let str = 'abc'
console.log(repeatStr(str, 1));