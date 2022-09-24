/** What will the code below output to the console and why ? */

let x = 10;
const byValue = (y) => {
  y = 20;
}
byValue(x);
console.log(x);

// RESULT => 10
// REASON
/** Unlike objects, when primitives are passed to a function, only value is passed.
 * !! NOT the reference to the memory location
 * 
 * changes to the parameter only affect the local function's scope
 */
