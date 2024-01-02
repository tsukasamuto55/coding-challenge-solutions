function mergeArrays(arr1, arr2) {
    const newArr = [];

    // compare each element in both arrays, then push the smaller element to the new array. 
    // once consuming all elements of one of them, just push the rest of the other array to the new array. 
    let i = 0;
    let j = 0;

    // break the loop when either of arrays consume every elements.
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            // move the pointer of the left array to the right by 1 index
            i++;
        } else {
            newArr.push(arr2[j]);
            // move the pointer of the right array to the right by 1 index
            j++;
        }
    }

    while (i < arr1.length) {
        newArr.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        newArr.push(arr2[j])
        j++
    }
    console.log(newArr) // should out put [1,2,10,12,40, 50, 55...]
    // console.log(newArr)
    return newArr
}

// mergeArrays([1, 10, 40, 45, 60, 70, 88, 90, 100], [2, 12, 50, 55, 79, 90])




// function mergeUnsortedArrays(arr1, arr2) {
//     const newArray = [];
//     arr1.sort((a, b) => a - b)
//     arr2.sort((a, b) => a - b)

//     let i = 0;
//     let j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] <= arr2[j]) {
//             newArray.push(arr1[i])
//             i++;
//         } else {
//             newArray.push(arr2[j])
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         newArray.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         newArray.push(arr2[j]);
//         j++;
//     }

//     console.log(newArray)

//     return newArray;
// }

// mergeUnsortedArrays([], [10, 43, 90, 22, 1, 2, 5, 10])
// mergeUnsortedArrays([3, 1, 5, 2, 7, 10, 33], [10, 43, 90, 22, 10])

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeArrays(left, right);
}

console.log(mergeSort([10, 24, 50, 34, 11, 45, 90, 98, 76, 4]))