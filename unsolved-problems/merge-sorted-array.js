// You are given two integer arrays nums1 and nums2, sorted in non - decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non - decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.nums2 has a length of n.



//     Example 1:

// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]
// Explanation: The arrays we are merging are[1, 2, 3] and[2, 5, 6].
// The result of the merge is[1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.
//     Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are[1] and[].
// The result of the merge is[1].
//     Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are[] and[1].
// The result of the merge is[1].
// Note that because m = 0, there are no elements in nums1.The 0 is only there to ensure the merge result can fit in nums1.
// https://leetcode.com/problems/merge-sorted-array/
// function merge(nums1, m, nums2, n) {
//     let i = 0;
//     let j = 0;
//     nums1.splice(m)

//     while (i < m && j < n) {
//         if (nums1[i] <= nums2[j]) {
//             i++;
//         } else {

//             nums1[i + 1] = nums1[i]
//             nums1[i] = nums2[j];
//             j++;
//         }
//         console.log(nums1)
//     }
//     if (nums1.length === (m + n)) return nums1;

//     while (i < m) {
//         nums1.push(nums1[i]);
//         i++
//     }
//     while (j < n) {
//         nums1.push(nums2[j]);
//         j++
//     }
//     console.log(nums1);
//     return nums1;
// }

function merge(nums1, m, nums2, n) {
    const tempArr = []
    // create two pointers, i and j, starting with 0
    let i = 0;
    let j = 0;

    // loop both arrays until all elements of one of them are consumed. 
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            tempArr.push(nums1[i]);
            i++;
        } else {
            tempArr.push(nums2[j]);
            j++;
        }
    }

    while (i < m) {
        tempArr.push(nums1[i]);
        i++;
    }

    while (j < n) {
        tempArr.push(nums2[j]);
        j++;
    }

    nums1 = [];

    for (let ele of tempArr) {
        nums1.push(ele)
    }
    console.log(nums1)
    return nums1;
}


merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)
merge([2, 0], 1, [1], 1)
const result = merge([0], 0, [3], 1)

console.log(result)