// nums = array
// target = targetNumber
// result = [index1, index2]
const twoSum = (nums, target) => {
  // appraoch => find a number or index which equal to (target - number of numbers)
  // filter => less than target number
  const result = [];
  // if nums length < 2
  if (nums.length < 2) {
    return false;
  }
  // if nums length is 2
  if (nums.length === 2 && nums[0] + nums[1] === target) {
    result.push(0, 1);
    return result;
  }
  for (let i = 0; i < nums.length; i++) {
    const remainer = target - nums[i];
    const copyNums = [...nums];
    copyNums.splice(i, 1);
    if (copyNums.includes(remainer)) {
      result.push(i);
      result.push(copyNums.indexOf(remainer));
      return result;
    }
  }
};

number = [1, 2, 3, 4, 5, 6];
targetNumber = 7;

console.log(twoSum(number, targetNumber));