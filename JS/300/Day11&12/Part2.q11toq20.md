# Day11 & 12

## Part_2
* q11
What pattern does jQuery use to make a single instance of it's globally avaliable jQuery object? => Singleton : One instance of the jQuery object is created globally

* q12
What is the difference between window.localStorage and window.sessionStorage?
```js
  // A. localStorage stores key/value pairs in the web browser, and localStorage deletes after the browser closes
  // B. sessionStorage stores key/value pairs in the web browser, and sessionStorage deletes after the browser closes
  // C. Both store key/value pairs in the web browser, but localStorage deletes after the browser closes
  // D. Both store key/value pairs in the web browser, but sessionStorage deletes after the browser closes

  // Answer : D
```

* q13
What will be the code below output to the console and why ?

```js
  let arr1 = [1, 2, 3];
  arr1.push(4);
  arr1.pop();
  arr1.slice(1, 2);
  arr1.splice(1, 2);
  console.log(arr1);

  /**
   * push(4) => [1, 2, 3, 4]
   * pop() => [1, 2, 3]
   * slice(1, 2) => [2] // not change original arr1
   * splice(1, 2) => remove [2, 3] from arr1. original arr1 = [1]
   * Result = [1]
  */
```
* q14
The ! operator returns a boolean. True or False? => True

* q15
Evaluate the code below. If both div and button have a click listener, how can you stop a click on the button from bubbling up to the div?
```js
  <div>
    <button>Click Me!</button>
  </div>
```
=> To prevent event bubbling, use stopPropagation in the child element(button)

* q16
What will the code below output to the console and why?
```js
  let xyz = "";
  xyz ||="abc";
  console.log(xyz)
  // Answer => "abc"
  // value of xyz is falsy
  // xyz || ="abc" => xyz is false. assign value "abc" 
```

* q17
What is the difference in the output between the two following functions?
```js
  void function voidFunction() {
    console.log("No Error");
  }()

  function noVoidExample() {
    console.log("No Error!");
  }();

  // The function voidFunction executes and prints No Error, while noVoidExample throws an error
  // The void keyword allows for the execution of functions that may not otherwise execute
```

* q18
Which of the following is NOT a difference between NodeList and Array?
```js
  // A. NodeList is Web API, Array is JavaScript API
  // B. NodeList cannot contain more than 10 items
  // C. NodeList properties may be live properties that update if the DOM is update (childNode)
  // D. Many array functions are not available on NodeList

  // B. NodeLIst cannot contain more than 10 itmes.
```

* q19
Which ES6 array functions in JS return a new array? Select all correct answers
```js
  // A. map()
  // B. forEach()
  // C. filter()
  // D. find()

  // Answer : A, C
```

* q20
What is the largest whole number JS can reliably represent with the number primitive?
```js  
// A)  253 - 1
// B)  232 - 1
// C)  263 - 1
// D)  JavaScript can represent infinitly large numbers

// A. Number.MAX_SAFE_INTEGER
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER#:~:text=The%20MAX_SAFE_INTEGER%20constant%20has%20a,)%20and%20253%20%E2%80%93%201.