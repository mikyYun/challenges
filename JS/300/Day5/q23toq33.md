# Day5

## **lists**
<li>q23</li>
<li>q24</li>
<li>q25</li>
<li>q26</li>
<li>q27</li>
<li>q28</li>
<li>q29</li>
<li>q30</li>
<li>q31</li>
<li>q32</li>
<li>q33</li>

## **Questions**
* q23
If a function has no return value specified, what value does it return?
=> undefined

* q24
What is the syntax for calling a method which may or may not exist on an object?
=> optilnal chaining = ?

```js
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
adventurer.dog = "puppy";
console.log(adventurer.dog)
// expected output: "puppy"

```

* q25
Which of the following is not a valid Promise method?
<ol>
  <li>Promise.some()</li>
  <li>Promise.allSettled()</li>
  <li>Promise.reject()</li>
  <li>Promise.race()</li>
</ol>
=> Answer: A <br />

resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Promise.all(iterable) => Wait for all promises to be fulfilled or for any to be rejected

Promise.allSettled(iterable) => Wait until all promises have settled (each may fulfill or reject)

## What is Promise ??
Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

* q26
How can you dynamically access an object property based on a variable value?

```
let variable = "value";
Object[variable];
```

* q27
A string can be modified after it is created. True or False ?
=> False<br />
: Strings are immutable in JS. However, the variable pointing to a stirng can be reassigned to another value.

* q28
Does JavaScript is synchronous ? => True

* q29
A nested catch in a promise chain can catch erros thrown higher up in the promise chain. True or Flase ? => False<br />
: nested catches only catches its scope and below. Not higher up in the chain outside the nested scope

* q30
The Map object can have keys that are of types other than strings, such as number. True or False
=> True

* q31
Output of the code below ?
```js
const map = new Map();
map.set({}, 1);
console.log(map.get({})); // undefined

const map = new Map();
map.set("key", 1);
console.log(map.get("key")) // 1
```

* q32
What will the code below output to the console and why?
```js
  let map1 = new Map([
    ["a", 1],
    ["b", 1],
    ["c", 1],
  ]);

  let map2 = new Map([
    ["a", 2],
    ["b", 2],
  ])

  let spreadMap = new Map([...map1, ...map2]);
  // result
  Map(3) {"a" => 2, "b" => 2, "c", => 1};

  // Reason: Identical keys in the second map will override keys in the first map
```

* q33
Bracket notation can be chained just like dot notation. True or false?<br />
Answer: True
```js
  const obj = {
    1: 2,
    2: 3,
    3: 4
  }
//  obj.1 = obj["1"]

```