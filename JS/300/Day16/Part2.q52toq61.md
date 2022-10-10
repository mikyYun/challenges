# Day14

## Part_2
* q52
What is a MIME type?<br />
A MIME type is a string sent along with a file indicating the file type. For example, the MIME type sent with a JSON file is 'application/json'
```js
  A `media type` (Multipurpose Internet Mail Extensions or MIME type)
```

* q53
What is a simple syntax for exporting the below variables?
```js
  let myLet = 10;
  export default myLet
  // OR
  export let myLet = 10;
```

* q54
What function property returns the number of args the function expects? => Function.length

* q55
What does it mean to `import a module for side effect only`? 
```js
  // Answer => import the module without specifying anything to import (no named or default export specified)
```

* q56
The below code complies and prints 3. True or False?
```js
  const test = () => {
    return 
    1 + 2;
  }
// Answer => False
// Reason => return statemenets automatically have a semicolon placed after them by the compiler

// make it true
return (
  1 + 2
)
```

* q57
The following are equivalent. True or False?
```js
  var a, z = 1;
  a = z;

  // AND
  var z = z = 1;

  // Answer => False
```

* q58
The code below returns 3. True or False?
```js
  const arr = [1, 2];
  const reduced = arr.reduce((accumulator, element) => accumulator)

  // Answer => False
  // The accumulator does not use a += returrn. Rather, the most recent return value is stored as the accumulator.
  const recuded = arr.reduce((accumulator, element) => accumulator + element);
  // will return 3
```

* q59
Where must the `use strict`; directive be placed in a file? // Top

* q60
How can you use composition in vanilla JS?
```
Create functions that are not methods on any object. Use Object.assign(obj) to assign the required functions to obj as methods on obj.
```

* q61
What will the code below output to the console ans why?
```js
  for (let i = 1; j = 10; i < 5 < j; i += j/i) {
    console.log(Math.ceil(++i));
  }
// Answer => It will enter into a infinite loop
```
