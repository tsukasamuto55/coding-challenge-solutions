// Collect odd values of a given array

function collectOddValues(arr) {
    const oddValues = []

    function helper(helperInput) {
        // Base case: to stop callings the helper function to prevent infinite loop
        if (helperInput.length === 0) return;
        if (helperInput[0] % 2 === 1) oddValues.push(helperInput[0])

        // Recursion case: make sure to use a different input. 
        helper(helperInput.slice(1))
    }
    helper(arr)
    return oddValues
}

const result = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 113, 23, 17, 19, 22, 34, 55]).sort((a, b) => a - b)
console.log(result)