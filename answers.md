Who are you? What do you like building?
 My name is Seenivasan, I like build the softwares.

Do you own a PC and have a good internet
 connection? Let's hear those specs 💪! - Yes

What programming languages have you messed around with?
 Few months back i worked with WebRTC for sample project. WebRTC would not have the proper documents.So it take two week to completed that sample project.

What sort of tooling is on your machine?
 - Angular, node, 
 - Windows
 - Vs code, Sublime text editor

Are you more into front-end or back-end?
 I'm flexible to working to both. I have working experience in angular, node, express, MongoDB, react.

Are you interested in AI/ML, Systems Programming
or anything outside your current domain.
 Yes i'm intrested to learn new thing. It also added advantage of my career too.

- Find the longest word in a string.
Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.
//Answer
let longestStr = ''
'The quick brown fox jumped over the lazy dog'.split(' ').forEach(v=> {
    if(v.length > longestStr.length) {
        longestStr = v
    }
});

console.log('longestStr', longestStr);

- Repeat a string `n` times.
  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`
//Answer
function repeat(str, n) {
    let repeatStr = ''
    for(let i=0; i<n; i++) {
        repeatStr += str;
    }
    
    return repeatStr;
}

console.log("repeat ==>", repeat('abc', 3))

- Remove duplicates in an array
  - If `[1, 20, 3, 1, 3, 3]` is the input to your
  function, it should return `[1, 20, 3]`
//Answer
let arr = [1, 20, 3, 1, 3, 3];
let removeDub = arr.filter((v, i)=> arr.indexOf(v) === i);
console.log('removeDub', removeDub)

- Remove falsy values
  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`
//Answer
let arr = [42, "everything", "", 2, false, "everything"];
let removeFalse = arr.filter((v, i)=> v);
console.log('removeFalse', removeFalse)


- Truncate a string
  - If `'Absolute victory'` and `3` are the inputs to
  your function, it should return `Abs...`
//Answer
function truncateStr(str, n) {
  return (str.length > n) ? str.slice(0, n) + '...' : str;

}

let resultStr = truncateStr("Absolute victory", 3);
console.log('resultStr', resultStr)


 
 