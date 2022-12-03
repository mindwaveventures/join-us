## Introductions

- Who are you? What do you like building
Ans. 
    My name is Muneeb. I have been a MERN stack developer trainee at Brototype for last 8 months. 
Brototype is a self-learning platform that assigns weekly tasks for trainees and reviews them by 
experienced developers. I have done multiple projects and some mini projects using MERN stack 
technologies. One of them is and E-commerce application which is lively hosted using AWS EC2 and 
Nginx reverse proxy server and Second one is a Video content sharing platform that users can 
create their own channels and share their video contents to public which is expected to be 
completed within one month. And I have done mini projects like incubation management, live chating
application, etc... I became a MERN stack developer from the scratch within the short period of 
8 months that shows my hard work and self learning skill. So I am really flexible and adaptable. 
Through my experience around 1 year, I could become familiar with different APIs and libraries 
like Socket.IO, Twilio, Google APIs, Cloudinary, etc... My strength is my anxiety to gain the 
knowledge using my self-learning and reasearch skills, find something new everyday and implement 
them. My weakness is, I am not satisfied with whatever I am doing and this weakness makes me more 
stronger because I will try to make everything better.

- Do you own a PC and have a good internet
 connection? Let's hear those specs 💪!
Ans.
Currently I own a laptop of HP with 4gb RAM, 500 MB hard disk and 128 GB SSD. I have no my own 
internet connection now.

- Your stackoverflow, linkedin, personal site.
Anything you'd want us to see.

Ans.
Linked In - https://www.linkedin.com/in/muneeb-t-178732217/
Github    - https://github.com/Muneeb-T

- What programming languages have you messed around with?
Ans. Javascript, C, C++, Java, PHP

- What sort of tooling is on your machine?
  - Programming languages, compilers, runtimes etc
  - What OS do you run?
  Ans. Linux, Windows
  - What editor/IDE do you use?
  Ans. Visual studio code
  
- Are you more into front-end or back-end? (If you're
into web development).
Ans. 
I am more into backend development than frontend. But I am very flexible and abled to do both. 

- Are you interested in AI/ML, Systems Programming
or anything outside your current domain.
Ans. Currently I have not experienced in AI/ML or anything other than MERN stack. But I am very 
flexible and adaptalbe.So, I am able to gain those things with my self-learning skill.

- What are you learning now?
Ans.
Currently I am reasearching through the official documentations on the MERN stack technologies
and javascript and practicing data structures to improve my problem solving skills. For these
last 8 months I have been active in the reasearch.

## Let's hack!

- Find the longest word in a string.
  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.
  
  Ans.
  
  function longestWord(string) {
    const words = string.split(' ');
    let max = words[0].length;
    let index = 0;
    for (let i = 1; i < words.length; i++) {
        if (max < words[i].length) {
            index = i;
            max = words[i].length;
        }
    }
    return words[index];
  }

- Repeat a string `n` times.
  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`
  
  Ans.
    function repeatString(string, n) {
        if (n > 1) string += repeatString(string, n - 1);
        return string;
    }
- Remove duplicates in an array
  - If `[1, 20, 3, 1, 3, 3]` is the input to your
  function, it should return `[1, 20, 3]`
  
  Ans.
  function removeDuplicates(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array[j] = null;
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            result[result.length] = array[i];
        }
    }
    return result;
  }

- Remove falsy values
  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`
  
  Ans.
  function removeFalsyValues(array) {
    let size = array.length;
    let result = [];
    for (let i = 0; i < size; i++) {
        if (array[i]) result[result.length] = array[i];
    }
    return result;
  }

- Truncate a string
  - If `'Absolute victory'` and `3` are the inputs to
  your function, it should return `Abs...`
  
  Ans.
  function truncateString(string, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += string.charAt(i);
    }
    return result + '...';
  }

