// The majority element is the element that appears more than ⌊n / 2⌋ times.You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3, 2, 3]
// Output: 3

// Example 2:
// Input: nums = [2, 2, 1, 1, 1, 2, 2]
// Output: 2
// https://leetcode.com/problems/majority-element/description/

// Time complexity: O(n), Space Complexity: O(n)
// var majorityElement = function (nums) {
//     const lookup = {};
//     for (let i = 0; i < nums.length; i++) {
//         lookup[nums[i]] = (lookup[nums[i]] || 0) + 1;
//     }
//     for (key in lookup) {
//         if (lookup[key] > nums.length / 2) return key
//     }
// };

// Time complexity: O(1) solution. 
function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        console.log(candidate, count)
        if (count === 0) candidate = nums[i]

        count += (candidate === nums[i]) ? 1 : -1;
    }
    return candidate;
}

// console.log(majorityElement([3, 2, 3])) // 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2
console.log(majorityElement([3, 3, 4])) // 3