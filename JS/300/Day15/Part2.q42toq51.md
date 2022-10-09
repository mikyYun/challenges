# Day14

## Part_2
* q42
What kind of error is thrown when you attempt to assign a new value to a const? => `TypeError`

* q43
Overriding and overloading are examples of which Object Oriented Programming princibpe? => `polymorphism`

  1. polymorphism: polymorphism in JS refers to the comcept of reusing a single piece of code multiple times
  2. inheritance: a mechanism that allows us to create new classes on the basis of already existing classes. => provides flexibility to the child class to reuse the mothods and variables of a parent class.
  3. abstraction: a way of hiding the implementation details and showing only the functionality to the users. It ignores the irrelevant details and shows only the required one.
  4. encapsulation: In JavaScript, the data binds with the functions acting on that data in the process of achieving encapsulation in order to control the data and validate it.
      - 4-1. Making data members private using var keyword
      - 4-2. Set the data using setter methods and get that data using getter methods

* q44
Static variables cannot be modified in non-static methods. True or False? => False
```js
  // A non-static method can reference and modify a static variable with Class.Static syntax
  class Test {
    static MAX = 10;
    getMax() {
      Test.MAX = 12;
      console.log(Test.MAX);
    }
  }
  const test = new Test();
  test.getMax() // 12
```

* q45
What happens if str === "test1" in the below code?
```js
  switch (str) {
    case "test1":
    case "test2":
      console.log("At test2");
  }

  // No break point in this switch method.
  // => "At test2" will be printed
```

* q46
What does it mean when JS is described as having "first-class functions"?
https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
```js
  // ANSWER: functions are treating like any other variable
```

* q47
The following code compiles. True or False?
```js
  async function promiseMe() {
    try {
      let z = await Promise.reject(30);
    }
  }
  // False
  // try without 'catch' or 'finally' is a problem
```

* q48
Date.getDate() returns the day of the month with values 1-31 while Date.getDay() returns the day of the week with values of 0-6. Ture or False?
```js
  // => True
  // getDate => 1~31
  // getDay => 0~6
```

* q49
Async operations are put into what kind of queue?
```js
// => event queue
```

* q50
What are the three functions JS has long offered for executing code after time has elapsed?
```js
  /**
   * A. setTimeout()
   * B. setInterval()
   * C. callAsuncLoop()
   * D. requestAnimationFrame
   * 
   * // A, B, D
  */
```

* q51
What Web API might you call if you wanted to measure the execution time of a code block?
```js
  // performance.now()
  const t0 = performance.now();
  const t1 = performance.now();
  console.log(t0 - t1);// OR t1 - t0
```