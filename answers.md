  

## Introductions

- Who are you? What do you like building?

> I am a software developer with experience in front-end and database development, specializing in creating responsive web applications.I completed degree as master of computer application.

>I worked web based application health care and e-commerce domain.
My experience developing dynamic front end as UI an javascript, react and database.I involved UAT testing deployment and version controling.

> I am aware of using project management tool like JIRA and agile methodology of working. I completed agile certification during current project.
 
- Do you own a PC and have a good internet connection? Let's hear those specs! 
> Yes. I have own PC with good system configuration. 
> 1. PC configuration
    *12th Generation Intel® Core™ i5 processor
    * 8GB DDR4 - 2666 HMHz RAM
> 2. Internet connection
     * 20 Mbps
- Your stackoverflow, linkedin, personal site. Anything you'd want us to see.
  * Here is my  [LinkedIn](https://www.linkedin.com/in/p-balamurugan-pichai/) profile
-   What programming languages have you messed around with?
    * Java
    * JavaScript
    * Android
    * Python (Beginner)
 - What sort of tooling is on your machine?
      * Programming languages, compilers, runtimes etc
           1. Programming languages
               * Reactjs
              * Javascript
              * Java
              * Android
              * Python (Beginner)
           2. Compilers
              * JVM
          3. Runtimes
              * JRE
              
   * What OS do you run?
       * Windows (Current)
       * Ubuntu
       
    * What editor/IDE do you use?
        * VS Code
        * Eclipse
        * Spring Tools Suite (STS)
- Are you more into front-end or back-end? (If you're into web development).
    * Front-end (70%)
    * Back-end (30%)
    
- Are you interested in AI/ML, Systems Programming or anything outside your current domain.
    * Python ( Web Scraping )
    
- What are you learning now?
    * Python
    * Azure AWS
    

## TASK 1
 

- Find the longest word in a string.

    * Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

`function findLongestWord(inputStr) {
if (inputStr.length > 0) {
let strArr = inputStr.split(' ');
let longestStr = '';
for (let i = 0; i < strArr.length; i++) {
let curStr = strArr[i];
if (curStr.length > longestStr.length) {
longestStr = curStr;
}
}
return longestStr;
}
}
const inputTxt = "The quick brown fox jumped over the lazy dog";
const findLongestStr = findLongestWord(inputTxt);
console.log(findLongestStr); `

## TASK 2
- Repeat a string `n` times.
    * If  `abc`  and  `3`  are the arguments to your function, it shoudl return  `abcabcabc`
    
`function  calculateString(strValue, repeatCount) {
let  result  =  " ";
if (repeatCount  >  0) {
for (let  i  =  0; i  <  repeatCount; i++)
result  =  result  +  strValue;
} else {
result  =  strValue;
}
return  result;
}
const  inputString  =  "abc";
const  count  =  3;
const  resultString  =  calculateString(inputString, count);
console.log(resultString); `

## TASK 3
- Remove duplicates in an array
    * If  `[1, 20, 3, 1, 3, 3]`  is the input to your function, it should return  `[1, 20, 3]`
  
`function  removeDuplicateArr(arrList) {
let  originalList  = [];
for (let  i  =  0; i  <  arrList.length; i++) {
let  curValue  =  arrList[i];
if (!originalList.includes(curValue)) {
originalList.push(curValue);
}
}
return  originalList;
}
const  arrDuplicate  = [1, 20, 3, 1, 3, 3];
const  result  =  removeDuplicateArr(arrDuplicate);
console.log(result);`



