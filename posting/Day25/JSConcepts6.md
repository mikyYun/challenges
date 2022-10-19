## What is the method for reading and writing a file in JS?
```
fopen...
```

## How are DOM utilized in JS?
```
  DOM stands for Document Object Model and is responsible for how various objects in a document interact with each other. DOM is required for developing web pages, which includes objects like paragraphs, links, etc. These objects can be operated to include actions like add or delete. DOM is also required to add extra capabilities to a web page. On top of that, the use of API gives an advantage over other existing models
```

## How are event handlers utilized in JS?
```
Events are the actions that result from activities, such as clicking a link or filling a form by the user. An event handler is required to manage the proper execution of all these events. Event handlers are an extra attribute of the object. This attribute includes the event's name and the action taken if the event takes place.
```

## What is the role of deferred scripts in JS?
```
  The HTML code's parsing during page loading is paused by default until the script has not stopped executing. If the serve is slow or the script is particularly heavy, then the web page is delayed.

  While using Defer, scripts delays execution of the script till the time the HTMP parser is running. This reduces the loading time of web pages, and they get displayed faster
```

## What are the various functional components in JS?
```
  The different functional components in JS are..
  
  1. First-class functions: Fucntions in JS are utilized as first-class objects. This usually means that these functions can be passed as arguments to other functions, returned as values from other functions, assigned to variables, or can also be stored in data structures
  
  2. Nested functions: The functions, which are defined inside other functions, are called Nested functions. They are called "every time the main function is invoked"
```

## Write about the errors shown in JS
```
  JS gives a message as if it encounters an error. The recognized errors....

  1. Load-time errors: The errors shown at the time of the page loading are counted under Load-time errors. The use of improper syntax encounters these errors and is thus detected while the page is getting loaded

  2. Runtime errors: This is the error that comes up while the program is running.

  3. Logic errors: It is cuased by syntactically correct code, which does not fulfill the required task(infinit loop..)
```

## What are Screen objects?
```
  Screen objects are used to read the information from the client's screen. The properties of screen objects are..

  1. AvailHeight
  2. AvailWidth
  3. ColorDepth
  4. Height
  5. Width
```

## What is the unshift() method?
```
  This method is functional at the starting of the array. unlike the push(). It adds the desired number of elements to the top of an array.
```

## What is unescape() and escape() function?
```
  The escape() is responsible for coding a string to transfer the information from one computer to the other accross a network
  => string to encoded

  The unescape() function is very important as it decodes the coded string.
  => encoded to decoded string
```

## What are the decodeURI() and encodeURI()?
```
  EncodeURI() is used to convert URL into their hex coding. And DecodeURI() is used to convert the encoded URL back to normal.
```

## Why you should not use innerHTML in JS?
```
  innerHTML content is refreshed everytime and thus is slower. There is no scope for validation in innerHTML. Therefore, it is easier to insert rogue code in the document and make the web page unstable.
```

## What does the following statement declare?
```js
  var myArray = [[[]]];
// it declares a three-dimensional array
```

## How are JS and ECMA Script related?
```
  ECMA Script is like rules and guidlines, while JS is a scripting language used for web development
```

## What is namespacing in JS, and how is it used?
```
  Namespacing is used for grouping the desired functions, variables, etc., under a unique name. It is a name that has been attached to the desired functions, objects, and properties. This improves modularity in the coding and enables code reuse.
```

## How can JS codes be hidden from old browsers that do not support JS?
```
  <!--  -->
  OR
  //
```

## How to use Loop in JS?
```
  Loops are useful when you repeatedly execute the same lines of code a specific number of times or as long as a specific condition is true.
```

## What are the important JS Array Method?
```
  length
  prototype
  reverse
  sort
  pop
  shift
  push
```

## What is OOP Concept in JS?
```
  JS OOP allows you to creat objects that act like real-life objects
```

## JS Unit testing and challenges
```
  JS unit testing is a testing method in which js tests code written for a web page or web application module. It is combined with HTML as an inline event handler and executed in the browser to test if all functionalities work fine. These unit tests are then organized in the test suite.

  Every suite contains several tests designed to be executed for a separate module. Most importantly, they don't conflict with any other module and run with fewer dependencies on each other

  ## Challenges of JS Unit Testing
  1. Many other languages support unit testing in browsers, in the stable as well as in runtime environment, but JS cannot
  2. You can understand some system actions with other languages, but this is not the case with JS
  3. Some JS are written for a web application that may have multiple dependencies
  4. JS is good to use in combination with HTML and CSS rather than on the web
  5. Difficulties with page rendering and DOM manipulation
  6. Sometimes you find an error message on your screen regarding "Unable to load example.js" or any other JS error regarding version control.
  
 These vulnerabilities come  under JS Unit Testing

// Solutions
To avoide such issues, 
1. Do not use global variables
2. Do not manipulate predefined objects
3. Design core functionalities based on the library
4. Try to create small pieces of functionalities with lesser dependencies
```

## QuickSort Algorithm in JS
```
  Quick Sort Algorithm follows Divide and Conquer approach. It devides elements into smaller parts based on some conditions and performing the sort of operations on those divided smaller parts.

  // Steps of how QuickSort works in simple workds
  1. Select an element that is to be called the pivot element
  2. Compare all array elements with the selected `pivot` element and arrange them so that elements less than the `pivot` element are left. Greater than `pivot` is to its right
  3. Perform the same operations on the left and right side elements to the `pivot` element
```

## What is DOM in JS?
```
JavaScript can access all the elements in a web page using the DOM. The web browser creates a DOM of the webpage when the page is loaded
```

## What are Cookies in JS?
```
  A cookie is a piece of data stored on your computer to be accessed by your browser
```

#
END