/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = dic[s[0]];

  for (let i = 1; i < s.length; i++) {
    const cur = s[i];
    const pre = s[i - 1];
    let amount = dic[cur];

    switch (cur) {
      case 'V':
      case 'X': {
        if (pre === 'I') {
          amount -= dic[pre] * 2;
        }
        break;
      }
      case 'L':
      case 'C': {
        if (pre === 'X') {
          amount -= dic[pre] * 2;
        }
        break;
      }
      case 'D':
      case 'M': {
        if (pre === 'C') {
          amount -= dic[pre] * 2;
        }
        break;
      }
      default:
        break;
    }

    sum += amount;
  }

  return sum;
};
