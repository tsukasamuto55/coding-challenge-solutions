function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1)
}

console.log(power(2, 4)) // should out put 8


// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1)
}

console.log(factorial(4)) // should out put 24


// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// eg. productOfArray([1,2,3,10]) >>>> 1 * 2 * 3 * 10 = 60
function productOfArray(arr) {
    let result = 1;

    function helper(helperInput) {
        if (helperInput.length === 0) return result;
        return result = helperInput[0] * helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

console.log(productOfArray([1, 2, 3, 10]))


// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
// recursiveRange(6) >>> 1 + 2 + 3 + 4 + 5 + 6 = 21
function recursiveRange(num) {
    let total = 0;

    function helper(helperInput) {
        if (helperInput === 0) return total;

        return total += helperInput + helper(helperInput - 1)
    }
    helper(num)
    return total;
}

console.log(recursiveRange(10))


// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of 
// whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
// fib(4) >>> 1, 1, 2, 3 >>> the 4th number is 3, fib(10) >>>> 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 >>>> the 10th number is 55 
function fib(num) {
    if (num <= 2) return 1;
    return fib(num - 2) + fib(num - 1)
}

console.log(fib(10))