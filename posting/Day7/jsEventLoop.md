# JS Event Loop

## The event loop
JS has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks(in call stack).

The **event loop** got its name because of how it's usually implemented
https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
```js
  // if the waitForMessage() in queue is true, do queue.processNextMessage()
  while (queue.waitForMessage()) {
    queue.processNextMessage();
  }

```
JS is a single thread language. Each message(stack) is processed completely before any other message is processed which is called **Run-to-Completion**
https://vimeo.com/96425312

### How Promise works ?
Promise uses **Micro Task** which is more priority than other tasks inside task queue.
```js
  setTimeout(() => console.log("TIMEOUT"), 0); // A

  Promise.resolve().then(() => {
    console.log("FIRST RESOLVE") // B
  }).then(() => {
    console.log("SECOND RESOLVE") // C
  })

  // Results => B - C - A
  /** Reason:
   * micro tasks is with higher priority than normal tasks.
   * event loop check the condition of micro queue and if it's empty, add callback (B) in micro queue
   * then add callback(C)
   * then check micro queue is empty
   * then invoke normal task queue(A)
  */
```


* Note: 
However, actually the environments (browser or Node.js) use multiple threads and the **Event Loop** is used for interoperating with js engine which uses single call stack.

* NEXT..... Node.js cluster / Web Worker(?)