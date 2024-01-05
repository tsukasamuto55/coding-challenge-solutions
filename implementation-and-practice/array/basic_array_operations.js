// Insert Operation
// 1. Insert at the end. Write a function given arr, element, and capacity that adds the element at the end of the arr. 
// If the length of arr is larger or equal to capacity, return the length of the arr. 
function insertSorted(arr, ele, capacity) {
    if (arr.length >= capacity) return arr.length;
    arr[arr.length] = ele
    return arr.length
}

console.log('Insert at the end ', insertSorted([1, 2, 3, 4, 5], 6, 2))

//2. Insert at any position. 
// Insert operation in an array at any position can be performed by shifting element to the right, which are on the right side of the required position. 
function insertElement(arr, ele, pos) {
    for (let i = arr.length - 1; i >= pos; i--) {
        arr[i + 1] = arr[i];
    }
    arr[pos] = ele
    return arr
}

console.log('Insert at any position ', insertElement([1, 2, 4, 5, 6], 3, 2))


//3. Delete operation
// In the delete operation, the element to be deleted is searched using the linear search, and then the delete operation is performed followed by shifting the elements. 
// If a given array is sorted, using the binary search would be more efficient because its time complexity is O(log n), and that of the linear search is O(n)
// function findPos(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) return i
//     }
//     return -1;
// }

// function deleteElement(arr, target) {
//     const pos = findPos(arr, target)
//     if (pos === -1) return arr.length;

//     for (let i = pos; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr.pop()
//     return arr.length
// }


// Simpler solution
function deleteElement(arr, target) {
    const pos = arr.indexOf(target)
    if (pos === -1) return console.error('Element not found')
    arr.splice(pos, 1)
    return arr
}
console.log(deleteElement([1, 2, 3, 4, 5, 6], 10))
console.log(deleteElement([1, 2, 3, 4, 5, 6], 4))