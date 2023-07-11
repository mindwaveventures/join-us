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

## About me

- **Who are you? What do you like building?**
  
    I'm Anparasan. Basically from Thoothukudi.
    I'm working as a Fullstack web developer in Openturf.
    I have well knowledgeable and capable of both Front-end and Backend

    ***Frontend:***
      ReactJs, Ant Design, material UI, Windmill React UI, Bootstrap, TailwindCSS, Redux, React-query, Javascript, HTML, CSS.

    ***Backend:***
      NodeJs, ExpressJs, Sequelize, REST APIs.

    ***Databases:***
      MongoDB, PostgreSQL.

    ***Deployment:***
      Nginx, vercel, gh-pages, ext.,

    I always like to build web applications, websites.

- **Do you own a PC and have a good internet connection? Let's hear those specs 💪!**

    I'm using my current company laptop.
    I have good internet connectivity up to 60 Mbps of broadband service.

- **Your stackoverflow, linkedin, personal site. Anything you'd want us to see?**

    - https://www.linkedin.com/in/anparasan-t-52a954219/
    - https://github.com/anparasan3

- **What programming languages have you messed around with?**

    I'm specifically handling my job activities with Javascript based. and I have basic knowledge of - Python - C - shell script

- **What sort of tooling is on your machine?**

    I'm using Visual Studio code to handle all sorts of code. Along with that, I'm using Postman for API testing. MongoDB and PostgreSQL for database management. Finally, using GIT for repository code management.

    - **Programming languages, compilers, runtimes, etc.**

        I mostly used to handle and compile my code with ES Lint extension which is available on VS code;

    - **What OS do you run?**

        I'm currently using Windows.
        and have experience with Mac book and Linux (Ubuntu).

    - **What editor/IDE do you use?**

        Visual Studio Code IDE

- **Are you more into front-end or back-end? (If you're into web development).**

    I'm well-specialized in both (front-end and backend) development.

- **Are you interested in AI/ML, Systems Programming, or anything outside your current domain?**

    Yes. I'm interested in learning about AI/ML. I'm also interested in systems programming.

- **What are you learning now?**

    I'm currently learning typescript and next.js
