function removeFalseValueArr(inputArr)
{
  let resultArr = [];
  if(inputArr.length !== 0) {
  for(let i = 0; i < inputArr.length; i++)
  {
    let curItem = inputArr[i];
    if(curItem)
      resultArr.push(curItem);
   }
  // return inputArr.filter((value) => Boolean(value)); 
  return resultArr;
  }
else
 return "The input Array is Empty";

}

const inputArr = [42, "everything", "", 2, false, "everything"];
const result = removeFalseValueArr(inputArr);
console.log(result); // [42, "everything", 2, "everything"]
