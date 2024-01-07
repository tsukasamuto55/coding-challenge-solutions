// Given an array arr[] of n positive integers.Push all the zeros of the given array to the right end of the array while maintaining the order of non - zero elements.Do the mentioned change in the array in -place.

// Example:
// Input:
// N = 5
// Arr[] = [ 3, 5, 0, 0, 4]
// Output: 3 5 4 0 0
// Explanation: The non - zero elements
// preserve their order while the 0
// elements are moved to the right.
// https://www.geeksforgeeks.org/problems/move-all-zeroes-to-end-of-array0751/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

// function pushZerosToEnd(arr, n) {
//     if (n === 1) return arr;
//     let i = 0;

//     for (let j = 1; j < n; j++) {
//         if (arr[i] === 0 && arr[j] !== 0) {
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//             i++;
//         } else if (arr[i] !== 0) i++
//     }
//     return arr
// }

// Easier to read and less code. 
function pushZerosToEnd(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            j++;
        }
    }
    return arr
}

console.log(pushZerosToEnd([3, 5, 0, 0, 2, 4, 0], 7))
console.log(pushZerosToEnd([3, 5, 0, 2, 4, 0], 6))
console.log(pushZerosToEnd([3, 5, 0, 0, 2, 4], 6))
console.log(pushZerosToEnd([1], 1))
console.log(pushZerosToEnd([], 0))