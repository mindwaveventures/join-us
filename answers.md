# **Mediwave**

## **Introduction**

Who are you? What do you like building?

```
Hi, This is Vigneshwaran G B .I have been working on the top notch techonologies like ReactJs,NodeJs and C# .net Core . I am a Full Stack Debveloper worked in both Azure and AWS along with SQL and Postgre Databases. I am mostly into Full Stack Development.
```

---

Do you own a PC and have a good internet connection? Let's hear those specs 💪!

```
No, Currently I don't have a PC. I do have good internet connection with Jio Fiber service provider.
```

---

Your stackoverflow, linkedin, personal site. Anything you'd want us to see.

```
LinkedIn: www.linkedin.com/in/vigneshwaran-g-b-8943181bb
```

---

What programming languages have you messed around with?

```
- React JS
- Node JS
- C# .Net Core
- Go lang
```

---

What sort of tooling is on your machine?

- What OS do you run?

```
Mac OS X
```

- What editor/IDE do you use?

```
Visual Studio
Visual Studio Code

```

---

Are you more into front-end or back-end? (If you're into web development).

```
Both front-end and back-end.
```

---

Are you interested in AI/ML, Systems Programming or anything outside your current domain.

```
Sure I am interested in learning and working in things outside my domain.
```

What are you learning now?

```
Angular JS
```

## **Question 1**

### **Problem Statement**

####

#### **Find the longest word in a string**

Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

### **Solution**

```
const longestWord = (input) => {
	var input_array = input.split(' ');
	var maxLength = 0;
	var maxIndex = 0;
	input_array.forEach((element, index) => {
		if (element.length > maxLength) {
			maxLength = element.length;
			maxIndex = index;
		}
	});
	return input_array[maxIndex];
};
longestWord('The quick brown fox jumped over the lazy dog');
```

### **Explanation**

- Decalre a function `longestWord` which returns a longest word from a given string ,along with a parameter `input`.
- Split the input string using `split` method and assign it to a variable `input_array`.
- Declare and assign two variables `maxIndex` and `maxLength` to `zero`.
- Using `forEach` method iterate `input_array` within which the following steps are performed.
  - Using conditional statement `if` check whether length of each and every word from `input_array` is greater than `maxLength`.
  - If so re-assign `maxLength` as length of the element and `maxIndex` as index of the element.
- Retrun the string from `input_array` which is in the index `maxIndex`.
- Invoke the function `longestWord` with argument `The quick brown fox jumped over the lazy dog`.

---

## **Question 2**

### **Problem Statement**

####

#### **Repeat a string `n` times**

If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`.

### **Solution**

```
const repeatString = (input, count) => {
	return count > 0 ? input.repeat(count) : '';
};
repeatString('abc', 3);
```

### **Explanation**

- Decalre a function `repeatString` which returns the output along with parameters `input` and `count`.
- In repeatString function using `ternary operator` check `count` is greater than zero.
- If the condition satisfies using `repeat` method with parameters as `count` ,repeat the `input`and return it.
- If not return empty string.
- Invoke the function `repeatString` with argument `abc` and `3`.

---

## **Question 3**

### **Problem Statement**

####

#### **Remove duplicates in an array**

If `[1, 20, 3, 1, 3, 3]` is the input to your function, it should return `[1, 20, 3]`

### **Solution**

```
const removeDuplicate = (inputArray) => {
	return [...new Set(inputArray)];
};
removeDuplicate([1, 20, 3, 1, 3, 3]);
```

### **Explanation**

- Decalre a function `removeDuplicate` which returns an array by removing duplicates along with parameter `inputArray`.
- In removeDuplicate function return the array by removing duplicates by using `Set` with `inputArray` and spead operator.
- Invoke the function `removeDuplicate` with argument `[1, 20, 3, 1, 3, 3]`.

---

## **Question 4**

### **Problem Statement**

####

#### **Remove falsy values**

If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`

### **Solution**

```
const removeFalsyValues = (inputArray) => {
	return inputArray.filter((array) => array);
};
removeFalsyValues([42, 'everything', '', 2, false, 'everything']);
```

### **Explanation**

- Decalre a function `removeFalsyValues` which returns an array by removing falsy values along with parameter `inputArray`.
- In removeFalsyValues function return an array by filtering `inputArray` using `filter` method.
- Invoke the function `removeFalsyValues` with argument `[42, 'everything', '', 2, false, 'everything']`.

---

## **Question 5**

### **Problem Statement**

####

#### **Truncate a string**

If `Absolute victory` and `3` are the inputs to your function, it should return `Abs...`

### **Solution**

```
function truncateString(input, count) {
	return input.slice(0, count) + '...';
}
truncateString('Absolute victory', 3);
```

### **Explanation**

- Decalre a function `truncateString` which returns a string by truncating it along with parameters `input` and `count`.
- In truncateString function return an sting by slicing `input` using `slice` method with 0 and `count` as parameters .
- Append `...` with the sliced value and return it.
- Invoke the function `truncateString` with argument `'Absolute victory', 3`.

---

## **Answers**

Question-1 --> 'jumped'

Question-2 --> 'abcabcabc'

Question-3 --> [1, 20, 3]

Question-4 --> [42, "everything", 2, "everything"]

Question-5 --> 'Abs...'
