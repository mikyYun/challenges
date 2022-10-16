## What is a prompt box?
A prompt box is a box that allows the user to enter input by providing a text box. A label and box will be provided to enter the text or number

## What is 'this' keyword in JS?
`This` keyword refers to the object from where it was called.

## What is the working of timers in JS?
Timers are used to execute a piece of code at a set time or repeat the code in a given interval. This is done by using the functions `setTimeout`, `setInterval`, and `clearInterval`.

## Symbol for comments in JS?
```js
  // for Single line comments

  /**
   * Multi
   * line 
   * comments
   * */
```

## ViewState vs SessionState
`ViewState` is specific to a page in a session

`SessionState` is specific to user-specific data that can be accessed across all web application pages

## === operator
`===` is called a strict equality operator, which returns true when the two operands have the same value without conversion `AND` same memory address.

## How you can submit a form using JS?
```js
  document.form[ind].submit();
```

## Does JS support automatic type conversion?
Yes, JS does support automatic type conversion. It is the common way of type conversion used by JS developers.

## How can the style/class of an element be changed?
```js
  const doc = document.getElement......()
  doc.style.fontSize = 20;
```

## How to read and write a file using JS?
https://bobbyhadz.com/blog/javascript-read-file-into-array#:~:text=Use%20the%20fs.,get%20an%20array%20of%20strings.
* Using JS extensions
* Using a web page and ActiveX objects
```
// fileSystem
const readFileSync = require("fs")....
```

## What are all the looping structures in JS?
* for
* while
* Do-while

## What is called Variable typing in JS?
It is used to assign number to a variable.

## How can you convert the string of any base to an integer in JS?
```
parseInt
```
parseInt() function is used to convert numbers between different bases. It takes the string to be converted as its first parameter. The second parameter is the base of the given string.

## == vs ===
`==` checks only for equality in value.

`===` stricter equality test and reteurns false if either the value or type of the two variables are different.

## What would be the result of 3+2+"7"?
57 // integer + string

## What do you mean by NULL in JS?
The `NULL` value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object

## What is the function of the delete operator?
`delete` keyword is used to delete the property as well as its value
```js
  const student = {age: 20, major: "methmatics"};
  delete studemt.age;
  student // {major: "methmatics"}
```
