/**
 * Swap a and b position in array
 * @param {number[]} array
 * @param {number} a - index
 * @param {number} b - index
 */
function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}


module.exports = {
  swap,
};
