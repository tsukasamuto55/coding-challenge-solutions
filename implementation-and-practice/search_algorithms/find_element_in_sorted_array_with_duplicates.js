// Given a sorted array of integers and a target integer, find the first occurrence of the target and return its index.Return - 1 if the target is not in the array.

// Input:
// arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]
// target = 3

// Output: 1

// Explanation: The first occurrence of 3 is at index 1.


// Input:
// arr = [2, 3, 5, 7, 11, 13, 17, 19]
// target = 6

// Output: -1

// Explanation: 6 does not exist in the array.

function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1
  let firstOccurrenceIndex = -1

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2)

    if (arr[middle] === target) {
      firstOccurrenceIndex = middle
      right = middle - 1
    } else if (arr[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return firstOccurrenceIndex
}

console.log(findFirstOccurrence([1, 3, 3, 4, 5], 1))
console.log(findFirstOccurrence([2, 3, 5, 7, 11, 13, 17, 19], 10))