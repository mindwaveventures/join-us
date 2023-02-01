/*
Truncate a string
  If 'Absolute victory' and 3 are the inputs to your function, it should return Abs...
*/

function truncStr(arr, count){
  if (!arr) return ;
  return arr.substring(0, count);
}

console.log(truncStr('Absolute victory', 3));