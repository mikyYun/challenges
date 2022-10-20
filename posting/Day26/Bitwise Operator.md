# Bitwise Operator
## types of bitwise operators
https://www.ibm.com/docs/en/i/7.2?topic=expressions-bitwise-left-right-shift-operators
https://www.javatpoint.com/operator-shifting
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift
```
& return 1 if bits are 1
| return 1 if 1 of bits are 1
^ return 1 if bits are different(XOR)
~ return 1 if bit is 0, return 0 if bit is 1 (NOT)
<< [leftShift] bits to left
>> [rightShift] bits to right
>>> bits to right, new bits all 0
```

## AND &
```
00001111
&
00010101
=
00000101
```

## OR |
```
00001111
|
00010101
=
00011111
```

## XOR ^
```
00001111
^
00010101
=
00011010
```

## NOT ~
```
  00001111
  ~
  =
  11110000
```

## Shifts(<<, >>
```
// 16bitx
  0000000000111101 << 3 => 3 bits left 
  =                      
  0000000111101000

  0000000111101000 >> 3 => 3 bits right
  =
  0000000000111101
```