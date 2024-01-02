// function pivotHelper(arr, start = 0, end = arr.length - 1) {
//     let randomIndex = Math.floor(Math.random() * (arr.length))
//     let pivot = arr[randomIndex];
//     let swapIndex = start;
//     console.log(pivot)
//     for (let i = start; i <= end; i++) {
//         if (pivot > arr[i]) {
//             swapIndex++;
//             swap(arr, swapIndex, i)
//         }
//     }
//     swap(arr, start, swapIndex)
//     console.log(arr)
//     return swapIndex
// }

function pivotHelper(arr, start = 0, end = arr.length - 1) {
    // Selecting a pivot within the subarray range
    let randomIndex = start + Math.floor(Math.random() * (end - start + 1));
    let pivot = arr[randomIndex];

    // Swapping the pivot with the start element
    swap(arr, start, randomIndex);

    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    // Moving pivot to its correct position
    swap(arr, start, swapIndex);
    console.log(pivot, arr)
    return swapIndex;
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const result = pivotHelper([22, 5, 1, 3, 10, 9, 6, 44])

console.log(result)