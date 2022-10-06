# JS _ Primitive / Reference Type
[Resources] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

## JS ??
JavaScript is a `dynamic` language with `dynamic types`. Also is a `weakly typed` language, which means it allows implicit type conversion when an operation involved mismatched types, instead of throwing type errors.
```js
  // EXAMPLE
  let a = "53" // string
  let result = 7 + a // number + string
  console.log(result) // 753 which is a string value
```

## JavaScript Types
* Primitive Values
1. Boolean: 
https://developer.mozilla.org/en-US/docs/Glossary/Boolean
2. Null
https://developer.mozilla.org/en-US/docs/Glossary/Null
3. Undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
4. Number
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number-type
5. Bigint
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint-type
6. String
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type
7. Symbol
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type
* Objects
In computer science, an object is a value in memory which is possibly referenced by an `identifier`

### Types of Object Properties
* Data Property
1. Attributes<br />
  1-1. value: The value retrieved by a get access of the property. Can be any JS value<br /> 
  1-2. writable: A boolean value indicating if the property can be changed with an assignment <br />
  1-3. enumerable: A boolean value indicating if the property can be enumerated by a for...in loop.(loop object) <br />
  1-4. configurable: A boolean value indicating if the property can be deleted, can be changed to an accessor property, and can have its attributes changed.
* Accessor Property<br />
Associates a key with one of two accessor functions(`get` and `set`) to retrieve or store a value
1. Attributes<br />
  1-1. get: A function called with an empty argument list to retrieve the property value whenever a get access to the value is performed<br /> 
  1-2. set: A function called with an argument that contains the assigned value. Executed whenever a specified property is attempted to be changed. <br />
  1-3. enumerable: A boolean value indicating if the property can be enumerated by a for...in loop.(loop object) <br />
  1-4. configurable: A boolean value indicating if the property can be deleted, can be changed to an accessor property, and can have its attributes changed.

  ### JS Hashmaps OR Hash Table
  A JavaScript object is a mapping between keys and values. Keys are strings (or Symbols), and values can be anything. This makes objects a natural fit for `hashmaps`