// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.You can solve this using the frequency counter pattern OR the multiple pointers pattern.

//     Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// Frequency counter solution
// function areThereDuplicates(...args) {
//     const counter = {};

//     for (let char of args) {
//         counter[char] = (counter[char] || 0) + 1;
//     }

//     for (key in counter) {
//         console.log(key)
//         if (counter[key] > 1) return true;
//     }
//     return false;
// }

// Multiple pointers solution
function areThereDuplicates(...args) {
    args.sort((a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    });

    let left = 0;
    let right = 1;
    console.log(args)

    while (right < args.length) {
        if (args[left] === args[right]) return true;
        left++;
        right++;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3, 2, 1)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('test', 'test1', 'test2', 'test3')) // false
console.log(areThereDuplicates('a', 'a', 'b', 'c', 'a')); // true
