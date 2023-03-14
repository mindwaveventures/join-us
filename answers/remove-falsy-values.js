const removeFalsy = (arrData) => arrayData.filter(Boolean);
const arrayData = [42, "everything", "", 2, false, "everything"];
var result = removeFalsy(arrayData);

console.log("result", result);