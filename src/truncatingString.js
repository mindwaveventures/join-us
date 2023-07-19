function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + '...';
}

const inputString = 'Absolute victory';
const maxLength = 3;
const truncatedString = truncateString(inputString, maxLength);
console.log(truncatedString);
