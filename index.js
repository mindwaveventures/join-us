const {
  findLongestWord,
  removeDuplicates,
  removeFalsyValues,
  repeatWord,
  truncateString,
} = require("./utils");

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(removeDuplicates([1, 20, 3, 1, 3, 3]));
console.log(
  removeFalsyValues([42, "everything", "", 2, false, "everything", undefined])
);
console.log(repeatWord("abc", 3));
console.log(truncateString("Absolute victory"));
