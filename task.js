
/*
Find the longest word in a string.
Given The quick brown fox jumped over the lazy dog is the input to your function, it should return jumped 
*/
let inputString = "The quick brown fox jumped over the lazy dog";
let words = inputString.split(' ');
maxlenth = 0;
maxvalues="";
for (let i = 0; i < words.length; i++) {
    if(maxlenth < words[i].length){
        maxlenth = words[i].length;
     maxvalues = words[i];
    }
}
console.log(maxvalues);


/* end Task */