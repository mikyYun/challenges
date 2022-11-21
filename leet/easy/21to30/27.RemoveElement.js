const removeElement = (nums, val) => {
  // failed approach
  // return nums = nums.filter(num => num !== val);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

console.log(removeElement(nums, val));