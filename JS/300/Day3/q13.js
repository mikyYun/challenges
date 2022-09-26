/** output to the console and why? */

let x = 10;
function myFunc(y) {
  y = 12;
}
myFunc(x);
console.log(x)

// 10
// Primitives are passed by value, not by reference. y = 12 doesn't affect the original variable