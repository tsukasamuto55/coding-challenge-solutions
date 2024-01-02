function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
};

function bobbleSort(arr) {
    let noSwap;
    for (let i = arr.length; i >= 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr
}

console.log(bobbleSort([12, 3, 4, 1, 11, 24, 20]))