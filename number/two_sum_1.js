/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const dic = {};
  for (let i = 0; i < nums.length; i++) {
    dic[nums[i]] = i;
  }

  const pair = [];
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const index = dic[diff];

    if (index && index !== i) {
      pair.push(i);
      pair.push(index);
      break;
    }
  }

  return pair;
};
