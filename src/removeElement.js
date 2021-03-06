/* 
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === val) {
        nums[j] = null;
      }

      if (
        nums[j] === null &&
        nums[j + 1] !== null &&
        nums[j + 1] !== undefined &&
        nums[j + 1] !== val
      ) {
        nums[j] = nums[j + 1];
        nums[j + 1] = null;
      }
    }
  }

  return nums;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

var removeElement2 = function (nums, val) {
  let counter = nums.length;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === val) {
        nums[j] = null;
        counter--;
      }

      if (
        nums[j] === null &&
        nums[j + 1] !== null &&
        nums[j + 1] !== undefined &&
        nums[j + 1] !== val
      ) {
        nums[j] = nums[j + 1];
        nums[j + 1] = null;
      }
    }
  }

  return counter;
};

console.log(removeElement2([3, 2, 2, 3], 3));
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2));

module.exports = {
  removeElement,
  removeElement2,
};
