const removeDuplicate = (arr) => {
  return Array.from(new Set(arr));
};

let arr = [1, 20, 3, 1, 3, 3];
console.log(removeDuplicate(arr));
