// time complexity: O(n)
// space complexity: O(n)
// function leftRotation(arr, num) {
//     let temp = [];

//     for (let i = num; i < arr.length; i++) {
//         temp.push(arr[i])

//     }

//     for (let i = 0; i < num; i++) {
//         temp.push(arr[i])
//     }

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = temp[i];
//     }
//     return arr;
// }

// time complexity: O(n * d)
// space complexity: O(1)
// If an array is small, d(step) is relatively small, and space is a constraint, the below function could be considered a better solution. 
// In general, time complexity is more important than space complexity, the above solution would be more efficient.
function leftRotation(arr, num) {
    for (let i = 0; i < num; i++) {
        // Remove the first element, and shift the rest of elements to the left by one
        // time complexity is O(n) 
        const firstElement = arr.shift();
        arr.push(firstElement)
    }
    return arr;
}

const result = leftRotation([1, 2, 3, 4, 5, 6], 2)
console.log(result)