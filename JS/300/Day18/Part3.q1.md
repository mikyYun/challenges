# Day18

## Part3
* q1
The compiler will throw an error for the below code. True or False?
```js
const x = 10;
x = 12;
// True => the const keyword denotes a value that cannot be changed
```

* q2
What is the TypeScript type of the below code?
```ts
  const x = "hello"
  // "hello" => const value cannot be changed. The type can be locked into the actual string literal value
```
* q3
What will the code below output to the console and why?
```js
  let person = {
    age: 25,
    name: "Justin"
  }
  const byRef = (myObj) => {
    myObj.age = 30
  }
  byRef(person);
  console.log(person.age);

  // Answer => 30
  // byRef(person) => person.age = 30
  // console.log(person.age) => 30
```

* q4
What will the code below output to the console and why?
```js
  let x; // x = undefined
  if (x = true === true) { // x is true because x is undefined. validation x = true === true => true 
    console.log(x); // true
  } else {
    console.log("Not x");
  }

  // Answer => true
```

* q5
What will the code below output to the console and why?
```js
  let x = 10;
  function myFunc(y) { 
    y = 12;
  }
  console.log(myFunc(x))
  // FLOW
  // x = 10
  // x = 12 (local scope inside function) but not return the value
  // Answer => 10
```

* q6
Assume that aggregator function below calcuates how many days old you are, combines your first and last names, and splits apart your address. Select all the ways it violates clean code principles.
```js
  const aggregator = (DOB, firstName, lastName, address, skills) => {...}


```