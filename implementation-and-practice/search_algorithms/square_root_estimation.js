// Given an integer, find its square root without using the built-in square root function. Only return the integer part(truncate the decimals).

// Input: 16
// Output: 4

// Input: 8
// Output: 2

// Explanation: square root of 8 is 2.83..., return the integer part, 2

function squareRoot(n) {
  if (n === 0) return 0;
  let left = 1;
  let right = n;
  let res = -1
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2)
    if (middle * middle === n) return middle
    else if (middle * middle >= n) {
      res = middle
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return res - 1
}

console.log(squareRoot(16)) // 4