/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
	const str = x.toString();
	const reverseStrArr = str.split('').reverse();

	let result = true;

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== reverseStrArr[i]) {
			result = false;
			break;
		}
	}

	return result;
};
