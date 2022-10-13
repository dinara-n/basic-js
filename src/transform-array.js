const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  arr.forEach((elem, i) => {
    switch(elem) {
      case '--discard-prev':
        if (i !== 0 && !(i >= 2 && arr[i - 2] === '--discard-next')) {
          res.pop();
        }
        break;
      case '--double-prev':
        if (i !== 0 && !(i >= 2 && arr[i - 2] === '--discard-next')) {
          res.push(res.at(-1));
        }
        break;
      case '--discard-next':
      case '--double-next':
        break;
      default:
        if (i !== 0 && arr[i - 1] === '--double-next') {
          res.push(elem);
        }
        if (arr[i - 1] !== '--discard-next') {
          res.push(elem);
        }
    }
  })
  return res;
}

module.exports = {
  transform
};
