const searchInsert = (nums, target) => {
  nums = nums.filter(num => num <= target);
  console.log(nums);
  return nums.includes(target) ? nums.length - 1 : nums.length;
};
const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target));