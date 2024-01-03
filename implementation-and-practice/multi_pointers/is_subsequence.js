// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

//     Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

// function isSubsequence(str1, str2) {
//     if (str1.length > str2.length) return false;
//     let i = 0;
//     let j = 0;

//     while (i < str1.length && j < str2.length) {
//         if (str1[i] === str2[j]) {
//             if (i === str1.length - 1) return true;

//             i++;
//             j++;
//         } else j++;
//     }
//     return false
// }

// refactored solution assuming that if the first string is empty, return true. 
function isSubsequence(str1, str2) {
    // edge case checks
    if (!str1) return true;
    if (str1.length > str2.length) return false;

    let i = 0;
    for (let j = 0; j < str2.length; j++) {
        // Check if a character of str1 and str2 matches. 
        if (str1[i] === str2[j]) {
            i++;

            // check if all characters in str1 have been found. If it is, return true.
            if (i === str1.length) return true;
        }
    }
    return false;
}

console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false
console.log(isSubsequence('', 'acb')) // true