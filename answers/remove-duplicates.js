const numberList = [1, 20, 3, 1, 3, 3];

const result = numberList.filter((c, index) => numberList.indexOf(c) === index);

console.log("result", result);