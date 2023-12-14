// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in.Each heights[i] is the height of the ith student in line(0 - indexed).

// Return the number of indices where heights[i] != expected[i].

// Bobble sort solution


/**
 * @param {number[]} heights
 * @return {number}
 */

function swap(arr, idx) {
    let temp = arr[idx + 1];
    arr[idx + 1] = arr[idx];
    arr[idx] = temp;
}

var heightChecker = function (heights) {
    const expectedHeights = [...heights];
    let noSwaps;
    let count = 0;

    for (let i = heights.length - 1; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i; j++) {
            if (expectedHeights[j] > expectedHeights[j + 1]) {
                noSwaps = false;
                swap(expectedHeights, j)
            }
        }
        if (noSwaps) break;
    }

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expectedHeights[i]) count++;
    }
    return count;
};

// using a built-in sort method
// var heightChecker = function (heights) {
//     // create a copy of the sorted heights array
//     const expectedHeights = [...heights].sort((a, b) => a - b)
//     let count = 0;

//     for (let i = 0; i < heights.length; i++) {
//         if (heights[i] !== expectedHeights[i]) count++;
//     }
//     return count;
// };

// const result = heightChecker([1, 1, 4, 2, 1, 3])
// const result = heightChecker([5, 1, 2, 3, 4])
const result = heightChecker([7, 4, 5, 6, 4, 2, 1, 4, 6, 5, 4, 8, 3, 1, 8, 2, 7, 6, 3, 2])

console.log(result)