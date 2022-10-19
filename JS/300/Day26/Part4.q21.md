# Part4. from q21

## q21
What property guarantees access to the clobal object regardless of environment?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
```
  globalThis
```

## q22
Which of the following is `NOT` true about undefined?
```
1. It is a property of the global object
2. It is a variable in global scope
3. The initial value of undefined is the primitive value undefined
4. It has a corresponding object named Undefined

// 4.
```

## q23
Optional chaining can be stacked like below. True or False?
```js
  let stateStats = state.area?.land?.sqmiles;
  // True
```

## q24
What will the below code output to the console and why?
```js
  const a;
  a.test ??=25;
  console.log(a.test);

  // Compile time error => The constant `a` was not initializede, therefore a.test will be flagged by the complier
```

## q25
What is the technical name of parenthesis () in JS?
```
  Grouping Operator
```

## q26
What does the below code output to the console and why?
```js
  let str = new String("aaa");
  str.concat("bbb").concat("ccc");
  console.log(str);
  // 'aaa' => `concat` returns a new string. The original string is not affected
```

## q27
What is the Queue in JS Runtime?
```
  The queue is list of messages to be processed, and each message has an associated function to call.

  Different than the stack because stack is a list of dependent functions, where the more recent must be executed in order to execute the older properly. The Queue is First in, First out.
```

## q28
 Vanilla JS has abstract classes, as of ES6. True or False?
```
  False => The abstract modifier cannot be used for creating a class which cannot be instantiated
```

## q29
What will the code below output to the console and why?
```js
cons b = {
  a: 1,
  b: 2,
  3: 3
}
for (key in b) {
  console.log(b[key])
}
// a, b, 3 || 3, a, b
```

## q30
What is the syntax for initializing a Map object with multiple key/value pairs?
```
  create a new Map object initialized with a two dimensional array of key/value pairs.

  ex....
  const map = new Map(["a",1], ["b",2], ["c", 3])
```

## q31
An interface can extend another interface. Assume TypeScript is enabled
```
  True => This is different than behavior in some programming languages.

  When an interface extends another interface, it has the properties of the parent interface, and the child interface simply adds more properties (or overwrites properties)
```

## q32
Assume TypeScript is enabled. An object inherits all the fileds and methods of its parent class. True or False?
```
  False => An object does not inherit fields and methods that have the "private" modifier
```

## q33
Valid modifiers of TypeScript interface methods..
```
  TypeScript supports three access modifiers - public, private, and protected.

Public - By default, members (properties and methods) of the TypeScript class are public - so you don’t need to prefix members with the public keyword. Public members are accessible everywhere without restrictions even from the multiple level sub-classes without any compile errors.

Private - A private member cannot be accessed outside of its containing class. Private members can be accessed only within the class and even their sub-classes won't be allowed to use their private properties and attributes.

Protected - A protected member cannot be accessed outside of its containing class. Protected members can be accessed only within the class and by the instance of its sub/child class.
```

## q34
The static keyword is not a valid modifier in JS. Rather, a typing superscript like TypeScript is required for static to work. True or False?
```
  False
```

## q35
What one-line code block will print the following characters
```
☃⌨ ὀ˿
// Create a string from Unicode code points.
```
```js
  String.fromCodePoint(9731, 9000, 8000, 0x2RR);
```

## q36
What, if anything, is in position 3 on the array?
```js
  const arr = [1, 2];
  arr.length = 3
  // empty slot => arr = [1, 2, undefined]
```

## q37
Write a one line example of how to reverse the array.reduce function
```js
const arr = ["a", "b", "c"];

const combine_RR = arr.reduceRight((a, b) => a+b, ""); // original arr not changed
const combine_R = arr.reverse().reduce((a, b) => a+b, ""); // changed origina arr
```

## q38
What are some limitations of arrow functions?
```
  1. Arrow functions should not be used as methods
  2. Arrow functions do not have arguments, super, or new.target keywords
  3. Arrow functions cannot use yield keyword in it's body
  4. Arrow functions cannot be used as constructors
```

## q39
What is the difference in the default scope of traditional functions and arrow functions?
```
  Traditional functions default this to the window scope. Arrow functions execute in the scope in which they are created
```

## q40
Which of the following are generally true regarding access modifiers?
```
1. Fields should have the most narrow access modifier possible
2. Methods should have the widest access modifier possible
3. Avoid using public fields unless the field is a constant

// 1, 3 => All members should have the most narrow access modifier possible. This keeps methods from being used in unintended ways and keeps fields from having their values changed unintentionally
```