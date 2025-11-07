const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // constructor() {
  //   this.depth = 1;
  //   this.maxDepth = this.depth;
  // }
  calculateDepth(arr) {
    // if (!Array.isArray(arr)) return 0;
    // for (let i = 0; i < arr.length; i += 1) {
    //   if (Array.isArray(arr[i])) {
    //     this.depth += 1;
    //     this.maxDepth = (this.maxDepth > this.depth) ? this.maxDepth : this.depth;
    //     this.calculateDepth(arr[i]);
    //   }
    // }
    // this.depth -= 1;
    // return this.maxDepth;
    if (!Array.isArray(arr)) return 0;
    let depth = 1;
    let maxDepth = depth;
    function calculate(array) {
      for (let elem of array) {
        if (Array.isArray(elem)) {
          depth += 1;
          maxDepth = (maxDepth > depth) ? maxDepth : depth;
          calculate(elem);
        }
      }
      depth -= 1;
    }
    calculate(arr);
    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
