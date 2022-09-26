/** Consider the following code. What does each line output? */

console.log(new String("yes") === new String("yes"));

console.log("yes" === "yes");

// My Answer
// false / true
// REASON
/** the string 'yes' are equal
 * HOWEVER, 'new' create a new object. so the first comparision is actuall compare two different object
 * 
 * Second comparision is just comparing same two string primitives 
 */