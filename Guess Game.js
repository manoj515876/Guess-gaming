let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let gussedNumber = parseInt(userInput.value);
    if (gussedNumber > randomNumber) {
        gameResult.textContent = "To High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gussedNumber < randomNumber) {
        gameResult.textContent = "To Low! Try Again.";
        gameResult.style.backgroundColor = "1e217c";
    } else if (gussedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "green"
    } else {
        gameResult.textContent = "Please Provide vaild user input.";
        gameResult.style.backgroundColor = "red";
    }

}