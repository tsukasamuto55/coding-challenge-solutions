function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

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

console.log(quickSort([22, 5, 1, 3, 10, 9, 6, 44]))