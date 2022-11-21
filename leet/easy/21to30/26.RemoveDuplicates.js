// require not create a new array, just replace or update current nums array without duplicates

const removeDuplicates = (nums) => {
  // failed approach
  // nums = [numbers]
  // create current value
  // while in loop, compare with current value
  // if same, return or remove
  // if different, update current value and do again
  // let standardNum;
  // const subNumsArr = []
  // nums.forEach(num => {
  //   if (num !== standardNum) {
  //     standardNum = num
  //     subNumsArr.push(num)
  //   } 
  // })
  // nums = [...subNumsArr]
  // return nums
  
  let standard;
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] !== standard) {
      standard = nums[i]
    } else {
      nums.splice(i, 1)
      i --;
    }
  }
  return nums.length // return not required
  // assertion do judge this function.
}
const nums = [1,1,2]
console.log(removeDuplicates(nums))
const nums1 = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums1))
const nums2 = [0,0,0,0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums2))
