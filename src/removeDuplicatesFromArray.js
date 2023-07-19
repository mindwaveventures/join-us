// Function for removing duplicates in an Array
function removeDuplicates(array) {
  var uniqueElements = [];

// Iterate the input array and check if the element already exisits
  for (var i = 0; i < array.length; i++) {
    if (uniqueElements.indexOf(array[i]) === -1) {
      uniqueElements.push(array[i]);
    }
  }
  
  return uniqueElements;
}

var inputArray = [1, 20, 3, 1, 3, 3];
var resultArray = removeDuplicates(inputArray);
console.log(resultArray); // Output: [1, 20, 3]