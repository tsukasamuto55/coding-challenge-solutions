// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest
// substring
//  without repeating characters.

//     Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

var lengthOfLongestSubstring = function (s) {
    let i = 0;
    let j = i + 1;
    const lookup = {}
    lookup[s[i]] = 1
    let count = 1;
    while (j < s.length) {
        console.log(s[i], s[j], i, j, s.length)
        if (!lookup[s[j]]) {
            lookup[s[j]] = (lookup[s[j]] || 0) + 1
            count++
            j++
        }
        console.log(lookup)
        i = j;
        j = i + 1;
    }
    return count
};

console.log(lengthOfLongestSubstring('abcdbc')) // 4
console.log(lengthOfLongestSubstring('pwwkew')) // 3