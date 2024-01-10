// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1, 2, 3, 1]
// Output: true

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false
// https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function (nums) {
    if (nums.length === 1) return false;
    const counter = {};

    for (let i = 0; i < nums.length; i++) {
        counter[nums[i]] = (counter[nums[i]] || 0) + 1;
    }

    for (key in counter) {
        if (counter[key] > 1) return true
    }
    return false;
};