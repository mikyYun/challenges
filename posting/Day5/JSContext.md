# Understanding Context in JS

## Lists
* Execution Context
* What we need to execute
* Types of Execution Context
* Execution Stack
* Logic

### **Execution Context**
is the management of what is currently running.
This handles orders of JS codes. The rules for what gets run first abide by the order of lexical scoping.

### **Information required to execute JS codes**
* A. variable(global or local variables, parameters, and object property)
* B. function declaration
* C. function scope
* D. this

### **Types of Execution Context**
* Global Execution Context
* Functional Execution Context
* `eval` Function Execution Context

### **Execution Stack**
* = Call Stack

### **Generate Execution Context Logic **
* Creation Phase<br/>
One, Lexical Environment. Two, Variable Environment.<br />
<ol>
  <li>Environment Records _ Store functions, variables in Lexical Environment
  </li>
  <li>Reference to the outer environment __
  means can access to Lexical Environment. => if can't find variable inside Lexical Env, can look up external env
  </li>
  <li>This binding __
  determining value of `this`</li>
  <li>Variable Environment also Lexical Env<br/>
  difference: VariableEnv only store variable(var). Lexical Env stores function declaration, other variables(let or const)</li>
</ol>

* Execution Phase<br />
This phase complete assign values for all variables and execute codes