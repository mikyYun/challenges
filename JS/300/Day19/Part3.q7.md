# Day19

## Part3
* q7
What is the technical definition of the DOM from a JS perspective?
```
DOM is a tree-like structure of connected nodes that represents the different elements and strings of text appearing in a markup document
```

* q8
Given FancyButton class, how would you extend button to create a custom element named fancy-button?

https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements

```
customElement.define("fancy-button", FancyButton, {extends: "button"})
```

* q9
Which of the following is correct string interpolation syntax?
```js
  const x = "me";
  //
  `Pick ${x}`
```

* q10
What is the name of the pattern where the total number of instances of an object is limited to one?
```
  Singleton
```

* q11
Which of the following is not a method on the Set object?
```
A)  add()
B)  next()
C)  clear()
D)  delete()
E)  entries()

Answer => B. next() 
```

* q12
What window method allows you to store persistent key/value pairs in browser memory?
```
  window.localStorage
```

* q13
All bitwise operations are performed on what bit binary numbers?
```
  32 bits
```

* q14
When does the delete operator not remove a property from an object?
```
  When the object is created as non-configurable
  Example
  const Car = {};
  Object.defineProperty(Car, "name", {configurable: false})
```

* q15
What method should you call if you need to get the properties of an Object?
```js
  // Object.getOwnPropertyNames
  const obj = {
    a: 1,
    b: 2
  };
  console.log(Object.getOwnPropertyNames(obj)) // ["a", "b"]
  console.log(Object.keys(obj)) // ["a", "b"]
```

* q16
What will the code below output to the console and why?
```js
  console.log(2*3**3);
  // ** is the exponent operator => has more precedence than *
  // 2*27 => 54
```

* q17
Evaluate the code below. What is a one character change that can prevent this line from throwing an error?
```js
  const dog = {
    color: "brown",
    breed: {
      pure:true
    }
  }
  console.log(dog.hair.short)
  // dog.hair?.short // `?` check validation of dog.hair
```

* q18
Which array functions are not available on NodeList? Select all that apply.
```
A)  forEach()
B)  join()
C)  filter()
D)  map()

Answer => A. forEach()
```
* q19
Which of the following is not a JSON method?
```
A)  reverse()
B)  parse()
C)  stringify()

Answer => A. reverse() => JSON methods are parse and stringify
```

* q20
There is a global Map Object in JavaScript. True or False?
```
  True => Array.map()
```