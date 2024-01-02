// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let currentVal = arr[i]
//         for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j + 1] = arr[j]
//         }
//         arr[j + 1] = currentVal
//     }
//     return arr
// }


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j;
        console.log(`${i} iteration`)
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            console.log('inner loop is fired')
            console.log('Current value is ', current)
            console.log(arr)
            arr[j + 1] = arr[j];
            console.log(arr)
        }
        console.log(`Before inserting ${current} `, arr)
        arr[j + 1] = current;
        console.log(`After inserting ${current}`, arr)
    }
    return arr
}

const result = insertionSort([5, 2, 7, 10, 1])
console.log(result)

// first iteration:
// i = 1 which is 2, and j = 0 which is 5. j is larger than and equal to 0 and larger than current value of 2
// move the arr[j], which is 5, to the right by one. Array will become [5,5,7]. The current still holds the value of 2. 
// then j is decremented by 1, from 0 to -1, as part the of end of the loop. -1 is less than 0, so the first iteration breaks. 
// We will insert the current to where the first 5 is, which is the same as j + 1 because j is -1 now: -1 + 1 = 0 pointing at first 5.
// Inserting the current to where j + 1 will complete the sort with the example. [2,5,7]