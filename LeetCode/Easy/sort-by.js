// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.
// You may assume that fn will never duplicate numbers for a given array.
// https://leetcode.com/problems/sort-by/
// needs to understand callback functions, JavaScript builtin functions, and array manipulations

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))
};

console.log(sortBy([5, 4, 1, 2, 3], (x) => x))
console.log(sortBy([{ "x": 3 }, { "x": -1 }, { "x": 0 }], (x) => x))
console.log(sortBy([5, 4, 1, 2, 3], (x) => x))