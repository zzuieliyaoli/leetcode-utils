const { expect } = require('chai');
const { tree } = require('../src');

describe('Tree', () => {
  it('should convert array to tree', () => {
    const a = [1, 2, 3, null, 4];
    const t = tree.arrayToTree(a);
    expect(tree.treeToArray(t)).to.eql(a);
  });
});
