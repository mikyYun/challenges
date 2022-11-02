# What is the binary code?
* THe binary code is the manchine language
*
*
*
* The machine language can also be called `low level language`, because only a computer can understand it
* `high level language` is easy for a human to read, but still not understandable by a computer
* `Compiler`, `Interpreter` made high level to low level

```
"Source Code"

  => 

Compiler
---------------
Lexical Analysis
Syntax Analysis
Semantic Analysis
IR Generation
---------------
IR Optimisation
Code Generation
Optimisation

  => 

"Madhine Code"
```

## From binary to decimals
* Each digit may only be 0 or 1
* If it's a 0 it adds nothing
* If it's a 1 wee add 2 to the power of that position

```
1010101011
// FROM Right
1 -> 1 * 2^0
1 -> 1 * 2^1
0 -> 0 * 2^2
1 -> 1 * 2^3
0 -> 0 * 2^4
1 -> 1 * 2^5
0 -> 0 * 2^6
1 -> 1 * 2^7
0 -> 0 * 2^8
1 -> 1 * 2^9
```

Binary-digit multiply by 2 to the power of position of the binary-digit

## Practice
```
Decimal to Binary
=> 219, 6, 93
219: 219/2 = 109*2 + 1 // 109/2 = 54*2 + 1 // 52/2 = 27*2 + 0 // 27/2 = 13*2 + 1 // 13/2 = 6*2 + 1 // 6/2 = 3*2 + 0 // 3/2 = 1*2 + 1 // 1/2 = 0*2 + 1
  = 11011011

6: 3*2 + 0 // 1*2 + 1 = 110
 : 6/2 + 0 // (3/2) = 1*2 + 1 // 1/2 = 0*2 + 1 
93: 46*2 + 1 // 23*2 + 0 // 11*2 + 1 // 5*2 + 1 // 2*2 + 1 // 1*2 + 0
  = 101110

Binary to Decimal
=> 1010, 100, 11110
1010: 1*2^3 + 1*2^1 = 10
100: 1*2^2 = 4
11110: 1*2^4 + 1*2^3 + 1*2^2 + 1*2^1 = 30
100001: 1*2^5 + 1*2^0 = 33
1100: 1*2^3 + 1*2^2 = 12
```