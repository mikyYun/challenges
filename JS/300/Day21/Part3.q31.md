# Day19

## Part3
* q31
Which of the following is not an example of inheritance when using TypeScript? 
```
  An object has a method that its interface has.
  => Interfaces are a form of composition, not inheritance. Also, multiple interfaces can be implemented by a class, whereas a class can only extend one other class.
```

* q32
In JS, an object can have one subclass but unlimited parent classes. True or Flase?
```
  FALSE
  => An object can have only one parent class but unlimited subclasses. It may have Transport as its parent class, but it cannot have any other parent class
```

* q33
An object can implement multiple interfaces. Assume TypeScript is enabled. True or False??
```
  True.
  => An object can be composed of many interfaces, but can inherit from only one class.
```

* q34
What does the code print?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
```js
  class MyClass {
  static staticMethod() {
  return this.name;
  }
  constructor() {
  this.name = 'Jon';
  }
  }
  const me = new MyClass();
  console.log(MyClass.staticMethod());
  // The staticMethod is not scoped to the instance level
```

* q35
A String is a primitive data type. True or False?
```
  True.
  => Also String is an object. Usually the primitive type string is referred to in lower case. The String object is usually capitalized. But both exist in JS.
```

* q36
Show two ways to make an existing array empty
https://www.javascripttutorial.net/array/4-ways-empty-javascript-array/
```js
  array = [] // asign new empty array
  array.length = 0 // asign length 0 automatically delete all elements
  array.splice(0, array.length)
  while.....array.pop()
  
```

* q37
What is the value of str after the code executes?
```js
  const str = ' this'.concat('that ').substring(3).trim().valueOf(2);
  // concat combine both => " thisthat "
  // substring get from third => "histhat "
  // trim() to trim => "histhat"
  // valueOf returns the value => "histhat"
```

* q38
What is a Generator function in JS?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
```
Generators are functions that can be exited and re-entered later.
Exampla => a while loop in a generator function can be paused
```

* q39
Which of the following is a valid modifier of class, assuming TypeScript is enabled?
```
A)  private
B)  final
C)  abstract
D)  public
E)  default

// C. abstract => public and private modifiers are not applicable to classes.
```

* q40
Which of the following is not a reserved word in java?
```
A)  abstract
B)  compile
C)  do
D)  enum

// B. compile => compile is not reserved. The abstract keyword was reserved but was removed from the reserved list in ES5/6
```

* q41
What is the output of this code?

```js
class TestClass{
  constructor() {
    ​this.myInt = 5;
  }
  mainMethod(){
    const test = new TestClass();
    test.myInt = 6;
    console.log(test.incrementIntAgain(test.incrementInt(test.myInt)));
  }
  incrementInt (theirInt) { // if 5
    return theirInt++; // return 5 then increase ++
  }
  incrementIntAgain (theirInt) { // value before increased
    return ++theirInt; // increase then return
  }
}
// 7 
```

* q42
Package Exam
```js
public class Tester{
  private int myInt = 5;
  public static void main(String []args){
  Tester test = new Tester();
  test.myInt = 6;
  System.out.println(test.incrementIntAgain(test.incrementInt(test.myInt)));
  }
  public int incrementInt (int theirInt) {
  return theirInt++;
  }
  public int incrementIntAgain (int theirInt) {
  return ++theirInt;
  }
}

// 7
```

* q43
An instance level object can access a static variable. True or False?
```
  False
  => Static variables can only be accessed directly from the class.
  Example => Class.StaticVar...
```