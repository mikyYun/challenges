/**
 * @param {string} s
 * @return {number}
 */

// CAUTION
// Substring vs SubSequence




const lengthOfLongestSubstring = function (s) {
  const charMap = new Map();
  let length = 0;
  let position = 0; // count starting position
  for (let i = 0; i < s.length; i++) {
    // find next repeating char
    // charMap[s[i]] = i;
    if (charMap[s[i]] !== undefined) {
      // set new starting position because repeating char
      position = Math.max(position, charMap[s[i]] + 1)
      // + 1 because will add below
    }
    // set or update char
    charMap[s[i]] = i;
    // update length with current length and position
    length = Math.max(length, i - position + 1);
  }
  // console.log(charMap, length, position);
  return length;
};
const str = "pwwkew";
const str1 = "abcabcbb"
const str2 = "bbbbbb";
const str3 = " ";
console.log(lengthOfLongestSubstring(str));
console.log("----------------");
console.log(lengthOfLongestSubstring(str1));
console.log("----------------");
console.log(lengthOfLongestSubstring(str2));
console.log("----------------");
console.log(lengthOfLongestSubstring(str3));