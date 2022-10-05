# DAY_11: Promise / Async Await (+ exceptions)
## Resources
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
* https://www.geeksforgeeks.org/difference-between-promise-and-async-await-in-node-js/

## About_Promise
The `Promise` object represents the eventual completeion(fulfilled or failure) of an asynchronous operation and its resulting value<br />
It allows us to associate handlers with an asynchronous action's eventual success value or failure reason. The asynchronous method returns a promise to supply the value at some point in the future

### States
* Pending : init
* Fulfilled : completed successfully
* Rejected : operation failed

### Cahined Promises
* .then()
* .catch() 
* .finally()

## About Async & Await
An async function is a function declared with the `async` keyword, and the `await` keyword is permitted within it. <b>The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains</b>


```js
  // Promise function with setTimeoue
  function resolveAfterTwoSeconds() {
    return new Promise(res => {
      setTimeout(() => {
        resolve("resolved");
      }, 2000)
    });
  }

  // async
  async function asyncCall() {
    console.log("first calling"); // 1
    const result = await resolveAfterTwoSeconds();
    console.log(result); // 2 after 2 seconds
    console.log("second calling"); // 3 after awiat
  }
```

### Description _ Async
Async functions can contain zero or more `await` expressions. `Await` expressions make `promise-returning` functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. Use of `async` and `await` enables the use of ordinary `try / catch` blocks around asynchrounous code.

### Difference Between Promise and Async/Await
```js
/** Promise
 * 1. Promise is an object representing intermediate state of operation which is guaranteed to complete its execution at some point in future
 * 2. Promise has 3 states - resolved, rejected, and pending
 * 3. If a function is to executed after the promise, then promise.then(function) continues execution of the current function after adding the function call the callback chain
 * 4. Error handling is done using .then() and .catch() methods
 * 5. Promise chains can become difficult to understand sometimes 
 */

/** Async Await
 * 1. Async/Await is a syntactic sugar for promises, a wrapper making the code execute more synchronously
 * 2. It does not have any state. It returns a promise either resolved or rejected
 * 3. If the A function is to executed after await, then await FUNCTION() suspends execution of the current function and then A function is executed
 * 4. Error handling is done using .try() and .catch() methods
 * Using Async/Await makes it easier to read and understand the flow of the program as compared to promise chains
 */

```