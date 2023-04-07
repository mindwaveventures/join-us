const truncateString = (inputString, truncateAfter = 3) =>
  inputString.trim().substring(0, truncateAfter).concat("...");

module.exports = truncateString;
