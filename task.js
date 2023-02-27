// Find the longest word in a string
function longString(longstring){
    if(longstring!=''){
        let ls=longstring.split(' ')
        if(ls.length > 1){
            let lenT='';
            for(i=0;i<ls.length;i++){
                if(lenT.length < ls[i].length) lenT=ls[i];
            }
            return lenT;
        }else{
            return ls[0];
        }
    }else{
        return null;
    }
}

let longstring="The quick brown fox jumped over the lazy dog";
console.log("Longest Word :", longString(longstring));


// Repeat a string n times

/** Method 1 */
function RepeatStringMethodOne(repeatstring,n){
    if(repeatstring!=''){
        return repeatstring.repeat(n)
    }else{
        return '';
    }
}

/** Method 2 */
function RepeatStringMethodTwo(repeatstring,n){
    let rs='';
    if(repeatstring!=''){
      for(i=0;i<n;i++){
        rs+=repeatstring;
      }
      return rs;
    }else{
        return '';
    }
}

let repeatstring="abc";
let repeatTime=3;
console.log("Repeat a string :", RepeatStringMethodOne(repeatstring,repeatTime));
console.log("Repeat a string :", RepeatStringMethodTwo(repeatstring,repeatTime));

/** Remove duplicates in an array */
function duplicateArray(duplicateArr){
    let rda=[];
    for(i=0;i<duplicateArr.length;i++){
        if(rda.indexOf(duplicateArr[i])===-1){
            rda.push((duplicateArr[i]))
        }
    }
    return rda;
}

let duplicateArr=[1, 20, 3, 1, 3, 3];
console.log("Remove duplicates in an array :", duplicateArray(duplicateArr));

/** Remove false values */

function removeFalseValueArr(romveFasleArr){
    let rda=[];
    for(i=0;i<romveFasleArr.length;i++){
        if(romveFasleArr[i]!=false && romveFasleArr[i]!=''){
            rda.push((romveFasleArr[i]))
        }
    }
    return rda;
}

let romveFasleArr=[42, "everything", "", 2, false, "everything"];
console.log("Remove false values :", removeFalseValueArr(romveFasleArr));

/** Truncate a string */

function truncateString(truncatestring,n){
    if(truncatestring.length > n){
        return truncatestring.substr(0,n)+'...';
    }else{
        return truncatestring;
    }
}

let truncatestring="Absolute victory";
let tn=3;
console.log("Remove false values :", truncateString(truncatestring,tn));
