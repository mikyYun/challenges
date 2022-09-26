/** What of the following is not a difference between typeof and instanceof? */

/**
 * a. typeof returns a type and instance of returns a boolean
 * b. instanceof requires TypeScript and typeof does not
 * c. typeof takes the variable name on the right while instanceof takes a value on the left and right
 */

// ANSWER
// b. neither typeof nore instanceof require Typescript. both are native to JS

// EXAMPLE
const a = 'string'
const b = 2
const b_str = '2'
const c = true
const e = [a, b, b_str, c]

console.log(typeof a, typeof b, typeof b_str, typeof c, typeof e) // string, number, string, boolean, object

function Car(make, model, year) {
  this.make = make;
  this.model = model
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(typeof auto, auto instanceof Object, auto instanceof Array) // object, true, false