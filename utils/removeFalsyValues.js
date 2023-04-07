const removeFalsyValues = (iterable = []) =>
  iterable.filter((value) => Boolean(value));

module.exports = removeFalsyValues;
