/** What is the return type of the asyc fnction below? */

async function goodbye() {
  return 'goodbye';
}

// Answer
// Promise

/**
 * Async function return Promises.
 * 
 * To get actual return value, we need a 
 * .then()
 * 
 * ex) .then((value) => console.log(value))
 * => value = 'goodbye'
 */
goodbye()
.then(value => console.log(value)) // => return 'goodbye'