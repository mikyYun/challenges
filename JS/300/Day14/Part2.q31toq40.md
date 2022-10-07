# Day14

## Part_2
* q31
What are the benefits of object-oriented programing(OOP)?
1. Code is socketable or modular, so a class's source code can be maintained independently of the rest of an application's code
=> This describe the fact that an object can be modified without needing to recode anywhere else in an app. For example, if the product class of a Point of Sale system needs to be expanded to meet new business needs, there is likely nothing wrong with the rest of the code. OOP allows the product class to be modified while leaving the rest of the code as-is.
2. An object's code is kept private, meaning other objects only interact with an object's methods, so the internal code is kept hidden 
=> `proprietary code`. For example, if a company develops and sells code that plugs into an existing customer application, the proprietary code needs to be kept invisible to the customer. If the customer only interacts with methods, the variables and logic of the classes in the code are kept proprietary.
3. Objects are easily reusable. They can be plugged into multiple parts of the code 
=> This describes the ability of a class to be plugged into an app in multiple locations, or even into multiple apps. Older programming languages were linear in their execution. OOP lets an object be called repeatedely without having to rewrite the same code repeatedly.

* q32
Assume const map has the following values: Map(2) {"a" => 2, "b" => 2}. In one line, transform map into a 2d array
```js
  // 1
  [...map]
  // 2
  Array.from(map)
```

* q33
Only custom classes and objects can be extended in JS. True or False? => False.<br />
=> Custom classes and object extend Object. Any built-in object can be extended

* q34
An instance level variable can be accessed anywhere in a class as long as an instance has been created. True or False ?<br />
=> An instance level variable cannot be accessed in a static method<br />
https://stackoverflow.com/questions/55505710/what-is-an-instance-variable-in-javascript
https://codeburst.io/javascript-object-oriented-programming-using-es6-3cd2ac7fbbd8

* q35
Assume TypeScript is enabled. Why will this code not complie?
```ts
  let i: number;
  if(5%3>2) {
    i=0;
  } else if (5%3>1) {
    i = 1;
  }
  console.log(i)
  // This compiles fine. May complain about i being used before it is assigned a value.
```

* q36
Length is a method on string and a property on Array. True or False? <br />
=> False. length is a `property` on strings and a `method` on Array

* q37
What is the first argument of function.call ?<br />
=> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
```js
  // syntax
  // call()
  // call(thisArg)
  // call(thisArg, arg1, /* …, */ argN)

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"
```

* q38
What is a technical name for the kind of function that printName is?
```js
  function getName() {
    var name = "Jon";
    function printName() {
      console.log(name);
    }
    printName();
  }
  getName();

  // Inner function && Closure
```

* q39
Arrow functions only require parenthesis if there are multiple arguments. True or False?<br />
=> False. Arrow functions also require parenthesis if there are zero arguments. If there is exactly on argument parenthesis are optional
```js
  const withMultiple = (a, b, c) => {
    console.log(a, b, c)
  }
  const withOneArgs = a => {

  }
  const withoutArgs = () => {

  }
```

* q40
A class level variable can be accessed anywhere in a class. True or False ?<br />
=> True. A class level variable, also known as a static variable, can be accessed in any method, including static methods and constructors.