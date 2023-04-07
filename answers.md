# Profile

## Introduction

---

Hi, My name is **Sandeep Yadav**, and I am **Software Engineer(Full Stack Developer)** with hands on experience of **_2 years and 6 months_** with **MERN** stacks, on multiple domains such as `Financial Service(ESOP/CAPITAL Management)`, `ED-TECH(Learning Management System)`, `Data Synchronization` and many more.

I enjoy building web applications that provide value to users and solve real-world problems.

## PC configuration

---

yes, I owned a laptop with good configuration and a very good internet connectivity and planning to get a pc build by end of this year with a high end specs (all rounder).

```
Processor:- i7 - 11th generation
Storage:- 1 TB SSD
RAM:- 16 GB
OS- Windows 11 / Ubuntu 22.04
```

## Github and linkedin

---

- linkedin - https://www.linkedin.com/in/syadav711
- Github - https://github.com/syadav711

## Programming Languages, Frameworks and libraries

---

- **Languages** - Javascript (Web and NodeJS), python, java, dart, SQL, and many more
- **Libraries** - React, MaterialUI, Tailwind CSS, ana many more
- **Frameworks** - Next JS, Express JS, Nest JS, Angular, Mongoose, Sequelize and many more.
- **Database** - MongoDB, Mysql, Postgresql, MSSql and open to explore other dbs

## Tools available in my weapon

---

- **OS** - Ubuntu 22.04 for development and other uses

- **Languages/Runtime** - Javascript(Nodes JS)/ NVM, Python, Flutter(dart)

- **Editors/IDE** - VS Code, Android Studio

- **Other** - Git, Slack, Docker, Zoom, Postman, Insomnia, Chrome, Brave,

## Carrier Stream

---

I am comfortable in working on multiple streams of development like web,desktop and mobile.

But if this about my choice definitely its backend.

## Interest On tech

---

I am interested to explore opportunity of working on blockchain, web3 technologies, Augmented reality and Virtual Reality.

## Learning Now

---

Getting some hands-on experience of aws services like AppSync, DynamoDB, cognito and many more.

## Code Solutions

---

1. Find the longest word in a string.

   ```js
   function findLongestWord(inputString) {
     const words = inputString.trim().split(" ");

     return words.reduce((prev, current) => {
       if (prev == null) {
         return current;
       }

       if (current.length > prev.length) {
         return current;
       }
       return prev;
     }, null);
   }
   ```

2. Repeat a string **n** times.

   ```js
   const repeatWord = (inputString, times = 1) => inputString.repeat(times);
   ```

3. Remove duplicates in an array

   ```js
   function removeDuplicates(iterable = []) {
     const hashMap = iterable.reduce((hash, value) => {
       if (hash[value] === undefined) {
         hash[value] = value;
       }
       return hash;
     }, {});

     return Object.values(hashMap);
   }
   ```

4. Remove falsy values

   ```js
   const removeFalsyValues = (iterable = []) =>
     iterable.filter((value) => Boolean(value));
   ```

5. Truncate a string

   ```js
   const truncateString = (inputString, truncateAfter = 3) =>
     inputString.trim().substring(0, truncateAfter).concat("...");
   ```
