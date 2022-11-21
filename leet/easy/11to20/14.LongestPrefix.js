const findPrefix = (strs) => {
  if (strs.length === 0) return false;
  if (strs.length === 1) return strs[0];
  // find shortest string
  const shortestStr = strs.reduce((a, b) => a.length <= b.length ? a : b);
  // compare shortest string's each character to other strings with index / letter
  const newStrs = strs.filter(str => str !== shortestStr);
  let prefixed = '';
  let filter = true;
  for (let i = 0; i < shortestStr.length; i++) {
    console.log(filter);
    newStrs.map(string => {
      if (filter) {
        console.log("THIS", string[i], shortestStr[i]);
        string[i] === shortestStr[i] ? filter = true : filter = false;
      }
    });
    if (filter) prefixed += shortestStr[i];
  }
  console.log(prefixed);
  return prefixed;
};
// const strs = ["dog", "racecar", "car"];
// const strs = ["flower", "flow", "flight"];
const strs = ["reflower", "flow", "flight"];
findPrefix(strs);