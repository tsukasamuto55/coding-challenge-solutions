// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j <= nums.length; j++) {
//             if (nums[i] + nums[j] === target) return [i, j];
//         }
//     }
// }

// More efficient solution
function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (diff in map) return [i, map[diff]].sort((a, b) => a - b)
        map[nums[i]] = i;
    }
}

console.log(twoSum([3, 4, 9, 6, 4], 8))