  
  

## Introductions

  

- Who are you? What do you like building?
  
 >Thank you for giving me this opportunity. I am a software developer with experience in front-end and database development, specializing in creating responsive web applications.I completed degree as master of computer application. 
I worked web based application health care and e-commerce domain.
My experience developing dynamic front end as UI an javascript, react and database.I involved UAT testing deployment and version controling.
I am aware of using project management tool like JIRA and agile methodology of working. I completed agile certification during current project.
I am looking forward to working on Fullstack applications development along with that I have working experience in SEO and ADA compliance projects as well. 
Apart from these my personal interests include to learning new technology taking an initiative.  
I feel ready to take my career to the next level and currently looking for a new opportunity.
This position seems like a great opportunity to build my career, challenging and continue advancing my skills for the benefit of the company.
 
## My responsibility:

> requirement Gathering and Analysis

> involved in developing the web based interface using HTML, javascript, react and css

> Responsible for debugging, writing test cases and performing unit testing.

> Working closely with client, given client demo and analysis to enhance existing application

> responsible for updating the Functional and Technical documents for the project.


## TASK 1
- Find the longest word in a string.
  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

`//longestWord.js
function findLongestWord(inputStr) {
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
const findLongestStr = findLongestWord(inputText);
console.log(findLongestStr);`