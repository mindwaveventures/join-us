// Find the longest word in a string.

const getLongestWord = (inputstr) => {
  let longstr = "";
  inputstr.split(" ").forEach((el) => {
    longstr = longstr.length > el.length ? longstr : el;
  });
  return longstr;
};
getLongestWord("The quick brown fox jumped over the lazy dog");

// Repeat a string `n` times.

const makeRepeatString = (str, n) => {
  return str.repeat(n);
};
makeRepeatString("abc", 3);

// Remove duplicates in an array

const removeDuplicates = (arr) => {
  return arr.length ? [...new Set(arr)] : [];
};
removeDuplicates([1, 20, 3, 1, 3, 3]);

// Remove falsy values

const removeFalsy = (arr) => {
  return arr.length
    ? arr.filter((el) => {
        if (el) return el;
      })
    : [];
};

// Truncate a string

removeFalsy([42, "everything", "", 2, false, "everything"]);

const addEllipsis = (str, n) => {
  return str.slice(0, 3).concat("...");
};
addEllipsis("Absolute victory", 3);
