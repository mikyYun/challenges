const longestContinuousSubstring = (s) => {
  /** APPROACH
   * CREATE counter Object
   * CREATE A NEW KEY as START
   * UPDATE VALUE of the START
   * 
   * FIND another START
   * UPDATE the new START
   * 
   * RETURN the longest(length)
   */


  let start = -1;
  const counter = {};
  let longest

  if (s.length === 1) return 1;
  for (let i = 0; i < s.length; i++) {
    const sequenceChar = (s.charCodeAt(i + 1) - s.charCodeAt(i)) === 1;
    if (sequenceChar) {
      if (start < 0) {
        start = i;
      }
      if (start >= 0) {
        counter[start] = i + 1;
      }
    }
    if (!sequenceChar) {
      if (start >= 0) {
        const compareTarget = counter[start] - start;
        if (!longest || longest <= compareTarget) longest = compareTarget;
        start = -1;
      }
    }

  }
  return !longest ? 1 : longest + 1;
};
console.log(longestContinuousSubstring("abcde"));
// longestContinuousSubstring('abcdefghijklmnopqrstuvwxyz');
// console.log(longestContinuousSubstring("yrpjofyzubfsiypfre"));

