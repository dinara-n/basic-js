const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length();
  },
  addLink(value) {
    const valueToAdd = (typeof value === undefined) ? '' : value;
    this.chain.push(valueToAdd);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || typeof this.chain[position] === 'undefined') {
      this.chain.length = 0;
      throw new Error ("You can't remove incorrect link!")
    };
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map((elem) => `( ${elem} )`).join('~~');
    this.chain.length = 0;
    return result;
  },
};

module.exports = {
  chainMaker,
};
