const removeFalsy = (ar) => {
    let arr = []
    ar.forEach(item => {
        if (item && item !== '') {
            arr.push(item)
        }
    })
    return arr
}

function main() {
    let array = [42, "everything", '', 2, false, "everything"]
    let result = removeFalsy(array)
    console.log(result);
}

main()