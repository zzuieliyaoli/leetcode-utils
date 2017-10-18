const { expect } = require('chai');
const { list } = require('../src');

const { ListNode, listToArray, arrayToList } = list;

describe('List', () => {
  it('should create ListNode', () => {
    const a = new ListNode(1);
    const b = {
      val: 1,
      next: null,
    };
    expect(a).to.deep.equal(b);
  });

  it('should handler edge case', () => {
    expect(arrayToList([])).to.eql(null);
    expect(listToArray(null)).to.eql([]);
  });

  it('should convert array to list', () => {
    const a = [1, 2, 3, 4];
    const l = arrayToList(a);
    expect(listToArray(l)).to.deep.equal(a);
  });
});
