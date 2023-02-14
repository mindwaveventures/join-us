let arrt = [42, "everything", "", 2, false, "everything"]

function removeFalse(arrt) {

  return arrt.filter(Boolean);
}
  
console.log(removeFalse(arrt));