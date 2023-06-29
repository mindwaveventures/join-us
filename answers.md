Hell Team, thank you for giving me a wonderful opportunity to explore my skills with these assigned tasks. Herenby I have attached my anaswers for all the five tasks in one by one manner.

1.  Find the longest word in a string.

    var sentence = "The quick brown fox jumped over the lazy dog";
    var words = sentence.split(" ");

    var L = "";
    var SL = "";
    for (var i = 0; i < words.length; i++) {
    if (words[i].length > L.length) {
    SL = L;
    L = words[i];
    } else if (words[i].length > SL.length) {
    SL = words[i];
    }
    }
    console.log("Longest word: " + L);
    console.log("Second longest word: " + SL);
    console.log("Last word: " + words[words.length - 1]);

    var center = Math.round(words.length / 2) - 1;
    console.log("Center word: " + words[center]);

2.  Repeat a string n times.

    function Repeat_String(str, n) {
    let result = "";

        for (let i = 0; i < n; i++) {
          result += str;
        }

        return result;

    }
    console.log(Repeat_String("abc", 3));

3.  Remove duplicates in an array

    function Remove_Duplicates(arr) {
    let similar = [];

        for (let i = 0; i < arr.length; i++) {
          if (!similar.includes(arr[i])) {
            similar.push(arr[i]);
          }
        }
        return similar;

    }

    console.log(Remove_Duplicates([1, 20, 3, 1, 3, 3]));

4.  Remove falsy values

    function Remove_Falsy(arr) {
    let remove = [];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
    remove.push(arr[i]);
    }
    }
    return remove;
    }

        console.log(Remove_Falsy([42, "everything", "", 2, false, "everything"]));

5.  Truncate a string

        function Truncate_String(str, n) {
        if (str.length > n) {
          return str.slice(0, n);
        } else {
          return str;
        }

    }

    console.log(Truncate_String("Absolute victory", 3));
