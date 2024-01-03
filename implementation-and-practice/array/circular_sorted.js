// Write a function to check if an array is circularly sorted. 
// There is at most one case when arr[i-1] is greater than the next element, arr[i]
// If there is more than one case or the first element is smaller than the last element, it is not a circular sort. 
// https://www.geeksforgeeks.org/circularly-sorted-array-sorted-and-rotated-array/
function isCircularSorted(arr, n) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) count++;
    }

    if (count === 1) return arr[0] > arr[n - 1]
    else return false;
}

console.log(isCircularSorted([23, 34, 45, 12, 17, 19], 6)) // second argument is the length of the array