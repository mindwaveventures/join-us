Hell Team, thank you for giving me a wonderful opportunity to explore my skills with these assigned tasks. Herenby I have attached my anaswers for all the five tasks in one by one manner.

1.  Find the longest word in a string.

    var sentence = "The quick brown fox jumped over the lazy dog";
    var words = sentence.split(" ");

    var L = "";
    var SL = "";
    for (var i = 0; i < words.length; i++) {
    if (words[i].length > L.length) {
    SL = L;
    L = words[i];
    } else if (words[i].length > SL.length) {
    SL = words[i];
    }
    }
    console.log("Longest word: " + L);
    console.log("Second longest word: " + SL);
    console.log("Last word: " + words[words.length - 1]);

    var center = Math.round(words.length / 2) - 1;
    console.log("Center word: " + words[center]);

2.  Repeat a string n times.

    function Repeat_String(str, n) {
    let result = "";

        for (let i = 0; i < n; i++) {
          result += str;
        }

        return result;

    }
    console.log(Repeat_String("abc", 3));

3.  Remove duplicates in an array

    function Remove_Duplicates(arr) {
    let similar = [];

        for (let i = 0; i < arr.length; i++) {
          if (!similar.includes(arr[i])) {
            similar.push(arr[i]);
          }
        }
        return similar;

    }

    console.log(Remove_Duplicates([1, 20, 3, 1, 3, 3]));

4.  Remove falsy values

    function Remove_Falsy(arr) {
    let remove = [];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
    remove.push(arr[i]);
    }
    }
    return remove;
    }

        console.log(Remove_Falsy([42, "everything", "", 2, false, "everything"]));

5.  Truncate a string

        function Truncate_String(str, n) {
        if (str.length > n) {
          return str.slice(0, n);
        } else {
          return str;
        }

    }

    console.log(Truncate_String("Absolute victory", 3));

- Who are you? What do you like building?
  I'm Vijay. Basically from Chennai. Have been working as a frontend web developer for ages from the first step of my career on joining Kal cables pvt limited. though I worked and designated as Headend Engineer, developement is my primary passionative work. Im very knowledgable and capable of front end technologies like HTML, CSS, Javascript, XML, React, Next, Bootstrap and material UI, along with these I know basic things of backend work methodologies using MERN stack development. I always like to build web applications, websites and mean time i would like to learn more opportunies and skills about trending techologies which help us to grow day by day.

- Do you own a PC and have a good internet connection? Let's hear those specs 💪!
  Yes. I have a brand new own laptop from DELL brand with configurations of the following:

          Processor - AMD Ryzen 5 5625U with Radeon Graphics 2.30 GHz
          Installed RAM -	8.00 GB (7.35 GB usable)
          System type - 64-bit operating system, x64-based processor
          SSD - 512 GB and expandable.
          and have a good internet connectivity upto 50 Gbps of brandband service.

- Your stackoverflow, linkedin, personal site. Anything you'd want us to see.
  I dont have any specific portfolio pages other than LinkedIn profile. Anyway I'm attaching my LinkedIn profile link here: linkedin.com/in/vijay-bakkiyaraj-9b195912b. More than this, I have done some work for franchiese company called Hyge. I have individually build 4 to 5 sites for them. Kindly have a look at it too. - Hyge Infotech (www.hygeinfotech.com) - Hyge Paradise (www.hygeparadiseinn.com) - Hyge Construction (www.hygeconstruction.com) - Sri Sai Consultancy (www.saiconsultancy.in)

- What programming languages have you messed around with?
  I'm spcifically handling my job activities with Javascript. Meanwhile, I'm familiar and have basic knowledge of - Java - Python - NodeJs

- What sort of tooling is on your machine? - I'm using Visual Studio code to handle all sorts of code. Along with that, I'm using postman for API testing. Then, using DOCKER for runtime environment setup and using MONGODB for database management. Finally, using GIT for repository code management.

- Programming languages, compilers, runtimes etc - I mostly used to handle and compile my code with ES Lint extension which is availale on VS code; Using Live server extension to handle and test my code whether working good or not; Then using node js as a runtime environment for all of react and Next Js projects.

- What OS do you run?
  I'm currently using both Windows and Linux (Ubuntu) in my Laptop

- What editor/IDE do you use? - I'm handling all of my code with Visual Studio code IDE. Also, have experience with Eclipse IDE.

- Are you more into front-end or back-end? (If you're into web development). - I'm well specialized in fontend development.

- Are you interested in AI/ML, Systems Programming or anything outside your current domain.

  - Yes. I'm interested in learning of AI/ML current scope. till the day I dont have enough opportunity to know and learn more about it. If I have a chance means, I'm sure that I will explore in a more possible way.

- What are you learning now? - I'm currently hanging with DevOps managment using DOCKER and have a deep dive into REACT best practices methodologies to improve my skills in web development.
