/* 
Remove falsy values
    If [42, "everything", "", 2, false, "everything"] is the input to your function, 
    it should return [42, "everything", 2, "everything"]
*/

function removeFalsy(arr) {
  for (let i = 0; i < arr.length; i++){
    if(!arr[i]){
      // console.log("false");
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(removeFalsy([42, "everything", "", 2, false, "everything"]));