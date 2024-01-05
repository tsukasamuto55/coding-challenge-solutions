// Given an array with all distinct elements, find the largest three elements.Expected time complexity is O(n) and extra space is O(1).
// Examples :
// Input: arr[] = { 10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23

function find3Largest(arr) {
    // First, sort the array in descending order
    arr.sort((a, b) => b - a);

    // Initialize variables to track the three largest unique elements
    let largest = -Infinity, secondLargest = -Infinity, thirdLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], largest)
        // Update the largest, second largest, and third largest values accordingly
        if (arr[i] > largest) {
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        } else if (arr[i] > thirdLargest && arr[i] < secondLargest) {
            thirdLargest = arr[i];
        }
        console.log(`Third largest: ${thirdLargest}, second largest: ${secondLargest}, largest: ${largest}`)
    }

    // Print the three largest unique elements
    console.log("Three largest elements are: " + largest + ", " + secondLargest + ", " + thirdLargest);
}

console.log(find3Largest([11, 99, 2, 4, 3, 99, 465]))