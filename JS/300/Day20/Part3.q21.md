# Day19

## Part3
* q21
What does it mean that a WeakSet object is weak?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet#:~:text=WeakSet%20s%20are%20collections%20of,objects%20can%20be%20garbage%20collected.
```
  if no other references to an object stored in the WeakSet exist, those objects can be garbage collected.
  WeakSet objects = collections of objects.

  Main differences to the `Set` object
  1. `WeakSet`s are collections of `objects only`. They cannot contain arbitary values of any type, as `Set`s can
  2. The `WeakSet` is weak, meaning references to objects in a `WeakSet` are held weakly. If no other references to an object stored in the `WeakSet` exist, those objects can be garbage collected.
```

* q22
What is one way to overcome the imprecision of floating point decimals?
```js
  // multiply and divide
  const x = (0.1 * 10 + 0.1 * 10) / 10;
```

* q23
Evaluate the code below. How can it be refactored to use less code?
```js
  const tempt = object.prop1;
  const test = ((temp === null || temp === undefined)) ? undefined : teamp.prop2
  // answer
  const test = object.prop1?.prop2;
```

* q24
Evaluate the code below. What are the first and last outputs of the loop?
```js
  for (let i = 0; i <= 10; ++i>) {
    console.log(i)
  }
  // i === 0 ~ i === 10
```

* q25
Create a function on the below MyChild class that calls the parent printSomething method.
```js
  class MyParent {
    constructor() {

    }
    printSomething() {
      console.log(5);
    }
  }
  class MyChild extends MyParent {
    constructor() {
      super()
    }
    printSomething() {
      console.log(10)
    }
  }

  // inside MuChild class
  printParentSomething() {
    super.printSomething();
  }

```

* q26
What does the code below return and why?
```js
  const value = 10 / -0;
  // -infinity => 0 and -0 have two different values in memory due to the way numbers are stored.
  // 10/0 => infinity
```

* q27
What is Heap in JavaScript Runtime?
https://dandkim.com/js-heap-implementation/
```
  Heap Types
  1. MinHeap: Parents Node is always smaller than child node
  2. MaxHeap: Parents Node is always same or bigger than child node

  Answer => Heap is the region of memory where objects are stored
```

* q28
How does JS handle it behind the scenes when a String Object method is called on a string literal value?
https:developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting
```
~MDN: JS automatically converts the string literal to a temporary String object, calls the method, then discards the temporary String object.
```

* q29
What will the code below output to the console and why?
```js
  const obj = {
    a: 1,
    b: 2.
  }
  const arr = [];
  console.log(arr[0] = {...obj}) // arr[0] does not exist => {...obj}
  // {a: 1, b: 2}
```

* q30
What does Map.delete(key) return?
```
if key exist and was deleted, True
if the item didn't exist and wasn't deleted, False
```