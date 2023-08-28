Who are you? What do you like building?

My name is Raj Mishra, I am a Developer currently working in wipro as a React Developer. I like building Single Page React Application which merely focuses on the Business and Business development zone ex- eCommerce Website, Fashion webpages.
Do you own a PC and have a good internet connection? Let's hear those specs 💪!

Yes, I own a PC which has a good internet connection whose specifications are 11th Gen Intel(R) Core(TM) i5-1145G7 @ 2.60GHz   2.61 GHz with 16GB of Ram installed in it.
Your stackoverflow, linkedin, personal site. Anything you'd want us to see.
My Github Profile is https://github.com/Raj1805 and my LinkedIn ID is - https://www.linkedin.com/in/raj-mishra-3197a9161
What programming languages have you messed around with?
There are multiple programming languages which i have messed up with, as i am from an ICSE background we were taught Java, then in Higher Secondary i took my additional subject as Informatics Practices there i had learned Java Netbeans, MySQL, HTML, CSS. Then, i have done my graduation in Information Technology as my Specialization where i learned Python, DBMS, Data Structures, Bootstrap. And, in my professional career i have messed up with Java J2EE, MySQL, Mendix, iOS Swift, Javascript, Node.js, React.js.
What sort of tooling is on your machine?
Redux tool kit in VS code, Github, Gitbash, Docker, Mendix.
Programming languages, compilers, runtimes etc
React.js, Node.js, Java j2ee, cmd, gitbash, Vs code. 
What OS do you run?
Windows 11
What editor/IDE do you use?
VS Code, eclipse.
Are you more into front-end or back-end? (If you're into web development).
65% Frontend, 35% backend.
Are you interested in AI/ML, Systems Programming or anything outside your current domain.
Yes, I am interested in AI/ML.
What are you learning now?
Currently I am Learning MERN Full stack and multiple AI tools which will benefit me in my Development.


//Longest Word

function findLongestWord(inputString) {
  const words = inputString.split(' ');
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const userInput = prompt("Enter a sentence:");
const longestWord = findLongestWord(userInput);
console.log("Longest word:", longestWord);

/// Remove Duplicates

function removeDuplicates(arr) {
  const uniqueArray = [];
 
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
 
  return uniqueArray;
}

const originalArray = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const arrayWithNoDuplicates = removeDuplicates(originalArray);

console.log(arrayWithNoDuplicates);

/// Remove Falsy Elements


function removeFalsyValues(arr) {
  return arr.filter(item => !!item);
}

const originalArray = [0, false, '', NaN, null, undefined, 'Hello', 42];
const arrayWithoutFalsyValues = removeFalsyValues(originalArray);

console.log(arrayWithoutFalsyValues); // Outputs: ['Hello', 42]


////// Truncate a String


function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
}

const inputString = "Absolute victory";
const maxLength = 3;
const truncatedString = truncateString(inputString, maxLength);

console.log(truncatedString); // Outputs: "Abs..."
