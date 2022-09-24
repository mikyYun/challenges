/** Which of the following prints first? */

setTimeout(() => {
  console.log("setTimeout wins");
}, 0);

queueMicrotask(() => {
  console.log("queueMicrotask wins");
});

// RESULT
// queueMicrotask wins
// setTimeout wins

// REASON
/** Tasks from queueMicrotask are called after callstack is empty and before the event loop is called.
 * Tasks from setTimeout are part of the eventQueue
 */

/** CALLSTACK 
 * 1. JS is a Single Thread Programming Language and it has a single callstack which means it can handle only one task at a time
 * Think about Array. Invoke function => push. finished => pop
 * 
 * If stacksize is limited, and can be happened stack overflow. ex) recursion
 * 
 */

/** Problems of the Single callstack?
 * USE Asynchronous
 * 
 * Q.1
 * if the callstack handle functions, how to handle asnyc functions?
 * => Event Queue.
 * When event invoked, Async functions like DOM event / HTTP request / setTimeout .... call web APIs (built on C++ ??) then push into the Event Queue(callback queue).
 * 
 * EQ => when stack is empty, push callbacks to invoke it and until this callback returns, all message pooling or process is paused
 */
