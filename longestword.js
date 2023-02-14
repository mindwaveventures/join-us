function findLongest(str) {
   
    const splStrArray = str.split(" ");
  
   
    const lengthofStringArray = splStrArray.map(item => item.length);

    const maxLengthinArr = Math.max(...lengthofStringArray);
   
    const result = splStrArray.find(item => item.length === maxLengthinArr);
    return result;
  }
  findLongest("The quick brown fox jumped over the lazy dog");