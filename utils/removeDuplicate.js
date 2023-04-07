function removeDuplicates(iterable = []) {
  const hashMap = iterable.reduce((hash, value) => {
    if (hash[value] === undefined) {
      hash[value] = value;
    }
    return hash;
  }, {});

  return Object.values(hashMap);
}

module.exports = removeDuplicates;
