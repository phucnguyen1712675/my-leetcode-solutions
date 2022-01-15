/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (i < len - 1 && nums[i] === nums[i + 1]) {
      continue;
    }
    nums[count++] = nums[i];
  }

  return count;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));