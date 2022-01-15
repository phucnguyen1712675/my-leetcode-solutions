/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      continue;
    }
    nums[count++] = nums[i];
  }

  return count;
};
