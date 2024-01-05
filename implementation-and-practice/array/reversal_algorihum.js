// Reverse the first ‘d’ elements
// Reverse last(N - d) elements
// Reverse the whole array.

function rotateArr(arr, d, n = arr.length) {
    if (d === 0) return;

    // in case the rotating factor is greater than array length
    d = d % n;
    // Reverse the first 'd' elements
    reverseArr(arr, 0, d - 1)
    // Reverse last (n - d) elements
    reverseArr(arr, d, n - 1)
    //Reverse the whole array
    reverseArr(arr, 0, n - 1)
    return arr;
}

function reverseArr(arr, start, end) {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }

}

console.log(rotateArr([1, 2, 3, 4, 5, 6], 20))