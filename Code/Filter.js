const filterFalsy = (arr) => {
  return arr.filter((item) => item != "");
};

let arr = [42, "everything", "", 2, false, "everything"];
console.log(filterFalsy(arr));
