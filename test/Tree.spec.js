const { expect } = require('chai');
const { tree } = require('../src');

const { TreeNode, arrayToTree, treeToArray } = tree;

describe('Tree', () => {
  it('should create TreeNode', () => {
    const a = new TreeNode(1);
    const b = {
      val: 1,
      left: null,
      right: null,
    };
    expect(a).to.deep.eql(b);
  });

  it('should handler edge cases', () => {
    expect(arrayToTree([])).to.eql(null);
    expect(treeToArray(null)).to.eql([]);
  });

  it('should convert array to tree', () => {
    const a = [1, 2, 3, null, 4];
    const t = arrayToTree(a);
    expect(treeToArray(t)).to.eql(a);
  });
});
