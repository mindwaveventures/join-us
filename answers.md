## Mohamed Rafi
- Full Stack Developer
- I am a MERN stack web developer with high passion and hard work. My strength is my anxiety to gain knowledge and research on my domain so I am pretty much confident about my knowledge in JavaScript, Node.js, React.js, MongoDB, HTML, CSS, Redux, Nginx, PostgreSQL, and data structures and algorithms. I have worked with multiple projects like the Room Booking application, Incubation management,Marketplace application, Social media platform that is going on
- Yes , I have a PC with stable internet connection
- JAVASCRIPT
- LINUX OS
- Visual Studio Code
- Front-end
- Yes Intersted in ML/AI
- Three JS

# Longest word

function findLongestWord(str) {
  var strSplit = str.split(' ');
 
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){ 
	longestWord = strSplit[i].length;
     }
  }
  return longestWord; 
}

#Repeat a string n times.

function repeatStringNumTimes(string, times) {
  if (times > 0)
    return string.repeat(times);
  else
    return "";
}


#Remove duplicates in an array

function removeDuplicates(arr) {
    return [...new Set(arr)];
 }
 
 # Remove falsy values
 
 function removeFalsey(arr) {
    return arr.filter((k) => {
      if (k) {
        return k;
      }
    });
  }


#Truncate a string

function truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}
