# Part4. from q41

## q41
What kind of error will be thrown if you forget a parenthesis in your for loop?
```
  SyntaxError
```

## q42
The below code is an example of overloading. True or False?
```js
  console.log({a: 1}.toString = "Test");
  // False => default toString method is overridden. not overloaded
```

## q43
JS supports static vfariables on classes. True or false?
```
  True => recent addition as of 2020..
```

## q45
A try statement must always be followed y at least one catch statement. True or False?
```
  False => Try statement may be followed by a finally statement instead a catch statement
```

## q46
Use RegExp literal notation when the RegExp will be changing and use the RegExp constructor function when the RegExp will remain constant. True or False?
```
False =>
  Use RegExp constructor function notation when the RegExp will be changing and use the RegExp will remain constant
```

## q47
Promises are asynchronous in JavaScript
```
  False => Promises are synchronous, however, they often do asynchronous works like making calls to an API
```
```js
  function resolveQuickly(x) {
    return new Promise(res => {
      console.log(x)
    })
  }
  async function asyncTest() {
    const x = resolveQuickly(10);
    console.log(5)
  }
  asyncTest()
  // 10, 5
```

## q48
What is the purpose of `web workers`?
```
  To execute expensive tasks on a separate thread than the main thread
```

## q50
What is the difference between setTimeout() and setInterval()?
```
  setTimeout executes once after a specified time has elapsed
  setInterval executes repeatedly with a given delay between executions.
```

## q51
setInterval interval time includes the time it took to execute the code. True or False?
```
  True ->
    If the interval is set to 100ms and the code block takes 50ms to execute, there will only be a 50ms gap before the block kicks off
```

## q52
The below code compiles. True or False?
```js
  const array = [1, 2, 3];
  for (let i = 0; i < array1.length; array1[1++] = String.fromCharCode(96 + i));
  // True => A for loop can have an empty statement after it
```

## q53
What is the difference in importing a default export vs a named, non-default export?
```
  import name from ...
  import {name1, name2} from ...
```

## q54
Function declarations are hoisted, function expressions are not hoisted.
```
True
```

## q55
What statemenet will show the url from which a module was imported?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta
```js
  import.meta // this will work if experimental support for import.meta is on
```

## q56
What is the difference in console.log, console.error, and console.warn?
```
  depends on browsers...
  => usually error has an error icon or red color
  => warn has warn icon or yellow color
```

## q57
What is the significance of seeing prototype in the following documentation:
Array.prototype.reduce() as opposed to Array.from()?
```
1. prototype indicates reduce is an instance level method
2. the lack of prototype indicates from is a class level method
```

## q58
How does the Maximum Call Stack Exceeded error get triggered?
```
  Infinite recursion
  => recursively calling inself so the "Stack" of function calls waiting to execute grows until a maximum is reached
```

## q59
methods available on the Web API window object for resizing?
```
  resizeBy()
  resizeTo()
  sizeToContent()
```

## q60
What two types can String.prototype.replace() take as the first parameter?
```
  String and regex
```

## q61
What will the code below output to the console and why?
```js
  for (let i = 6; i < 10; i * 1.5) {
    if (i % 2) {
      continue;
    }
    console.log(i)
  }
  // It enters into an infinite loop
  // i * 1.5 doesn't change the value of 'i'
  // change to .... i *= 1.5
```

## q62
Which of the following is a difference between Object.assign() and the spread syntax?
```
Object.assign calls setters, spread syntax does not
```

## q63
Give an example of a one line check to see if a property exists on object dog.
```js
  const dog = {sound: "woof", legs: 4}
  dog.sound
```

## q64
Which of the following is not a way to convert the arguments function object to an array?
```
  1. arguments.assign(arguments)
  2. Array.prototype.slice.call(arguments)
  3. Array.from(arguments);
  4. [...arguments]
  // 1
```

## q65
What is the target phase of event handling?
```
The target phase is the second of the three phases of event handling. The first is capture, the third is bubbling. The target phase is simply the event reaching the target.
* Three phases of event handling => 1. capture, 2. target phase, 3. bubbling
```

## q66
What does the double bang(!!) do?
```
  return the truthy value of an object
```

## q68
How does JS evaluate the truthy-ness or falsey-ness of a value or object in a boolean context?
```
  type coercion
```

## q69
What is the purpose of using an IIFE?
```
  1. setting a varaible value
  2. use in a closure for initializing a value
  3. running a one-time function
```

## q70
What is an example of lexical scope?
```
  1. let self = this => in a parent function, then self is available to an inner function
  2. the scope of an inner function contains the scope of the parent function
```

## q71
What will the code below output to the console and why?
```js
  let a = 3;
  a <<= 1;
  console.log(a);
  // left shift operator moves the bits to the left by the specified amount and assigns the value
  // a << 1 => 6. a = 3
  // a <<= 3 => 6. a = 6
```

## q72
What will the code below output to the console and why?
```js
  badCode = () => {
    let arr = [1, 2, 3, 4];
    const inner = () => {
      return arr.pop(2)
    }
    return inner;
  }
  console.log(badCode());
  // return is the popped value of array
  // answer => 4
```

## q73
What will the code below output to the console and why?
```js
  const obj = {a: 1};
  let obj2 = obj;
  obj2.a = 2;
  console.log(obj.a);
  // 2

  // let obj2 = obj => not copying.
```

## q74
What is the side effect in programming?
```
  A side effect is when a function modifies a state or observable value that affects other parts of the application. This is as opposed to the main effect of the function, which is the value the function returns
```

## q758
Array.prototype.filter() returns an array of all items that did `NOT` pass the test implemented by the provided function. True or False?
```
  False => The opposite is correct, filter returns the items that did pass the test implemented by the provided function.
```