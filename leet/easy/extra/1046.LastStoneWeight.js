/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
  // sorting stones to ascending or descending
  stones.sort((a, b) => b - a);
  const length = stones.length - 1;
  while(stones.length > 1) {
    if (stones.length === 0) return 0;
    if (stones.length === 1) return stones[0]
    const one = stones.shift();
    const two = stones.shift();
    const remainder = one - two;
    if (remainder > 0) {
      const a = stones.find(stone => stone < remainder)
      const b = stones.indexOf(a) 
      if (a) {
        stones.splice(b, 0, remainder) // insert
      } else {
        stones.push(remainder)
      }
    }
  }
  return stones[0] ? stones[0] : 0
};
const test = [1, 5, 3, 5, 6, 2, 3, 4, 5, 1, 23, 412, 3,410]
const test1 = [3, 7, 8]
// lastStoneWeight(test)
lastStoneWeight(test1)