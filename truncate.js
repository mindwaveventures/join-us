function truncate(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  console.log(truncate('absoluet barbegq', 5 ))
  