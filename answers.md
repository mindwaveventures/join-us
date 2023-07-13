## Introductions
- Who are you? What do you like building?
    Deepak, A full stack developer to develop dynamic webpages using ReactJs and create RestAPI's using ExpressJs.

- Do you own a PC and have a good internet connection? Let's hear those specs 💪!
    Yes, I have a laptop

    Specs
    OS : Windows 10
    Ram : 4gb
    Processor : inteli3

- Your stackoverflow, linkedin, personal site. Anything you'd want us to see.
    linkedin : https://www.linkedin.com/in/deepak-s-427509191

- What programming languages have you messed around with?
    JavaScript

- What sort of tooling is on your machine?
  - Programming languages, compilers, runtimes etc
       JavaScript, JavaScriptCompiler, Node
  - What OS do you run?
       Windows 10
  - What editor/IDE do you use?
       Visual Studio Code Editor

- Are you more into front-end or back-end? (If you're into web development).
    Both front-end and back-end

- Are you interested in AI/ML, Systems Programming or anything outside your current domain.
    Yes, System Programming

- What are you learning now?
    React-Native, Typescript and Docker.  

## Let's hack!
- Find the longest word in a string.
  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

  - Solution:

  function findLargestString (inputString) {
    return inputString
     .split(' ')
     .reduce(
     (result, currentValue) =>
     currentValue.length > result.length ? currentValue : result,
     ''
    )
  }
  findLargestString(`The quick brown fox jumped over the lazy dog`)

- Repeat a string `n` times.
  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`

  -Solution:
  function reepeatString (inputSTring, repeatTime) {
    let repeatedStringValue = ''
    for (i = 0; i < repeatTime; i++) {
      repeatedStringValue += inputSTring
    }
    return repeatedStringValue
  }
  reepeatString('abc', 3)

- Repeat a string `n` times.
  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`
   
  -Solution
  function removeDuplicate (inputValue) {
    return [...new Set(inputValue)]
  }
  removeDuplicate([1, 20, 3, 1, 3, 3])

- Remove falsy values
  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`

  -Solution
  function removeFalseData (innputValue) {
     return innputValue.filter(value => {
      if (value) {
       return value
      }
   })
  }
  removeFalseData([42, 'everything', '', 2, false, 'everything'])

- Truncate a string 
  - If `'Absolute victory'` and `3` are the inputs to your function, it should return `Abs...`

  -Solution
  function truncateString (inputString, stringLimit) {
    return inputString.substring(0, stringLimit) + '...'
  }
  truncateString('deepak', 3)

