const { expect } = require('chai');
const { tree } = require('../src');

const { arrayToTree, treeToArray } = tree;

describe('Tree', () => {
  it('should convert array to tree', () => {
    const a = [1, 2, 3, null, 4];
    const t = arrayToTree(a);
    expect(treeToArray(t)).to.eql(a);
  });
});
