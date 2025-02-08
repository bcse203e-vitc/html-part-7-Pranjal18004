function bubbleSortAscending(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) { 
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
let numbers = [5, 2, 9, 1, 5, 6];
console.log("Ascending Order:", bubbleSortAscending([...numbers])); 

//Bonus Challenge

function bubbleSortDescending(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] < arr[j + 1]) { 
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log("Descending Order:", bubbleSortDescending([...numbers])); 
