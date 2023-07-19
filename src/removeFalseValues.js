// Function for removing the falsy values
function removeFalsyValues(arr) {
  const result = [];

  for (let each = 0; each < arr.length; each++) {
    if (arr[each]) {
      result.push(arr[each]);
    }
  }

  return result;
}

const input = [42, "everything", "", 2, false, "everything"];
const result = removeFalsyValues(input);
console.log(result);
