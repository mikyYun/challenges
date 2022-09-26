/** What is the value of Object.[[Prototype]] ? */

/**
 * a. Object
 * b. null
 * c. {}
 */

// ANSWER : b

/** Inheritance and the prototype chain
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 * 
 * when the browser is seeking the value of an accessed property, it will traverse the prototype chain UNTIL the value is found or UNTIL there are no more prototypes to traverse
 * While null is the value of Object.[[Prototype]], undefined is the returned value
 */