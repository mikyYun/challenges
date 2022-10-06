# Day13

## Part_2
* q21
Which function will modify a string to be URI compliant?
```js
// A. JSON.stringify()
// B. encodeURI()
// C. encodeString()
// D. JSON.parse()
```
1. JSON.stringify()
this method converts a JS value to a JSON string, optionally replacing values if a replacer function is specified or optinally including only the specified properties if a replacer array is specified
```js
  {a: 1, b: 2} => "{"a": "1", "b": "2"}"
```
2. encodeURI()
The encodeURI() function encodes a URI by replacing each instance of certain characters by (one, two, three, or four )excape sequences representing the `UTF-8` encoding of the character (will only be four excape sequences for characters composed of two `surrogate` characters)
3. encodeString()
The encodeString function is used to encode the stated string into bytes with the help of the given encoding scheme.
4. JSON.parse()
This method parses a JSON string, constructing the JS value or object described by the string.

* q22
How are the 64 bits assigned to a number used to store number in JS?<br />
Answer => 52 bits are dedicated to the value, eleven bits to the exponent, and one bit to the sign

* q23
In CS, what is the difference between null and undefined?<br />

`undefined` means a variable has no value because the developers has not set one yet.`null` means the variable was intentionally set to have no value

* q24
What is the technical name of the minus sign (-) in JS ?<br />
Answer => Unary Negation

* q25
The super keyword cannot be used outside of constructor functions. True or False ?<br />
Answer => False.
```js
  super.functionOnParent([args])
  // this is used to invoke a function on the parent of an object if the function has been overridden by the child
```

* q26
What are two ways to access the color value on the cat object ?
```js
  const cat = {
    color: "orange"
  }
  // cat.color || cat["color"] || cat[cat.color]
```
* q27
What is the Stack in JS Runtime?<br />
=> The stack is a line of Frames, which are function calls. The most recent function call is at the top of the stack, and must be executed and popped off the Stack before the next function call can be completed.<br />
When one function calls another function, the new called function is placed at the top of the Stack. The Stack is Last in, First Out, which means the most recently added function must be executed first.

* q28
What is the syntax for hexidecimal excape sequence?(16진수)<br />
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape#description
=> \x. EXAMPLE... "\xB1" => "±"

* q29
Write the code to create a custom made abstract class in vanilla JS. The abstract keyword is not availalble of ES2015 <br />
https://linuxhint.com/javascript-abstraction/
```js
  class Abstract {
    constructor() {
      if (new.target === Abstract) {
        throw new Error("Error")
      }
    }
  }
```

* q30
What will the code below output to the console and why?
```js
const badMap = new Map();
badMap.set('a', 1);
badMap.b = 2
console.log(badMap)
/**
 * assign badMap => {}
 * badMap.set("a", 1) => badMap{"a" => 1}
 * badMap.b = 2 => not set to badMap
 * badMap = Map(1) {"a" => 1}
*/
```
