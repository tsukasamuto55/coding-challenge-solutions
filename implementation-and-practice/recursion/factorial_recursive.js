const factorial = (num) => {
    if (num === 1) return num;
    return num * factorial(num - 1)
}

// factorial(4) >> 4 * 3 * 2 * 1 
const result = factorial(4)
console.log(result)