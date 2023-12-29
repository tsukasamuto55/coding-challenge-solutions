// function isValid(s) {
//     // create a stack with an empty array
//     const stack = [];

//     // loop through the string.
//     for (let char of s) {
//         // if a char is either of open brackets, push it to the stack
//         if (char === '(' || char === '{' || char === '[') stack.push(char)

//         // Edge case. If the string start with a close bracket, it is always invalid. 
//         // In this case, the stack would be empty, so simply return false.
//         if (stack.length === 0) return false;

//         // store the last element of the stack into a variable
//         let top = stack[stack.length - 1]

//         // if the top is an open bracket, and a char is the corresponding close bracket, pop the top from the stack
//         if ((top === '(' && char === ')') ||
//             (top === '{' && char === '}') ||
//             (top === '[' && char === ']')) stack.pop()

//     }
//     return stack.length === 0;
// }

// More efficient solution
function isValid(s) {
    // create a stack with an empty array and object checking ia char has the corresponding open brackets
    const stack = [];
    const bracketMap = { ')': '(', '}': '{', ']': '[' }

    // loop the string
    for (let char of s) {
        // push the opening brackets onto the stack
        if (['(', '{', '['].includes(char)) stack.push(char)
        else {
            // if the stack is empty or top doesn't match the corresponding opening bracket, return false
            console.log('Before: ', stack)
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) return false;
            console.log('After:', stack)
        }
    }
    return stack.length === 0;
}

console.log(isValid("(())"))
