# Web Worker
https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

* Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. Also, can perform I/O using `XMLHttpRequest` or `fetch` 

Web worker(`= object` created using a constructor) is a script that runs in the `background` in a browser, using a totally separate thread for it. heavy processing in a web app could be moved to a separate web worker, relieving the main thread from burden.

Have limited access to the window object and no access at all to the DOM.

## Worker Context
* DedicatedWorkerGlobalScope
* SharedWorkerGlobalScope

* terminate : Terminating a worker
* handling erros
1. message
2. filename
3. lineno

## Thread safety
A `Worker` interface spawns real OS-real threads, and mindful programmers may be concerned that concurrency can cause "interesting" effects in your code if you aren't careful.

However, since web workers have carefully controlled communication points other threads, it's actually very hard to cause concurrency problems.

## Transferring data to and from workers
Data passed between the main page and workers is `copied`. Objects are serialized as they're handed to the worker, and subsequently, de-serialized on the other end.

The page and worker do not share the same insatnce, so the end result is that a duplicate is created on each end.