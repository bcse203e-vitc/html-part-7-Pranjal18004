function customFizzBuzz() {
    let num1 = parseInt(prompt("Enter first divisor (e.g., 3):"));
    let num2 = parseInt(prompt("Enter second divisor (e.g., 5):"));
    let range = parseInt(prompt("Enter the range (e.g., 50):"));

    if (isNaN(num1) || isNaN(num2) || isNaN(range) || num1 <= 0 || num2 <= 0 || range <= 0) {
        alert("Please enter valid positive numbers!");
        return;
    }

    for (let i = 1; i <= range; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            console.log("FizzBuzz");
        } else if (i % num1 === 0) {
            console.log("Fizz");
        } else if (i % num2 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

customFizzBuzz();
