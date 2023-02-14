function Duplicates(array) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
      let exists = false;
      for (j = 0; j < results.length; j++) {
        if (array[i] === results[j]) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        results.push(array[i]);
      }
    }
    return results;
  }

  const aa = [1, 20, 3, 1, 3, 3];

  Duplicates(aa)


