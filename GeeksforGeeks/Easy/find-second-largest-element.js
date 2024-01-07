// Given an array Arr of size N, print second largest distinct element from an array.
// Example 1:
// Input:
// N = 6
// Arr[] = [ 12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the 
// array is 35 and the second largest element
// is 34.

// if I am not allowed to use a built-in sort function. 
function findSecondLargestElement(arr, n = arr.length) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < n; i++) {
        // if a current element is larger than the largest value, 
        // the current element becomes the new largest, and the previous largest becomes the second largest
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
            // If a current element is larger than the second largest, and it is smaller than the largest,
            // the current element becomes the new second largest. This condition also handles duplications. 
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i]
        }
    }
    // Check if the second largest element has been updated. If not return -1.
    return secondLargest !== -Infinity ? secondLargest : -1;
}

// if I am allowed to use a built-in sort function, which uses optimized version of Quick sort. 
function findSecondLargestElement2(arr, n = arr.length) {
    arr.sort((a, b) => b - a)
    let largest, secondLargest = largest = -Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] > largest) largest = arr[i]
        else if (arr[i] > secondLargest && arr[i] < largest) secondLargest = arr[i]
    }
    return secondLargest !== -Infinity ? secondLargest : -1;
}

console.log(findSecondLargestElement([10, 22, 4, 33, 100, 2039])) // It should return 100
console.log(findSecondLargestElement([12, 35, 1, 10, 34, 1])) // 34
console.log(findSecondLargestElement2([10, 22, 4, 33, 100, 2039])) // It should return 100
console.log(findSecondLargestElement2([35, 35, 35, 10, 34, 1])) // 34