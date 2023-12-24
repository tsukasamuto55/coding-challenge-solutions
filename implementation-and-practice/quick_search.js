function quickSearch(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right)
        quickSearch(arr, left, pivotIndex - 1)
        quickSearch(arr, pivotIndex + 1, right)
    }
    return arr
}

function pivotHelper(arr, left, right) {
    let pivot = arr[left]
    let swapIndex = left

    for (let i = left + 1; i <= right; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, left, swapIndex)
    return swapIndex
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

console.log(quickSearch([22, 5, 1, 3, 10, 9, 6, 44]))