const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
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
  constructor() {
    this.currentDepth = 0;
    this.maxDepth = 0;
  }
  calculateDepth(arr) {
    this.currentDepth += 1;
    this.maxDepth = (this.currentDepth > this.maxDepth) ? this.currentDepth : this.maxDepth;
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        this.calculateDepth(elem);
      }
    }
    this.currentDepth -= 1;
    if (this.currentDepth === 0) {
      let res = this.maxDepth;
      this.maxDepth = 0;
      return res;
    }
  }
}

module.exports = {
  DepthCalculator
};
