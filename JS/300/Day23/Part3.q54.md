# Part3. from q54

## q54
What is the syntax difference in function declarations and function expressions?
```js
  function theFunction() {
    console.log("HEY")
  }
  
  const theFunction = function() {
    console.log("BYE")
  }

  // The function name, which can be omitted in function expressions to create anonymous function.
  // function expression can be used as an IIFE(Immediately Invoked Function Expression)
```

## q55
Import can be called as a function. True or False?
```
=> True. import can be called dynamically and it returns a promise. Do this if a module is not needed at load time
```

## q56
What does the following code print to the console and why?
```js
  console.log(x);
  x = 5;
  if (x) {
    var x = 10;
    console.log(x);
  }
  // undefined / 10
```

## q57
What is the purpose of the ARray reduce()?
```
reduce the array to a single value.
How? By calling a function on every element of the array and `accumulating` the return values in an accumulator variable
```

## q58
What is memorization?
```
  Increasing a function's performance by caching its previously computed results
```

## q59
Create an example of an abstract class in JS
```js
  // Can onpy create an abstract class if TypeScript or another tying superset is enabled.
  abstract class Printer {
    constructor() {
      print1(): void{
        console.log("printing")
      }
      abstract print2(): void;
    }
  }
```

## q60
Give an example of using String.prototype.match to run a string through a regex
```js
  const sentence = "This is the Test Sentence";
  const regex = /[A-Z]/g; // get all capital letter
  console.log(sentence.match(regex)) // ["T", "T", "S"]
```

## q61
What will the code below output to the console and why?
```js
for (let i = 6; i > 0; i -= 2) {
  if (i % 2) continue;
  console.log(i)
}
// 6, 4, 2
```

## q62
Duplicated property names on an object are considered a syntax error. True or False?
```
False => In ES5 strict mode, duplicate property name threw a SyntaxErrror. BUT since ES6 it is no longer an error. Instead, the most recent assignment overrides the old assignment. This decision was made because property names can now be computed. 
```

## q63
The following is incorrect syntax
```js
  function foo(arg) {
    let arg = 1;
  }
  // True => redeclaration of a formal parameter
```

## q64
What is the name of the array-like object that contains the values of all objects passed to the function?
```
  Arguments => The arguments object is accessible inside all non-arrow functions
```

## q65
What is the third parameter, true, used for in the below code?
```js
element.addEventListener('click', e => console.log(element.eventPhase), true);
// Enabling catching an event on capture phase
```

## q66
When considering coercion, what is a wrapper object?
```js
  // An object wrapped around a primitive in order to "give" the primitive properties
  const str = "123";
  console.log(str.length);
```