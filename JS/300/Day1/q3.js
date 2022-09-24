/** Consider the following code. What will it log to the console and why */

let x = 5;
let x = 10;

console.log(x);

// MY ANSWER
// will throw error
// WHY ? 
// declarations on same variable in the same scope

/** HOWEVER
 * let x = 5;
 * if (x) {
 * let x = 10;
 * console.log(x);
 * };
 * 
 * Works.
 */