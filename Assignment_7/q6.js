function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    
    return [...duplicates];
}

// Example Usage
let numbers = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1];
console.log("Duplicates:", findDuplicates(numbers)); // Output: [1, 2, 3]
