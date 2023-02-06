const repeatStringNTimes = (string, times) => times > 0 ? string.repeat(times) : "";

const result = repeatStringNTimes("abc", 3);

console.log("result", result)