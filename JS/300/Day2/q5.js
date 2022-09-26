/** What will the code below output to the console and why? */

const x = new String("tricky");
const y = x;

console.log(x === y);

// My Answer
// true

// REASON
/** variable 'x' assign a unique object
 * variable y assign x which is a unique object
 * 
 * Actually this is
 * const y = x = new String("tricky")
 * which means y = x
 * so it is true
 */