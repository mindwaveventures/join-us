1. Who are you? What do you like building?
-I am Avneet Anand. I am working in Softech Infinium Solutions Limited for 2 years 6 months working as MERN Stack developer.
- Building Interactive and responsive UI with React.Js.


2. Do you own a PC and have a good internet connection? Let's hear those specs 💪!
-- Yes, I have my own Laptop and have a good internet connection.

3. Your stackoverflow, linkedin, personal site. Anything you'd want us to see.
-- Sometime i used linkedin that is https://www.linkedin.com/in/avneet-anand-663bab12a/

4. What programming languages have you messed around with?
-- JavaScript, Node.js, React.Js

5. What sort of tooling is on your machine?
    Programming languages, compilers, runtimes etc 
    --programming languages- JavaScript/typescript, compilers- browser, runtime - Nodejs .
    --programming languages- react,  compilers- node , runtime- nodejs.

    What OS do you run?
    -- Windows 10

    What editor/IDE do you use?
    --VS code


6. Are you more into front-end or back-end? (If you're into web development).
--I am more comfortable in front-end.


7. Are you interested in AI/ML, Systems Programming or anything outside your current domain.
-- Yes,I am interested to learn this new opportunities and explore my career growth.

8. What are you learning now?
--coding practice in JavaScript.
--learning Azure Cloud.

****************************************************
Coding 
______________

Find the longest word in a string.

Given The quick brown fox jumped over the lazy dog is the input to your function, it should return jumped.
Repeat a string n times.

function longest(str){ 
    
    str = str.split(" ") 
    return str.sort((a, b) => b.length - a.length)[0] 
    } 
     
     
    console.log(longest("The quick brown fox jumped over the lazy dog")) 



If abc and 3 are the arguments to your function, it shoudl return abcabcabc
Remove duplicates in an array

If [1, 20, 3, 1, 3, 3] is the input to your function, it should return [1, 20, 3]
Remove falsy values

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        
    let arr = [1, 20, 3, 1, 3, 3];
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(arr));
           </script>
</body>
</html>

If [42, "everything", "", 2, false, "everything"] is the input to your function, it should return [42, "everything", 2, "everything"]
Truncate a string

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
   let arr = [42, "everything", "", 2, false, "everything"];
function removeFalsey(arr) {
	
	let newArr = [];


	arr.forEach((k) => {

		if (k) {
			newArr.push(k);
		}
	});

	return newArr;
}
console.log(removeFalsey(arr));

</script>
</body>
</html>

If 'Absolute victory' and 3 are the inputs to your function, it should return Abs...
<!DOCTYPE html>
<html>
<body>
    <p id="demo"></p>

<script>
    function repeatString(str, times) {
   return Array(times).fill(str).join('');
}
console.log(repeatString('abc', 3));

</script>

</body>
</html>


