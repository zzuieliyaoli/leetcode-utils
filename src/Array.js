/**
 * Swap a and b position in array
 * @param {number[]} array
 * @param {number} a - index
 * @param {number} b - index
 */
function swap(array, a, b) {
  if (Array.isArray(array) === false) {
    throw new Error('First params is not the Array.');
  }
  const len = array.length;
  if ((a < 0) || (b < 0) || (a >= len) || (b >= len)) {
    throw new Error('Wrong Array index value.');
  }
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}


module.exports = {
  swap,
};
