const { expect } = require('chai');
const { list } = require('../src');

const { listToArray, arrayToList } = list;

describe('List', () => {
  // TODO FIX
  // Error: FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory
  it.skip('should convert array to list', () => {
    const a = [1, 2, 3, 4];
    const l = arrayToList(a);
    expect(listToArray(l)).to.deep.equal(a);
  });
});
