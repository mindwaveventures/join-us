/* 
Remove duplicates in an array
    If [1, 20, 3, 1, 3, 3] is the input to your function, it should return [1, 20, 3]
*/

function removeDups(arr) {
  let len = arr.length;
  for (let i = 0; i < arr.length; i++){

    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] === arr[j]){
        arr.splice(j, 1);
        j--;
        // console.log(arr)
      }
    }
  }
  return arr;
}

// console.log(removeDups([1, 20, 3, 1, 3, 3, 1, 20, 3, 1, 3, 3]));
console.log(removeDups([]));