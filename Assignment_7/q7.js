function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)]; 
    if (uniqueArr.length < 2) return null; 
    
    uniqueArr.sort((a, b) => b - a); 
    return uniqueArr[1]; 
}
let numbers = [10, 20, 4, 45, 99, 99, 20, 10];
console.log("Second Largest:", secondLargest(numbers)); 

//Bonus Challenge

function thirdLargest(arr) {
    let uniqueArr = [...new Set(arr)];
    if (uniqueArr.length < 3) return null; 
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[2]; 
}

console.log("Third Largest:", thirdLargest(numbers)); 
