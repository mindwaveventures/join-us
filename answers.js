// Who are you? What do you like building
// I'm Gomathi sankar, I have 4 years experience in react and react native and 1 year experience in node

//Do you own a PC and have a good internet connection? Let's hear those specs
// No I dont have

//Your stackoverflow, linkedin, personal site. Anything you'd want us to see
// Linked in - https://www.linkedin.com/in/sankar-ag-522566122/
// Github - https://github.com/sankar9659

// What programming languages have you messed around with?
// I have 4 years experience in react and react native and 1 year experience in node

// Are you more into front-end or back-end? (If you're into web development).
// Front-end and back-end

//Are you interested in AI/ML, Systems Programming or anything outside your current domain.
// Yes
// What are you learning now?
// Blockchain


// 1. Find the longest word in a string.
function getLongestWord(str) {
    let b = str.split(" ")
    let c = 0
    let res = ""
    for (var i = 0; i < b.length; i++) {
        if (b[i].length > c) {
            c = b[i].length
            res = b[i]
        }
    }
    return res
}
let str = "The quick brown fox jumped over the lazy dog"
let resp = getLongestWord(str)
console.log('longest word is', resp);


//2. Repeat a string n times
function repeatStr(data, val) {
    let y = ""
    for (var j = 0; j < val; j++) {
        y = y + data
    }
    return y
}
let x = "abc"
let repeat = 3
console.log("repeated word is", repeatStr(x, repeat));


// 3. remove duplicates from array
let arr = [1, 20, 3, 1, 3, 3]

// method 1
console.log('duplicates', [...new Set(arr)]);

// method 2
let res1 = arr.filter((data, i) => {
    return arr.indexOf(data) === i
})
console.log('duplicates 1', res1);

// method 3
let temp = []
arr.map((data, key) => {
    if (!temp.includes(data)) {
        temp = [...temp, data]
    }
})

console.log('duplicates 2', temp);


// 4. Remove falsy values
function removeFalseVal(data) {
    return data.filter(val => val)
}
let s = [42, "everything", "", 2, false, "everything"]
console.log('True values', removeFalseVal(s));


//5. Truncate a string

function TruncateString(myString, length) {
    return `${myString.substring(0, length)}...`;
}
var length = 3;
var strVal = "Absolute victory";
console.log("truncated string", TruncateString(strVal, length));
