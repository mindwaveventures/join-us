# Daniel Arulraj.J
- Find the longest word in a string.
  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.
- 
```md
```js
 function toLength(input){
  var split = input.split(" ");
  var text_length = [];
  for(var i=0;i<split.length;i++){
    text_length.push(split[i].length);
  }
  var max = Math.max(...text_length);
  let key = Object.keys(text_length).find(k=>text_length[k]===max); 
  console.log(split[key]);
  }
  var input = 'The quick brown fox jumped over the lazy dog';
  toLength(input);
````
- Repeat a string `n` times.
  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`
```md
```js
function toPrint(input){
  var print = '';
  for(var i=0; i<=50; i++){ 
    print+=input;
  }
  console.log(print);
}
toPrint('abc');
````
- Remove duplicates in an array
  - If `[1, 20, 3, 1, 3, 3]` is the input to your
  function, it should return `[1, 20, 3]`
```md
```js
function toFilter(input){ 
 var main = [];
 for(var i=0;i<input.length;i++){
 	console.log(input[i]);
  if(!main.includes(input[i])){
  	main.push(input[i]);
  }
 }
 console.log(main);
}
var array = [1, 20, 3, 1, 3, 3];
toFilter(array);
````
- Remove falsy values
  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`
```md
```js
function toFilterFalse(input){ 
 var main = [];
 for(var i=0;i<input.length;i++){
  if(input[i]!=''){
  	main.push(input[i]);
  }
 }
 console.log(main);
}
var array = [42, "everything", "", 2, false, "everything"];
toFilterFalse(array);
````
- Truncate a string
  - If `'Absolute victory'` and `3` are the inputs to
  your function, it should return `Abs...`

 ```md
```js
function toSubstring(input,output){
 console.log(input.substring(0,output));
}
toSubstring('Absolute victory',3);
 ````
> நன்றி!__ 🙏