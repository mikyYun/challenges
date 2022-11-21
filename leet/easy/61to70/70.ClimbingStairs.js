const climbStairs = (n) => {
  // n = stairs
  // steps can be only one or two

  // 1 => 1 .. 1 case
  // 2 => 1.1 // 2 .. 2 cases
  // 3 => 1.1.1 // 1.2 // 2.1 .. 3 cases ((n-1) + (n-2))
  // 4 => 1.1.1.1 // 1.1.2 // 1.2.1 // 2.1.1 // 2.2 .. 5 cases ((n-1) + (n-2))
  // 5 => 1.1.1.1.1 // 1.1.1.2 // 1.1.2.1 // 1.2.1.1 // 2.1.1.1 // 1.2.2 // 2.1.2 // 2.2.1 .. 8 cases ((n-1) + (n-2))
  // 6 => 1.1.1.1.1.1. // 1.1.1.1.2 // 1.1.1.2.1 // 1.1.2.1.1 // 1.2.1.1.1 // 2.1.1.1.1 // 1.1.2.2 // 1.2.1.2 // 1.2.2.1 // 2.1.1.2 // 2.1.2.1 // 2.2.1.1 // 2.2.2  ... 13 cases ((n-1) + (n-2))
  if (n <= 2) return n;
  // const distinctWays = climbStairs(n - 1) + climbStairs(n - 2)
  // return distinctWays; // time limit exceeded with inptu 45
  // do increment instead recursion
  let prev = 2;
  let prevOfPrev = 1;
  for (let i = 3; i <= n; i++) {
    const now = prev + prevOfPrev;
    prevOfPrev = prev;
    prev = now;
  }

  return prev;
};
const n = 20;
console.log(climbStairs(n));