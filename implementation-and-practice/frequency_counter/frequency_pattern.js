function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const counter1 = {}
    const counter2 = {}

    for (let val of arr1) {
        counter1[val] = (counter1[val] || 0) + 1
    }

    for (let val of arr2) {
        counter2[val] = (counter2[val] || 0) + 1
    }

    // Loop through counter1 object and make sure if a key ** 2 exists in the counter2.
    // If there is no key ** 2 in the counter2, return false. 
    for (let key in counter1) {
        console.log(counter1[key], counter2[key ** 2])
        if (!(key ** 2 in counter2)) return false;

        // the value of each key pair of both counter1 and counter2 should match. 
        if (counter1[key] !== counter2[key ** 2]) return false
    }
    return true
}

console.log(same([1, 2, 2, 2, 3], [4, 1, 9, 4, 1]))