
## who are you? What do you like building? 
Hello, I'm Sachinkumar M M, and I'm a MERN stack developer with over 2 years of hands-on experience in building web applications. I specialize in creating dynamic and responsive user interfaces using React for the front end and Node.js and Express.js for the server side. With a strong background in MongoDB, I've designed and maintained databases that efficiently store and retrieve data.

During my career, I've had the opportunity to work on a variety of projects, from e-commerce platforms to social networking applications, where I've leveraged my skills in both front-end and back-end development to create seamless user experiences.

I'm enthusiastic about staying updated with the latest web development trends and technologies, and I'm always eager to take on new challenges in the ever-evolving world of web development. In my free time, I enjoy contributing to open-source projects and experimenting with emerging technologies.

## Do you own a PC and have a good internet connection? Let's hear those specs 💪!
Yes I have own laptop and good internet connection.


## Your stackoverflow, linkedin, personal site.Anything you'd want us to see.
Linkdin: https://www.linkedin.com/in/sachin-m-m
Github: https://github.com/sachinkumar-m-m

## What programming languages have you messed around with?
languages: Javascript, React.js, Node.js,

## What sort of tooling is on your machine?
  Javascript,React Js,Nde Js
  Browsers and JavaScript Engines: Google crome
  Babel Transpilers
  windows 11
  Vs Code,Php Storme, PostMan

##  Are you more into front-end or back-end? (If you'reinto web development).
 back-end.

## Are you interested in AI/ML, Systems Programming or anything outside your current domain.
yes for sure.

## What are you learning now?
Advanced Javascript and advacned Node js.

## /*..........Find the longest word in a string......................*/

  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

  function findLongestWord(str){
    let words = str.split(" ");
    let longestWord = "";
    for(let i=0; i<words.length;i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i]
        }
    }
    return longestWord
    
}
let str = "The quick brown fox jumped over the lazy dog"
console.log(findLongestWord(str));

## /*........... Repeat a string `n` times ..........................*/

  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`

  function repeatString(str,n){
   let repeat = ""
   for(let i=0; i < n; i++){
    repeat += str
   }
   return repeat
}
let str = "abc"
let n = 3
console.log(repeatString(str,n));

## /*................Remove duplicates in an array.....................*/

  - If `[1, 20, 3, 1, 3, 3]` is the input to your
  function, it should return `[1, 20, 3]`
function removeDublicate(num) {
    let dublicate = [];
    for (let i = 0; i < num.length; i++) {
        if (!dublicate.includes(num[i])) {
            dublicate.push(num[i])
        }
    }
    return dublicate
}
let num = [1, 20, 3, 1, 3, 3]
console.log(removeDublicate(num));


## /*.................Remove falsy values..............................*/
- 
  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`
function removeFalsyValue(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i]) {
            result.push(arr[i])
        }
    }
    return result
}
let arr = [42, "everything", "", 2, false, "everything"]
console.log(removeFalsyValue(arr));


  ## /*...................Truncate a string.............................*/

  - If `'Absolute victory'` and `3` are the inputs to
  your function, it should return `Abs...`

  function truncateStr(str, n) {
    let truncated = "";
    for (let i = 0; i < n; i++) {
        truncated += str[i];
    }
    return truncated;
}

const n = 3;
const str = "Absolute victory";
console.log(truncateStr(str, n));