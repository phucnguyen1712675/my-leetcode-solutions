/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];

    if (cur === '(' || cur === '[' || cur === '{') {
      stack.push(cur);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So stack cannot be empty at this point.
    if (stack.length === 0) {
      return false;
    }

    let top;
    switch (cur) {
      case ')':
        top = stack.pop();
        if (top !== '(') {
          return false;
        }
        break;
      case ']':
        top = stack.pop();
        if (top !== '[') {
          return false;
        }
        break;
      case '}':
        top = stack.pop();
        if (top !== '{') {
          return false;
        }
        break;
      default:
        break;
    }
  }

  return stack.length === 0;
};
