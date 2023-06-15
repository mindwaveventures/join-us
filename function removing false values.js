var removeFalsyValues = function(arr){


      return arr.filter(Boolean);

  };
  
  var values= [42, "everything", "", 2, false, "everything"];

  var truthyValues = removeFalsyValues(values);
  
  console.log(truthyValues);
  