// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwaps = false;
        console.log(arr)
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

const result = bubbleSort([4, 2, 7, 10, 22, 3, 9, 1]);
console.log(result)