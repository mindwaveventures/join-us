import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [words, setWords] = useState(
    "The quick brown fox jumped over the lazy dog"
  );
  const [longestWord, setLongestWord] = useState("");
  const [inString, setInString] = useState("abc");
  const [repeatStr, setRepeatStr] = useState("");
  const [numArgs, setNumArgs] = useState(3);
  const [uniqueVal, setUniqueVal] = useState([]);
  const [orginalArr, setOrginalArr] = useState([]);
  const [inTrunString, setInTrunString] = useState("Absolute victory");
  const [innumArgs, setInNumArgs] = useState(3);
  const [dupInVal, setDupInVal] = useState("");
  const [falsyInVal, setFalsyInVal] = useState(
    "42, everything, 2, false, everything, 0, null"
  );
  useEffect(() => {
    findLongestWord();
    repeatString();
    removeDuplicate();
    removeFlesyArray();
  }, [words, inString, numArgs]);
  function findLongestWord() {
    const sentence = words.split(" ");
    let longest = "";
    for (const word of sentence) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    setLongestWord(longest);
  }

  function repeatString() {
    setRepeatStr(inString.repeat(numArgs));
  }

  function removeDuplicate() {
    var arr = [1, 20, 3, 1, 3, 3];
    var uniqueArr = [...new Set(arr)];
    setUniqueVal(uniqueArr);
  }

  function removeFlesyArray() {
    var orgArr = [42, "everything", "", 2, false, "everything"];
    const resArr = orgArr.filter(Boolean);
    setOrginalArr(resArr);
  }
  useEffect(() => {
    const valuesArray = dupInVal.split(",").map((value) => value.trim());
    const uniqueArray = [...new Set(valuesArray)];
    setUniqueVal(uniqueArray);
  }, [dupInVal]);

  useEffect(() => {
    const valuesArray = falsyInVal.split(",").map((value) => value.trim());
    console.log(valuesArray);
    for (var index in valuesArray) {
      if (valuesArray[index] == "false") {
        valuesArray[index] = false;
      }
      if (valuesArray[index] == "undefined") {
        valuesArray[index] = undefined;
      }
      if (valuesArray[index] == "0") {
        valuesArray[index] = 0;
      }
      if (valuesArray[index] == "NaN") {
        valuesArray[index] = NaN;
      }
      if (valuesArray[index] == "null") {
        valuesArray[index] = null;
      }
    }
    console.log(valuesArray);

    const trueValue = valuesArray.filter((value) => Boolean(value) == true);
    setOrginalArr(trueValue);
  }, [falsyInVal]);

  return (
    <>
      <div className="App">
        {/* Find the longest  Word */}
        <p>
          <strong>Find The Longest Word</strong>
        </p>
        <textarea
          value={words}
          rows={5}
          onChange={(e) => setWords(e.target.value)}
        />
        <p>
          Longest Word <strong>{longestWord}</strong>
        </p>

        {/* Repeat a string n times */}
        <p>
          <strong>Repeat a string n times.</strong>
        </p>
        <span>Enter your String</span>
        <input
          type="text"
          style={{ marginLeft: "2%", padding: "3px" }}
          value={inString}
          onChange={(e) => setInString(e.target.value)}
        />

        <span style={{ marginLeft: "2%" }}>Enter your n Arguments</span>
        <input
          type="number"
          style={{ marginLeft: "2%", padding: "3px" }}
          value={numArgs}
          onChange={(e) => setNumArgs(e.target.value)}
        />
        <p>
          Ans : <strong>{repeatStr}</strong>
        </p>

        {/* Remove duplicate in an array */}
        <p>
          <strong>Remove duplicate in an array </strong>
        </p>
        <p>Please Enter camma seprater value</p>
        <textarea
          value={dupInVal}
          onChange={(e) => setDupInVal(e.target.value)}
          rows={5}
          placeholder="eg: 5, 6, 4, 5"
        />
        <p>
          Ans : <strong>[ {uniqueVal.join(", ")} ]</strong>
        </p>

        {/* Remove duplicate in an array */}
        <p>
          <strong>Remove falsy values</strong>
        </p>
        <p>Please Enter camma seprater value</p>
        <textarea
          value={falsyInVal}
          onChange={(e) => setFalsyInVal(e.target.value)}
          rows={5}
          placeholder="eg: 5, 6, 4, 5"
        />
        <p>
          Ans : <strong>[ {orginalArr.join(", ")} ]</strong>
        </p>

        {/* Truncate a string */}
        <p>
          <strong>Truncate a string.</strong>
        </p>
        <span>Enter your String</span>
        <input
          type="text"
          style={{ marginLeft: "2%", padding: "3px" }}
          value={inTrunString}
          onChange={(e) => setInTrunString(e.target.value)}
        />

        <span style={{ marginLeft: "2%" }}>Enter your n Arguments</span>
        <input
          type="number"
          style={{ marginLeft: "2%", padding: "3px" }}
          value={innumArgs}
          onChange={(e) => setInNumArgs(e.target.value)}
        />
        <p>
          Ans : <strong>{inTrunString.substring(0, innumArgs)}</strong>
        </p>
      </div>
    </>
  );
}

export default App;
