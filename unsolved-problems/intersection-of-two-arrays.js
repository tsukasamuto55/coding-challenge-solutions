// Given two integer arrays nums1 and nums2, return an array of their intersection.Each element in the result must be unique and you may return the result in any order.

// Example 1:
// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2]

// Example 2:
// Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// Output: [9, 4]
// Explanation: [4, 9] is also accepted.
// https://leetcode.com/problems/intersection-of-two-arrays/description/

function intersection(nums1, nums2) {
    const intersection = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j <= nums2.length) {
        console.log(nums1[i], nums2[j])
        if (nums1[i] === nums2[j]) {
            if (nums1[i] === intersection[0]) return intersection
            intersection.push(nums1[i]);
            i++;
            j++;
        } else {
            j++
        }


        if (j === nums2.length) {
            console.log('test')
            j = 0;
            i++;
            console.log(i, nums1[i], j, nums2[j])
        }
    }

    return intersection;
}

console.log(intersection([2, 1], [1, 2]))
console.log(intersection([4, 9, 5], [4, 9, 4, 4, 9, 8, 4]))
