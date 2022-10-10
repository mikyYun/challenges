# Day14

## Part_2
* q62
Show how object literals can be constructed without use of the colon :
```js
  const a = 1, b = 2, c = 3;
  const obj = {a, b, c}
```

* q63
What is the maximum size of an array in JavaScript? => 2**32 - 1. Over that, RangeError

* q64
If a function is called with less parameters than the declared amount of parameters, what value is assigned to the missing parameters? => undefined

* q65
What is the Event Capturing phase?
```
  The phase in which the event trickles down the ancestors(window, div, etc) to the most granular element 
```

* q66
Setters still work on a frozen object. True or False?
```
  False
  The setters still exist and can be called. They give the apperance of working, but they do not actually change values.
```

* q67
What does 3 > 2 > 1 return
```js
  3 > 2 // true
  true > 1 // false
  // answer => false
```

* q68
The below two code snippets return the same value. What is the difference in how that occured?
```js
  "123".length; // line 1
  new String(123).length; // line 2

// line 1 users implicit coercion, line 2 users explicit coercion
/** explicit coercion :
 * force to change type
 * */  

/** implicit coercion
 * this happens when JS coerces the value type to the expected type under the hood
*/

```

* q69
Which of the following is NOT a time that you would use an anonymous function?
```
A. as a class method
B. in a closure
C. as a callback
D. as an IIFE (immediately invoked function execution)
```
=> A

* q70
What is the difference in layout time and painting time in a web broswer?
```
The layout time is the time it takes to calculate the positioning of each object that will be painted. The layout is a 3d  construct. Paint time is the time it actually takes to paint the points on the screen. Painting is a 2d construct.
```

* q71
What will the code below output to the console and why?
```js
  let a = 8;
  a >>>=3
  console.log(a);
  // >>>= is known as the unsigned right shift assignment operator. It moves the bits to the right by the specified amount.
```

* q72
What will the code below output to the console and why?
```js
  console.log([1, 2,, 3].join(","));
// 1, 2, , 3
```