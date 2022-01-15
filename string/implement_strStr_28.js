/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack === null || needle === null) {
    return -1;
  }

  const needleLen = needle.length;

  if (needleLen === 0) {
    return 0;
  }

  const haystackLen = haystack.length;
  for (let i = 0; i < haystackLen - needleLen + 1; i++) {
    if (haystack.substring(i, i + needleLen) === needle) {
      return i;
    }
  }

  return -1;
};
