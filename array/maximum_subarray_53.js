/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currSum = 0;
	let maxSum = Number.NEGATIVE_INFINITY;

	for (let i = 0; i < nums.length; i++) {
		currSum += nums[i];

		if (currSum > maxSum) {
			maxSum = currSum;
		}

		if (currSum < 0) {
			currSum = 0;
		}
	}

	return maxSum;
};
 