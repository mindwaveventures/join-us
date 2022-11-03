const prompt = require('prompt-sync')();

let string = prompt('Enter your string: ');
let max = 0
let result = ''
string.split(' ').forEach(item => {
    if (item.length > max) {
        max = item.length
        result = item
    }
})
console.log('The longest word in the enetered strinig is : ' + result);