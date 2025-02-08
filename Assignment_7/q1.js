function guessTheNumberGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 5;

    while (attempts > 0) {
        let userGuess = parseInt(prompt(`Guess a number between 1 and 100. Attempts left: ${attempts}`));

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            continue;
        }

        if (userGuess === randomNumber) {
            alert(`🎉 Congratulations! You guessed the correct number: ${randomNumber}`);
            return;
        } else if (userGuess > randomNumber) {
            alert("Too high! Try again.");
        } else {
            alert("Too low! Try again.");
        }

        attempts--;
    }

    alert(`❌ You've used all attempts! The correct number was ${randomNumber}.`);
}

guessTheNumberGame();
