function removeDuplicates(array) {
  var uniqueElements = [];

  for (var i = 0; i < array.length; i++) {
    if (uniqueElements.indexOf(array[i]) === -1) {
      uniqueElements.push(array[i]);
    }
  }
  
  return uniqueElements;
}


