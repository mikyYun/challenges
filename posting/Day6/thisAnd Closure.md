# JS _ this / closure 
## **this**
<ol>
  <li>golbal object</li>
  <li>inside function : binding to parents(owner) of function</li>
  <li>inside method : binding to object called the method</li>
  <li>inside eventHandler : HTML element</li>
  <li>new : object itself</li>
  <li>apply || call
  
  ```js
function whoisThis() {
  console.log(this);
}
    
whoisThis(); //window
   
var obj = {
  x: 123,
};
// call()
whoisThis.call(obj); //{x:123}

// apply()
function Character(name, level) {
  this.name = name;
  this.level = level;
}
function Player(name, level, job) {
  // without apply()
  this.name = name;
  this.level = level;
  this.job = job

  // with apply()
  Character.apply(this, [name, level]);
  this.job = job;

  // with call()
  Character.call(this, name, level);
  this.job = job;
}
// apply
const me = new Player("Mike", 10, "Archor")

// call
const me = {};
Player.call(me, "Mike", 10, "Archor");

  ```
  </li>
</ol>

## **Closure**
What is Closure ?<br/>
combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)<br />

Advantages of Closure :
<li>Store data<br />
Closure can access outer variables even after external function finished </li>
<li>Encapsulation<br />
Use closure module patterns to make return multiple functions </li>
<li>Modularization<br />
assign closure functions to each variable, then can save and use the values independently</li>
<br />
Key factors : <br />
Using the scope, closing the access range of the variable is the key of closure.<br />
Inaccessible from the external function scope to the internal function scope. In the internal function, the variable declared in the external function scope is accessible. Thus, the internal function is accessible to the variable declared in the external function.<br />

```js
  (function () {
    var count = 0;
    var button = document.createElement("button");
    button.innerText ="click";
    button.addEventListener("click", function() {
      console.log(++count, "times clicked")
    })
    document.body.appendChild(button)
  })();
```

  Closure does not always return function.
  The closure is a 'phenomenon' that occurs in a particular situation and the function corresponds to a 'condition' for this phenomenon to appear.

## --Will be added with more practical experience later.