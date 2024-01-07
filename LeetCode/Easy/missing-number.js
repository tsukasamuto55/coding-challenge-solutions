// Given an array nums containing n distinct numbers in the range[0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3, 0, 1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range[0, 3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0, 1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range[0, 2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range[0, 9]. 8 is the missing number in the range since it does not appear in nums.
//     Constraints
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.


// This is a naive approach. Time comple
// function missingNumber(nums) {
//     nums.sort((a, b) => a - b)
//     console.log(nums)
//     if ((nums.indexOf(0) === -1)) return 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i + 1] - nums[i] !== 1) return nums[i] + 1;
//     }
// };

// More efficient solution with binary search
// function missingNumber(nums) {
//     nums.sort((a, b) => a - b);
//     let left = 0;
//     let right = nums.length - 1;

//     if (nums.indexOf(0) === -1) return 0;

//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2);

//         if (middle === nums[middle]) left = middle + 1;
//         else right = middle - 1;
//     }
//     return left;
// }

function missingNumber(nums) {
    console.log("Initial array:", nums);
    nums.sort((a, b) => a - b);
    console.log("Sorted array:", nums);

    let left = 0;
    let right = nums.length - 1;

    if (nums.indexOf(0) === -1) {
        console.log("0 is missing, returning 0");
        return 0;
    }

    while (left <= right) {
        console.log("Current left:", left, "Current right:", right);
        let middle = Math.floor((left + right) / 2);
        console.log("Middle index:", middle, "Middle value:", nums[middle]);

        if (middle === nums[middle]) {
            console.log("Value at middle equals middle, moving left to", middle + 1);
            left = middle + 1;
        } else {
            console.log("Value at middle does not equal middle, moving right to", middle - 1);
            right = middle - 1;
        }
    }

    console.log("Returning left as the missing number:", left);
    return left;
}


console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // should be 8
console.log(missingNumber([0, 1, 2, 3, 5, 6])) // should be 4
console.log(missingNumber([2, 1])) // should be 0