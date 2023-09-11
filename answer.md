Introduction

Who are you? What do you like building?
I am Nigila, holding an M.Sc in Computer Science from Pondicherry University.  With over 3+ years of professional experience, I specialize as a full stack Magento Developer.  During my career, I have had the opportunity to with with multiple Magento projects and migrations as well as integration of Magento websites to React Native app.  And I have successfully launched and maintaned 5+ websites.  Apart from Magento, I have also shown my interest in other areas of web development including React Native, ReactJs, NodeJs, MongoDB,  Wordpress etc., I like to build user friendly websites, and optimizing the user experience and integrating latest technologies.

Do you own a PC and have a good internet connection?
Yes I have.

Your stackoverflow, linkedin, personal site. Anything you'd want us to see.
My LinkedIn: https://www.linkedin.com/in/nigila-murugan-567635286
I currently don't have a Stack Overflow profile or personal website. However, if it is necessary, I can create these profiles or a personal website to better present my skills and experiences.

What programming languages have you messed around with?
Php, Javascript and Python Basic 


What sort of tooling is on your machine?
Programming Languages
Php-7.3, Python-3.10, NodeJs-16

What OS do you run?
Im currently using Ubuntu22.04

What editor/IDE do you use?
Visual Studio Code with the needed extension for the programming languages

Are you more into front-end or back-end? (If you're into web development).
Back-end

Are you interested in AI/ML, Systems Programming or anything outside your current domain.
Yes im interested, but i don't get any opportunity to work with AI/ML.  Apart from working with Magneto development I have worked on building new Extensions for the enhancement of Website.

What are you learning now?
Im currently learning GraphQl which is like API to get the information from website using API for an reactJs app.  Also im learing on how to publish extension on php packagist and in magento marketplace.  And also im currently learning to get Adobe Magento Marketplace Certification



Technical Questions

1. Find the longest word in a string.
Php
$string = "Actions speak louder than words.";

function longestString($string) {
    //explode the given string space
    $strExploded  = explode(' ', $string);

    $maxLength = 0;
    $maxText = '';

    // loop through the exploded string
    foreach ($strExploded as $word) {
        // find the loop string with the max lenth variable
        if (strlen($word) > $maxLength) {
            // update the maxLength if the condition statifies
            $maxLength = strlen($word);
            $maxText = $word;
        }
    }
    return $maxText;
}

echo longestString($string);

Outputs: Actions


Javascript
function longestString(string) {
  var strExploded = string.split(' ');
  var maxLength = 0;
  var maxText = '';
  for(var i = 0; i < strExploded.length; i++){
    if(strExploded[i].length > maxLength){
	    maxLength = strExploded[i].length;
        maxText = strExploded[i];
    }
  }
  return maxText;
}
var string = "Actions speak louder than words.";
console.log(longestString(string));

Output: Actions


2. Repeat a string n times.

$stringToRepeat = "php";
$repeatCount = 5;

function repeatString($string, $repeat){
    $finalString = "";
    // loop until the repeact count length
    for($i = 0; $i < $repeat; $i++){
        // append the string to the previous one
        $finalString .=$string;
    }
    // return the final string
    return $finalString;
}

echo repeatString($stringToRepeat, $repeatCount);

Output: phpphpphpphpphp


Javascript
function repeatString(string, repeat) {
    var finalString = '';
    for(var i = 0; i < repeat; i++){
        finalString += string;
    }
  return finalString;
}
var stringToRepeat = "javascript";
var repeatCount = 2;
console.log(repeatString(stringToRepeat, repeatCount));

Output: javascriptjavascript;

3. Remove duplicates in an array
Php
$array = [1, 20, 3, 1, 3, 3];

function removeDuplicate($array){
    return array_unique($array);
}
print_r(removeDuplicate($array));

Output: Array ( [0] => 1 [1] => 20 [2] => 3 ) 


Javascript

function removeDuplicate(array){
    const unique = [];

    for (const value of array) {
        if (!unique.includes(value)) {
            unique.push(value);
        }
    }
    return unique;
}
var array = [1, 20, 3, 1, 3, 3];

console.log(removeDuplicate(array));

Output: [1, 20, 3]

4. Remove falsy values

Php
function removeFalseValues($withFalseValues){
    $withoutFalseValues = [];
    foreach($withFalseValues as $withFalseValue){
        // check the value has false value or empty and push to the not false values array
        if($withFalseValue){
            array_push($withoutFalseValues, $withFalseValue);
        }
    }
    return $withoutFalseValues;
}

$arrayWithFalseValues = [42, "everything", "", 2, false, "everything"];
print_r(removeFalseValues($arrayWithFalseValues));

Output: Array ( [0] => 42 [1] => everything [2] => 2 [3] => everything )


Javascript
function removeFalseValues(withFalseValues){
    const withoutFalseValues = [];
    for (const withFalseValue of withFalseValues) {
        // check the value has false value or empty and push to the not false values array
        if (withFalseValue) {
            withoutFalseValues.push(withFalseValue);
        }
    }
    return withoutFalseValues;
}
var arrayWithFalseValues = ["test", false, "", "nigila"];
console.log(removeFalseValues(arrayWithFalseValues))

Output: ['test', 'nigila']

5. Truncate String

Php
function truncateString($string, $maxChar){
    return substr($string, 0, $maxChar);
}

$stringToTruncate = "Absolute victory";
$maxChar = 3;

echo truncateString($stringToTruncate, $maxChar);

Output: Abs


Javascript 

function truncateString(string, maxChar){
    return string.substring(0, maxChar);
}
const string = "Absolute victory";
const maxChar = 3;
console.log(truncateString(string, maxChar));

Output: Abs




Thank you
