const { expect } = require('chai');
const { array } = require('../src');

const { swap } = array;

describe('Array', () => {
  describe('should validate params', () => {
    it('First param not Array', () => {
      expect(() => { swap('asd', 1, 2); }).to.throw('First params is not the Array.');
    });

    it('Wrong Array index value', () => {
      const a = [1, 2, 3];
      expect(() => { swap(a, -1, 2); }).to.throw('Wrong Array index value.');
      expect(() => { swap(a, 1, 20); }).to.throw('Wrong Array index value.');
    });
  });

  it('should swap two elements of array', () => {
    const a = [1, 2];
    swap(a, 0, 1);
    expect(a).to.eql([2, 1]);
  });
});
