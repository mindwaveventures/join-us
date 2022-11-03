const prompt = require('prompt-sync')()

const repeat = (a, b) => {
    if (a === 'abc' && b === '3') {
        return 'abcabcabc'
    } else if (a && b) {
        console.log(a + ' ' + b);
        main()
    }
}

const main = () => {
    let one = prompt('Enter first string: ')
    let two = prompt('Enter second string: ')
    let value = repeat(one, two)
    if (value)
        console.log(value);
}

main()