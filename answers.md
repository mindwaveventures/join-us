Introductions:

1. Hi, I'm Karthick Siva, I'm a Full stack developer in Utthunga Technologies.
2. Yes I have PC and I have good internet.
3. https://www.linkedin.com/in/karthick-siva-b72652201/
4. ASP.Net only I have confusing the Programming Language.
5. * Programming languages, compilers, runtimes etc... ? --> 
   . Programming languages is JavaScript, TypeScript, C# etc...
   . compilers is Visual Studio and Visual Studio Code
   
   * What OS do you run? --> Windows 11
   * What editor/IDE do you use? --> No now
6. I'm a Full Stack Developer So Front-end and Back-end both I'm working.
7. Yes I'm interested.
8. Currently I'm leaning Next.js


Let's hack!:

1. Find the longest word in a string.

	function longest(str){ 
	// Split the string into array 
	str = str.split(" ") 
	// Return the first sorted item of the Array 
	return str.sort((a, b) => b.length - a.length)[0] 
	} 
	
	
	console.log(longest("The quick brown fox jumped over the lazy dog"));

2. Repeat a string n times.

	function repeatStringNumTimes(str, num) {
		return str;
	}
	repeatStringNumTimes("abc", 3);

3. Remove duplicates in an array

	let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 

	function removeDuplicates(arr) { 
		return arr.filter((item, 
			index) => arr.indexOf(item) === index); 
	} 
	console.log(removeDuplicates(arr));
	
4. Remove falsy values

	let arr =[42, "everything", "", 2, false, "everything"];

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

5. Truncate a string

	const truncateString = (string = '', maxLength = 50) => 
	  string.length > maxLength 
		? `${string.substring(0, maxLength)}…`
		: string

	console.log(truncateString('Absolute victory', 3));
