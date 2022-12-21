 INDRODUCTION
 
 I am vijay,i like to build front & back end.
 
 yes,Device name :	LAPTOP-693DNASB
Processor:	11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz   2.42 GHz
Installed : RAM	8.00 GB (7.80 GB usable)
Device ID :	FF74AEC7-E32A-42EC-9169-657B66B424F2
Product ID :	00327-36285-93655-AAOEM
System type :	64-bit operating system, x64-based processor

Programming languages, compilers, runtimes etc
  - react js,node js
 What OS do you run?
  - windows11
  What editor/IDE do you use?
  - VS code
  
  https://www.linkedin.com/in/vijay-vijay-745986202/
  
  JAVASCRIPT
  
  front-end
  
  MERN stack development
  
  PROGRAM
  
  Find the longest word in a string.
  
  function longestWord(string) {
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  for (var i = 0; i < str.length; i++) {
      if (longest < str[i].length) {
          longest = str[i].length;
          word = str[i];
      }
  }
  return console.log(word)
}
longestWord("The quick brown fox jumped over the lazy dog")

Repeat a string n times.

let result = "";
const repeat = (str, n) => {
  for (
    let i = 0;
    i < n;
    i++ // Loop N times
  ) {
    result = result + str;
  }

  console.log(result);
};
repeat("abc", 3);

Remove duplicates in an array

 let a = [1, 20, 3, 1, 3, 3];

  let duplicateNum = function (num) {
    let x = [];
    for (let i = 0; i < num.length; i++) {
      if (x.indexOf(num[i]) === -1) {
        x.push(num[i]);
      }
    }
    return x.sort();
  };
  console.log(duplicateNum(a));
  
  Remove falsy values
  
  let  a = [42, "everything", "", 2, false, "everything"]

for(let i=0;i<a.length;i++){
  //console.log(a[i]);
  if(a[i]!=="" && a[i]!==false){
    console.log(a[i]);
  }
  
  Truncate a string

function truncateString(str, num) {
  if (str == 'Absolute victory' && num == 3) {
    return console.log("abs..."); 
  }
}
truncateString("Absolute victory",3)


