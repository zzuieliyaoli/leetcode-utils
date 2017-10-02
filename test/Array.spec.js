const { expect } = require('chai');
const { array } = require('../src');

describe('Array', () => {
  it('should swap two elements of array', () => {
    const a = [1, 2];
    array.swap(a, 0, 1);
    expect(a).to.eql([2, 1]);
  });
});
