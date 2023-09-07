# Information about Kiteretsu and his gadgets 🏜

- Introduction

I'm Pranav, a seasoned Software Engineer skilled in JavaScript, React, Redux, Java, and more. My keyboard is my trusted companion, and I derive immense satisfaction from creating applications with JavaScript, whether it's on the frontend or backend. While I'm well-versed in both, my true passion lies in frontend development. If you're in search of a team member who can blend technical prowess with a touch of humor, your quest could be at its conclusion.

- About my gadgets

I have a laptop with a good Internet broadband connection, and my machine's specifications are as follows:

  - Processor: Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz (2.71 GHz)
  - RAM: 8.00 GB
  - HDD: 1TB
  - OS: 64-bit Windows Operating System.

- Some links to my work profiles

<a href="https://portfolio-pranavwaykar.netlify.app/" target="blank"><img align="center" src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png" alt="portfolio-icon" height="40" width="40" /></a>
https://portfolio-pranavwaykar.netlify.app/


<a href="https://www.linkedin.com/in/pranavwaykar/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="linkedin-icon" height="35" width="35" /></a>
https://www.linkedin.com/in/pranavwaykar/

- Programming Langauge

  - JavaScript (and their frameworks as well)
  - C#
  - Java
  - SQL, MongoBD

- Tools

  - node, j2ee
  - Windows
  - VS code, Pycharm, Android Studio

- Preference

I'm comfortable working on both the sides, but if you ask me to choose one then it will be Frontend.

- Other tech Intrests

I'm a tech enthusiast who enjoys learning and can easily adapt to any technologies as required, so I can work as per the requirement

- Learning now

I'm learning Backend Technologies, for some personal project requirements.

# Codes

- Finding longest word

function findMaxWordLength(input) {
const words = input.split(/\s+|[,.;?!'"-]+/);
let longest = null;

for (let i = 0; i < words.length; i++) {
const checkerWord = words[i].toLowerCase();
if (checkerWord.trim() === '') continue;
if (!longest || checkerWord.length > longest.length) {
longest = words[i];
}
}
return longest || '';
}

- Repeat a String n times

function getRepeatedString(string, n) {
if (typeof string !== "string" || typeof n !== "number" || isNaN(n) || !isFinite(n) || n < 0) {
throw new Error("Invalid input");
}

if (n === 0) {
return "";
}

let repeatingStr = "";

for (let i = 0; i < n; i++) {
repeatingStr += string;
}

return repeatingStr;
}

- Remove duplicate in an array

function removeDuplicatesEle(input) {
if (!Array.isArray(input)) {
throw new Error("Input is not an array");
}

return [...new Set(input)];
}

- Remove falsy value

function removeFalsyValues(inputArray) {
return inputArray.filter(Boolean);
}

- Truncate a string

function truncateString(inputString, maxLength) {
return inputString.length <= maxLength ? inputString : inputString.slice(0, maxLength) + '...';
}
