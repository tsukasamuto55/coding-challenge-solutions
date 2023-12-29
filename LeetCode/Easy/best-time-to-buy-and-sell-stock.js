// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
//     Example 2:

// Input: prices = [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// function maxProfit(prices) {
//     let max = -Infinity
//     for (let i = 0; i < prices.length - 1; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             let diff = prices[j] - prices[i]
//             if (max < diff) max = diff
//         }
//     }
//     if (max > 0) return max;
//     return 0;
// }

// More efficient solution, Single path approach
// Set minPrice and maxProfit before looping through an array prices. 
// Compare the minPrice and prices[i], and if the minPrice is larger than prices[i], update the minPrice with prices[i]
// In this way, we will keep track of the minPrice all the time. 
// Check the difference between price[i] and the minPrice, and if it is larger than the maxProfit, update the maxProfit with the difference. 
// Return the maxProfit

function maxProfit(prices) {
    let minPrice = Infinity; // make sure that the minPrice is smaller than any number
    let maxProfit = 0; // If none of the below conditions would be truthy, 0 will be returned

    for (let i = 0; i < prices.length; i++) {
        if (minPrice > prices[i]) minPrice = prices[i];
        else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
