# `Hello World!`

## About Me

- Who are you? What do you like building?
  - Hey, I'm Praveenkumar, experienced full-stack web developer proficient in creating robust and scalable solutions for a variety of projects. Passionate about crafting clean code and continuously enhancing user experiences.
- Do you own a PC and have a good internet
  connection? Let's hear those specs 💪!
  - Yes, I do own a PC with good fiber internet connection.
  - It has Intel i5 with 8gigs of RAM and it can help me to build full stack apps :)
- Your stackoverflow, linkedin, personal site.
  Anything you'd want us to see.
  - [Personal Website](https://ipravek.github.io)
- What programming languages have you messed around with?
  - JavaScript: TypeScript
  - Ruby
  - Python
- What sort of tooling is on your machine?
  - Programming languages, compilers, runtimes etc
    - Node.js
    - Ruby
    - Python
    - GCC
    - WSL/ WSL2
  - What OS do you run?
    - Windows
    - Ubuntu
  - What editor/IDE do you use?
    - VS Code
    - Vim
- Are you more into front-end or back-end? (If you're
  into web development).
  - When it comes to Backend, I'm so much interested in developing resuable, maintinable, scalable API's, dealing with DB's, integrating third party API's and Deployment.
  - When it comes to Frontend, I'm very much passionated about create resuable, resonsive UI components.
- Are you interested in AI/ML, Systems Programming
  or anything outside your current domain.
  - Definetly, Yes for me to learn new things.
- What are you learning now?
  - Cloud, Advance concepts and optimization of Full stack apps and RUST

## Question and Answers

- Find the longest word in a string.

  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

  **[link to Code](https://jsfiddle.net/7m0eoq3p/)**

  ```js
  const str = "The quick brown fox jumped over the lazy dog";

  function findLargestWord(str) {
    let strArr = str.split(" ");
    let max = strArr[0].length;
    let word = strArr[0];

    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].length > max) {
        word = strArr[i];
        max = strArr[i].length;
      }
    }

    return word;
  }

  console.log(findLargestWord(str)); //jumped
  ```

- Repeat a string `n` times.

  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`

  **[Link to Code](https://jsfiddle.net/eosycbvu/)**

  ```js
  const str = "abc";

  function repeatStr(str, n) {
    let word = "";

    for (let i = 0; i < n; i++) {
      word += str;
    }

    return word;
  }

  console.log(repeatStr(str, 3)); //abcabcabc

  //Built-in fn
  console.log(str.repeat(3)); //abcabcabc
  ```

- Remove duplicates in an array

  - If `[1, 20, 3, 1, 3, 3]` is the input to your
    function, it should return `[1, 20, 3]`

  **[Link to Code](https://jsfiddle.net/onctjk5y/)**

  ```js
  const nums = [1, 20, 3, 1, 3, 3];

  function removeDuplicate(arr) {
    const obj = {};

    arr.forEach((e) => {
      if (!obj[e]) {
        obj[e] = e;
      }
    });

    return Object.values(obj);
  }

  console.log(removeDuplicate(nums)); //[1, 3, 20]
  ```

- Remove falsy values

  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`

  **[Link to Code](https://jsfiddle.net/qjgxL7cf/)**

  ```js
  const arr = [42, "everything", "", 2, false, "everything"];

  function removeFasly(arr) {
    return arr.filter((e) => e);
  }

  console.log(removeFasly(arr)); //[42, "everything", 2, "everything"]
  ```

- Truncate a string

  - If `'Absolute victory'` and `3` are the inputs to
    your function, it should return `Abs...`

  **[Link to Code](https://jsfiddle.net/aupkd49q/)**

  ```js
  const str = "Absolute victory";

  function stringTruncate(str, n) {
    return str.slice(0, n) + "...";
  }

  console.log(stringTruncate(str, 3)); //Abs...
  ```

> **நன்றி!** 🙏
