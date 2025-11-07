const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const elem = arr[i]
    if (elem === '--discard-next') {
      if (typeof arr[i + 1] !== 'undefined') {
        i += 1;
      }
      continue;
    }
    if (elem === '--discard-prev') {
      if (typeof arr[i - 1] !== 'undefined' && typeof result[i - 1] !== 'undefined') {
        result.pop();
      }
      continue;
    }
    if (elem === '--double-next') {
      if (typeof arr[i + 1] !== 'undefined') {
        result.push(arr[i + 1]);
      }
      continue;
    }
    if (elem === '--double-prev') {
      if (typeof arr[i - 1] !== 'undefined' && typeof result[i - 1] !== 'undefined') {
        result.push(arr[i - 1]);
      }
      continue;
    }
    result.push(elem);
  }
  return result;
}

module.exports = {
  transform
};
