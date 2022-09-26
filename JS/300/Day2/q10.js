/** The following is valid syntax for printing 'goodbye' T or F? */

let goodbye = async () => {
  return "Goodbye"
};
goodbye().then(console.log)

// Answer
// TRUE
// Line 6 is a valid shorthand for passing the returned value of an async function to a callback

// original
goodbye().then(res => console.log(res))