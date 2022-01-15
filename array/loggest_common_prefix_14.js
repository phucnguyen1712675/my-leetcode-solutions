/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const len = strs.length;

  if (len === 0) {
    return '';
  }
  if (len === 1) {
    return strs[0];
  }

  const a = strs.slice();
  a.sort();

  const first = a[0];
  const last = a[len - 1];
  const minLen = Math.min(first.length, last.length);

  let i = 0;
  for (; i < minLen; i++) {
    if (first[i] !== last[i]) {
      break;
    }
  }

  return a[0].substring(0, i);
};

console.log(longestCommonPrefix(['geeksforgeeks', 'geeks', 'geek', 'geezer']));
