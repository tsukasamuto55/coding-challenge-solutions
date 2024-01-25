// A sorted array of unique integers was rotated at an unknown pivot.For example, [10, 20, 30, 40, 50] becomes[30, 40, 50, 10, 20].Find the index of the minimum element in this array.

// Input: [30, 40, 50, 10, 20]
// Output: 3
// Explanation: the smallest element is 10 and its index is 3.

// Input: [3, 5, 7, 11, 13, 17, 19, 2]
// Output: 7
// Explanation: the smallest element is 2 and its index is 7.

// My solution
// function findMinRotated(arr) {
//   let left = 0;
//   let right = arr.length - 1

//   if (arr[left] < arr[right]) return 0;

//   while (left <= right) {
//     let mid = left + Math.floor((right - left) / 2);
//     if (mid> 0 && arr[mid] < arr[mid - 1]) return mid;
//     else if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) return mid + 1;
//     else if(arr[left] <= arr[right]) keft = mid + 1;
//     else right = mid - 1;
//   }
// }

// A better solution
function findMinRotated(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // if arr[mid] <= last element, then belongs to lower half
    if (arr[mid] <= arr[arr.length - 1]) {
      boundaryIndex = mid;
      right = mid - 1
    } else {
      left = mid + 1;
    }
  }
  return boundaryIndex;
}

console.log(findMinRotated([30, 40, 50, 10, 20]))  // Minimum element is 10, which is at the index of 3
console.log(findMinRotated([3, 4, 5, 1, 2])) // Minimum element is 1, which is at the index of 3
console.log(findMinRotated([3, 5, 7, 11, 13, 17, 19, 2])) // 7
console.log(findMinRotated([0, 1, 2, 3, 4, 5]))
console.log(findMinRotated([0]))