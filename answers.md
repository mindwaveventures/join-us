# Information about Kiteretsu and his gadgets 🏜

## Introduction

I'm Pranav, a Software Engineer with expertise in technologies like JavaScript, React, Redux, Java, and more. I have a deep affection for my keyboard, and I find joy in crafting applications with JavaScript, whether it's on the frontend or the backend. Nonetheless, my heart lies in frontend development. If you're seeking someone to infuse your team with both humor and a wealth of coding skills, your search may have just ended!

## About my gadgets

I have a laptop with a good Internet broadband connection, and my machine's specifications are as follows:

- Processor: Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz (2.71 GHz)
- RAM: 8.00 GB
- HDD: 1TB
- OS: 64-bit Windows Operating System.

## Some links to my work profiles

<a href="https://portfolio-pranavwaykar.netlify.app/" target="blank"><img align="center" src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png" alt="portfolio-icon" height="40" width="40" /></a>
https://portfolio-pranavwaykar.netlify.app/


<a href="https://www.linkedin.com/in/pranavwaykar/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="linkedin-icon" height="35" width="35" /></a>
https://www.linkedin.com/in/pranavwaykar/

## Programming Langauge

- JavaScript (and their frameworks as well)
- C#
- Java
- SQL, MongoBD

## Tools

- node, j2ee
- Windows
- VS code, Pycharm, Android Studio

## Preference

I'm comfortable working on both the sides, but if you ask me to choose one then it will be Frontend.

## Other tech Intrests

I'm a tech enthusiast who enjoys learning and can easily adapt to any technologies as required, so I can work as per the requirement

## Learning now

I'm learning Backend Technologies, for some personal project requirements.

# Codes

## Finding longest word

## Finding longest word

function findMaxWordLength(input) {
  const words = input.split(/\s+|[,.;?!'"-]+/);
  let longest = null;

  for (let i = 0; i < words.length; i++) {
    const checkerWord = words[i].toLowerCase();
    if (checkerWord.trim() === '') continue;
    if (!longest || checkerWord.length > longest.length) {
      longest = words[i];
    }
  }

  return longest || '';
}

