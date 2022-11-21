/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * Example 1:
   Input: x = 123
   Output: 321
 * Example 2:
   Input: x = -123
   Output: -321
   
 * Example 3:

   Input: x = 120
   Output: 21
 * Constraints: 
  -2**31 <= x <= 2**31 - 1
 */


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // typeof x = number
  // check minus
  let isMinus = x < 0 && true;
  if (isMinus) x *= -1;

  // change number to string
  x = String(x).split("").reverse().join("");
  // over limit return 0
  if (x > Math.pow(2, 31) - 1) return 0;
  if (isMinus) x *= -1;
  return x;
};
reverse(130)
reverse(-130)