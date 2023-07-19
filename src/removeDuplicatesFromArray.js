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