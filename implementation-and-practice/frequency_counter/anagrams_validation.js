// function isValid(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     // create two empty objects to count a frequency of each character
//     const counter1 = {};
//     const counter2 = {};

//     for (let char of str1) counter1[char] = (counter1[char] || 0) + 1
//     for (let char of str2) counter2[char] = (counter2[char] || 0) + 1


//     for (let key in counter1) {
//         // if a key of counter1 doesn't exist in counter2, return false
//         if (!(key in counter2)) return false

//         // if a value of each character doesn't match between counter1 and counter2, return false
//         if (counter1[key] !== counter2[key]) return false
//     }
//     return true
// }

function isValid(str1, str2) {
    if (str1.length !== str2.length) return false;
    const lookup = {};

    for (let char of str1) lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    for (let char of str2) {
        if (!lookup[char]) return false;
        else lookup[char] -= 1;
    }
    return true;
}

console.log(isValid('', '')) // true
console.log(isValid('aaz', 'zza')) // false
console.log(isValid('anagram', 'nagaram')) // true
console.log(isValid('rat', 'car')) // false
console.log(isValid('awesome', 'awsom')) // false
console.log(isValid('texttwisttime', 'timetwisttext')) // true