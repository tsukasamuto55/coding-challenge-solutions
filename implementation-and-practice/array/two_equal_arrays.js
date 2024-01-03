// Given two arrays, arr1 and arr2 of equal length N, the task is to find if the given arrays are equal or not. 

// Two arrays are said to be equal if:

// both of them contain the same set of elements,
//     arrangements(or permutations) of elements might / might not be same.
// If there are repetitions, then counts of repeated elements must also be the same for two arrays to be equal.
// https://www.geeksforgeeks.org/check-if-two-arrays-are-equal-or-not/

// examples
// Input: arr1 = [ 1, 2, 5, 4, 0], arr2 = [ 2, 4, 5, 0, 1]
// Output: Yes

// Input: arr1 = [ 1, 7, 1], arr2 = [] 7, 7, 1]
// Output: No

function areEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    const counter1 = {};
    const counter2 = {};

    for (let ele of arr1) {
        counter1[ele] = (counter1[ele] || 0) + 1
    }
    for (let ele of arr2) {
        counter2[ele] = (counter2[ele] || 0) + 1
    }

    for (key in counter1) {
        if (!key in counter2) return false;
        else if (counter1[key] !== counter2[key]) return false;
    }
    return true;
}

console.log(areEqual([10, 12, 15, 14, 11], [12, 14, 15, 10, 11]))// true
console.log(areEqual([10, 12, 15, 14, 11], [12, 14, 15, 10, 20]))// false
console.log(areEqual([10, 12, 15, 14, 12], [12, 14, 15, 10, 10]))// false
console.log(areEqual([], []))// true