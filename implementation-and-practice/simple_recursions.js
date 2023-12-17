// const sayHello = (num) => {
//     let exclamation = "!"
//     if (num <= 0) {
//         console.log("I'm tired of saying hello...")
//         return
//     }

//     console.log(`Hello ${num}`)
//     num--
//     sayHello(num)
// }

// console.log(sayHello(3))

const sumRange = num => {
    if (num === 1) return 1;
    return num + sumRange(num - 1)
}

console.log(sumRange(5))

//                            total value
// if (num === 1) return 1; 1    1
// return 2 + sumRange(2-1) 2    3
// return 3 + sumRange(3-1) 3    6
// return 4 + sumRange(4-1) 4    10
// return 5 + sumRange(4-1) 5    15