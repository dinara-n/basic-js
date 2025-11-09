const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const secondArr = s2.split('');
  let count = 0;
  for (item of s1) {
    const commonItemIndex = secondArr.indexOf(item);
    if (commonItemIndex !== -1) {
      secondArr.splice(commonItemIndex, 1);
      count += 1;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
