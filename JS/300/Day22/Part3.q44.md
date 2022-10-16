# Part3. q44

## q44
What does the below code output to the console and why?
```js
  function Dog(name) {
    this.name = name;
  }
  const buddy = new Dog("buddy");
  const rover = Object.create(buddy);
  console.log(Object.getPrototypeOf(rover)); // Dog {name: "buddy"}
  console.log(Object.getPrototypeOf(buddy)); // {constructor: f}

  // Object.getPrototype(object) returns a reference to the prototype of an object. The prototype of rover is the buddy object, and the prototype of the buddy object is the Dog class
```

## q45
What does the below code output to the console and why?
```js
  let x = (1, 2, 3);
  console.log(x); // 3
```

## q46
What are some differences in the RegExp literal notation and constructor?
```
1. The literal notation's parameters are enclosed between slashes and have no quotation marks
2. The literal notation is evaluated at compile time
3. The constructor function does not use slashes but has quotes
4. The constructor is evaluated at runtime
```

## q47
What is the order of printing?
```js
function resolveQuickly(x) {
return new Promise(resolve => {
setTimeout(() => {
console.log(x)
}, 1);
});
}
async function asyncTest() {
var x = resolveQuickly(10);
console.log(5);
}
asyncTest();

// 5, 10 => no await. Since the Promise execution contains a setTimeout, it will be asynchronous
```

## q48
\Where did the name JS originate?
```
  JS was originally developed at Netscape in 1995 and was supposed to be called LiveScript. However, the name was changed to JS because Java was a popular language.
```

## q49
Which of the following is `NOT` an advantage promises have over old-style callbacks?
```
A)  execution speed
B)  .then() chaining
C)  promise callbacks are always called in the order they are placed in the event queue
D)  better error handling
E)  promises avoid inversion of control

// A. execution speed
```

## q50
A do-while loop always executes at least once. True or False?
```
True => `do` portion of the do-while is entered into before any truthy evaluation is performed.
```

## q51
Show an example of setTimeout being called recursively to mimic setInterval
```js
  function interval() {
    console.log("HERE");
    setTimeout(interval, 1000)
  }
  setTimeout(interval, 1000);
```

## q52
What data type does JSON support?
```
  string, number, object, null, array, boolean
```

## q53
What are two syntaxes for exporting the Function as default?
```js
export {Function}
export default Function
```
