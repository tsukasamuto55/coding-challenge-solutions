// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//     Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
// https://leetcode.com/problems/valid-anagram/description/

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const counter1 = {}
    const counter2 = {}

    for (let i = 0; i < s.length; i++) {
        counter1[s[i]] = (counter1[s[i]] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        counter2[t[i]] = (counter2[t[i]] || 0) + 1
    }

    for (key in counter1) {
        if (!counter2[key]) return false
        else if (counter1[key] !== counter2[key]) return false
    }

    return true
};