Hi, Thank you for giving me a wonderful opportunity to explore my skills with these assigned tasks. Hereby I have attached my answers below.

1.  Find the longest word in a string.
```sh
function findLongestWord(str = '') {
    str = str?.trim()
    if (!str) return 'Please provide a string!'

    const words = str.split(' ')
    let longestWord = '';

    words.forEach(word => {
        if (word.length > longestWord.length) longestWord = word;
    })

    return longestWord;
}

const sentence = 'The quick brown fox jumped over the lazy dog'
console.log(findLongestWord(sentence)) // Ans:- jumped
```

2.  Repeat a string n times.
```sh
const repeatString = (str, n = 1) => str ? str.repeat(n) : 'Please provide a string!';

console.log(repeatString("abc", 3)) // Ans:- abcabcabc
```
3.  Remove duplicates in an array
```sh
const removeDuplicates = (Arr = []) => [...new Set(Arr)]

console.log(removeDuplicates([1, 20, 3, 1, 3, 3])) // Ans:- [ 1, 20, 3 ]
```
4.  Remove falsy values
```sh
const removeFalsyValues = (arr = []) => arr.filter(val => val);

console.log(removeFalsyValues([42, "everything", "", 2, false, "everything"])) // Ans:- [ 42, 'everything', 2, 'everything' ]
```
5.  Truncate a string
```sh
function truncateString(str = '', n = str.length) {
    if (str.length === n) return str
    return str.slice(0, n).concat('...')
};

console.log(truncateString('Absolute victory', 3)) // Ans:- Abs...
```

- Who are you? What do you like building?

- Do you own a PC and have a good internet connection? Let's hear those specs 💪!
    
- Your stackoverflow, linkedin, personal site. Anything you'd want us to see?

- What programming languages have you messed around with?

- What sort of tooling is on your machine?

- Programming languages, compilers, runtimes, etc.

- What OS do you run?

- What editor/IDE do you use?

- Are you more into front-end or back-end? (If you're into web development).

- Are you interested in AI/ML, Systems Programming, or anything outside your current domain?

- What are you learning now? 
