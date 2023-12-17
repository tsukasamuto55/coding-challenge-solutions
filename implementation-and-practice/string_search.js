// function naiveSearch(long, short){
//     var count = 0;
//     for(var i = 0; i < long.length; i++){
//         for(var j = 0; j < short.length; j++){
//            if(short[j] !== long[i+j]) break;
//            if(j === short.length - 1) count++;
//         }
//     }
//     return count;
// }

// naiveSearch("lorie loled", "lol")

function naiveStringSearch(long, short) {
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(`i: ${i}, j: ${j}`)
        }
    }
}

// naiveStringSearch("lorie loled", "lol")

function binarySearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let left = i
        let right = arr.length - 1
        let mid = Math.floor((left + right) / 2)

        if (target > arr[mid]) i = mid
        else if (target < arr[mid]) i = mid - 1
        else if (target = arr[mid]) return mid
    }
    return -1
}

console.log(binarySearch([1, 3, 4, 7, 9], 5))