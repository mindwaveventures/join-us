//Function to repeat the given string N times
function repeatStringNtimes(str, count) {
    var data = "";

    for (var i = 0; i<count;i++){
        data += str;
    }

    console.log(data)
}

var inputString = "abc";
var result = repeatStringNtimes(inputString, 3);