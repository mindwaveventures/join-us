function removeDuplicateArr(arrList) {
    let originalList = [];
    for (let i = 0; i < arrList.length; i++) {
      let curValue = arrList[i];
      if (!originalList.includes(curValue)) {
        originalList.push(curValue);
      }
    }
    return originalList;
  }
  
  const arrDuplicate = [1, 20, 3, 1, 3, 3];
  const result = removeDuplicateArr(arrDuplicate);
  console.log(result); //  [1, 20, 3]