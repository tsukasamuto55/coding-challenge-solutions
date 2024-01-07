// Given a sorted array of distinct integers and a target value, return the index if the target is found.If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [1, 3, 5, 6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1, 3, 5, 6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1, 3, 5, 6], target = 7
// Output: 4


// Constraints:

// 1 <= nums.length <= 104
//     - 104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// - 104 <= target <= 104
// https://leetcode.com/problems/search-insert-position/description/

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    console.log("Provided array: ", nums, " Target: ", target)
    console.log("Initial left:", left, "Initial right:", right);

    if (target > nums[right]) {
        console.log("Target is greater than the last element. Insert position:", nums.length);
        return nums.length;
    }

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        console.log("Current middle:", middle, "Value at middle:", nums[middle]);

        if (nums[middle] === target) {
            console.log("Target found at position:", middle);
            return middle;
        } else if (nums[middle] > target) {
            console.log("Middle value is greater than target. Moving right to:", middle - 1);
            right = middle - 1;
        } else {
            console.log("Middle value is less than target. Moving left to:", middle + 1);
            left = middle + 1;
        }
    }

    console.log("Target not found. Insert position:", left);
    return left;
}


// function searchInsert(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     let middle;

//     if (target > nums[right]) return nums.length;

//     while (left <= right) {
//         middle = Math.floor((left + right) / 2)
//         if (nums[middle] === target) return middle;
//         else if (nums[middle] > target) right = middle - 1;
//         else left = middle + 1;
//     }
//    return left;
// }

console.log(searchInsert([1, 3], 2))// should be 1
console.log(searchInsert([1, 3, 5, 6], 2))// should be 1
console.log(searchInsert([1, 3, 5, 6], 7))// should be 4