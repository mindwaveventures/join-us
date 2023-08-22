- Who are you? What do you like building?

* An enthusiastic software developer who is having the best intrest in software technologies with the futurstic goals who can play with the softwares to fullifill the passion about it.Like to build the e-commerce application and aiming to step into IoT AI.

- Do you own a PC and have a good internet
  connection? Let's hear those specs 💪!

* Yes i do have my own Pc which is thinkPad X1 and ood wifi connections of 100mb/sec of hathway
  Specs of my pc are 1TB SSD,core i5 8th Gen and harddisk of 1TB and Grapic card of 500Mb.

- Your stackoverflow, linkedin, personal site.
  Anything you'd want us to see.

* LinkedIn https://www.linkedin.com/in/kiran-v-6273a3165/
* GitHub https://github.com/Kiranvki?tab=repositories
* Portfolio https://kiran-v.netlify.app/

- What programming languages have you messed around with?

* HTML,CSS,Javascript,React Js,Node Js,Mongo Db

- What sort of tooling is on your machine?
  - Programming languages, compilers, runtimes etc
  - What OS do you run?
  - What editor/IDE do you use?

* Javascript,React Js,Nde Js
* Browsers and JavaScript Engines: Google crome
* Babel Transpilers
* windows 11
* Vs Code,Php Storme

- Are you more into front-end or back-end? (If you're
  into web development).

* Both

- Are you interested in AI/ML, Systems Programming
  or anything outside your current domain.

* yes for sure,Ready to dive into that

- What are you learning now?

* Advanced Javascript and advacned Node js.

## Let's hack!

- Find the longest word in a string.
  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

function longWord(str) {
let splitedWord = str.split(" ");
let longestWord = "";
let MaxLength = 0;

for (let i = 0; i < splitedWord.length; i++) {
let word = splitedWord[i]; //the will store in word in first loop

    if (word.length > MaxLength) {
      MaxLength = word.length;
      longestWord = word;
    }

}
return longestWord;
}

const str = "The quick brown fox jumped over the lazy dog";

const result = longWord(str);

console.log("result :>> ", result);


- Repeat a string `n` times.
  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`

function repeatString(n, str) {

let tempWord = "";

for (let i = 0; i < n; i++) {
tempWord += str;
}
return tempWord;
}

const n = 3;
const str = "abc";
const result = repeatString(n, str);

console.log("repeatString :>> ", result);

- Remove duplicates in an array
  - If `[1, 20, 3, 1, 3, 3]` is the input to your
    function, it should return `[1, 20, 3]`

function duplicateArr(arr){
let dupArr=[];

    for(let i=0;i<arr.length-1;i++){
        let duplicate=false;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==dupArr[j]){
                duplicate=true;
                break;

            }

        }
        if(!duplicate){
            dupArr.push(arr[i])
        }

    }
    return dupArr

}

const arr = [1, 20, 3, 1, 3, 3] ;

const result3 = duplicateArr(arr);

console.log("duplicateArr :>> ", result3);

- Remove falsy values
  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`

function falseValue(arr) {
let treuValue = [];
for (let i = 0; i < arr.length; i++) {
let isTrue = false;

    if (typeof arr[i] === "number" || typeof arr[i] === "string" && arr[i]!=="") {
      treuValue.push(arr[i])
    }

}
return treuValue;
}
const arr2 = [42, "everything", "", 2, false, "everything"];
const result4 = falseValue(arr2);

console.log("falseValue :>> ", result4);

- Truncate a string

  - If `'Absolute victory'` and `3` are the inputs to
    your function, it should return `Abs...`

  function falseValue(arr) {
  let treuValue = [];
  for (let i = 0; i < arr.length; i++) {
  let isTrue = false;

      if (typeof arr[i] === "number" || typeof arr[i] === "string" && arr[i]!=="") {
        treuValue.push(arr[i])
      }

  }
  return treuValue;
  }
  const arr2 = [42, "everything", "", 2, false, "everything"];
  const result4 = falseValue(arr2);

console.log("falseValue :>> ", result4);
