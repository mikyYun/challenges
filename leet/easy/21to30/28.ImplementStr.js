const strStr = (haystack, needle) => {
  // passed
  if (needle.length === 0 || haystack == needle) return 0
  if (!haystack.includes(needle)) return -1
  const newHaystack = haystack.split(needle)
  return newHaystack[0].length
};
// const haystack = "aaaaa";
// const needle = "bba"
const haystack = "hello";
const needle = "ll"
console.log(strStr(haystack, needle))
// console.log("hh".length)
// console.log(strStr("a", "a"))