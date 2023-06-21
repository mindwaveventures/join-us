
// 1. Longest String
const longeststring =(string)=>{

    const word = string.split(' ');
    let longestWord = '';
    for (let i=0;i<word.length ;i++){
        if(word[i].length > longestWord.length){
            longestWord=word[i]
        }
    }
    return longestWord;

}

const inputString = 'The quick brown fox jumped over the lazy do';
const longestWord = longeststring(inputString);


console.log(longestWord);



//2.repeatString

const repeatString = (string,n)=>{
return string.repeat(n)
}

const repeatStrings = 'abc';
const repeatStr = repeatString(repeatStrings,3)
console.log(repeatStr);

//3.remove duplicate 

const removeDuplicates=(arr)=>{
    return [...new Set(arr)]
}

const inputArray = [1,20,3,1,3,3];

const uniqueArray = removeDuplicates(inputArray)

console.log(uniqueArray);

//4.Remove falsyvalue

const removeFalsyValue =(arr)=>{
    return arr.filter(Boolean)
}

const inputValues = [42,"everything","",2,false,"everything"]
const filterValues = removeFalsyValue(inputValues);
console.log(filterValues);


//5.Trungate String

const truncatString = (str,num)=>{

    if(str.length <= num){
        return str
    }else{
        return str.slice(0,num) + '...'
    }
}

const inputStr = 'Abosolute victory';
const truncateStrings = truncatString(inputStr,3);
console.log(truncateStrings);


