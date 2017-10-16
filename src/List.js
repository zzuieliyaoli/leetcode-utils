class ListNode {
  /**
   * Create a list node
   * @param {number} val - list node's value
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {number[]} array
 * @returns {ListNode} list
 */
function arrayToList(array) {
  if (array.length === 0) { return null; }
  const head = new ListNode();
  let last = head;

  for (let i = 0; i < array.length; i += 1) {
    const node = new ListNode(array[i]);

    while (last.next !== null) {
      last = last.next;
    }
    last.next = node;
  }
  return head.next;
}

/**
 * @param {ListNode} list
 * @returns {numbers[]} array
 */
function listToArray(list) {
  const array = [];
  let node = list;
  while (node !== null) {
    array.push(node.val);
    node = list.next;
  }
  return array;
}

module.exports = {
  ListNode,
  arrayToList,
  listToArray,
};
