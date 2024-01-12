// 383. Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



//     Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.
// https://leetcode.com/problems/ransom-note/description/

// var canConstruct = function (ransomNote, magazine) {
//     if (ransomNote.length > magazine.length) return false;

//     const lookup1 = {}
//     const lookup2 = {}

//     for (let char of ransomNote) !lookup1[char] ? lookup1[char] = 1 : lookup1[char] += 1
//     for (let char of magazine) !lookup2[char] ? lookup2[char] = 1 : lookup2[char] += 1

//     for (key in lookup1) {
//         if (!lookup2[key] || lookup1[key] > lookup2[key]) return false;
//     }
//     return true
// };

// Reduce space complexity by using one lookup object
function canConstruct(ransomNote, magazine) {
    // if ransomNote is longer than magazine, ransomNote cannot be constructed by magazine.
    // ex. ransomNote = 'aaaaaaa', magazine = 'fdsa'
    if (ransomNote.length > magazine.length) return false;
    const charCount = {};

    for (let char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1
    }

    for (let char of ransomNote) {
        // if there is no char in ransomNote or all charCount[char] are already consumed, then return false;
        if (!charCount[char] || charCount[char] === 0) return false;
        charCount[char]--;
    }
    // if the above condition doesn't match, it means ransomNote can be constructed by magazine
    return true;
}
