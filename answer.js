/**
 * Find the longest word in a string.
 */
const str = `The quick brown fox jumped over the lazy dog`;
function findLongestString(words) {
  const givenString = words.split(' ');
  let longestWord;
  let longLength = 0;
  givenString.forEach((el) => {
    if (el.length > longLength) {
      longestWord = el;
      longLength = el.length;
    }
  });
  return longestWord;
}
findLongestString(str);

/**
 * Repeat a string n times.
 */
((char) => {
  let result = '';
  for (let i = 0; i < char.length; i++) {
    result += char;
  }
  return result;
})('abc');

/**
 * Remove duplicates in an array
 */
const arr = [1, 20, 3, 1, 3, 3];
const removeDublicates = (array) => {
  const givenArray = [...array];
  let result = [...array];

  for (let i = 0; i < givenArray.length; i++) {
    let count = 0;
    for (let j = 0; j < result.length; j++) {
      if (givenArray[i] === result[j]) {
        count += 1;
      }
      if (count > 1) {
        result.splice(j, 1);
      }
    }
  }

  return result;
};
removeDublicates(arr);

/**
 * Remove falsy values
 */
const sample = [42, 'everything', '', 2, false, 'everything'];
const removeFalseValue = () => {
  let resultArray = [];
  sample.forEach((el) => {
    if (el) {
      resultArray.push(el);
    }
  });

  return resultArray;
};
removeFalseValue(sample);

/**
 * Truncate a string
 */
const sampleStr = `Absolute victory`;
((char) => {
  return char.substring(0, 3) + '...';
})(sampleStr);
