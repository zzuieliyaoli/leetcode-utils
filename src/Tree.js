/* eslint no-continue: off */

class TreeNode {
  /**
   * Create a tree node
   * @param {*} val
   */
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

/**
 * @param {number[]} nums
 * @returns {TreeNode} tree
 */
function arrayToTree(nums) {
  if (nums === null) { return null; }
  if (nums.length === 0) { return null; }
  const tree = new TreeNode(nums[0]);
  let node = tree;
  for (let i = 1; i < nums.length; i += 1) {
    const key = (i % 2 === 1) ? 'left' : 'right';
    const num = nums[i];
    if (num !== null) {
      node[key] = new TreeNode(num);
    }
    if (key === 'right') {
      node = node.left;
    }
  }
  return tree;
}

/**
 * @param {TreeNode} tree
 * @returns {number[]} array
 */
function treeToArray(tree) {
  const array = [];
  let node = tree;
  const queue = [node];
  while (queue.length > 0) {
    node = queue.shift();
    if (node === null) {
      array.push(null);
      continue;
    } else {
      array.push(node.val);
    }
    if ((node.left === null) && (node.right === null)) {
      continue;
    }
    if ((node.left === null) && (node.right !== null)) {
      queue.push(null);
      queue.push(node.right);
      continue;
    }
    if ((node.left !== null) && (node.right === null)) {
      queue.push(node.left);
      queue.push(null);
      continue;
    }
    queue.push(node.left);
    queue.push(node.right);
  }
  return array;
}

module.exports = {
  TreeNode,
  arrayToTree,
  treeToArray,
};
