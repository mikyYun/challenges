# JavaScript Garbage Collection
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#:~:text=Some%20high%2Dlevel%20languages%2C%20such,longer%20needed%20and%20reclaim%20it.

## What is Garbage Collection
Automatic task that inspects the state of a JS program and marks blocks of memory safe to reuse
* Allocated memory but no more using and not released memory.

1. When assign a value, memory is assigned to the sepcific value (and variable)

* Finding whether some memory is `not needed anymore` is undecidable, garbage collections implement a restriction of a solution to the general problem.
2. Memory references(implicit / explicit)
---
가비지컬렉션은 더이상 사용하지 않는 메모리를 발견하고 이를 해제해주는 역할을 한다. 가비지컬렉션이 자동으로 메모리 관리를 해준다고해서 개발자가 완전히 신경을 쓰지 않는다면 메모리 누수(memory-leak)가 발생할 수도 있다. 메모리 누수란, 더이상 어플리케이션에서 사용하지 않는도 불구하고 메모리 해제가 되지 않는 상태를 말한다.

* Purpose: prevemt memory-leak

* Reference-counting<br />
check reference and if not referenced, GC delete the value
* Mark-and-sweep<br />
The problem of `Reference-counting` was if the value is not used but is referenced, not delete it. While `Mark-and-sweep` focus on the `reachability`, which means reachable from :root to the value