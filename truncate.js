const prompt = require('prompt-sync')()

const truncate = (string, num) => {
    return string.slice(0, num)
}
const main = () => {
    let string = prompt('Enter your string: ')
    let num = Number(prompt('Enter the number: '))
    const result = truncate(string, num)
    console.log(result);
}

main()