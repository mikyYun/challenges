// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
const mySqrt = (x) => {
  if (x === 0 || x === 1) return x;
  for (let i = 0; i <= x; i++) {
    if (i * i > x) return i - 1;
  }
};
const x = 8;
console.log(mySqrt(x));
console.log(mySqrt(15));