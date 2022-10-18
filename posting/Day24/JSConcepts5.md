## How can the OS  of the client machine be detected?
```
  The navigator.
  appVersion string can be used to detect the operating system on the client machine
```

## What is a window.onload and onDocumentReady?
```
  The onload function is not run until all the information on the page is loaded. This leads to a substantial delay before any code is executed

  onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of the code
```

## How closures work in JS?
```
  The closure is a locally declared variable related to a function that stays in memory when it has returned
```
```js
  function greeting() {
    let message = "HELLO"
    return function greet() {
      console.log(message)
    }
  }
  const newUser = greeting();
  newUser(); // "HELLO"
```

## How can a value be appended to an array?
```js
  // A value can be appended to an array in the given manner...
  array[array.length] = "new value"
  // OR
  array.push("new value");
```

## What is for-in loop in JS?
```js
  // The for-in loop is used to loop through the properties of an object

  for (let name in object) {
    ......
  }
```

## What are the important properties of an anonymous function in JS?
```
  A function that is declared without any identifier is known as an anonymous function. In general, an anonymous function is accessible after its declaration
```
```js
  const anony = () => {
    console.log("THIS IS Anonoymous Function")
  }
  anony() // .....
```

## What is the difference between .call() and .apply()?
```
  .call and .apply are very similar in their usage except a little difference. 
  call() is used when the number of the function's arguments are known to the programmer, as they have to be mentioned as arguments in the call statement
  apply() is used when the number is not known. The function .apply() expects the arguments to be an array

  => The way arguments are passed to the function.
```

## What is event bubbling?
```
JS allows DOM elements to be nested inside each other. In such a case, if the handler of the child is clicked, the handler of the parent will also work as if it were clicked too.
```

## Is JS case sensitive?
```
  Yes.
  Example... a function parseInt is not the same as the function Parseint
```

## What boolean operators can be used in JS?
```
&& and || and !
AND    OR    NOT
```

## How can a particular frame be targeted, from a hyperlind, in JS?
https://www.geeksforgeeks.org/how-can-a-particular-frame-be-targeted-from-a-hyperlink-in-javascript/
```html
  <a href="./link.html" target="newframe">New Page</a>
```

## What is the role of break and continue statements?
```
  The break statment is used to come out of the current loop. In contrast, the continue statement continues the current loop with a new recurrence
```

## Write the point of difference between a web garden and a web farm?
https://docs.devexpress.com/AspNet/6874/common-concepts/web-farm-and-web-garden-support
```
  Both web-garden and web-farm are web hosting systems. The only difference is that web-garden is a setup that includes many processors in a single server. At the same time, web-farm is a larger setup that uses more than one server

  A Web Farm hosts a web application on multiple web servers, whereas a Web Garden runs an application on the same server - but in different worker processes.
```

## How are object properties assigned?
```
  Assigning properties to objects is done in the same way as a value is assigned to a variable.
```