/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  let result = "";
  for (let i = 0; num; i ++) {
    while (num >= val[i]) {
      result += rom[i];
      num -= val[i]
    }
  }
  return result; 

};