## Introductions

Answer 1 - Who are you? What do you like building?         <!-- Am J.SIVASANKAR (MERN) Full stack developer -->

Answer 2- Do you own a PC and have a good internet        <!--Yes i own PC with 5G internet connection-->
 connection? Let's hear those specs 💪!

Answer 3- Your stackoverflow, linkedin, personal site.    <!-- Its My Portfolio please check it      https://gregorious-swan-077c44.netlify.app/  -->
Anything you'd want us to see.                   

Answer 4- What programming languages have you messed around with?   <!--Python-->


Answer 5 - Programming languages, compilers, runtimes etc              <!--am a Pure JAVASCRIPT DEVELOPER -->

  - What OS do you run?          <!--Windows-->

  - What editor/IDE do you use?  <!--VS code-->

Answer 6- Are you more into front-end or back-end? (If you're
into web development).        <!--Back-End (NodeJS-ExpressJS)-->

Answer 7- Are you interested in AI/ML, Systems Programming
or anything outside your current domain.    <!--Always am excited learning New Techs so Definitely Yes-->

Answer 8- What are you learning now?    <!--React Native-->



## Let's hack!


<!-- Coding Question - 1  -->

- Find the longest word in a string.
  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

 <!-- Coding Answers - 1: -->

const givenString = `The quick brown fox jumped over the lazy dog`;

function  longestWord(givenString) {

  const enterWord = givenString.split(' ');
          <!--Sort the enterWord by length in descending order-->
  const sortedWord = enterWord.sort((a, b) => b.length - a.length);
  return sortedWord[0];
}

const answer1 = longestWord(givenString);
console.log(answer1);



<!-- Coding Question - 2 -->

- Repeat a string `n` times.
  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`

 <!-- Coding Answers - 2 -->

const str = "abc";
const n = 3;

  function repeatString(str, n) {
  return str.repeat(n);
}

const answer2 = repeatString(str, n);
console.log(answer2);

<!-- Coding Question - 3 -->
- Remove duplicates in an array
  - If `[1, 20, 3, 1, 3, 3]` is the input to your
  function, it should return `[1, 20, 3]`

<!-- Coding Answers - 3 -->

const givenArr = [1, 20, 3, 1, 3, 3];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const answer3 = removeDuplicates(givenArr);
console.log(answer3); 


<!-- Coding Question - 4 -->
 Remove falsy values
  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`

<!-- Coding Answers - 4 -->

const givenArr = [42, "everything", "", 2, false, "everything"];

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

const answer4 = removeFalsyValues(givenArr);
console.log(answer4); 

<!-- Coding Question - 5 -->
- Truncate a string
  - If `'Absolute victory'` and `3` are the inputs to
  your function, it should return `Abs...`

<!-- Coding Answers - 5 -->
const inputString = 'Absolute victory';
const maxLength = 3;

function truncateString(str, maxLength) {
  return str.length <= maxLength ? str : str.slice(0, maxLength) + '...';
}

const answer5 = truncateString(inputString, maxLength);
console.log(answer5); 
