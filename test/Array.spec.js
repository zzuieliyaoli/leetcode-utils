const { expect } = require('chai');
const { array } = require('../src');

const { swap } = array;

describe('Array', () => {
  it('should swap two elements of array', () => {
    const a = [1, 2];
    swap(a, 0, 1);
    expect(a).to.eql([2, 1]);
  });
});
