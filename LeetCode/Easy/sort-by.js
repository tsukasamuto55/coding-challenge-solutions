// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.
// You may assume that fn will never duplicate numbers for a given array.
// https://leetcode.com/problems/sort-by/
// I haven't finished this one yet as of 12/12/2023

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    const sortedArr = [...arr];
    console.log(sortedArr)

    for (let i = sortedArr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                let temp = sortedArr[j]
                sortedArr[j] = sortedArr[j + 1]
                sortedArr[j + 1] = temp
            }
        }
    }
    return fn(sortedArr)
};

sortBy([5, 4, 1, 2, 3], (x) => x)