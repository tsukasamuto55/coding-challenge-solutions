// Given an array A of n elements, rearrange the array according to the following relations:
// A[i] >= A[i - 1], if i is even.
//     A[i] <= A[i - 1], if i is odd.[Considering 1 - indexed array]
// Return the resultant array.

//     Example:

// Input 1:
// A[] = { 1, 2, 2, 1}
// Output:
// 1 2 1 2
// Explanation:
// Both 2 are at even positions and 1 at odd satisfying 
// given condition 

// Input 2:
// A[] = { 1, 3, 2}
// Output:
// 1 3 2
// Explanation:
// Here, the array is already sorted as per the conditions.


// function assign(arr, n = arr.length) {
//     let willSwap;
//     for (let i = 1; i < n; i++) {
//         if (i % 2 === 1 && arr[i] >= arr[i - 1]) {
//             willSwap = false;
//         } else if (i % 2 === 0 && arr[i] <= arr[i - 1]) willSwap = false
//         else willSwap = true;

//         if (willSwap) {
//             [arr[i - 1], arr[i]] = [arr[i - 1], arr[i]];
//         }
//     }
//     return arr
// }

// Provided solution in GeeksforGeeks site. This works for all situations including completely sorted array.
function assign(arr, n) {
    // Sorting the array in ascending order using a custom comparator function
    arr.sort((a, b) => a - b);

    // If there is only 1 or 2 elements, return the array as it is
    if (n === 1 || n === 2) {
        return arr;
    }

    // If the number of elements is even
    if (n % 2 === 0) {
        // Swapping adjacent elements starting from the second element
        for (let i = 1; i < n - 1; i += 2) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    } else {
        // If the number of elements is odd
        // Swapping adjacent elements starting from the second element
        for (let i = 1; i < n; i += 2) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    // Returning the modified array
    return arr;
}

// Revised version. This doesn't work correctly if an array is completely sorted descendent. 
// function assign(arr, n = arr.length) {
//     for (let i = 0; i < n - 1; i++) {
//         if ((i + 1) % 2 === 0 && arr[i] > arr[i + 1]) {
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         } else if ((i + 1) % 2 !== 0 && arr[i] < arr[i + 1]) {
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         }
//     }
//     return arr;
// }


console.log(assign([1, 2, 3, 1, 5], 5)) 
console.log(assign([5, 4, 3, 2, 1], 5)) 
console.log(assign([1, 2, 3, 4, 5], 5))