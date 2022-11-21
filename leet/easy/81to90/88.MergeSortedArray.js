// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
// Do not return anything, modify nums1 in-place instead.

const merge = function (nums1, m, nums2, n) {
  // nums1.splice(m, nums1.length)
  // nums1 = nums1.concat(nums2)
  let j = 0;
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[j];
    j++;
  }
  nums1.sort((a, b) => a-b)
};

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3; // index of nums1
const n = 3; // index of nums2
console.log(merge(nums1, m, nums2, n));