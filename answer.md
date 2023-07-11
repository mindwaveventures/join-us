Answer the givem question

Qusetion 01 -----> 
- Find the longest word in a string.
  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

  Answer below
--------------->
  function findLongestWord(str){
    const words = str.split(' ');
    let longestWord = '';

  for(let i=0;i<words.length;i++){
    if(words[i].length > longestWord.length){
        longestWord = words[i];
    }
  }
  return longestWord;
  }

  const input = "The quick brown fox jumped over the lazy dog";
  const longestWord = findLongestWord(input);
  <!-- console.log(longestWord); ---> jumped -->


Question 02 -------->
  - Repeat a string `n` times.
  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`


    Answer bellow
  ----------------->

  function repeatString(str,n){
    return str.repeat(n);
  }

    const string = "abc";
    const count = 3;
    const repeatstring = repeatString(string,count);
    <!-- console.log(repeatstring) ---> abcabcabc -->





Question 03 ------>
  - Remove duplicates in an array
  - If `[1, 20, 3, 1, 3, 3]` is the input to your function, it should return `[1, 20, 3]`


  Answer below
  --------------->

  function removeDuplicate(arr){
    return [...new Set(arr)];
  }

  const Array = [1, 20, 3, 1, 3, 3];
  const duplicatearray = removeDuplicate(Array);
  <!-- console.log(duplicatearray); ---->[1, 20, 3] -->



Question 04 ------->
  - Remove falsy values
  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`

  Answer below
 ---------------->
 
function removeFalseValue(arr){
  return arr.filter(Boolean);
}

const Arrays = [42, "everything", "", 2, false, "everything"]
const falsyarray = removeFalseValue(Arrays);
<!-- console.log(falsyarray); ----> [42, "everything", 2, "everything"] -->




Question 05 ------->
- Truncate a string
  - If `'Absolute victory'` and `3` are the inputs to
  your function, it should return `Abs...`

  Answer below
 ---------------->

 function truncateString(str,maxLength){
  if(str.length > maxLength){
    return str.slice(0,maxLength)+ "...";
  }
  return str;
 }

 const input = "Absolute victory";
 const truncate = truncateString(input,3);
 <!-- console.log(truncate); ---> Abs... -->






