function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    console.log(arr)
    return swapIndex
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const result = pivotHelper([22, 5, 1, 3, 10, 9, 6, 44])

console.log(result)