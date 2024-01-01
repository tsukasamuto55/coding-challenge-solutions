// Write a function called sameFrequency.Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false

function sameFrequency(inter1, inter2) {
    // change integers to strings so that we can loop through each character of integers.
    const str1 = inter1.toString()
    const str2 = inter2.toString()
    if (str1.length !== str2.length) return false;
    // create an empty object
    const lookup = {};

    // loop through the str1 to store a frequency of each character into the lookup object
    for (let char of str1) lookup[char] ? lookup[char] += 1 : lookup[char] = 1;

    for (let char of str2) {
        // check if any char of str2 exists in the lookup as a key or a value of the char is not 0. If not, return false;
        if (!lookup[char]) return false;
        else lookup[char] -= 1;
    }
    return true;
}

// console.log(sameFrequency(182, 281))
console.log(sameFrequency(1882, 2281))