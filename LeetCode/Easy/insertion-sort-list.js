// Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

// The steps of the insertion sort algorithm:

// Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
// It repeats until no input elements remain.
// https://leetcode.com/problems/insertion-sort-list/

var insertionSortList = function (head) {
    for (let i = 1; i < head.length; i++) {
        let currentVal = head[i]
        for (let j = i - 1; j >= 0 && head[j] > currentVal; j--) {
            j = i + 1
            console.log(currentVal, head[j])
        }
        console.log(head)
    }
};

console.log(insertionSortList([3, 1, 4, 6, 2]))