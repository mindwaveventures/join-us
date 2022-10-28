const truncateString = (string, n) => {
  return string.substring(0, n) + "...";
};

const string = "Absolute victory";
console.log(truncateString(string, 3));
