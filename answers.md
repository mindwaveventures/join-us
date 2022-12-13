## Introductions

- Who are you? What do you like building?
     
- Do you own a PC and have a good internet connection? Let's hear those specs 💪!

  Don't have PC and laptop But i have good internet
- Your stackoverflow, linkedin, personal site.
Anything you'd want us to see. 

  https://stackoverflow.com/users/10814369/muralidharan-c
  https://www.linkedin.com/in/muralidharan-chinnasamy-086a86127/


- What programming languages have you messed around with?

     javascript, typescript and python
- What sort of tooling is on your machine?
  - Programming languages, compilers, runtimes etc
  - What OS do you run?
    windows and ubuntu

  - What editor/IDE do you use?
      1) visual studio
      2) intellij ide
      3) Notepad++
      4)Sublime3

- Are you more into front-end or back-end? (If you're
into web development).

 backend engineer (4.8 years exp) - more comfortable 
 Frontend engineer (2.7 years exp)

- Are you interested in AI/ML, Systems Programming
or anything outside your current domain.

 yes, i'm interested in AI and ML 

- What are you learning now?

 learning python and machine learning 


****************************************************************


// Find the longest word in a string.
// Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.
  
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = strSplit.sort(function (a, b) {
        return b.length - a.length;
    });
    return longestWord[0];
}
const string = "The quick brown fox jumped over the lazy dog"
findLongestWord(string);


// Repeat a string `n` times.
function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string; 
      times--;
    }
  
    return repeatedString;
  }
  const stringOne = "abc";
  console.log(repeatStringNumTimes(stringOne, 3));



//   Remove duplicates in an array

let chars = [1, 20, 3, 1, 3, 3];
let uniqueChars = chars.filter((element, index) => {
    return chars.indexOf(element) === index;
});
console.log(uniqueChars);


// Remove falsy values

const arr = [42, "everything", "", 2, false, "everything"]
console.log(arr.filter((value)=> !!value))


// Truncate a string
const limit = (string, length, end = "...") => {
    return string.length < length ? string : string.substring(0, length) + end
}

console.log(limit('Absolute victory', 3) )


> __நன்றி!__ 🙏