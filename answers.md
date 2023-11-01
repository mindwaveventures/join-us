1. Who are you? What do you like building?
   I am a passionate full stack developer with 3 years of experience. I love building seamless, user-friendly software solutions. Proficient in JavaScript, React, Node.js, and database MongoDB. I've successfully tackled challenges, collaborated with cross-functional teams, and continuously updated my skills. Excited about contributing to innovative projects and your company's success.
2. Do you own a PC and have a good internet connection? Let's hear those specs 💪!
   I have Personal laptop with wifi internet
3. Your stackoverflow, linkedin, personal site. Anything you'd want us to see.
   I have currently maintain linkedIn account. Here is my link https://www.linkedin.com/in/saravanan-rk-657614259
4. What programming languages have you messed around with?
   I've had hands-on experience with a variety of programming languages. On the front-end, I've worked extensively with JavaScript and its framework React. For back-end development, I've used languages like Node.js. Additionally, I'm proficient in database query languages like MongoDB for managing data. My adaptability with different programming languages allows me to create comprehensive, end-to-end solutions. 
5. What sort of tooling is on your machine?
   5.1. Programming languages, compilers, runtimes etc
        HTML, CSS, Javascript, React, Node, Express.js, MongoDB and online Codesandbox and javascript compiler
   5.2. What OS do you run?
        Windows 10
   5.3. What editor/IDE do you use?
        VS code and notepad++
6. Are you more into front-end or back-end? (If you're into web development).
   I am more in Frontend developement
7. Are you interested in AI/ML, Systems Programming or anything outside your current domain.
   Yes, if possible to learn new technology i am intrested to learn for developement 
8. What are you learning now?
   Currently, i am practicing python language.


//Find the longest word in a string
const LongestWord = (str)=>{
    const words = str.split(" ")
    let testString = "";
 
    for(let word of words){
        if(word.length > testString.length){
            testString=word;
        }
    }
  return testString;
}
const Largest = LongestWord("The quick brown fox jumped over the lazy dog")
console.log(Largest)

//Repeat a string 'n' times
const Repeat = (num)=>{
 const StringData = "abc"
 const result = StringData.repeat(num)
 return result;
}
const RepeatData = Repeat(3);
console.log(RepeatData);

//Remove duplicates in an array
const Duplicate =(num)=>{
const Result = num.filter((item,index)=>num.indexOf(item)===index);
return Result;
}
const DuplicateData = Duplicate([1, 20, 3, 1, 3, 3])
console.log(DuplicateData);


//Remove falsy values
const FalsyData = (arr) =>{
const result = arr.filter(Boolean);
return result;
}
const UpdatedData = FalsyData([42, "everything", "", 2, false, "everything"])
console.log(UpdatedData);

//Truncate a string
const TruncateString = (str,num) =>{
  const numberData = num;
  if(str.length>numberData){
    const result = str.slice(0,numberData) + "...";
    return result;
  }
  else {
     return str;
  }
}
const TruncateData = TruncateString("Absolute victory",3);
console.log(TruncateData);
