function removeDuplicates(arr){
      
    
    return Array.from(new Set(arr));
  
}
  
  var numbers = [1, 20, 3, 1, 3, 3];

  var uniqueNumbers = removeDuplicates(numbers);
  
  console.log(uniqueNumbers);
  