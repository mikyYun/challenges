# Time Complexity

There are many different types of time complexity

* Constant time - O(1)

=> If we are doing things that only require one step or when there are no loops, then the complexity is O(1)

* Linear time - O(n)

=> Loops such as for loops and while loops, something that causese the runtime to increase at magnitude proportional to the input size.

* Quadratic time - O(n²)

=> Two nested loops of the same input.

=> If we have three nested loops, then the time complexity is cubic time O(n³)

=> Examples... Bubble sort, Insertion sort

* Logarithmic time - O(log n)

=> When a divide-and-conquer strategy is used, it's said to be O(log n). In logarithmic time, the increase in time decreases as the input increases

=> Example. Binary search

* Factorial time - (O(n!))

=> It's the most expensive one. We are adding a nested loop for every elements

## Rule Book of Big O
1. Worst Case
2. Remove Constants
3. Different Terms for Different Inputs
4. Drop Non-Dominant Terms

### Worst Case
```js
  // Even though sometimes our function can just run for an O(1), we always take the Big O in the worst-case scenario.

  // Sometimes the item we want is located at the index of 0, and we finish off early, but it's still considered as O(n)

  const arr = [1, 2, 3, 4, 5];
  function findNum(arr, num) {
    for (let i = 0; i < arr.length; i ++) {
      console.log("running");
      if (arr[i] === num) {
        console.log("FOUND", num);
        break;
      }
    }
  }
  findNum(arr, 1) // event index of 0 is the value, still considered as O(n)
```

### Remove Constants
```js
  const removeConstant = (val) => {
    const removeArr = Array.from({length: val.length}).fill("this");(O(n))
    console.log(removeArr); // O(1)
    console.log(val.length); // O(1)
    
    for (let i = 0; i < val.length * 2; i ++) {
      console.log(`i is ${i}`); // O(2n)
    }
  }

  const input = Array.from({length: 10})
  removeConstant(input); // O(n + 2 + 2n)
  /**
   * removeConstant(input) is O(3n + 2)
   * It is simplified to O(3n + 1)
   * Then simplified to O(n + 1) by removing the coefficient.
   * 
   * Key here is.. 3n, 4n or 5n.... they are all `linear`
   * which can be simplified to just `n`
   * 
   * After dropping the constant 1 as 1 does not have an effect when the input is large, it is simplified O(n)
  */
```

### Different Terms for Different Inputs
multipme inputs or multiple arguments.. give a unique term for each of them, as they are separate inputs with different sizes. In other words, the complexity depends on two independent factors.
```js
  const twoArr = (arr1, arr2) => {
    arr1.forEach(item => {
      console.log(item)
    })
    arr2.forEach(item => {
      console.log(item)
    });
  };
  // The Big O is O(n + m)
  // n, m is the size of arr
```

```js
  const arrNums = [1, 2, 3, 4, 5];
  const arrStrs = ["Hi", "Hey", "Hello"];

  const logFirstArr = (arr1, arr2) => {
    arr1.forEach(item => {
      console.log(item)
    })
    let answer = [];
    arr1.forEach(first => {
      arr2.forEach(second => {
        answer.push([first, second])
      })
    })
    return answer;
  }

  console.log(logFirstArr(arrNums, arrStrs))
  // O(n + nm) => O(n(1 + m)) => O(nm)
```
https://cs.stackexchange.com/questions/9523/is-omn-considered-linear-or-quadratic-growth

### Drop Non-Dominant Terms
This is the concept of simplification like simpifying O(n+nm) to become O(nm)

O(n² + n) => O(n²) 

## Summary
1. Big O does not matter a lot when inputs are not `sufficiently large`. If a function is written to only accept a fixed small amount of data, then we don't particularly care about the time & space complexity. Also in some scenarios, O(n) might be more efficient than O(1) 

2. Everything comes at a cost. Somethimes writing efficient code results in code that is hard to read, and vice versa. The goal is to strike a balance between code efficiency and readability, depending on problems and situations