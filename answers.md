I am karthik.I would like to build the products.I worked as full stack developer for most of the time. I have used MERN stack for most of the projects. I have build the educational app,real-estate SASS app, Vehicle service SASS app and worked on health care app.

Yes, I have my own PC.Good Internet Connection. Windows-11, i5-10th gen,8GB RAM,1TB HDD

https://www.linkedin.com/in/karthikr3400/ -LinkedIn
https://stackoverflow.com/users/10502099/karthik-rao - stack-overflow

Javascript, Java(Beginner)

Node js, Java SE, Py- compilers, runtimes

Windows-11 OS

VS code - Editor.
I worked most on backend development.Node js frameworks.
Yes, I'm interested in AI/ML
I'm learning about react+vite

-longest word in a string

const longestWord=(str)=>{
if(str){
str = str.split(" ");
let largest = str[0];
for(let i=1;i<str.length-1;i++){
if(str[i+1].length > largest.length){
largest = str[i+1];
}
}
return largest;
}
return null;
}

const result = longestWord("The quick brown fox jumped over the lazy dog");
console.log(result);

const repeatString=(n,str)=>{
if(n>0){
let finalStr = "";
for(let i=0;i<n;i++){
finalStr+=str;
}
return finalStr;
}
return str
}
const n = 3;
const str = "abc"
const result = repeatString(n,str);
console.log(result);

const removeDuplicate=(arr)=>{
if(arr.length>0){
// hashMap technique stores unique values
let hashObj ={};
for(let i=0;i<arr.length;i++){
if(hashObj[arr[i]] === undefined){
hashObj[arr[i]] = arr[i];
}
}
return Object.values(hashObj);
}
}
const arr = [1, 20, 3, 1, 3, 3];
const result = removeDuplicate(arr);
console.log(result);

const removeFalsyValues=(arr)=>{
if(arr.length>0){
let result = [];
for(let i=0;i<arr.length;i++){
//Boolean returns context of value whether it is true or false
if(Boolean(arr[i])){
result.push(arr[i]);
}
}
return result;
}
return null;
}
const arr = [42, "everything", "", 2, false, "everything"];
const result = removeFalsyValues(arr);
console.log(result);

const truncateString=(str,n)=>{
if(str){
return str.substring(0,n);
}
return null;
}
const result = truncateString("Absolute victory",3);
console.log(result);
