- Who are you? What do you like building?

  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /> <br>
  Please feel free to know about me ;) https://www.linkedin.com/in/aruls8/

  From my childhood i have craze on how this computers works and how this interactions happening when i use the interfaces , so that i've choose this a my careeer. and am doing what i love :)

- Do you own a PC and have a good internet
 connection? Let's hear those specs 💪!
  
   I dont have PC, using office sysem . Having good internet connection with 150MBPS


- Your stackoverflow, linkedin, personal site.

stackoverflow : https://stackoverflow.com/users/7425780/arul
linkedin      : https://www.linkedin.com/in/aruls8/
github        : https://github.com/AruljothySundaramoorthy


- What programming languages have you messed around with?
     - Typescript
     - Javascript

- What sort of tooling is on your machine?
      Runtime used
        - Nodejs/Angular
      Windows/Ubuntu
        - Nodejs/Angular
      Editor
        - VS Code
- Are you interested in AI/ML, Systems Programming
or anything outside your current domain.

    Keen lo learn on new technologies, but parallelly i can work on my tech stack too :)

- What are you learning now?
    
    AWS,Docker,NESTJS

- Find the longest word in a string.

```
const longWord = (inputString) => {
  var word = inputString
    ? inputString.split(" ").reduce((longerString, currentString) => {
        return currentString.length > longerString.length
          ? currentString
          : longerString;
      }, " ")
    : "Invalid Input";
  return word;
};
console.log(longWord("The quick brown fox jumped over the lazy dog"));

```

- Repeat a string `n` times.

```
const repeatInputValue = (value,loopValue)=>{

   console.log(value.repeat(loopValue));
}
repeatInputValue('abc',100)
```

- Remove duplicates in an array

```
const a = [1, 20, 3, 1, 3, 3]

console.log(new Set(a))
```

- Remove falsy values

```
const removeFalsyValue = [42, "everything", "", 2, false, "everything"].filter(val => Boolean(val));
console.log(removeFalsyValue)
```

- Truncate a string

```
const TruncastString = (strinval,truncatelength)=>{
    return strinval?strinval.slice(0, truncatelength):'Invalid Input'
}
console.log(TruncastString('Absolute victory',3))
```
