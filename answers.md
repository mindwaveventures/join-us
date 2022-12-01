<!-- Know about me -->

<!-- Who am I? -->
    Hi, 
        I'm Salini Malliswaran. I have 4 years and 2 months of experience dabbling with software development. I love to code and see my magic out there making a difference in people's lives. I'm passionate, driven, and fun to work with.
        
        Web development is my forte. I've worked with PHP, Node.js for backend with Laravel and express.js frameworks respectively. Apart from these, I've also played with Java and Python occasionally. My frond-end skills include HTML, CSS along with Bootstrap, and also a bit of React.js. For Databases, I have excellence in postgereSQL, MySQL, and also MongoDB. As far as coding and programming languages go, I'm versatile and very adaptable. This makes me great to work with any language comfortably and even learn new languages effortlessly.
        
        Apart from these programming languages, my technical skills include a deep understanding of AWS, Docker, Microservices, and Jenkins. I'm good with GIT, JIRA, or any development tracking tools to work with Agile and CI/CD. I also have exposure to GCP. I've worked in Windows, Mac, and Ubuntu OS. I love using VSCode for my code.
        
        I like DSA and would try to challenge myself every day. Hackathons excite me and so does anything new that is thrown at me.

        Know more about me:
        LinkedIn : https://www.linkedin.com/in/salini-malliswaran-836bba134/
        GitHub : https://github.com/miohmylove
        StackOverflow : https://stackoverflow.com/users/9934113/lublaut

<!-- Do I own a PC? -->
    No I don't.


<!-- Hacks -->

<!-- 
Find the longest word in a string.
Given 'The quick brown fox jumped over the lazy dog' is the input to your function, it should return 'jumped'
 -->

function findLogestWord(givenString) {

    if (givenString == '')  return '';

    let longestLength = 0;
    let longestWord = '';

    let stringArray = givenString.split(' ');
    for (let word = 0; word < stringArray.length; word++) {
        const element = stringArray[word];
        if (stringArray[word].length > longestLength) {
            longestLength = stringArray[word].length;
            longestWord = stringArray[word];
        }
    }

    return longestWord;
}


<!-- 
Repeat a string n times.
If 'abc' and 3 are the arguments to your function, it shoudl return 'abcabcabc'
 -->

function repeatString(givenString, repeatNumber) {

    if(repeatNumber == 0)   return '';

    let repeatedString = givenString;

    for (let repeat = 1; repeat < repeatNumber; repeat++) {
        repeatedString += givenString;         
    }

    return repeatedString;
}

<!-- 
Remove duplicates in an array
If [1, 20, 3, 1, 3, 3] is the input to your function, it should return [1, 20, 3]
 -->

function removeDuplicates(givenArray) {

    if(givenArray.length == 0)  return [];

    let arrayHash = new Map();
    let newArray = [];
    let newArrayIndex = 0;
    
    for (let index = 0; index < givenArray.length; index++) {
        if(!arrayHash.has(givenArray[index])) {
            arrayHash.set(givenArray[index], 1);
            newArray[newArrayIndex++] = givenArray[index];
        }
    }

    return newArray;
}


<!-- 
Remove falsy values
If [42, "everything", "", 2, false, "everything"] is the input to your function, it should return [42, "everything", 2, "everything"]
 -->

function removeFalseValues(givenArray) {

    if(givenArray.length == 0)  return [];
    
    let newArray = [];
    let newArrayIndex = 0;

    for (let index = 0; index < givenArray.length; index++) {
        if(givenArray[index]) {
            newArray[newArrayIndex++] = givenArray[index];
        }
    }

    return newArray;
}

<!-- 
Truncate a string
If 'Absolute victory' and 3 are the inputs to your function, it should return Abs...
 -->

function truncateSting(givenString, truncateLength) {
    return truncateLength > givenString.length 
                ? givenString 
                : givenString.substring(0, truncateLength) + '...';
}
