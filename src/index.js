class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = this.left = null;
  }
}

function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * @param {number[]} nums
 * @return {TreeNode} tree
 */
function arrayToTree(nums) {
  if (nums === null) { return null; }
  if (nums.length === 0) { return null; }
  const root = new TreeNode(nums[0]);
  let node = root;
  for (let i = 1; i < nums.length; i++) {
    const key = (i % 2 === 1) ? 'left' : 'right';
    const num = nums[i];
    if (num !== null) {
      node[key] = new TreeNode(num);
    }
    if (key === 'right') {
      node = node.left;
    }
  }
  return root;
}

/**
 * @param {TreeNode} tree
 * @return {number[]} nums
 */
function treeToArray(tree) {
  const result = [];
  let node = tree;
  const queue = [node];
  while (queue.length > 0) {
    node = queue.shift();
    if (node === null) {
      result.push(null);
      continue;
    } else {
      result.push(node.val);
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
  return result;
}

module.exports = {
  TreeNode,
  swap,
  getRandomInt,
  arrayToTree,
  treeToArray,
}
