const getLongestWord = (string) => {
  var position = 0;
  var length = 0;
  let words = string.split(" ");

  words.map((a, i) => {
    if (a.length > length) {
      length = a.length;
      position = i;
    }
  });
  return words[position];
};

let string = "The quick brown fox jumped over the lazy dog";
console.log(getLongestWord(string));
