<h1>Introduction</h1>

<b>1. Who are you? What do you like building?</b>
- My name is Nitesh Kumar, I leave in Pune Maharashtra. I am a software developer with experience in JavaScript and related to its some programming languages and frameworks like Node.js, Express Framework, React /Angular. I have also knowledge in SQL and NoSQL databases (MySQL, MongoDB). I have almost 3 years of experience in developing web application.
I would like to creating innovative and dynamic web application that provide exceptional user experiences. With a strong foundation in JavaScript and hands-on experience with React.js/Angular, Node.js, Express and mongoDB. 

<b>2. Do you own a PC and have a good internet connection? Let's hear those specs 💪!</b>
- Yes,I have my own PC as well as good internet connection. My Pc is latest version with intel core i5 ,windows 11 OS , 512 SSD and 16 GB RAM

<b>3. Your stackoverflow, linkedin, personal site. Anything you'd want us to see.</b>
- https://www.linkedin.com/in/nitesh-kumar-517346113/

<b>4. What programming languages have you messed around with?</b>
- JavaScript , TypeScript, node.js, Express.js, React and Angular

<b>5. What sort of tooling is on your machine?
  - Programming languages, compilers, runtimes etc
  - What OS do you run?
  - What editor/IDE do you use?</b>
- Node.js, JavaScript and TypeScript
     - Windows 
     - VS code (Visual Studio Code editor)


<b>6. Are you more into front-end or back-end? (If you'reinto web development).</b>
- I worked front-end more than backend but sometime backend also.

<b>7. Are you interested in AI/ML, Systems Programming or anything outside your current domain.</b>
- yes I am interested to learn like python or Mojo which is recently lunched for AI and 35000 times faster than python.

<b>8. What are you learning now?</b>
- Create native app with react-native or flutter.



<br></br>
<h1>JavaScript Hack !</h1>

- Find the longest word in a string.

<pre>
const getLargetWord = (val) => {
    let new_arry = val.split(" ");
    let largest_word = "";
    new_arry.forEach(element => {
        if (element.length > largest_word.length) {
            largest_word = element;
        }
    });

    return largest_word;
}

let sentence = "The quick brown fox jumped over the lazy dog";
let result = getLargetWord(sentence);
</pre>


- Repeat a string `n` times.

<pre>
const reapeatString = (str, num) => {
    let result = '';
    for (let i = 0; i < num; i++) {
        result = result.concat(str);
    }

    return result;
}

let output = reapeatString('abc', 3);
</pre>


- Remove duplicates in an array

<pre>
const removeDuplicateElm = (arg) => {
    let unique = new Array;
    for (let i = 0; i < arg.length; i++) {
        let flag = 0;
        for (let j = i + 1; j < arg.length; j++) {
            if (arg[i] == arg[j]) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            unique.push(arg[i]);
        }
    }

    return unique;
}


let value = [1, 20, 3, 1, 3, 3];

let output = removeDuplicateElm(value);
</pre>


- Remove falsy values
  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`
  
 <pre>
 const removeFalsyValue = (val) => {

    let pure_array = new Array;
    val.forEach(arr_val => {
        if (arr_val) {
            pure_array.push(arr_val);
        }
    });
    return pure_array;
}

let initial_data = [42, "everything", "", 2, false, "everything"];
let output = removeFalsyValue(initial_data)
 </pre>
 
 
- Truncate a string
  - If `'Absolute victory'` and `3` are the inputs to
  
<pre>
const truncateString = (arg, limit) => {
    return arg.slice(0, limit).concat('...');
}

let str = "Absolute victory";
let output = truncateString(str, 3);
</pre>
