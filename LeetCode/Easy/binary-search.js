// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.If target exists, then return its index.Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.
// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) return middle;

        if (target > nums[middle]) left = middle + 1;
        else right = middle - 1;
    }
    return -1;
};
const test = search([-1, 0, 3, 5, 9, 12], 9)

console.log(test)
