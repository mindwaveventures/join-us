const stringTruncate = (str, length) => {
    var dots = str.length > length ? '...' : '';
    return str.substring(0, length) + dots;
  };
  
  const result = stringTruncate('Absolute victory', 3);
  
  console.log("result", result)