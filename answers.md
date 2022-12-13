- Who are you? What do you like building? -> I am krishnakumar node js backend developer with 4.3 years experience. 
- Do you own a PC and have a good internet
 connection? Let's hear those specs 💪! -> I have laptop and have a good internet connection.
- Your stackoverflow, linkedin, personal site.
Anything you'd want us to see.
- What programming languages have you messed around with? - PHP
- What sort of tooling is on your machine?
  - Programming languages, compilers, runtimes etc
  - What OS do you run? - ubuntu
  - What editor/IDE do you use? - VS code
- Are you more into front-end or back-end? (If you're
into web development). - backend
- Are you interested in AI/ML, Systems Programming
or anything outside your current domain. - devops (cloud services)
- What are you learning now? - angular and cloud services like..(aws, google clous)


//start 1 
function longestWord(str) {
    const wordArray = str.split(' ')
    
    const result = wordArray.sort(function(a, b) { return b.length - a.length; });
    
  return result[0];
}
let finaloutput = longestWord("The quick brown fox jumped over the lazy dog");


console.log(finaloutput,'finaloutput')
//end 1 

//start 2

const string = 'abc'
let result = ''
const times = 3

for (var i = 0; i < times; i++) {
     result += string; 
     
     }

console.log(result,'result')

//end 2 

// start 3

let array = [1, 20, 3, 1, 3, 3];

let uniqueArray = [];
array.forEach((element) => {
    if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
    }
});

console.log(uniqueChars);

//end 3


//start 4

const values =  [42, "everything", "", 2, false, "everything"];
const result = values.filter(val => val);
console.log(result);

//end 4

//start 5

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

console.log(truncateString('Absolute victory', 3))

//end 5

