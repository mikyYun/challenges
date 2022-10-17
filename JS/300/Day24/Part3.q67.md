# Part3. from q67

## q67
What does 3 > 2 == 1 return?
```
  true => 3 > 2 is return true and the true and 1 is equal
```

## q68
What is a truthy value in JS?
```
  A truthy value is a value that is considered true in a boolean context
```

## q69
What is the name of the below syntax?
```js
(function() {
  console.log("IIFE");
})()

// IIFE => Immediately Invoked Function Execution
```

## q70
What is the scope of arrow functions?
```
  the scope in which they were defined
```

## q71
What will the code below output to the console and why?
```js
  let a = 8;
  a >>>= 5;
  console.log(a);

  // 0
  a >= 5 // true

  a >>= 5 // 0
  a >>= 5 // 0
  // => The unsigned right shift assignment operator won't flip a positive number to negative
```

## q72
The shift and pop methods on arrays return a new array without changing the value of the original array. True or False?
```
  False => 
  The shift method removes the first element (index 0) and returns it, and it does modify the original array.
  The pop method does the same but with the last element in the array (last index)
```

## q73
Objects assigned to const immutable
```
  False => The name binding cannot be changed, but the underlying object can be.
```

## q74
What is the difference between imperative programming and declarative programming?
```
  Imperative programming focuses on how to do things, declarative programming focuses on what to do.
  Declarative programming may take advantage of built-in APIs to accomplish things, while imperative programming explicitly controls the path of the code execution.
```

## q74
What is the difference between a statement and an expression?
```
  Statemenets perform an action, expressions evaluate to a value.
```

# Part4
## q1
Evaluate the code below. bark() is now a function on the Dog class
```js
  class Dog {
    noise: string;
    legs: number;
  }

  Dog.bark = () => {
    console.log("woof");
  }

  let dog = new Dog();
  dog.bark();

  // False
  // Use Dog.prototype.bark instead Dog.bark...
```

## q2
Evaluate the code below. bark() is now a function on the Puppy class
```js
  class Dog{
    noise: string;
    legs: number;
  }

  Dog.prototype.bark = () => {
    console.log("Woof");
  }

  class Puppy extends Dog {
    pottyTrained: boolean;
  }

  let dog = new Puppy();
  dog.bark();

  // True
  // When the Dog prototype had bark() added to it, anything extending Dog will also have bark. This is because the browser will look for bark on the Puppy prototype, and not finding it there, will look for bark on the Dog prototype
```

## q3
Evaluate the following code. What is wrong with the getDOB function? TypeScript is enabled for this question.
```ts
const getDOB = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
}
// poorly named. Syntactically, there is nothing wrong with this function. However, it does something completely different than what the function name implies
```

## q4
Which of the following is the controller of custom elements?
https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#:~:text=The%20controller%20of%20custom%20elements,define()%20method.
```
  CustomElementRegistry object
```

## q5
What class should a custom element extend?
```
  DOMElement
```