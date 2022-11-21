const plusOne = (digits) => {
  // console.log(digits)
  // let numDigits = Number(digits.join("")) // Number only keeps about 17 decimal places
  // numDigits = numDigits + 1;
  // digits = String(numDigits).split("")
  // return digits

  // for(let digit in digits) {
  //   console.log(digit)
  //   if (digit === digits.length - 1) {
  //     digits[digit] += 1;
  //   }

  // }

  for (let i = digits.length - 1; i >= 0; i --) {
    // increase first
    digits[i] ++;
    if (digits[i] === 10) {
      digits[i] = 0; // the digits[i] to 0
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
// const digits = [1, 2, 3]
// const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// const digits = [9]
const digits = [9, 9]
console.log(plusOne(digits))