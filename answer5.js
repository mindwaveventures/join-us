const truncate = (str, num) => {
  return str.slice(0, num) + "...";
};

console.log(truncate("Absolute victory", 3));
