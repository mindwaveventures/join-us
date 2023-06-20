## My Introduction

1.  I'm Vinothkanna, and I have a passion for developing intricate applications using React.
2.  Yes, I own a laptop equipped with a Ryzen 5 processor, 16 GB of RAM, and a 1 TB SSD.
3.  [Stackoverflow](https://stackoverflow.com/users/5268008/vino-crazy), [Github](https://github.com/vinocrzy), [LinkedIn](https://www.linkedin.com/in/vinocrazy/)
4.  React.js, Node.js, Laravel (PHP)
5.  VScode, Github Desktop, Win11(OS), Docker Desktop, Android Studio, Figma
6.  I have a stronger inclination towards front-end development
7.  Yes
8.  DevOps (docker and kubernetes)

## My Answers

1.  Find the longest word in a string.

```js
function getLongestWord(str) {
  let words = str.split(" ");
  let longWord = words.reduce((longWord, pointer) => {
    return pointer.length > longWord.length ? pointer : longWord;
  });
  return longWord;
}

console.log({
  input: "The quick brown fox jumped over the lazy dog",
  output: getLongestWord("The quick brown fox jumped over the lazy dog"),
});
```

2.  Repeat a string `n` times.

```js
function repeatStringNumTimes(str, num) {
  return str.repeat(num);
}
console.log({
  input: "abc",
  output: repeatStringNumTimes("abc", 3),
});
```

3.  Remove duplicates in an array

```js
function removeDuplicate(arr) {
  let unique = arr.reduce(function (result, pointer) {
    if (!result.includes(pointer)) result.push(pointer);
    return result;
  }, []);
  return unique;
}

console.log({
  input: [1, 20, 3, 1, 3, 3],
  output: removeDuplicate([1, 20, 3, 1, 3, 3]),
});
```

4.  Remove falsy values

```js
let arr = [42, "everything", "", 2, false, "everything"];

console.log({
  input: arr,
  output: arr.filter((val) => val),
});
```

5.  Truncate a string

```js
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

let str = "Absolute victory";

console.log({
  input: str,
  output: truncateString(str, 3),
});
```
