

function goToSidebarPage() {
    window.location.href = "index.html";
}

function findLongestWord() {
    var inputString = document.getElementById("inputString").value;
    const spliteString = inputString.split(" ")
    const lengthWithSort = []
    const finalResult = []
    spliteString.forEach((each, index, array) => {
        lengthWithSort.push(each.length)
        lengthWithSort.sort(function (a, b) { return b - a });
    })
    spliteString.forEach((each, index, array) => {
        if (lengthWithSort[0] === each.length) {
            finalResult.push(each)
        }
    })
    const finalString = finalResult.toString()
    document.getElementById("result").textContent = finalString;
    document.getElementById("inputString").value = ""
}


function removeDuplicates() {
    let inputValue = document.getElementById('inputArray').value;
    let FinalArray = inputValue.split(',').map(function (item) {
        return item.trim();
    });
    // var uniqueArray = [...new Set(FinalArray)];

   const uniqueFilter = FinalArray.filter((each, index, array) => {
         return index === array.indexOf(each)
    })

    const finalString = uniqueFilter.toString()
    document.getElementById("output").textContent = finalString;
    document.getElementById("inputString").value = ""
}


function validateInput(event) {
    let input = event.target.value;
    let numericRegex = /^[0-9,]+$/;
    let errorElement = document.getElementById('error-message');
    if (!numericRegex.test(input)) {
        event.target.classList.add('error');
        errorElement.textContent = 'Please enter numbers only.';
    } else {
        event.target.classList.remove('error');
        errorElement.textContent = ""
    }
}

function repeatString() {

    let inputString = document.getElementById('inputString').value;
    let repeatCount = document.getElementById('repeatCount').value;
    const fullArray = []
    for (let i = 0; i < repeatCount; i++) {
        fullArray.push(inputString + ",")
    }
    const finalResult = fullArray.join("")
    document.getElementById("output").textContent = finalResult;
    document.getElementById("inputString").value = ""
    document.getElementById('repeatCount').value = ""
}

function removeFalsy() {
    let inputString = document.getElementById("inputString").value;
    const myArray = inputString.split(' ')
    const falseArray = []
    const trueVlaue = []
    myArray.forEach((each, index, array) => {
        if (each === "" || each === "false") {
            falseArray.push(each)
        } else {
            trueVlaue.push(each)
        }
    })
    const finalString = trueVlaue.toString()
    document.getElementById("result").textContent = finalString;
    document.getElementById("inputString").value = ""
}

function truncateValue() {
    let inputString = document.getElementById('inputString').value;
    let repeatCount = document.getElementById('repeatCount').value;
    const myValue = []
    if (inputString.length > repeatCount) {
        myValue.push(inputString.substring(0, repeatCount) + "...")
    } else {
        myValue.push(inputString)
    }
    const finalString = myValue.toString()
    document.getElementById("output").textContent = finalString;
    document.getElementById("inputString").value = ""
    document.getElementById('repeatCount').value = ""
}



