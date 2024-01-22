// 125. Valid Palindrome 
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non - alphanumeric characters, it reads the same forward and backward.Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



//     Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
//     Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
//     Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non - alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
// https://leetcode.com/problems/valid-palindrome/description/

// My solution. This is simpler and easier to read, but it might be less effective with a long string in terms of the memory usage. 

function isPalindrome(str) {
    if (str.length === 0) return true;
    let replaced = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let start = 0;
    let end = replaced.length - 1;

    while (start <= end) {
        if (replaced[start] !== replaced[end]) return false;
        else {
            start++;
            end--;
        }
    }
    return true;
}



// Provided solution. This might be more efficient with a long string, but it is a lit bit more complex and harder to read. 
// function isPalindrome(str) {
//     // Initialize pointers at the beginning and end of the string.
//     let startIdx = 0;
//     let endIdx = str.length - 1;

//     // RegExp to test for alphanumeric characters.
//     const alphaNumericRegExp = /[a-zA-Z0-9]/;

//     // Loop until the pointers meet in the middle.
//     while (startIdx < endIdx) {
//         // If the character at the start index is not alphanumeric, move the start pointer forward.
//         if (!alphaNumericRegExp.test(str[startIdx])) {
//             ++startIdx;
//         }
//         // If the character at the end index is not alphanumeric, move the end pointer backward.
//         else if (!alphaNumericRegExp.test(str[endIdx])) {
//             --endIdx;
//         }
//         // If the alphanumeric characters are not equal (ignoring case), return false.
//         else if (str[startIdx].toLowerCase() !== str[endIdx].toLowerCase()) {
//             return false;
//         }
//         // If the alphanumeric characters match, move both pointers towards the center.
//         else {
//             ++startIdx;
//             --endIdx;
//         }
//     }

//     // If all the alphanumeric characters match, return true indicating the string is a palindrome.
//     return true;
// }

console.log(isPalindrome('A man, a plan, a canal')) // false
console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('')) // true