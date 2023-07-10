const { log } = console

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

const repeatString = (string, n = 1) => string ? string.repeat(n) : 'Please provide a string!';

const removeDuplicates = (Arr = []) => [...new Set(Arr)]

const removeFalsyValues = (arr = []) => arr.filter(val => val);

function truncateString(str = '', n = str.length) {
    if (str.length === n) return str
    return str.slice(0, n).concat('...')
};

// 1. Find the longest word in a string.
const sentence = 'The quick brown fox jumped over the lazy dog'
log(findLongestWord(sentence))

// 2. Repeat a string n times
log(repeatString("abc", 3))

// 3. Remove duplicates in an array
log(removeDuplicates([1, 20, 3, 1, 3, 3]))

// 4. Remove falsy values
log(removeFalsyValues([42, "everything", "", 2, false, "everything"]))

// 5. Truncate a string
log(truncateString('Absolute victory', 3))