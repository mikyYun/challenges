/** Recall the functions are objects in JS. What does the following print? */

function myFunc() {};
console.log(typeof myFunc);

// functions are objects in JS but typeof myFunc prints "function"

typeof myFunc() // => undefined

function test() {
  return 1
}
console.log(typeof test) // function
console.log(typeof test()) // number