const lengthOfLastWord = (s) => {
  const stringArr = s.trim().split(/\s+/);
  return stringArr[stringArr.length - 1].length;
};
// const s = "Hello World    ";
const s = "   fly me   to   the moon  "; // starting empty spaces return empty string '' with .split only
// use .trim()
// .trim() method ?? 
console.log(lengthOfLastWord(s));