# `twob || !twob`

Please put your responses in a file
called `answers.md`. And yes! our humor is dry 🏜

## Introductions

- Who are you? What do you like building?
- Do you own a PC and have a good internet
 connection? Let's hear those specs 💪!
- Your stackoverflow, linkedin, personal site.
Anything you'd want us to see.
- What programming languages have you messed around with?
- What sort of tooling is on your machine?
  - Programming languages, compilers, runtimes etc
  - What OS do you run?
  - What editor/IDE do you use?
- Are you more into front-end or back-end? (If you're
into web development).
- Are you interested in AI/ML, Systems Programming
or anything outside your current domain.
- What are you learning now?

## Let's hack!

Please answer in the language that you're
applying for. We're a JS shop, so answers in JS
get extra 🍪

- Find the longest word in a string.
  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.


   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    <script>
      function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = '';

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

// Example usage
const inputString = 'The quick brown fox jumped over the lazy dog';
const longestWord = findLongestWord(inputString);
console.log('Longest word:', longestWord);

    </script>

</body>
</html>



- Repeat a string `n` times.
  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const stringToRepeat = 'abc';
const repeatCount = 3;
const repeatedString = stringToRepeat.repeat(repeatCount);

console.log(repeatedString);

    </script>
</body>
</html>




- Remove duplicates in an array
  - If `[1, 20, 3, 1, 3, 3]` is the input to your
  function, it should return `[1, 20, 3]`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const array = [1, 20, 3, 1, 3, 3];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray);

    </script>
</body>
</html>



- Remove falsy values
  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`

- Truncate a string
  - If `'Absolute victory'` and `3` are the inputs to
  your function, it should return `Abs...`

## Notes

- We look for style and patterns when reviewing submissions.
- Please __do not__ lift answers from somewhere and
send it to us verbatim.
- Do show off your git kung-fu. Multiple commits? Branch naming?
- If you can't answer everything, thats ok too! Go ahead and raise that PR anyway.

> __வாழ்த்துகள்!__ 🙏
