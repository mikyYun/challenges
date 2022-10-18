# Part4. from q6

## q6
What will the code below output to the console and why?
```js
  let x = 2.2 + 4.4 === 6.6;
  console.log(x)
  // False
  // 2.2 + 4.4 => 6.6000000001... 
  // Due to the fixed precision of numbers in JS
```

## q7
What will the pre-es6 code below output to the console and why? TypeScript is `NOT` enabled.

```js
  function SomeClass() {
    this.publicVar = 10;
  }
  someClass.staticVar = 10;

  const myClass = new SomeClass();
  myClass.publicVar = 12;
  myClass.staticVar = 15;
  
  const myClass2 = new SomeClass();
  console.log(myClass2.publicVar); // => 10
  console.log(myClass2.staticVar); // => undefined
  console.log(SomeClass.staticVar); // => 10
  
  // => myClass only updates the publicVar for its particular instance of SomeClass.
  // staticVar is not accessible from an instance.
  // myClass.staticVar actually added an instance var named staticVar and set the value to 15
```

## q8
Write a function that prints the distint vowels in the velow string using one line of code.
```js
  const str = "string";

  console.log(...new Set(str))
```

## q9
What will the code below output to the console and why?
```js
  console.log(Math.floor(2.1) === new Float32Array(2.1))
  // False
  // Float32Array
```

## q10
What will the code below output to the console and why?
```js
  console.log(Math.sin(Math.PI) === 0)

  // False
  // Math.PI cannot be exactly equal to PI, because PI is infinite.
  // Instead, Math.PI is an approximation. So Math.sin(Math.PI) is very close to zero, but not exactly zero
```

## q11
What will the code below output to the console and why?
```js
  z = 10;
  console.log(z);

  // inside strictMode, answer is 10
  // if not strictMode, answer is Compile time errror
  // because it will not allow z to be initialized without the var/let/const
```

## q12
What will the code below output to the console and why?
```js
  let max;
  const numberArray = [3, 5, 2];
  numberArray.forEach(element => {
    if (max < element) max = element;
  });
  console.log(max);
  // answer => undefined
  // max = element is local scope
```

## q13
Which bitwise operator inverts the bits of a 32 bit number?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
```
~ (The bitwise NOT operator) inverts the bits of its operand
```

## q14
What operator can remove properties from an object?
```
delete
```

## q15
What is the proper syntax for accessing the getter below?
```js
  const obj = {
    count: [1, 2, 3],
    get last() {
      return this.count.pop();
    }
  }

  obj.last// return this.count.pop();
```

## q16
When might you use new.target?
```
  When you want to throw a specific error when a class or certain functions are not called with the new keyword preceding the call
```

## q17
What method would you use to convert a nodelist to an array?
```js
  Array.from()
```


## q18
There are the two kinds of Nodelist: static and dynamic. True or False?
```
  True
  => Dynamic nodeLists update as the DOM changes. static is a static list
```

## q19
Which object are atomics not used with?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics
```
  Buffer
```

## q20
Which JS Error type is commonly used as a base for user-defined error objects?
```
  Error
```