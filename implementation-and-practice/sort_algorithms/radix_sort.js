function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigits = mostDigits(nums);
    for (let k = 0; k < maxDigits; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            console.log(`nums[${i}]`, nums[i])
            console.log(`bucket ${digit}: `, digitBuckets[digit])
            digitBuckets[digit].push(nums[i])
            console.log(digitBuckets)
        }
        console.log(nums = [].concat(...digitBuckets))
    }

}

const result = radixSort([1234, 7, 99999, 88888, 21, 10, 436])
console.log(result)