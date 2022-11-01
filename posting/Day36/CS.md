# const, let, var
`let`, `const`, and `var` are three keywords you can use to create variables in JS.

## Differences
* var
```
  can be reassigned, and it also hoists variables to the top of its local or global scope it is defined in
```
* let
```
  can be reassigned, but it does not hoist variables to the top of its local or global scope
```
* const
```
  does not hoist variables to top of its local or global scope, and more importantly, such variables cannot be reassigned to another value
```

## Hoisting in JS
Hoisting is a concept is JS where the declaration of a variable moves to the top of the scope, above the line it was declared in the code.

## Arrow functions vs normal function
* Arrow functions
```
  are a short & easier way of writing functions in JS. The syntax involves an equal and a greater than sign to indicate an arrow
```

* Differences
```
1. The arguments variable is not defined in arrow functions while they are in normal
2. Normal functions create their own `this`, while arrow functions do not have
3. Arrow functions cannot be used as `constructors`
```

* Selecting HTML elements from DOM
1. getElementById
```
  used to get an element by the value of its id attribute
```
2. getElementsByClassName
```
  used to get elements by the values of their class attributes
```
3. querySelector
```
  used to get an element that matches a CSS selector
```
4. getElementsByTagName
```
  used to get elements by the tags used for them
```
5. getElementsByName
```
  used to get elements by the values of their name attribute
```