/**
 * You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.

You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups.
 */
// Input: amount = [1,4,2] .. 5 - 1 // 5 - 4 // 1
// Output: 4
// Explanation: One way to fill up the cups is:
// Second 1: Fill up a cold cup and a warm cup.
// Second 2: Fill up a warm cup and a hot cup.
// Second 3: Fill up a warm cup and a hot cup.
// Second 4: Fill up a warm cup.
// It can be proven that 4 is the minimum number of seconds needed.

// Input: amount = [5,4,4]
// Output: 7
// Explanation: One way to fill up the cups is:
// Second 1: Fill up a cold cup, and a hot cup.
// Second 2: Fill up a cold cup, and a warm cup.
// Second 3: Fill up a cold cup, and a warm cup.
// Second 4: Fill up a warm cup, and a hot cup.
// Second 5: Fill up a cold cup, and a hot cup.
// Second 6: Fill up a cold cup, and a warm cup.
// Second 7: Fill up a hot cup.

// Input: amount = [5,0,0]
// Output: 5
// Explanation: Every second, we fill up a cold cup.
var fillCups = function (amount) {
  let count = 0;
  // find max, if max === 0 ? return count
  // find secondMax, if secondMax === 0 ? count += max, return count
  // max - 1, secondMax - 1, count + 1, recursion 
  const max = Math.max(...amount);
  if (max === 0) {
    return count;
  }
  const maxIndex = amount.indexOf(max);
  const subAmount = amount.filter((num, index) => index !== maxIndex);
  const secondMax = Math.max(...subAmount);
  if (secondMax === 0) {
    count += max;
    return count;
  }
  const secondMaxIndex = amount.findIndex((num, index) => {
    return num === secondMax && index !== maxIndex;
  });

  amount[maxIndex] -= 1;
  amount[secondMaxIndex] -= 1;
  count += 1;
  count += fillCups(amount)
  return count;
};

// const amount = [5, 0, 0];
const amount = [5, 4, 4];
console.log(fillCups(amount));