function findBoundary(arr) {
    let left = 0
    let right = arr.length - 1
    // If there is no true in an array, -1 needs to be returned.
    let boundaryIndex = -1;
    // Edge case, when all of the elements in the arr is true.
    if (arr[left]) return 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid]) {
            boundaryIndex = mid;
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return boundaryIndex
}

// console.log(findBoundary([false, false, true, true, true])) // 2
// console.log(findBoundary([false, false, false, true, true])) // 3
console.log(findBoundary([false, false, false, false, false, true, true])) // 5
console.log(findBoundary([false, false, false, false, false])) // -1
console.log(findBoundary([true]))
console.log(findBoundary([]))